import { createFileRoute } from "@tanstack/react-router";
import { subcategoriaPorPath } from "@/data/subcategorias";
import { SubcategoriaPage } from "@/components/site/SubcategoriaPage";

const sub = subcategoriaPorPath["/mamparas-angulares-correderas"]!;

export const Route = createFileRoute("/mamparas-angulares-correderas")({
  head: () => ({
    meta: [
      { title: `${sub.titulo} en Vigo | TuMampara` },
      { name: "description", content: sub.descripcion.slice(0, 155) },
      { property: "og:title", content: `${sub.titulo} | TuMampara` },
      { property: "og:description", content: sub.descripcion.slice(0, 155) },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/mamparas-angulares-correderas" },
    ],
    links: [{ rel: "canonical", href: "/mamparas-angulares-correderas" }],
  }),
  component: () => (
    <SubcategoriaPage sub={sub} tipoTitulo="Mamparas de puertas correderas" tipoPath="/mamparas-puertas-correderas" />
  ),
});
