import { createFileRoute } from "@tanstack/react-router";
import { subcategoriaPorPath } from "@/data/subcategorias";
import { SubcategoriaPage } from "@/components/site/SubcategoriaPage";

const sub = subcategoriaPorPath["/fijos-de-mampara-de-ducha"]!;

export const Route = createFileRoute("/fijos-de-mampara-de-ducha")({
  head: () => ({
    meta: [
      { title: `${sub.titulo} en Vigo | TuMampara` },
      { name: "description", content: sub.descripcion.slice(0, 155) },
      { property: "og:title", content: `${sub.titulo} | TuMampara` },
      { property: "og:description", content: sub.descripcion.slice(0, 155) },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/fijos-de-mampara-de-ducha" },
    ],
    links: [{ rel: "canonical", href: "/fijos-de-mampara-de-ducha" }],
  }),
  component: () => (
    <SubcategoriaPage sub={sub} tipoTitulo="Fijos de mampara" tipoPath="/fijos-de-mampara-bano" />
  ),
});
