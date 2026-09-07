import hero from "@/assets/hero-mampara.jpg";
import { Reveal } from "./Reveal";
import { Breadcrumb, CardLink, CtaBand, PageHero, Section, SectionTitle } from "./Blocks";

export function TipoMamparaPage({
  titulo,
  resumen,
  formatos,
}: {
  titulo: string;
  resumen: string;
  formatos: { path: string; titulo: string }[];
}) {
  return (
    <>
      <Breadcrumb
        items={[{ label: "Mamparas", to: "/mamparas-de-ducha-y-banera" }, { label: titulo }]}
      />
      <PageHero
        eyebrow="Tipo de apertura"
        titulo={titulo}
        texto={resumen}
        imagen={hero}
        alt={titulo}
        tono="arena"
      />
      <Section>
        <SectionTitle
          eyebrow="Formatos disponibles"
          titulo="Elige el formato que encaja en tu baño"
          texto="Todos los modelos se fabrican a medida, con serigrafía del vidrio y color de perfilería personalizables."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {formatos.map((f, i) => (
            <Reveal key={f.path} delay={i * 80}>
              <CardLink to={f.path} titulo={f.titulo} meta={titulo} />
            </Reveal>
          ))}
        </div>
      </Section>
      <CtaBand producto={titulo} />
    </>
  );
}
