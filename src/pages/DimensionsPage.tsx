import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { PageWrap } from "@/components/page-wrap";
import { Card, CardContent } from "@/components/ui/card";
import { dimensions, fmt, type DimensionKey } from "@/lib/nudos-data";

export function DimensionsPage({
  openDimension,
}: {
  openDimension: (key: DimensionKey) => void;
}) {
  const [query, setQuery] = useState("");
  const filtered = dimensions.filter((d) =>
    (d.name + d.description + d.subdimensions.map((s) => s.name).join(" "))
      .toLowerCase()
      .includes(query.toLowerCase()),
  );

  return (
    <PageWrap
      eyebrow="Dimensiones"
      title="Cinco rutas. Un mismo norte."
      intro="Explora el propósito de cada dimensión, sus subdimensiones y su peso dentro del programa."
    >
      <div className="relative mb-10 max-w-xl">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar dimensión o subdimensión…"
          className="field-input pl-12"
          aria-label="Buscar dimensión"
        />
      </div>

      {filtered.length === 0 && (
        <p className="text-muted-foreground">No encontramos dimensiones para "{query}".</p>
      )}

      <div className="grid gap-5 lg:grid-cols-2">
        {filtered.map((d) => {
          const Icon = d.icon;
          return (
            <Card key={d.key} className="rounded-3xl border-0 shadow-soft">
              <CardContent className="p-7">
                <div className="flex items-start gap-4">
                  <div
                    className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-primary-foreground"
                    style={{ backgroundImage: d.gradient }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-muted-foreground">
                      Dimensión {d.key} · {d.weight}% · {fmt(d.max)} MP
                    </p>
                    <h2 className="mt-1 text-2xl font-extrabold">
                      {d.name}
                    </h2>
                  </div>
                </div>
                <p className="mt-5 leading-7 text-muted-foreground">{d.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {d.subdimensions.map((s) => (
                    <span
                      key={s.name}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-bold text-ocean"
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => openDimension(d.key)}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-ocean hover:text-cyan"
                >
                  Ver detalle <ArrowRight className="h-4 w-4" />
                </button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </PageWrap>
  );
}
