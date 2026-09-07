import { useEffect, useState } from "react";
import { site } from "@/data/site";

const KEY = "tm-consent-v1";

declare global {
  interface Window {
    dataLayer?: unknown[];
    __tmGtmLoaded?: boolean;
  }
}

function loadGtm() {
  if (typeof window === "undefined" || window.__tmGtmLoaded) return;
  window.__tmGtmLoaded = true;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtm.js?id=${site.gtmId}`;
  document.head.appendChild(s);
}

/**
 * CMP básico conforme a RGPD: GTM (y por tanto GA4 y Google Ads)
 * no se carga hasta que la persona acepta.
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(KEY);
    if (stored === "accepted") loadGtm();
    else if (stored !== "rejected") setVisible(true);
  }, []);

  const decide = (value: "accepted" | "rejected") => {
    localStorage.setItem(KEY, value);
    setVisible(false);
    if (value === "accepted") loadGtm();
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] p-3 sm:p-5">
      <div className="container-x max-w-3xl rounded-sm border border-border bg-card p-5 shadow-lift">
        <p className="font-display text-lg">Uso de cookies</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Usamos cookies propias y de terceros (analítica y publicidad) para medir el uso del sitio
          y mejorar nuestras campañas. Puedes aceptarlas o seguir navegando solo con las cookies
          técnicas necesarias.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={() => decide("accepted")}
            className="rounded-sm bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground"
          >
            Aceptar todas
          </button>
          <button
            onClick={() => decide("rejected")}
            className="rounded-sm border border-border px-5 py-2.5 text-sm font-semibold"
          >
            Solo necesarias
          </button>
        </div>
      </div>
    </div>
  );
}
