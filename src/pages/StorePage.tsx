import { useState } from "react";
import { toast } from "sonner";
import { PageWrap } from "@/components/page-wrap";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fmt, rewards } from "@/lib/nudos-data";
import { useNudos } from "@/lib/nudos-store";

export function StorePage() {
  const { availablePoints, redeem, redeemed } = useNudos();
  const [filter, setFilter] = useState("Todos");
  const cats = ["Todos", ...Array.from(new Set(rewards.map((r) => r.category)))];
  const shown = filter === "Todos" ? rewards : rewards.filter((r) => r.category === filter);

  return (
    <PageWrap
      eyebrow="Tienda de Premios"
      title="Cambia tus billetes por experiencias."
      intro="Catálogo demostrativo para visualizar la mecánica de canje semestral del programa."
    >
      <div className="mb-8 flex flex-wrap items-center gap-2">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full px-4 py-2 text-sm font-extrabold transition-colors ${
              filter === c
                ? "bg-primary text-primary-foreground"
                : "bg-surface text-muted-foreground hover:text-navy"
            }`}
          >
            {c}
          </button>
        ))}
        <span className="ml-auto rounded-full bg-cyan/20 px-4 py-2 text-sm font-extrabold text-ocean">
          Saldo: {fmt(availablePoints)} MP
        </span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {shown.map((r) => {
          const Icon = r.icon;
          const affordable = r.cost <= availablePoints;
          return (
            <Card key={r.name} className="flex h-full flex-col rounded-3xl border-0 shadow-soft">
              <CardContent className="flex flex-1 flex-col p-6">
                <div
                  className="grid h-14 w-14 place-items-center rounded-2xl text-primary-foreground"
                  style={{ backgroundImage: r.gradient }}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <p className="mt-6 text-xs font-extrabold uppercase tracking-wider text-muted-foreground">
                  {r.category}
                </p>
                <h3 className="mt-2 text-xl font-extrabold">{r.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">
                  {r.description}
                </p>
                <p className="mt-5 text-2xl font-extrabold text-ocean">{fmt(r.cost)} MP</p>
                <Button
                  variant={affordable ? "brand" : "secondary"}
                  className="mt-5 w-full rounded-full"
                  onClick={() => {
                    const res = redeem(r.name);
                    res.ok ? toast.success(res.message) : toast.error(res.message);
                  }}
                >
                  {affordable ? "Canjear" : "Saldo insuficiente"}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {redeemed.length > 0 && (
        <div className="mt-10 rounded-3xl bg-surface p-8 shadow-soft">
          <h2 className="text-xl font-extrabold">Mis canjes</h2>
          <ul className="mt-5 divide-y divide-border">
            {redeemed.map((r) => (
              <li key={r.id} className="flex items-center justify-between py-3">
                <span className="font-bold">{r.name}</span>
                <span className="text-sm text-muted-foreground">
                  {r.date} · −{fmt(r.cost)} MP
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </PageWrap>
  );
}
