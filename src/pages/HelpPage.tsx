import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, CircleCheck, CircleX, Sparkles } from "lucide-react";
import { PageWrap } from "@/components/page-wrap";
import { faqs, nivelacion, reglasDelJuego, cronograma2026, nsPlus } from "@/lib/nudos-data";

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mx-auto max-w-3xl">
      <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-ocean">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-extrabold">{title}</h2>
    </div>
  );
}

export function HelpPage() {
  const [open, setOpen] = useState(0);
  return (
    <PageWrap
      eyebrow="Centro de ayuda"
      title="Respuestas para despegar."
      intro="Consulta las reglas esenciales del programa y los criterios de elegibilidad."
    >
      <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl bg-surface p-3 shadow-soft">
        {faqs.map((f, i) => (
          <div key={f.q} className="border-b border-border last:border-0">
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              className="flex w-full items-center justify-between gap-5 p-5 text-left font-extrabold"
            >
              {f.q}
              <ChevronDown
                className={`h-5 w-5 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 leading-7 text-muted-foreground">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Nivelación de oportunidades */}
      <div className="mt-20">
        <SectionHeading eyebrow="Antes de otorgar un Nudo" title="Nivelación de oportunidades" />
        <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
          Si tus funciones ya coinciden con las dimensiones del programa, respondemos estas 3
          preguntas antes de asignar puntos:
        </p>
        <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-3">
          {nivelacion.map((n, i) => {
            const suma = n.ifYes === "suma";
            return (
              <div key={n.question} className="rounded-3xl bg-surface p-6 shadow-soft">
                <p className="text-sm font-extrabold text-cyan">0{i + 1}</p>
                <p className="mt-3 text-base font-extrabold leading-6">{n.question}</p>
                <div
                  className={`mt-5 flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-extrabold ${
                    suma ? "bg-cyan/15 text-ocean" : "bg-destructive/10 text-destructive"
                  }`}
                >
                  {suma ? <CircleCheck className="h-4 w-4" /> : <CircleX className="h-4 w-4" />}
                  {n.note}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reglas del juego */}
      <div className="mt-20">
        <SectionHeading eyebrow="Cómo funciona" title="Reglas del juego" />
        <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
          {reglasDelJuego.map((r, i) => (
            <div key={r.title} className="rounded-3xl bg-surface p-6 shadow-soft">
              <p className="text-sm font-extrabold text-cyan">0{i + 1}</p>
              <h3 className="mt-3 text-lg font-extrabold">{r.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{r.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Cronograma 2026 */}
      <div className="mt-20">
        <SectionHeading eyebrow="Cronograma" title="Hitos de comunicación 2026" />
        <div className="mx-auto mt-8 max-w-3xl space-y-4">
          {cronograma2026.map((h) => (
            <div
              key={h.periodo}
              className="flex flex-col gap-2 rounded-3xl bg-surface p-6 shadow-soft sm:flex-row sm:items-start sm:gap-6"
            >
              <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs font-extrabold text-ocean sm:mt-0.5">
                {h.periodo}
              </span>
              <div>
                <h3 className="text-lg font-extrabold">{h.titulo}</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{h.detalle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PO+ */}
      <div className="mx-auto mt-20 max-w-3xl rounded-3xl bg-navy p-8 text-primary-foreground shadow-elevated">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.2em] text-cyan">
          <Sparkles className="h-4 w-4" /> Categoría extraordinaria
        </span>
        <h2 className="mt-4 text-2xl font-extrabold">{nsPlus.name}</h2>
        <p className="mt-3 leading-7 text-primary-foreground/80">{nsPlus.description}</p>
        <p className="mt-3 leading-7 text-primary-foreground/80">{nsPlus.purpose}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {nsPlus.conditions.map((c) => (
            <div key={c.title} className="rounded-2xl bg-primary-foreground/10 p-5">
              <h3 className="font-extrabold text-cyan">{c.title}</h3>
              <p className="mt-2 text-sm leading-6 text-primary-foreground/80">{c.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </PageWrap>
  );
}
