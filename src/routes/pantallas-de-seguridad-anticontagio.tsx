import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumb, CtaBand, PageHero, Section, SectionTitle } from "@/components/site/Blocks";

const descripcion =
  "Pantallas de protección de metacrilato y vidrio a medida para mostradores, oficinas y comercios. Fabricación propia en Vigo con montaje incluido en la zona.";

export const Route = createFileRoute("/pantallas-de-seguridad-anticontagio")({
  head: () => ({
    meta: [
      { title: "Pantallas de protección a medida para comercios | TuMampara" },
      { name: "description", content: descripcion },
      { property: "og:title", content: "Pantallas de protección a medida | TuMampara" },
      { property: "og:description", content: descripcion },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/pantallas-de-seguridad-anticontagio" },
    ],
    links: [{ rel: "canonical", href: "/pantallas-de-seguridad-anticontagio" }],
  }),
  component: Page,
});

const usos = [
  ["Mostradores", "Pantallas con ventanilla de paso para farmacias, tiendas y recepciones."],
  ["Oficinas", "Separadores entre puestos de trabajo, con o sin pies de apoyo."],
  ["Hostelería", "Mamparas de separación entre mesas, fáciles de limpiar y retirar."],
  ["Colgadas", "Pantallas suspendidas del techo cuando el mostrador no admite apoyo."],
];

function Page() {
  return (
    <>
      <Breadcrumb items={[{ label: "Pantallas de protección" }]} />
      <PageHero
        eyebrow="Pantallas de protección"
        titulo="Pantallas de seguridad a medida"
        texto={descripcion}
        tono="arena"
      />

      <Section>
        <SectionTitle
          eyebrow="Aplicaciones"
          titulo="Cada espacio pide una pantalla distinta"
          texto="Trabajamos el metacrilato y el vidrio templado con la misma maquinaria con la que fabricamos las mamparas: cortamos, pulimos y montamos a medida."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {usos.map(([titulo, texto], i) => (
            <Reveal key={titulo} delay={i * 70}>
              <div className="h-full border-t-2 border-ink/85 bg-card p-6">
                <h2 className="text-xl">{titulo}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand producto="Pantallas de protección" />
    </>
  );
}
