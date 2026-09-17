import { useState } from "react";
import { Menu, X, WalletCards } from "lucide-react";
import { OrbitLogo } from "./orbit-logo";
import { Button } from "@/components/ui/button";
import { fmt } from "@/lib/nudos-data";
import { useNudos } from "@/lib/nudos-store";
import type { Page } from "@/App";

const nav: { label: string; page: Page }[] = [
  { label: "Inicio", page: "inicio" },
  { label: "Dimensiones", page: "dimensiones" },
  { label: "Acciones", page: "acciones" },
  { label: "Mi bitácora", page: "bitacora" },
  { label: "Ranking", page: "ranking" },
  { label: "Tienda", page: "tienda" },
  { label: "Ayuda", page: "ayuda" },
];

export function SiteHeader({ page, setPage }: { page: Page; setPage: (p: Page) => void }) {
  const [open, setOpen] = useState(false);
  const { availablePoints } = useNudos();

  return (
    <header className="sticky top-0 z-40">
      <p className="bg-navy px-4 py-2 text-center text-xs font-semibold leading-5 text-primary-foreground sm:px-6">
        Demo pública con datos ficticios. La versión real de este sistema se construyó para un banco
        y manejaba datos confidenciales de sus colaboradores, así que no era ético publicarla tal
        cual — pero aquí puedes ver el sistema completamente funcional. El inicio de sesión y la
        conexión a una base de datos real se omitieron para esta demo y se pueden activar cuando
        haga falta.
      </p>
      <div className="border-b border-border bg-surface/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-6 py-3 lg:px-8">
          <button
            className="flex shrink-0 items-center gap-3"
            onClick={() => setPage("inicio")}
            aria-label="Ir al inicio"
          >
            <OrbitLogo className="h-8" />
          </button>
          <nav className="ml-4 hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <button
                key={item.page}
                onClick={() => setPage(item.page)}
                className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                  page === item.page
                    ? "bg-primary text-primary-foreground hover:bg-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-navy"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <Button
              variant="brand"
              className="hidden rounded-full sm:inline-flex"
              onClick={() => setPage("bitacora")}
            >
              <WalletCards />
              {fmt(availablePoints)} MP
            </Button>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Menú"
              className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-navy lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="border-t border-border bg-surface px-4 py-3 lg:hidden">
            {nav.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  setPage(item.page);
                  setOpen(false);
                }}
                className={`block w-full rounded-xl px-3 py-3 text-left font-bold hover:bg-secondary ${
                  page === item.page ? "bg-secondary" : "text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

export function SiteFooter({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <footer className="mt-20 bg-navy text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-3 lg:px-8">
        <div>
          <OrbitLogo variant="white" />
          <p className="mt-4 max-w-xs text-sm leading-6 text-primary-foreground/70">
            Demo funcional del programa Órbita, con datos e identidad de marca ficticios.
          </p>
        </div>
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan">Programa</p>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>
              <button className="hover:text-cyan" onClick={() => setPage("dimensiones")}>
                Dimensiones
              </button>
            </li>
            <li>
              <button className="hover:text-cyan" onClick={() => setPage("acciones")}>
                Catálogo de acciones
              </button>
            </li>
            <li>
              <button className="hover:text-cyan" onClick={() => setPage("ayuda")}>
                Reglas del juego
              </button>
            </li>
            <li>
              <button className="hover:text-cyan" onClick={() => setPage("ayuda")}>
                Cronograma
              </button>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan">Experiencia</p>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>
              <button className="hover:text-cyan" onClick={() => setPage("bitacora")}>
                Mi bitácora
              </button>
            </li>
            <li>
              <button className="hover:text-cyan" onClick={() => setPage("ranking")}>
                Ranking
              </button>
            </li>
            <li>
              <button className="hover:text-cyan" onClick={() => setPage("tienda")}>
                Tienda de Premios
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
