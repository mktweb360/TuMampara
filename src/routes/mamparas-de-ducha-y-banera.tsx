import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero-mampara.jpg";
import { tiposMampara } from "@/data/catalogo";
import { Reveal } from "@/components/site/Reveal";
import {
  Breadcrumb,
  CardLink,
  CtaBand,
  PageHero,
  Section,
  SectionTitle,
} from "@/components/site/Blocks";

export const Route = createFileRoute("/mamparas-de-ducha-y-banera")({
  head: () => ({
    meta: [
      { title: "Mamparas de ducha y bañera a medida en Vigo | TuMampara" },
      {
        name: "description",
        content:
          "Mamparas de ducha y bañera a medida: correderas, abatibles, plegables y fijos. Serigrafía y perfilería personalizables, instalación gratuita en Vigo y 2 años de garantía.",
      },
      { property: "og:title", content: "Mamparas de ducha y bañera a medida | TuMampara" },
      {
        property: "og:description",
        content:
          "Correderas, abatibles, plegables y fijos, en formato frontal, angular o para bañera.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <Breadcrumb items={[{ label: "Mamparas" }]} />
      <PageHero
        eyebrow="Catálogo de mamparas"
        titulo="Mamparas de ducha y bañera"
        texto="Cuatro tipos de apertura y tres formatos, todos fabricados a medida. Puedes personalizar la serigrafía del vidrio y el color de la perfilería para que la mampara acompañe al resto del baño."
        imagen={hero}
        alt="Mampara de ducha corredera de vidrio templado"
      />

      <Section>
        <SectionTitle
          eyebrow="Por tipo de apertura"
          titulo="Empieza eligiendo cómo quieres que abra"
          texto="Dentro de cada tipo encontrarás los formatos frontal para ducha, angular para ducha y modelos para bañera."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {tiposMampara.map((t, i) => (
            <Reveal key={t.path} delay={i * 70}>
              <div className="h-full border-t-2 border-ink/85 bg-card p-7">
                <h3 className="text-2xl">{t.titulo}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{t.resumen}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {t.formatos.map((f) => (
                    <li key={f.path}>
                      <a
                        href={f.path}
                        className="font-medium text-primary underline-offset-4 hover:text-accent hover:underline"
                      >
                        {f.titulo}
                      </a>
                    </li>
                  ))}
                </ul>
                <a
                  href={t.path}
                  className="mt-6 inline-block text-sm font-semibold text-accent"
                >
                  Ver todo {t.titulo.toLowerCase()}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="grid gap-6 bg-secondary/60 p-8 md:grid-cols-3 md:p-12">
          <div>
            <p className="eyebrow">Personalización</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Serigrafía del vidrio y color de perfilería a elegir en todos los modelos.
            </p>
          </div>
          <div>
            <p className="eyebrow">Instalación</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Gratuita en Vigo y alrededores. Al resto de España enviamos el producto, sin
              instalación incluida.
            </p>
          </div>
          <div>
            <p className="eyebrow">Garantía</p>
            <p className="mt-3 text-sm text-muted-foreground">
              2 años de garantía de fabricante en toda la gama.
            </p>
          </div>
        </div>
      </Section>

      <CtaBand producto="Mamparas" />
    </>
  );
}
