// src/pages/AvisoLegal.jsx
import { Link } from "react-router-dom"

export default function AvisoLegal() {
  return (
    <div className="bg-zinc-950 text-zinc-50">
      <section className="max-w-4xl mx-auto px-4 pt-10 pb-16 md:pt-16 md:pb-20">
        <p className="kv-eyebrow text-zinc-500 mb-3">
          Legal
        </p>
        <h1 className="kv-page-title mb-4">
          Aviso legal
        </h1>
        <p className="kv-lede max-w-2xl">
          Información general sobre la titularidad del sitio web, condiciones de uso y derechos de propiedad intelectual.
        </p>

        <div className="mt-8 kv-glass-soft rounded-3xl px-6 py-8 md:px-8 md:py-10 space-y-8">
          <div className="space-y-3">
            <h2 className="kv-section-title text-zinc-100 text-xl md:text-2xl">
              Identificación del titular
            </h2>
            <ul className="space-y-2 text-zinc-300">
              <li>Responsable: Io Elena Rodríguez Otero</li>
              <li>Actividad: producción audiovisual y servicios de vídeo</li>
              <li>NIF/CIF: 77545770M</li>
              <li>Domicilio: Ribeira de Abaixo 7, A Estrada, 36685.</li>
              <li>Correo de contacto: hola@kulmenvisuals.com</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="kv-section-title text-zinc-100 text-xl md:text-2xl">
              Condiciones de uso
            </h2>
            <p className="kv-body-muted">
              El acceso y uso de este sitio web atribuye la condición de usuario y supone la aceptación de las
              presentes condiciones. El usuario se compromete a utilizar el sitio de forma diligente, lícita y respetuosa,
              evitando usos que puedan dañar la imagen, los intereses o los derechos de terceros o del titular.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="kv-section-title text-zinc-100 text-xl md:text-2xl">
              Propiedad intelectual e industrial
            </h2>
            <p className="kv-body-muted">
              Todos los contenidos del sitio, incluyendo textos, imágenes, vídeos, logotipos, marcas y diseños, son
              titularidad del responsable o se utilizan con la debida licencia. Queda prohibida la reproducción,
              distribución o transformación sin autorización expresa.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="kv-section-title text-zinc-100 text-xl md:text-2xl">
              Responsabilidad
            </h2>
            <p className="kv-body-muted">
              El titular no se hace responsable de los daños derivados del uso de la información de este sitio ni de
              posibles errores u omisiones. Asimismo, no garantiza la ausencia de virus u otros elementos que puedan
              causar alteraciones en los sistemas del usuario.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="kv-section-title text-zinc-100 text-xl md:text-2xl">
              Enlaces externos
            </h2>
            <p className="kv-body-muted">
              Este sitio puede contener enlaces a páginas de terceros. El titular no asume ninguna responsabilidad por
              el contenido, políticas o prácticas de dichos sitios externos.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="kv-section-title text-zinc-100 text-xl md:text-2xl">
              Legislación aplicable
            </h2>
            <p className="kv-body-muted">
              Las presentes condiciones se rigen por la normativa española. Para cualquier controversia, las partes se
              someterán a los juzgados y tribunales competentes, salvo disposición legal en contrario.
            </p>
          </div>
        </div>

        <div className="mt-10 kv-glass rounded-3xl px-6 py-6 md:px-8 md:py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="kv-body-muted max-w-xl">
            Si necesitas ampliar esta información, puedes escribirme y te respondo lo antes posible.
          </p>
          <Link to="/contacto/" className="kv-button-primary kv-button-accent">
            Contactar
          </Link>
        </div>
      </section>
    </div>
  )
}
