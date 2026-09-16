import { motion } from "motion/react";
import { Orbit, Award, ShieldCheck, Upload, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { OrbitMark } from "@/components/orbit-logo";
import {
  dimensions,
  fmt,
  TOTAL_MAX,
  TOTAL_ACTIONS,
  type DimensionKey,
} from "@/lib/nudos-data";
import { useNudos } from "@/lib/nudos-store";
import type { Page } from "@/App";

const steps = [
  {
    icon: Zap,
    title: "Haz que ocurra",
    text: "Completa una acción elegible que genere valor más allá de tus funciones ordinarias.",
  },
  {
    icon: ShieldCheck,
    title: "Reúne evidencia",
    text: "Conserva certificados, métricas, entregables o avales del área responsable.",
  },
  {
    icon: Upload,
    title: "Registra la acción",
    text: "Carga la información y selecciona la dimensión correspondiente.",
  },
  {
    icon: Award,
    title: "Consulta y canjea",
    text: "Revisa validación, saldo, posición y premios disponibles.",
  },
];

export function HomePage({
  setPage,
  openDimension,
}: {
  setPage: (p: Page) => void;
  openDimension: (key: DimensionKey) => void;
}) {
  const { availablePoints, actions, pointsByDimension } = useNudos();
  const totalApproved = pointsByDimension.reduce((s, p) => s + p.value, 0);
  const progress = Math.min(100, Math.round((totalApproved / TOTAL_MAX) * 100));

  return (
    <div>
      <section className="hero-surface">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.15fr_.85fr] lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <OrbitMark variant="white" className="h-14 w-14 sm:h-16 sm:w-16" />
            <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-cyan">
              <Orbit className="h-4 w-4" /> Órbita · Temporada activa
            </p>
            <h1 className="mt-6 text-5xl font-extrabold leading-[0.95] sm:text-7xl">
              Pon tu talento
              <span className="block text-cyan">en órbita.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-primary-foreground/75">
              Convierte tu alto desempeño, innovación y compromiso en acciones visibles que impulsan
              la transformación de la organización.
            </p>
            <p className="mt-4 max-w-xl text-base font-bold italic leading-6 text-cyan">
              "A partir de este año no solo giramos en órbita, ¡le ponemos velocidad a nuestra
              transformación!"
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="brand" size="pill" onClick={() => setPage("dimensiones")}>
                Explorar dimensiones
              </Button>
              <Button variant="onDark" size="pill" onClick={() => setPage("bitacora")}>
                Cargar una acción
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl border border-primary-foreground/15 bg-primary-foreground/10 p-8 backdrop-blur"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-bold text-primary-foreground/70">Mi saldo disponible</p>
                <p className="mt-1 text-5xl font-extrabold">{fmt(availablePoints)} PO</p>
              </div>
              <span className="rounded-full bg-gold px-3 py-1 text-sm font-extrabold text-navy">
                N3
              </span>
            </div>
            <p className="mt-8 text-sm font-bold text-primary-foreground/70">
              Avance sobre el tope semestral ({fmt(TOTAL_MAX)} PO)
            </p>
            <Progress value={progress} className="mt-3 bg-primary-foreground/20" />
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                ["#12", "Ranking"],
                [String(actions.length), "Acciones"],
                [`${progress}%`, "Avance"],
              ].map(([v, l]) => (
                <div key={l} className="rounded-2xl bg-primary-foreground/10 p-4 text-center">
                  <p className="text-2xl font-extrabold">{v}</p>
                  <p className="text-xs font-bold text-primary-foreground/60">{l}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-ocean">El concepto</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-extrabold sm:text-5xl">
          De medir distancia a impulsar velocidad efectiva.
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
          Cada órbita simboliza la unión de nuestro talento y la capacidad de convertir ideas en
          resultados terminados con un ritmo constante, ágil y profesional.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            [fmt(TOTAL_MAX), "PO máximos por semestre"],
            ["5", "dimensiones"],
            [String(TOTAL_ACTIONS), "acciones referenciales"],
          ].map(([v, l]) => (
            <div key={l} className="rounded-3xl bg-surface p-7 shadow-soft">
              <p className="text-4xl font-extrabold text-ocean">{v}</p>
              <p className="mt-1 text-sm font-bold text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-ocean">
          Dimensiones
        </p>
        <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">Cinco rutas. Un mismo norte.</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Selecciona una dimensión para conocer su propósito, subdimensiones y puntuación semestral.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {dimensions.map((d) => {
            const Icon = d.icon;
            return (
              <button key={d.key} onClick={() => openDimension(d.key)} className="text-left">
                <Card className="group h-full rounded-3xl border-0 shadow-soft transition-transform hover:-translate-y-1">
                  <CardContent className="p-7">
                    <div
                      className="grid h-14 w-14 place-items-center rounded-2xl text-primary-foreground"
                      style={{ backgroundImage: d.gradient }}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.2em] text-muted-foreground">
                      Dimensión {d.key}
                    </p>
                    <h3 className="mt-1 text-2xl font-extrabold">
                      {d.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{d.short}</p>
                    <p className="mt-6 text-sm font-extrabold text-ocean">
                      {fmt(d.max)} PO · {d.weight}%
                    </p>
                  </CardContent>
                </Card>
              </button>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-ocean">
          Cómo participar
        </p>
        <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">De la acción al reconocimiento.</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-3xl bg-surface p-7 shadow-soft">
              <p className="text-sm font-extrabold text-cyan">0{i + 1}</p>
              <s.icon className="mt-4 h-7 w-7 text-ocean" />
              <h3 className="mt-4 text-lg font-extrabold">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
        <Button
          variant="navy"
          size="pill"
          className="mt-10 rounded-full"
          onClick={() => setPage("bitacora")}
        >
          Registrar mi primera acción <ArrowRight />
        </Button>
      </section>
    </div>
  );
}
