import { useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { site } from "@/data/site";

export function QuoteForm({ producto }: { producto?: string }) {
  const navigate = useNavigate();
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const data = new FormData(e.currentTarget);
    // Evento de capa de datos para el disparador de GTM
    window.dataLayer?.push({
      event: "envio_formulario_presupuesto",
      producto: producto ?? "general",
      origen: typeof window !== "undefined" ? window.location.pathname : "",
    });
    const body = encodeURIComponent(
      `Nombre: ${data.get("nombre")}\nTeléfono: ${data.get("telefono")}\nEmail: ${data.get("email")}\nLocalidad: ${data.get("localidad")}\nProducto: ${producto ?? data.get("producto")}\nMedidas: ${data.get("medidas")}\n\n${data.get("mensaje")}`,
    );
    // Sin backend conectado todavía: abrimos el correo con los datos y
    // redirigimos a la página de gracias (necesaria para la conversión de Ads).
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Solicitud de presupuesto web")}&body=${body}`;
    navigate({ to: "/contacto/gracias" });
  };

  const field =
    "w-full rounded-sm border border-input bg-card px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-accent";

  return (
    <form onSubmit={onSubmit} className="grid gap-3 sm:grid-cols-2">
      <input required name="nombre" placeholder="Nombre y apellidos" className={field} />
      <input required name="telefono" type="tel" placeholder="Teléfono" className={field} />
      <input name="email" type="email" placeholder="Email" className={field} />
      <input name="localidad" placeholder="Localidad" className={field} />
      {producto ? (
        <input type="hidden" name="producto" value={producto} />
      ) : (
        <input name="producto" placeholder="Producto de interés" className={field} />
      )}
      <input name="medidas" placeholder="Medidas aproximadas (opcional)" className={field} />
      <textarea
        name="mensaje"
        rows={4}
        placeholder="Cuéntanos qué necesitas"
        className={`${field} sm:col-span-2`}
      />
      <label className="flex items-start gap-2 text-xs text-muted-foreground sm:col-span-2">
        <input required type="checkbox" name="rgpd" className="mt-0.5" />
        He leído y acepto la política de privacidad. Trataremos tus datos únicamente para
        responder a tu solicitud de presupuesto.
      </label>
      <button
        type="submit"
        disabled={sending}
        className="rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60 sm:col-span-2"
      >
        {sending ? "Enviando…" : "Pedir presupuesto sin compromiso"}
      </button>
    </form>
  );
}
