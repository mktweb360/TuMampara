import { createFileRoute } from "@tanstack/react-router";
import tendalExterior from "@/assets/tendal-exterior.jpg";
import tendalInterior from "@/assets/tendal-interior.jpg";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumb, CtaBand, PageHero, Section, SectionTitle } from "@/components/site/Blocks";

const descripcion =
  "Tendales de aluminio para exterior e interior, fabricados a medida y con envío sin coste a toda España. Instalación gratuita en Vigo y alrededores.";

export const Route = createFileRoute("/tendales")({
  head: () => ({
    meta: [
      { title: "Tendales a medida de exterior e interior | TuMampara Vigo" },
      { name: "description", content: descripcion },
      { property: "og:title", content: "Tendales a medida | TuMampara" },
      { property: "og:description", content: descripcion },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/tendales" },
    ],
    links: [{ rel: "canonical", href: "/tendales" }],
  }),
  component: Page,
});

const tipos = [
  {
    titulo: "Tendal de exterior",
    imagen: tendalExterior,
    texto:
      "Para galerías, balcones y patios. Estructura de aluminio lacado resistente a la lluvia y al salitre, con cuerdas tensadas y regulables. Se fabrica a la medida exacta del hueco.",
  },
  {
    titulo: "Tendal de interior",
    imagen: tendalInterior,
    texto:
      "Para lavaderos y espacios cubiertos. Tendal de techo con poleas, que sube y baja para tender cómodo y recoger la ropa sin ocupar sitio.",
  },
];

function Page() {
  return (
    <>
      <Breadcrumb items={[{ label: "Tendales" }]} />
      <PageHero
        eyebrow="Tendales"
        titulo="Tendales de aluminio a medida"
        texto={descripcion}
        imagen={tendalExterior}
        alt="Tendal de aluminio instalado en una galería"
      />

      <Section>
        <SectionTitle
          eyebrow="Dos soluciones"
          titulo="Exterior o interior, siempre a medida"
          texto="Nos dices el hueco y nosotros fabricamos el tendal. En Vigo y alrededores lo instalamos gratis; al resto de España lo enviamos sin coste de envío, sin instalación incluida."
        />
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {tipos.map((t, i) => (
            <Reveal key={t.titulo} delay={i * 90}>
              <article className="h-full bg-card">
                <img
                  src={t.imagen}
                  alt={t.titulo}
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-sm object-cover shadow-soft"
                />
                <div className="border-t-2 border-ink/85 p-6">
                  <h2 className="text-2xl">{t.titulo}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.texto}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand producto="Tendales" />
    </>
  );
}
