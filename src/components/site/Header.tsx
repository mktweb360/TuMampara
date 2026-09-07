import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { nav, site } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="hidden bg-primary text-primary-foreground md:block">
        <div className="container-x flex h-9 items-center justify-between text-xs">
          <p className="opacity-80">
            Fabricación e instalación propia en Vigo desde hace más de 30 años · Garantía 2 años
          </p>
          <div className="flex items-center gap-5">
            <a className="hover:text-accent" href={`tel:${site.phoneFijoTel}`}>
              {site.phoneFijo}
            </a>
            <a className="hover:text-accent" href={`tel:${site.phoneMovilTel}`}>
              {site.phoneMovil}
            </a>
            <a className="hover:text-accent" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
        </div>
      </div>

      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link to="/" className="font-display text-2xl tracking-tight text-ink">
          Tu<span className="text-accent">Mampara</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent [&.active]:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phoneMovilTel}`}
            className="inline-flex items-center gap-2 rounded-sm bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            <Phone className="size-4" />
            <span className="hidden sm:inline">{site.phoneMovil}</span>
            <span className="sm:hidden">Llamar</span>
          </a>
          <button
            type="button"
            aria-label="Abrir menú"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-sm border border-border lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background lg:hidden">
          <div className="container-x flex flex-col py-2">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm font-medium last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <a href={`tel:${site.phoneFijoTel}`} className="py-3 text-sm font-medium text-accent">
              {site.phoneFijo}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
