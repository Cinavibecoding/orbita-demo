import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, CircleCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { dimensions, fmt, type DimensionKey } from "@/lib/nudos-data";

function SubdimensionCard({
  name,
  description,
  rule,
  actions,
}: {
  name: string;
  description: string;
  rule: string;
  actions: string[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-border bg-surface p-5">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="text-lg font-extrabold">{name}</h3>
        <span className="shrink-0 rounded-full bg-cyan/15 px-3 py-1 text-xs font-bold text-ocean">
          {rule}
        </span>
      </div>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
      <button
        onClick={() => setOpen((v) => !v)}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-extrabold text-ocean hover:text-cyan"
      >
        {open ? "Ocultar" : "Ver"} {actions.length} acciones referenciales
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <ul className="mt-4 space-y-2.5 border-t border-border pt-4">
              {actions.map((a) => (
                <li key={a} className="flex items-start gap-2.5 text-sm leading-6 text-foreground">
                  <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** Panel con el detalle completo de una dimensión: subdimensiones, reglas de puntuación y acciones referenciales oficiales. */
export function DimensionDetail({
  dimKey,
  close,
  goToBitacora,
  viewAllActions,
}: {
  dimKey: DimensionKey;
  close: () => void;
  goToBitacora: () => void;
  viewAllActions: () => void;
}) {
  const dimension = dimensions.find((d) => d.key === dimKey)!;
  const Icon = dimension.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 grid place-items-center bg-navy/75 p-4 backdrop-blur-sm"
      onMouseDown={(e) => e.target === e.currentTarget && close()}
    >
      <motion.div
        initial={{ scale: 0.94, y: 15 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.94, y: 15 }}
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-surface shadow-elevated"
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-border bg-surface/95 p-7 backdrop-blur">
          <div className="flex items-start gap-4">
            <div
              className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-primary-foreground"
              style={{ backgroundImage: dimension.gradient }}
            >
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-muted-foreground">
                Dimensión {dimension.key} · {dimension.weight}%
              </p>
              <h2 className="mt-1 text-2xl font-extrabold">{dimension.name}</h2>
            </div>
          </div>
          <button
            onClick={close}
            aria-label="Cerrar"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-secondary"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-7">
          <p className="text-lg leading-8 text-muted-foreground">{dimension.description}</p>

          <div className="mt-6 flex items-center justify-between rounded-2xl bg-secondary p-5">
            <b>Tope semestral de la dimensión</b>
            <b className="text-xl text-ocean">{fmt(dimension.max)} MP</b>
          </div>

          <div className="mt-6 space-y-4">
            {dimension.subdimensions.map((s) => (
              <SubdimensionCard key={s.name} {...s} />
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button
              variant="navy"
              size="pill"
              className="flex-1 rounded-full"
              onClick={() => {
                close();
                goToBitacora();
              }}
            >
              Registrar una acción
            </Button>
            <Button
              variant="outline"
              size="pill"
              className="flex-1 rounded-full"
              onClick={() => {
                close();
                viewAllActions();
              }}
            >
              Ver catálogo completo
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
