import { createFileRoute } from "@tanstack/react-router";
import { subcategoriaPorPath } from "@/data/subcategorias";
import { SubcategoriaPage } from "@/components/site/SubcategoriaPage";

const sub = subcategoriaPorPath["/mamparas-ducha-frontales-correderas"]!;

export const Route = createFileRoute("/mamparas-ducha-frontales-correderas")({
  head: () => ({
    meta: [
      { title: `${sub.titulo} en Vigo | TuMampara` },
      { name: "description", content: sub.descripcion.slice(0, 155) },
      { property: "og:title", content: `${sub.titulo} | TuMampara` },
      { property: "og:description", content: sub.descripcion.slice(0, 155) },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/mamparas-ducha-frontales-correderas" },
    ],
    links: [{ rel: "canonical", href: "/mamparas-ducha-frontales-correderas" }],
  }),
  component: () => (
    <SubcategoriaPage sub={sub} tipoTitulo="Mamparas de puertas correderas" tipoPath="/mamparas-puertas-correderas" />
  ),
});
