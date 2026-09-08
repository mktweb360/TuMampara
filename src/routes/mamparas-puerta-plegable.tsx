import { createFileRoute } from "@tanstack/react-router";
import { tiposMampara } from "@/data/catalogo";
import { TipoMamparaPage } from "@/components/site/TipoMamparaPage";

const tipo = tiposMampara[2]!;

export const Route = createFileRoute("/mamparas-puerta-plegable")({
  head: () => ({
    meta: [
      { title: `${tipo.titulo} a medida en Vigo | TuMampara` },
      { name: "description", content: tipo.resumen },
      { property: "og:title", content: `${tipo.titulo} | TuMampara` },
      { property: "og:description", content: tipo.resumen },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/mamparas-puerta-plegable" },
    ],
    links: [{ rel: "canonical", href: "/mamparas-puerta-plegable" }],
  }),
  component: () => (
    <TipoMamparaPage titulo={tipo.titulo} resumen={tipo.resumen} formatos={tipo.formatos} />
  ),
});
