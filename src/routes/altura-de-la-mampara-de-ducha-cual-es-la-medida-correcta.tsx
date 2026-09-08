import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumb, CtaBand, PageHero, Section } from "@/components/site/Blocks";

const titulo = "Altura de la mampara de ducha: la medida correcta según tu baño";
const descripcion =
  "185, 195 o hasta el techo: qué altura de mampara evita de verdad las salpicaduras y cómo medir bien el hueco antes de encargarla.";
const path = "/altura-de-la-mampara-de-ducha-cual-es-la-medida-correcta";

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
      <Breadcrumb items={[{ label: "Blog", to: "/blog" }, { label: "Altura de la mampara" }]} />
      <PageHero eyebrow="Artículo" titulo={titulo} texto={descripcion} tono="arena" />
      <Section className="max-w-3xl">
        <article className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            La altura estándar de una mampara de ducha ronda los 185 cm, medidos desde el borde del
            plato. Es suficiente en la mayoría de baños, pero no siempre es la mejor elección.
          </p>
          <h2 className="text-2xl text-foreground">Cuándo 185 cm se queda corto</h2>
          <p>
            Si en casa hay alguien alto o la alcachofa es de techo tipo lluvia, el agua salpica por
            encima. En esos casos subimos a 195 o 200 cm, o fabricamos el panel hasta el techo en las
            duchas tipo walk-in sin puerta.
          </p>
          <h2 className="text-2xl text-foreground">Mamparas de bañera</h2>
          <p>
            Sobre bañera la referencia cambia: se mide desde el borde superior de la bañera y lo
            habitual son 140-150 cm. Más altura estorba al entrar y no aporta estanqueidad.
          </p>
          <h2 className="text-2xl text-foreground">Cómo medir el hueco</h2>
          <p>
            Mide el ancho en tres puntos —abajo, a media altura y arriba— y quédate con la medida
            menor. Las paredes rara vez están a plomo, y por eso todas nuestras mamparas llevan perfil
            de regulación. Anota también si hay alicatado sobresaliente, ventanas o grifería cerca del
            recorrido de la puerta.
          </p>
          <h2 className="text-2xl text-foreground">Nuestra recomendación</h2>
          <p>
            Antes de decidir la altura, deja que vayamos a medir. Es gratis en Vigo y alrededores, y
            con las medidas exactas te damos precio cerrado de la mampara instalada.
          </p>
        </article>
      </Section>
      <CtaBand producto="Mampara a medida" />
    </>
  );
}
