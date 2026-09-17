import { Trophy } from "lucide-react";
import { PageWrap } from "@/components/page-wrap";
import { Progress } from "@/components/ui/progress";
import { fmt, ranking } from "@/lib/nudos-data";

export function RankingPage() {
  return (
    <PageWrap
      eyebrow="Centro de reconocimiento"
      title="El valor de avanzar juntos."
      intro="Consulta la referencia del ranking nacional y reconoce los aportes que aceleran nuestra transformación."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
        <div className="rounded-3xl bg-surface p-8 shadow-soft">
          <h2 className="text-xl font-extrabold">Top Nacional</h2>
          <div className="mt-5">
            {ranking.map((r, i) => (
              <div
                key={r.name}
                className="grid grid-cols-[44px_1fr_auto] items-center gap-3 border-b border-border py-4 last:border-0"
              >
                <span
                  className={`grid h-9 w-9 place-items-center rounded-xl font-extrabold ${
                    i < 3 ? "bg-gold text-navy" : "bg-secondary text-ocean"
                  }`}
                >
                  {i + 1}
                </span>
                <div>
                  <b>{r.name}</b>
                  <p className="text-xs text-muted-foreground">Explorador Órbita</p>
                </div>
                <span className="rounded-full bg-cyan/20 px-3 py-1 text-sm font-extrabold text-ocean">
                  {fmt(r.points)} MP
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-navy p-8 text-primary-foreground shadow-elevated">
          <Trophy className="h-12 w-12 text-gold" />
          <h2 className="mt-6 text-3xl font-extrabold">Tu posición demostrativa</h2>
          <p className="mt-2 text-primary-foreground/70">
            Sigue registrando impacto para avanzar.
          </p>
          <p className="mt-8 text-7xl font-extrabold">#12</p>
          <div className="mt-8 rounded-2xl bg-primary-foreground/10 p-5">
            <div className="flex justify-between text-sm">
              <span>Diferencia al Top 10</span>
              <b>42 MP</b>
            </div>
            <Progress value={82} className="mt-3 bg-primary-foreground/20" />
          </div>
        </div>
      </div>
    </PageWrap>
  );
}
