import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "./Reveal";
import { QuoteForm } from "./QuoteForm";

export function PageHero({
  eyebrow,
  titulo,
  texto,
  imagen,
  alt,
  tono = "claro",
}: {
  eyebrow: string;
  titulo: string;
  texto: string;
  imagen?: string;
  alt?: string;
  tono?: "claro" | "arena";
}) {
  return (
    <section className={tono === "arena" ? "bg-sand" : "bg-secondary/60"}>
      <div className="container-x grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-3 text-4xl leading-[1.05] md:text-5xl lg:text-6xl">{titulo}</h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">{texto}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Pedir presupuesto <ArrowRight className="size-4" />
            </Link>
            <a
              href={`tel:${site.phoneFijoTel}`}
              className="inline-flex items-center gap-2 rounded-sm border border-primary/25 px-6 py-3 text-sm font-semibold text-primary"
            >
              <Phone className="size-4" /> {site.phoneFijo}
            </a>
          </div>
        </Reveal>
        {imagen && (
          <Reveal delay={120}>
            <img
              src={imagen}
              alt={alt ?? titulo}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-sm object-cover shadow-soft"
            />
          </Reveal>
        )}
      </div>
    </section>
  );
}

export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <section className={`container-x py-16 md:py-24 ${className}`}>{children}</section>;
}

export function SectionTitle({
  eyebrow,
  titulo,
  texto,
}: {
  eyebrow?: string;
  titulo: string;
  texto?: string;
}) {
  return (
    <Reveal className="max-w-2xl">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl md:text-4xl">{titulo}</h2>
      {texto && <p className="mt-4 text-muted-foreground">{texto}</p>}
    </Reveal>
  );
}

export function CardLink({
  to,
  titulo,
  texto,
  meta,
}: {
  to: string;
  titulo: string;
  texto?: string;
  meta?: string;
}) {
  return (
    <Link
      to={to as never}
      className="group flex flex-col justify-between border-t-2 border-ink/85 bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-soft"
    >
      <div>
        {meta && <p className="eyebrow">{meta}</p>}
        <h3 className="mt-2 text-xl">{titulo}</h3>
        {texto && <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{texto}</p>}
      </div>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
        Ver más <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

export function CtaBand({ producto }: { producto?: string }) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container-x grid gap-10 py-16 md:py-20 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Presupuesto sin compromiso</p>
          <h2 className="mt-3 text-3xl text-primary-foreground md:text-4xl">
            Te asesoramos y medimos contigo
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed opacity-80">
            Cuéntanos tu baño o tu galería y te damos precio cerrado. Instalación gratuita en Vigo
            y alrededores; al resto de España enviamos el producto (envío sin coste en tendales),
            sin instalación incluida. Garantía de fabricante de 2 años.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
            <a
              href={`tel:${site.phoneFijoTel}`}
              className="inline-flex items-center gap-2 rounded-sm bg-accent px-5 py-3 text-accent-foreground"
            >
              <Phone className="size-4" /> {site.phoneFijo}
            </a>
            <a
              href={`tel:${site.phoneMovilTel}`}
              className="inline-flex items-center gap-2 rounded-sm border border-white/25 px-5 py-3"
            >
              <Phone className="size-4" /> {site.phoneMovil}
            </a>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="rounded-sm bg-card p-6 text-foreground shadow-lift">
            <QuoteForm producto={producto} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Breadcrumb({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Migas de pan" className="container-x pt-6 text-xs text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link to="/" className="hover:text-accent">
            Inicio
          </Link>
        </li>
        {items.map((i) => (
          <li key={i.label} className="flex items-center gap-2">
            <span>/</span>
            {i.to ? (
              <Link to={i.to as never} className="hover:text-accent">
                {i.label}
              </Link>
            ) : (
              <span className="text-foreground">{i.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
