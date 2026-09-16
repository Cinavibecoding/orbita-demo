import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { Toaster } from "sonner";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { DimensionDetail } from "@/components/dimension-detail";
import { NudosProvider } from "@/lib/nudos-store";
import type { DimensionKey } from "@/lib/nudos-data";
import { HomePage } from "@/pages/HomePage";
import { DimensionsPage } from "@/pages/DimensionsPage";
import { AccionesPage } from "@/pages/AccionesPage";
import { BitacoraPage } from "@/pages/BitacoraPage";
import { RankingPage } from "@/pages/RankingPage";
import { StorePage } from "@/pages/StorePage";
import { HelpPage } from "@/pages/HelpPage";

export type Page =
  | "inicio"
  | "dimensiones"
  | "acciones"
  | "bitacora"
  | "ranking"
  | "tienda"
  | "ayuda";

function AppShell() {
  const [page, setPage] = useState<Page>("inicio");
  const [selected, setSelected] = useState<DimensionKey | null>(null);
  const [accionesFilter, setAccionesFilter] = useState<DimensionKey | "Todas">("Todas");

  // Navegación "normal": siempre resetea el filtro del catálogo de acciones,
  // para que un click directo en "Acciones" muestre todo.
  const goTo = (p: Page) => {
    setAccionesFilter("Todas");
    setPage(p);
  };

  // Navegación dirigida desde el detalle de una dimensión: abre el catálogo
  // ya filtrado por esa dimensión.
  const viewActionsFor = (key: DimensionKey) => {
    setAccionesFilter(key);
    setPage("acciones");
  };

  const content =
    page === "inicio" ? (
      <HomePage setPage={goTo} openDimension={setSelected} />
    ) : page === "dimensiones" ? (
      <DimensionsPage openDimension={setSelected} />
    ) : page === "acciones" ? (
      <AccionesPage initialFilter={accionesFilter} />
    ) : page === "bitacora" ? (
      <BitacoraPage />
    ) : page === "ranking" ? (
      <RankingPage />
    ) : page === "tienda" ? (
      <StorePage />
    ) : (
      <HelpPage />
    );

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader page={page} setPage={goTo} />
      <main className="flex-1">{content}</main>
      <SiteFooter setPage={goTo} />
      <AnimatePresence>
        {selected && (
          <DimensionDetail
            dimKey={selected}
            close={() => setSelected(null)}
            goToBitacora={() => goTo("bitacora")}
            viewAllActions={() => viewActionsFor(selected)}
          />
        )}
      </AnimatePresence>
      <Toaster position="bottom-right" richColors />
    </div>
  );
}

export default function App() {
  return (
    <NudosProvider>
      <AppShell />
    </NudosProvider>
  );
}
