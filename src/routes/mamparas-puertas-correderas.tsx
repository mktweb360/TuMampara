import { createFileRoute } from "@tanstack/react-router";
import { tiposMampara } from "@/data/catalogo";
import { TipoMamparaPage } from "@/components/site/TipoMamparaPage";

const tipo = tiposMampara[0]!;

export const Route = createFileRoute("/mamparas-puertas-correderas")({
  head: () => ({
    meta: [
      { title: `${tipo.titulo} a medida en Vigo | TuMampara` },
      { name: "description", content: tipo.resumen },
      { property: "og:title", content: `${tipo.titulo} | TuMampara` },
      { property: "og:description", content: tipo.resumen },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/mamparas-puertas-correderas" },
    ],
    links: [{ rel: "canonical", href: "/mamparas-puertas-correderas" }],
  }),
  component: () => (
    <TipoMamparaPage titulo={tipo.titulo} resumen={tipo.resumen} formatos={tipo.formatos} />
  ),
});
