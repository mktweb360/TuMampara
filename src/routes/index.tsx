import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, ShieldCheck, Ruler, Truck, Hammer } from "lucide-react";
import hero from "@/assets/hero-mampara.jpg";
import tendalExterior from "@/assets/tendal-exterior.jpg";
import platoDucha from "@/assets/plato-ducha.jpg";
import { site } from "@/data/site";
import { tiposMampara } from "@/data/catalogo";
import { Reveal } from "@/components/site/Reveal";
import { CardLink, CtaBand, Section, SectionTitle } from "@/components/site/Blocks";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "TuMampara | Mamparas de baño, platos de ducha y tendales en Vigo",
      },
      {
        name: "description",
        content:
          "Fabricamos e instalamos mamparas de baño a medida, platos de ducha y tendales exteriores e interiores. Más de 30 años en Vigo. Instalación gratuita en Vigo y alrededores.",
      },
      {
        property: "og:title",
        content: "TuMampara | Mamparas, platos de ducha y tendales en Vigo",
      },
      {
        property: "og:description",
        content:
          "Mamparas a medida, platos de ducha y tendales. Instalación gratuita en Vigo y alrededores y 2 años de garantía.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={hero}
          alt="Mampara de ducha corredera instalada en un baño moderno"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/10" />
        <div className="container-x flex min-h-[78vh] flex-col justify-center py-20 text-white">
          <Reveal>
            <p className="eyebrow">Vigo · Más de 30 años de oficio</p>
            <h1 className="mt-4 max-w-3xl text-4xl leading-[1.03] text-white sm:text-5xl lg:text-7xl">
              Mamparas, platos de ducha y tendales hechos a la medida de tu casa
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80">
              Fabricamos, vendemos e instalamos. Instalación gratuita en Vigo y alrededores,
              garantía de fabricante de 2 años y asesoramiento real antes de decidir.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                Pedir presupuesto <ArrowRight className="size-4" />
              </Link>
              <a
                href={`tel:${site.phoneMovilTel}`}
                className="inline-flex items-center gap-2 rounded-sm border border-white/35 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm"
              >
                <Phone className="size-4" /> {site.phoneMovil}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Dos productos protagonistas: mamparas y tendales */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Link
              to="/tendales"
              className="group relative block h-full overflow-hidden rounded-sm"
            >
              <img
                src={tendalExterior}
                alt="Tendal exterior cubierto instalado en la fachada de una vivienda"
                loading="lazy"
                width={1600}
                height={1104}
                className="h-[26rem] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 to-transparent" />
              <div className="absolute bottom-0 p-7 text-white">
                <p className="eyebrow">Nuestro producto estrella</p>
                <h2 className="mt-2 text-3xl text-white">Tendales</h2>
                <p className="mt-2 max-w-sm text-sm text-white/80">
                  Tendales exteriores cubiertos desde 330 € con instalación en Vigo, e interiores
                  elevables desde 270 €. Fabricación a medida.
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  Ver tendales <ArrowRight className="size-4" />
                </span>
              </div>
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <Link
              to="/mamparas-de-ducha-y-banera"
              className="group relative block h-full overflow-hidden rounded-sm"
            >
              <img
                src={hero}
                alt="Mampara de ducha de vidrio templado con perfilería fina"
                loading="lazy"
                width={1920}
                height={1088}
                className="h-[26rem] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 to-transparent" />
              <div className="absolute bottom-0 p-7 text-white">
                <p className="eyebrow">Catálogo principal</p>
                <h2 className="mt-2 text-3xl text-white">Mamparas de ducha y bañera</h2>
                <p className="mt-2 max-w-sm text-sm text-white/80">
                  Correderas, abatibles, plegables y fijos. Serigrafía del vidrio y color de
                  perfilería personalizables.
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  Ver mamparas <ArrowRight className="size-4" />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </Section>

      <Section className="!pt-0">
        <SectionTitle
          eyebrow="Tipos de apertura"
          titulo="Elige la mampara por cómo quieres que abra"
          texto="Cada tipo se fabrica en formato frontal, angular o para bañera, siempre a medida de tu baño."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {tiposMampara.map((t, i) => (
            <Reveal key={t.path} delay={i * 80}>
              <CardLink to={t.path} titulo={t.titulo} texto={t.resumen} meta="Mamparas" />
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="bg-sand">
        <div className="container-x grid items-center gap-10 py-16 md:py-24 lg:grid-cols-2">
          <Reveal>
            <img
              src={platoDucha}
              alt="Plato de ducha de resina con textura pizarra"
              loading="lazy"
              width={1600}
              height={1104}
              className="w-full rounded-sm object-cover shadow-soft"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow">Platos de ducha</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Diez acabados, todos a medida</h2>
            <p className="mt-4 text-muted-foreground">
              Madera, granito, piel, tapete, bambú, piedra, angular, colmena, liso y pizarra.
              Cortamos el plato a la medida exacta de tu hueco y lo instalamos.
            </p>
            <Link
              to="/plato-de-ducha"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent"
            >
              Ver platos de ducha <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid gap-8 md:grid-cols-4">
          {[
            { icon: Hammer, t: "Fabricación propia", d: "Más de 30 años fabricando e instalando en el sector del baño." },
            { icon: Ruler, t: "Medidas a medida", d: "Tomamos medidas y fabricamos para tu hueco, sin adaptaciones forzadas." },
            { icon: Truck, t: "Envío a toda España", d: "Fuera de Vigo enviamos el producto; en tendales, sin coste de envío." },
            { icon: ShieldCheck, t: "Garantía de 2 años", d: "Garantía de fabricante en todos nuestros productos." },
          ].map((b, i) => (
            <Reveal key={b.t} delay={i * 70}>
              <b.icon className="size-6 text-accent" />
              <h3 className="mt-4 text-lg">{b.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
