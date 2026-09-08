import { createFileRoute } from "@tanstack/react-router";
import plato from "@/assets/plato-ducha.jpg";
import { acabadoLabel, acabadosPlato } from "@/data/catalogo";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumb, CtaBand, PageHero, Section, SectionTitle } from "@/components/site/Blocks";

const descripcion =
  "Platos de ducha de resina a medida, antideslizantes y cortables en obra, con diez texturas a elegir y colores personalizables. Instalación gratuita en Vigo y alrededores.";

export const Route = createFileRoute("/plato-de-ducha")({
  head: () => ({
    meta: [
      { title: "Platos de ducha de resina a medida en Vigo | TuMampara" },
      { name: "description", content: descripcion },
      { property: "og:title", content: "Platos de ducha a medida | TuMampara" },
      { property: "og:description", content: descripcion },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/plato-de-ducha" },
    ],
    links: [{ rel: "canonical", href: "/plato-de-ducha" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <Breadcrumb items={[{ label: "Platos de ducha" }]} />
      <PageHero
        eyebrow="Platos de ducha"
        titulo="Platos de ducha de resina a medida"
        texto={descripcion}
        imagen={plato}
        alt="Plato de ducha de resina con textura pizarra"
        tono="arena"
      />

      <Section>
        <SectionTitle
          eyebrow="Acabados"
          titulo="Diez texturas para elegir"
          texto="Cada textura se fabrica en el color que elijas y se corta a la medida exacta de tu hueco, incluso con recortes para tuberías o pilares."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {acabadosPlato.map((a, i) => (
            <Reveal key={a} delay={i * 50}>
              <div className="border-t-2 border-ink/85 bg-card p-5">
                <p className="eyebrow">Textura</p>
                <p className="mt-2 text-lg">{acabadoLabel[a]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="grid gap-6 bg-secondary/60 p-8 md:grid-cols-3 md:p-12">
          <div>
            <p className="eyebrow">A ras de suelo</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Sustituimos la bañera por un plato enrasado y accesible, sin escalón.
            </p>
          </div>
          <div>
            <p className="eyebrow">Antideslizante</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Superficie de resina con agarre, cómoda y segura también para personas mayores.
            </p>
          </div>
          <div>
            <p className="eyebrow">A medida</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Medimos en tu casa y fabricamos el plato con la medida exacta del hueco.
            </p>
          </div>
        </div>
      </Section>

      <CtaBand producto="Plato de ducha" />
    </>
  );
}
