import { createFileRoute } from "@tanstack/react-router";
import { subcategoriaPorPath } from "@/data/subcategorias";
import { SubcategoriaPage } from "@/components/site/SubcategoriaPage";

const sub = subcategoriaPorPath["/mamparas-banera-frontal-abatibles"]!;

export const Route = createFileRoute("/mamparas-banera-frontal-abatibles")({
  head: () => ({
    meta: [
      { title: `${sub.titulo} en Vigo | TuMampara` },
      { name: "description", content: sub.descripcion.slice(0, 155) },
      { property: "og:title", content: `${sub.titulo} | TuMampara` },
      { property: "og:description", content: sub.descripcion.slice(0, 155) },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/mamparas-banera-frontal-abatibles" },
    ],
    links: [{ rel: "canonical", href: "/mamparas-banera-frontal-abatibles" }],
  }),
  component: () => (
    <SubcategoriaPage sub={sub} tipoTitulo="Mamparas de puertas abatibles" tipoPath="/mamparas-puertas-abatibles" />
  ),
});
