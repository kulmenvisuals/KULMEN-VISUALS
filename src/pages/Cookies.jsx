// src/pages/Cookies.jsx
import { Link } from "react-router-dom"

export default function Cookies() {
  return (
    <div className="bg-zinc-950 text-zinc-50">
      <section className="max-w-4xl mx-auto px-4 pt-10 pb-16 md:pt-16 md:pb-20">
        <p className="kv-eyebrow text-zinc-500 mb-3">
          Legal
        </p>
        <h1 className="kv-page-title mb-4">
          Política de cookies
        </h1>
        <p className="kv-lede max-w-2xl">
          Información clara sobre las cookies y tecnologías similares utilizadas en este sitio web.
        </p>

        <div className="mt-8 kv-glass-soft rounded-3xl px-6 py-8 md:px-8 md:py-10 space-y-8">
          <div className="space-y-3">
            <h2 className="kv-section-title text-zinc-100 text-xl md:text-2xl">
              ¿Qué son las cookies?
            </h2>
            <p className="kv-body-muted">
              Las cookies son pequeños archivos que se descargan en tu dispositivo al acceder a un sitio web. Permiten
              almacenar información sobre tu navegación para mejorar la experiencia de uso.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="kv-section-title text-zinc-100 text-xl md:text-2xl">
              Tipos de cookies que se pueden usar
            </h2>
            <ul className="space-y-2 text-zinc-300">
              <li>Cookies técnicas: necesarias para que el sitio funcione correctamente.</li>
              <li>Cookies de preferencias: recuerdan opciones básicas como idioma o región.</li>
              <li>Cookies de analítica: ayudan a medir el uso del sitio para mejorarlo.</li>
              <li>Cookies de terceros: integraciones externas, como reproductores o redes sociales.</li>
            </ul>
            <p className="kv-body-muted">
              Actualmente este sitio prioriza el uso de cookies técnicas. Si en el futuro se incorporan cookies de
              analítica o publicidad, se solicitará el consentimiento correspondiente.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="kv-section-title text-zinc-100 text-xl md:text-2xl">
              Cómo gestionar o desactivar cookies
            </h2>
            <p className="kv-body-muted">
              Puedes permitir, bloquear o eliminar cookies desde la configuración de tu navegador. A continuación, se
              incluyen accesos directos a la ayuda oficial de los principales navegadores:
            </p>
            <ul className="space-y-2 text-zinc-300">
              <li>Chrome: support.google.com/chrome/answer/95647</li>
              <li>Firefox: support.mozilla.org/es/kb/Eliminar%20cookies</li>
              <li>Safari: support.apple.com/es-es/guide/safari/sfri11471</li>
              <li>Edge: support.microsoft.com/es-es/help/4027947</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 kv-glass rounded-3xl px-6 py-6 md:px-8 md:py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="kv-body-muted max-w-xl">
            Si necesitas más detalles sobre el uso de cookies, puedes escribirme y te respondo.
          </p>
          <Link to="/contacto" className="kv-button-primary kv-button-accent">
            Contactar
          </Link>
        </div>
      </section>
    </div>
  )
}
