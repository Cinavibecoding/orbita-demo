import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  dimensions,
  initialActions,
  rewards,
  type DimensionKey,
  type NudoAction,
} from "./nudos-data";

const STORAGE_KEY = "orbita-demo-state-v2";

type StoredState = {
  actions: NudoAction[];
  redeemed: { id: number; name: string; cost: number; date: string }[];
};

type NudosContextValue = StoredState & {
  approvedPoints: number;
  pendingPoints: number;
  availablePoints: number;
  spentPoints: number;
  pointsByDimension: { key: DimensionKey; value: number }[];
  addAction: (input: { title: string; dim: DimensionKey; evidence: string }) => void;
  removeAction: (id: number) => void;
  redeem: (name: string) => { ok: boolean; message: string };
};

const NudosContext = createContext<NudosContextValue | null>(null);

function todayLabel() {
  return new Intl.DateTimeFormat("es-VE", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date());
}

export function NudosProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<StoredState>({ actions: initialActions, redeemed: [] });
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setState(JSON.parse(raw) as StoredState);
    } catch {
      /* estado por defecto */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state, hydrated]);

  const addAction: NudosContextValue["addAction"] = useCallback((input) => {
    setState((prev) => ({
      ...prev,
      actions: [
        {
          id: Date.now(),
          title: input.title.trim(),
          dim: input.dim,
          points: 0,
          status: "En revisión",
          date: todayLabel(),
          evidence: input.evidence.trim(),
        },
        ...prev.actions,
      ],
    }));
  }, []);

  const removeAction = useCallback((id: number) => {
    setState((prev) => ({ ...prev, actions: prev.actions.filter((a) => a.id !== id) }));
  }, []);

  const value = useMemo<NudosContextValue>(() => {
    const approvedPoints = state.actions
      .filter((a) => a.status === "Aprobada")
      .reduce((s, a) => s + a.points, 0);
    const pendingPoints = state.actions.filter((a) => a.status === "En revisión").length;
    const spentPoints = state.redeemed.reduce((s, r) => s + r.cost, 0);
    const availablePoints = approvedPoints - spentPoints;

    const redeem: NudosContextValue["redeem"] = (name) => {
      const reward = rewards.find((r) => r.name === name);
      if (!reward) return { ok: false, message: "Premio no disponible." };
      if (reward.cost > availablePoints) {
        return {
          ok: false,
          message: `Te faltan ${reward.cost - availablePoints} NS para canjear ${reward.name}.`,
        };
      }
      setState((prev) => ({
        ...prev,
        redeemed: [
          { id: Date.now(), name: reward.name, cost: reward.cost, date: todayLabel() },
          ...prev.redeemed,
        ],
      }));
      return { ok: true, message: `Canje registrado: ${reward.name}` };
    };

    return {
      ...state,
      approvedPoints,
      pendingPoints,
      availablePoints,
      spentPoints,
      pointsByDimension: dimensions.map((d) => ({
        key: d.key,
        value: state.actions
          .filter((a) => a.dim === d.key && a.status === "Aprobada")
          .reduce((s, a) => s + a.points, 0),
      })),
      addAction,
      removeAction,
      redeem,
    };
  }, [state, addAction, removeAction]);

  return <NudosContext.Provider value={value}>{children}</NudosContext.Provider>;
}

export function useNudos() {
  const ctx = useContext(NudosContext);
  if (!ctx) throw new Error("useNudos debe usarse dentro de NudosProvider");
  return ctx;
}
