import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus, Trash2, X } from "lucide-react";
import { toast } from "sonner";
import { PageWrap } from "@/components/page-wrap";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { dimensions, fmt, getDimension, type DimensionKey } from "@/lib/nudos-data";
import { useNudos } from "@/lib/nudos-store";

const statusStyles: Record<string, string> = {
  Aprobada: "bg-cyan/20 text-ocean",
  "En revisión": "bg-gold/25 text-navy",
  Devuelta: "bg-destructive/15 text-destructive",
};

export function BitacoraPage() {
  const {
    actions,
    approvedPoints,
    availablePoints,
    spentPoints,
    pointsByDimension,
    addAction,
    removeAction,
    redeemed,
  } = useNudos();
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<{ title: string; dim: DimensionKey; evidence: string }>({
    title: "",
    dim: "A",
    evidence: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim()) {
      toast.error("Escribe el nombre de la acción.");
      return;
    }
    addAction(form);
    setForm({ title: "", dim: "A", evidence: "" });
    setShowForm(false);
    toast.success("Acción enviada para validación.");
  };

  return (
    <PageWrap
      eyebrow="Mi bitácora"
      title="Todo tu impacto, en un solo lugar."
      intro="Registra acciones elegibles, sigue su validación y observa cómo crecen tus puntos por dimensión."
    >
      <div className="grid gap-6 lg:grid-cols-[.85fr_1.15fr]">
        <div className="rounded-3xl bg-navy p-8 text-primary-foreground shadow-elevated">
          <div className="flex items-center gap-4">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary-foreground/10 text-xl font-extrabold">
              VR
            </span>
            <div>
              <p className="font-extrabold">Explorador Órbita</p>
              <p className="text-sm text-primary-foreground/60">Nivel N3 · Temporada 2026-I</p>
            </div>
          </div>
          <p className="mt-8 text-sm font-bold text-primary-foreground/60">Saldo disponible</p>
          <p className="text-5xl font-extrabold">{fmt(availablePoints)} MP</p>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-2xl bg-primary-foreground/10 p-4">
              <p className="text-primary-foreground/60">Aprobado</p>
              <p className="text-xl font-extrabold">{fmt(approvedPoints)}</p>
            </div>
            <div className="rounded-2xl bg-primary-foreground/10 p-4">
              <p className="text-primary-foreground/60">Canjeado</p>
              <p className="text-xl font-extrabold">{fmt(spentPoints)}</p>
            </div>
          </div>
          <Button
            variant="brand"
            size="pill"
            onClick={() => setShowForm(true)}
            className="mt-7 w-full rounded-full"
          >
            <Plus /> Registrar acción
          </Button>
          {redeemed.length > 0 && (
            <p className="mt-4 text-xs text-primary-foreground/60">
              {redeemed.length} canje(s) registrados en la tienda.
            </p>
          )}
        </div>

        <div className="rounded-3xl bg-surface p-8 shadow-soft">
          <h2 className="text-xl font-extrabold">Distribución por dimensión</h2>
          <div className="mt-6 space-y-5">
            {pointsByDimension.map(({ key, value }) => {
              const d = getDimension(key)!;
              return (
                <div key={key}>
                  <div className="flex justify-between text-sm font-bold">
                    <span>
                      {d.key} · {d.name}
                    </span>
                    <span className="text-muted-foreground">
                      {fmt(value)} / {fmt(d.max)} MP
                    </span>
                  </div>
                  <Progress value={Math.min(100, (value / d.max) * 100)} className="mt-2 h-2.5" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-3xl bg-surface p-8 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-extrabold">Mis acciones</h2>
          <span className="rounded-full bg-secondary px-3 py-1 text-sm font-bold text-ocean">
            {actions.length} registros
          </span>
        </div>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground">
                <th className="pb-3">Acción</th>
                <th className="pb-3">Dimensión</th>
                <th className="pb-3">Fecha</th>
                <th className="pb-3">Estado</th>
                <th className="pb-3 text-right">Puntos</th>
                <th className="pb-3" />
              </tr>
            </thead>
            <tbody>
              {actions.map((a) => (
                <tr key={a.id} className="border-t border-border">
                  <td className="py-4 font-bold">{a.title}</td>
                  <td className="py-4 text-muted-foreground">
                    {a.dim} · {getDimension(a.dim)?.name}
                  </td>
                  <td className="py-4 text-muted-foreground">{a.date}</td>
                  <td className="py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-extrabold ${statusStyles[a.status]}`}
                    >
                      {a.status}
                    </span>
                  </td>
                  <td className="py-4 text-right font-extrabold text-ocean">
                    {a.points ? fmt(a.points) : "—"}
                  </td>
                  <td className="py-4 text-right">
                    <button
                      onClick={() => {
                        removeAction(a.id);
                        toast("Registro eliminado.");
                      }}
                      aria-label={`Eliminar ${a.title}`}
                      className="rounded-full p-2 text-muted-foreground hover:bg-secondary hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {actions.length === 0 && (
            <p className="py-10 text-center text-muted-foreground">
              Aún no tienes acciones registradas.
            </p>
          )}
        </div>
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-navy/75 p-4 backdrop-blur-sm"
            onMouseDown={(e) => e.target === e.currentTarget && setShowForm(false)}
          >
            <motion.div
              initial={{ scale: 0.94, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 15 }}
              className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl bg-surface p-7 shadow-elevated"
            >
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-extrabold">Registrar acción</h2>
                <button
                  onClick={() => setShowForm(false)}
                  aria-label="Cerrar"
                  className="grid h-10 w-10 place-items-center rounded-full bg-secondary"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <form onSubmit={submit} className="space-y-5">
                <label className="block">
                  <span className="mb-2 block text-sm font-extrabold">Nombre de la acción</span>
                  <input
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    className="field-input"
                    placeholder="Ej.: Mentoría interdepartamental"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-extrabold">Dimensión</span>
                  <select
                    value={form.dim}
                    onChange={(e) => setForm({ ...form, dim: e.target.value as DimensionKey })}
                    className="field-input"
                  >
                    {dimensions.map((d) => (
                      <option key={d.key} value={d.key}>
                        {d.key} · {d.name}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-extrabold">Impacto y evidencia</span>
                  <textarea
                    value={form.evidence}
                    onChange={(e) => setForm({ ...form, evidence: e.target.value })}
                    className="field-input min-h-28"
                    placeholder="Explica el impacto y menciona la evidencia disponible…"
                  />
                </label>
                <div className="rounded-2xl bg-gold/20 p-4 text-sm text-navy">
                  <b>Antes de enviar:</b> verifica que la acción no sea una responsabilidad ordinaria
                  de tu cargo y que su impacto pueda demostrarse.
                </div>
                <Button type="submit" variant="navy" size="pill" className="w-full rounded-full">
                  Enviar para validación
                </Button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrap>
  );
}
