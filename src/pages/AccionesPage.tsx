import { useMemo, useState } from "react";
import { Search, CircleCheck } from "lucide-react";
import { PageWrap } from "@/components/page-wrap";
import { dimensions, fmt, TOTAL_ACTIONS, type DimensionKey } from "@/lib/nudos-data";
import { cn } from "@/lib/utils";

export function AccionesPage({
  initialFilter = "Todas",
}: {
  initialFilter?: DimensionKey | "Todas";
}) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<DimensionKey | "Todas">(initialFilter);

  const q = query.trim().toLowerCase();

  const results = useMemo(() => {
    return dimensions
      .filter((d) => filter === "Todas" || d.key === filter)
      .map((d) => ({
        dimension: d,
        subdimensions: d.subdimensions
          .map((s) => ({
            sub: s,
            actions: q ? s.actions.filter((a) => a.toLowerCase().includes(q)) : s.actions,
          }))
          .filter((s) => s.actions.length > 0 || (!q && true)),
      }))
      .filter((d) => d.subdimensions.length > 0);
  }, [filter, q]);

  const shownCount = results.reduce(
    (sum, d) => sum + d.subdimensions.reduce((s, sd) => s + sd.actions.length, 0),
    0,
  );

  return (
    <PageWrap
      eyebrow="Catálogo oficial"
      title="¿Qué suma puntos? Aquí está, explícito."
      intro={`Las ${TOTAL_ACTIONS} acciones referenciales de las 5 dimensiones, con su regla de puntuación. Si tu acción está en esta lista, suma puntos.`}
    >
      <div className="sticky top-[64px] z-20 -mx-6 mb-8 border-b border-border bg-background/95 px-6 py-4 backdrop-blur lg:-mx-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 lg:flex-row lg:items-center">
          <div className="relative flex-1 lg:max-w-sm">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar una acción…"
              className="field-input pl-12"
              aria-label="Buscar acción"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter("Todas")}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-extrabold transition-colors",
                filter === "Todas"
                  ? "bg-primary text-primary-foreground"
                  : "bg-surface text-muted-foreground hover:text-navy",
              )}
            >
              Todas
            </button>
            {dimensions.map((d) => (
              <button
                key={d.key}
                onClick={() => setFilter(d.key)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-extrabold transition-colors",
                  filter === d.key
                    ? "bg-primary text-primary-foreground"
                    : "bg-surface text-muted-foreground hover:text-navy",
                )}
              >
                {d.key} · {d.name}
              </button>
            ))}
          </div>
          <span className="ml-auto shrink-0 rounded-full bg-cyan/15 px-4 py-2 text-sm font-extrabold text-ocean">
            {shownCount} acciones
          </span>
        </div>
      </div>

      {results.length === 0 && (
        <p className="text-center text-muted-foreground">No encontramos acciones para "{query}".</p>
      )}

      <div className="space-y-16">
        {results.map(({ dimension: d, subdimensions }) => {
          const Icon = d.icon;
          return (
            <section key={d.key} id={`dim-${d.key}`} className="scroll-mt-40">
              <div className="flex items-center gap-4">
                <div
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-primary-foreground"
                  style={{ backgroundImage: d.gradient }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-muted-foreground">
                    Dimensión {d.key} · tope {fmt(d.max)} MP por semestre
                  </p>
                  <h2 className="text-2xl font-extrabold">
                    {d.name}
                  </h2>
                </div>
              </div>

              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                {subdimensions.map(({ sub, actions }) => (
                  <div key={sub.name} className="rounded-3xl bg-surface p-6 shadow-soft">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h3 className="text-lg font-extrabold">{sub.name}</h3>
                      <span className="shrink-0 rounded-full bg-cyan/15 px-3 py-1 text-xs font-bold text-ocean">
                        {sub.rule}
                      </span>
                    </div>
                    <ul className="mt-4 space-y-2.5">
                      {actions.map((a) => (
                        <li key={a} className="flex items-start gap-2.5 text-sm leading-6">
                          <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </PageWrap>
  );
}
