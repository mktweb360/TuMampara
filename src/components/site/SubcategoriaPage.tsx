import { Link } from "@tanstack/react-router";
import hero from "@/assets/hero-mampara.jpg";
import type { Subcategoria } from "@/data/catalogo";
import { Reveal } from "./Reveal";
import { Breadcrumb, CtaBand, PageHero, Section, SectionTitle } from "./Blocks";

export function SubcategoriaPage({
  sub,
  tipoTitulo,
  tipoPath,
}: {
  sub: Subcategoria;
  tipoTitulo: string;
  tipoPath: string;
}) {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Mamparas", to: "/mamparas-de-ducha-y-banera" },
          { label: tipoTitulo, to: tipoPath },
          { label: sub.titulo },
        ]}
      />
      <PageHero
        eyebrow={tipoTitulo}
        titulo={sub.titulo}
        texto={sub.descripcion}
        imagen={hero}
        alt={sub.titulo}
      />

      <Section>
        <SectionTitle
          eyebrow="Modelos"
          titulo="Modelos disponibles"
          texto="Todos se fabrican a medida. Dinos las medidas de tu hueco y te damos precio cerrado."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {sub.productos.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <Link
                to="/modelo/$slug"
                params={{ slug: p.slug }}
                className="flex h-full flex-col justify-between border-t-2 border-ink/85 bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-soft"
              >
                <div>
                  <p className="eyebrow">
                    {p.tipo} · {p.formato}
                  </p>
                  <h3 className="mt-2 text-xl">{p.nombre}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.descripcion}
                  </p>
                </div>
                <span className="mt-6 text-sm font-semibold text-accent">{p.precio}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand producto={sub.titulo} />
    </>
  );
}
