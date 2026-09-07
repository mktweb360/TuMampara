import { Link } from "@tanstack/react-router";
import { nav, site } from "@/data/site";
import { tiposMampara } from "@/data/catalogo";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container-x grid gap-10 py-16 md:grid-cols-4">
        <div>
          <p className="font-display text-2xl">
            Tu<span className="text-accent">Mampara</span>
          </p>
          <p className="mt-3 max-w-xs text-sm opacity-75">
            {site.legal}. Fabricación, venta e instalación de mamparas de baño, platos de ducha y
            tendales. Más de 30 años de oficio en Vigo.
          </p>
        </div>

        <div>
          <p className="eyebrow">Catálogo</p>
          <ul className="mt-4 space-y-2 text-sm">
            {tiposMampara.map((t) => (
              <li key={t.path}>
                <Link to={t.path as never} className="opacity-80 hover:text-accent hover:opacity-100">
                  {t.titulo}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Secciones</p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to as never} className="opacity-80 hover:text-accent hover:opacity-100">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Contacto</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={`tel:${site.phoneFijoTel}`} className="hover:text-accent">
                {site.phoneFijo}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phoneMovilTel}`} className="hover:text-accent">
                {site.phoneMovil}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-accent">
                {site.email}
              </a>
            </li>
            <li className="opacity-80">{site.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-5 text-xs opacity-70 md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legal} · Todos los derechos reservados
          </p>
          <p>Instalación gratuita en Vigo y alrededores · Garantía de fabricante de 2 años</p>
        </div>
      </div>
    </footer>
  );
}
