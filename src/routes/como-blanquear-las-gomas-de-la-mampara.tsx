import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumb, CtaBand, PageHero, Section } from "@/components/site/Blocks";

const titulo = "Cómo blanquear las gomas de la mampara y dejarlas como nuevas";
const descripcion =
  "Bicarbonato, vinagre y un truco de instalador para recuperar el blanco de las juntas de la mampara sin dañar el vidrio ni la perfilería.";
const path = "/como-blanquear-las-gomas-de-la-mampara";

export const Route = createFileRoute(path)({
  head: () => ({
    meta: [
      { title: `${titulo} | TuMampara` },
      { name: "description", content: descripcion },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descripcion },
      { property: "og:type", content: "article" },
      { property: "og:url", content: path },
    ],
    links: [{ rel: "canonical", href: path }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: titulo,
          description: descripcion,
          author: { "@type": "Organization", name: "TuMampara" },
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <Breadcrumb items={[{ label: "Blog", to: "/blog" }, { label: "Blanquear las gomas" }]} />
      <PageHero eyebrow="Artículo" titulo={titulo} texto={descripcion} tono="arena" />
      <Section className="max-w-3xl">
        <article className="prose-site space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            Las gomas de la mampara amarillean por dos motivos: la cal del agua y los restos de jabón
            que se quedan atrapados en el pliegue. Si actúas antes de que la suciedad se incruste, se
            recuperan sin cambiarlas.
          </p>
          <h2 className="text-2xl text-foreground">1. Pasta de bicarbonato</h2>
          <p>
            Mezcla tres cucharadas de bicarbonato con un poco de agua hasta lograr una pasta espesa.
            Extiéndela sobre la goma con un cepillo de dientes viejo, deja actuar veinte minutos y
            frota siguiendo el sentido de la junta. Aclara con agua templada.
          </p>
          <h2 className="text-2xl text-foreground">2. Vinagre blanco para la cal</h2>
          <p>
            Empapa papel de cocina en vinagre blanco y colócalo pegado a la goma durante media hora.
            El vinagre disuelve la cal que retiene la suciedad. No lo dejes toda la noche: en contacto
            prolongado puede resecar la goma.
          </p>
          <h2 className="text-2xl text-foreground">3. El truco del instalador</h2>
          <p>
            Si la goma sigue gris, desmóntala. Casi todas salen tirando con firmeza del extremo
            inferior. Sumérgela un par de horas en agua con un chorro de lejía diluida, aclara bien y
            vuelve a encajarla. Queda blanca y limpia también por dentro.
          </p>
          <h2 className="text-2xl text-foreground">Cómo evitar que vuelva a pasar</h2>
          <p>
            Después de la ducha, pasa un limpiacristales de goma por el vidrio y seca el borde
            inferior con una bayeta. Un minuto al día ahorra la limpieza a fondo. Y si la goma está
            agrietada o ya no cierra bien, cámbiala: es una pieza barata y evita filtraciones.
          </p>
          <p>
            ¿Tu mampara ya tiene años y las guías no deslizan? Llámanos y te decimos si compensa
            reparar o sustituir.
          </p>
        </article>
      </Section>
      <CtaBand producto="Mantenimiento de mampara" />
    </>
  );
}
