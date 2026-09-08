import { createFileRoute, Link } from "@tanstack/react-router";
import { blogPosts } from "@/data/catalogo";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumb, CtaBand, PageHero, Section, SectionTitle } from "@/components/site/Blocks";

const descripcion =
  "Consejos de instaladores sobre mamparas, platos de ducha y tendales: limpieza, medidas, elección del modelo y mantenimiento.";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog de mamparas, platos de ducha y tendales | TuMampara" },
      { name: "description", content: descripcion },
      { property: "og:title", content: "Blog | TuMampara" },
      { property: "og:description", content: descripcion },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Page,
});

function Page() {
  const publicados = blogPosts.filter((p) => p.publicado);
  const proximos = blogPosts.filter((p) => !p.publicado);

  return (
    <>
      <Breadcrumb items={[{ label: "Blog" }]} />
      <PageHero
        eyebrow="Blog"
        titulo="Consejos de quien las instala"
        texto={descripcion}
        tono="arena"
      />

      <Section>
        <SectionTitle eyebrow="Artículos" titulo="Lo último que hemos publicado" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {publicados.map((p, i) => (
            <Reveal key={p.path} delay={i * 80}>
              <Link
                to={p.path as never}
                className="flex h-full flex-col justify-between border-t-2 border-ink/85 bg-card p-7 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-soft"
              >
                <div>
                  <p className="eyebrow">Artículo</p>
                  <h2 className="mt-2 text-2xl">{p.titulo}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.extracto}</p>
                </div>
                <span className="mt-6 text-sm font-semibold text-accent">Leer artículo</span>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-14">
          <p className="eyebrow">Próximamente</p>
          <ul className="mt-4 grid gap-2 text-sm text-muted-foreground md:grid-cols-2">
            {proximos.map((p) => (
              <li key={p.path}>{p.titulo}</li>
            ))}
          </ul>
        </div>
      </Section>

      <CtaBand producto="Blog" />
    </>
  );
}
