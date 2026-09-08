import { createFileRoute, notFound } from "@tanstack/react-router";
import hero from "@/assets/hero-mampara.jpg";
import { todosLosProductos } from "@/data/subcategorias";
import { Breadcrumb, CtaBand, Section, SectionTitle } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/modelo/$slug")({
  loader: ({ params }) => {
    const producto = todosLosProductos.find((p) => p.slug === params.slug);
    if (!producto) throw notFound();
    return { producto };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Modelo no encontrado | TuMampara" }, { name: "robots", content: "noindex" }],
      };
    }
    const p = loaderData.producto;
    const titulo = `Mampara ${p.nombre} · ${p.tipo} ${p.formato} | TuMampara`;
    return {
      meta: [
        { title: titulo },
        { name: "description", content: p.descripcion.slice(0, 155) },
        { property: "og:title", content: titulo },
        { property: "og:description", content: p.descripcion.slice(0, 155) },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/modelo/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/modelo/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: `Mampara ${p.nombre}`,
            description: p.descripcion,
            brand: { "@type": "Brand", name: "TuMampara" },
          }),
        },
      ],
    };
  },
  component: Page,
});

function Page() {
  const { producto } = Route.useLoaderData();

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Mamparas", to: "/mamparas-de-ducha-y-banera" },
          { label: producto.subcategoria.titulo, to: producto.subcategoria.path },
          { label: producto.nombre },
        ]}
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <img
              src={hero}
              alt={`Mampara ${producto.nombre}, ${producto.tipo.toLowerCase()} ${producto.formato.toLowerCase()}`}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-sm object-cover shadow-soft"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow">
              {producto.tipo} · {producto.formato}
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl">Mampara {producto.nombre}</h1>
            <p className="mt-5 text-muted-foreground">{producto.descripcion}</p>
            <ul className="mt-7 space-y-3 text-sm">
              <li>Fabricación a medida del hueco de tu baño.</li>
              <li>Vidrio templado de seguridad, con antical opcional.</li>
              <li>Serigrafía del vidrio y color de perfilería a elegir.</li>
              <li>Instalación gratuita en Vigo y alrededores.</li>
              <li>2 años de garantía de fabricante.</li>
            </ul>
            <p className="mt-7 text-lg font-semibold text-accent">{producto.precio}</p>
          </Reveal>
        </div>
      </Section>

      <Section className="!pt-0">
        <SectionTitle
          eyebrow="Otros modelos"
          titulo={`Más modelos de ${producto.subcategoria.titulo.toLowerCase()}`}
        />
        <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold">
          {producto.subcategoria.productos
            .filter((p) => p.slug !== producto.slug)
            .map((p) => (
              <a
                key={p.slug}
                href={`/modelo/${p.slug}`}
                className="rounded-sm border border-input px-5 py-3 hover:border-accent hover:text-accent"
              >
                {p.nombre}
              </a>
            ))}
        </div>
      </Section>

      <CtaBand producto={`Mampara ${producto.nombre}`} />
    </>
  );
}
