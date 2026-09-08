import { createFileRoute } from "@tanstack/react-router";
import { subcategoriaPorPath } from "@/data/subcategorias";
import { SubcategoriaPage } from "@/components/site/SubcategoriaPage";

const sub = subcategoriaPorPath["/mamparas-banera-frontales-plegables"]!;

export const Route = createFileRoute("/mamparas-banera-frontales-plegables")({
  head: () => ({
    meta: [
      { title: `${sub.titulo} en Vigo | TuMampara` },
      { name: "description", content: sub.descripcion.slice(0, 155) },
      { property: "og:title", content: `${sub.titulo} | TuMampara` },
      { property: "og:description", content: sub.descripcion.slice(0, 155) },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/mamparas-banera-frontales-plegables" },
    ],
    links: [{ rel: "canonical", href: "/mamparas-banera-frontales-plegables" }],
  }),
  component: () => (
    <SubcategoriaPage sub={sub} tipoTitulo="Mamparas de puerta plegable" tipoPath="/mamparas-puerta-plegable" />
  ),
});
