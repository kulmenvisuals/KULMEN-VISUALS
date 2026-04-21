// src/pages/SobreMi.jsx
import { Link } from "react-router-dom"
import { usePageSeo, useJsonLd, siteUrl } from "../utils/seo.js"

// Ruta de la foto (sirve en dev y en GitHub Pages)
const fotoIo = `${import.meta.env.BASE_URL}images/io-portrait.jpg`

const aboutBlocks = [
  {
    id: "como",
    label: "Cómo trabajo",
    title: "Primero objetivos, después cámara.",
    text: "Empiezo por entender qué quieres conseguir con el vídeo: ventas, visibilidad, reservas o comunidad. A partir de ahí defino propuesta, mensajes clave, formatos finales y calendario realista.",
    bullets: [
      "Reunión inicial corta y clara",
      "Propuesta audiovisual",
      "Planning de rodaje y entregas",
    ],
  },
  {
    id: "disfruto",
    label: "Lo que mejor hago",
    title: "Traducir necesidades en piezas concretas.",
    text: "Mi punto fuerte es bajar a tierra ideas que están medio definidas y convertirlas en piezas utilizables: spots, reels, aftermovies o bancos de clips listos para publicar.",
    bullets: [
      "Selección de planos pensando en su uso real",
      "Mezcla de cámara y drones FPV cuando aporta valor",
      "Versiones adaptadas a cada canal (web, IG, TikTok)",
    ],
  },
  {
    id: "clientes",
    label: "Con quién encajo mejor",
    title: "Equipos pequeños que quieren vídeo serio.",
    text: "Trabajo bien con negocios y proyectos que no tienen departamento interno de vídeo, pero necesitan contenido sólido y constante sin complicarse la vida.",
    bullets: [
      "Marcas pequeñas y medianas",
      "Festivales y eventos",
      "Proyectos deportivos",
    ],
  },
]

const sobreMiSeo = {
  title: 'Sobre mi | Produccion audiovisual y drones FPV en Galicia',
  description:
    'Conoce a io, creadora audiovisual y piloto de drones FPV en Galicia. Produccion completa de video para marcas, eventos y proyectos culturales.',
  pathname: '/sobre-mi',
  image: '/images/io-portrait.jpg',
}

const sobreMiJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'io Rodríguez',
  url: `${siteUrl}/sobre-mi`,
  image: `${siteUrl}/images/io-portrait.jpg`,
  jobTitle: 'Realizadora audiovisual y piloto de drones FPV',
  description:
    'Creadora audiovisual y piloto de drones FPV en Galicia. Producción completa de vídeo para marcas, eventos y proyectos culturales.',
  worksFor: { '@type': 'Organization', name: 'Kulmen Visuals', url: siteUrl },
  address: { '@type': 'PostalAddress', addressRegion: 'Galicia', addressCountry: 'ES' },
  sameAs: ['https://www.instagram.com/kulmenvisuals/'],
}

export default function SobreMi() {
  usePageSeo(sobreMiSeo)
  useJsonLd(sobreMiJsonLd)

  return (
    <div className="bg-zinc-950 text-zinc-50">
      {/* Hero con foto + texto */}
      <section className="max-w-6xl mx-auto px-4 pt-10 pb-16 md:pt-16 md:pb-20">
        <div className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-center">
          {/* Texto principal */}
          <div>
            <p className="kv-eyebrow text-zinc-500 mb-3">
              Sobre mí
            </p>
            <h1 className="kv-page-title mb-4">
              io · Kulmen Visuals
            </h1>

            <p className="kv-lede mb-4 max-w-xl">
              Soy creadora audiovisual y piloto de drones FPV. Trabajo para marcas,
              eventos y proyectos culturales que necesitan vídeo profesional desde la conceptualización hasta la edición.
            </p>

            <p className="kv-body-muted mb-4 max-w-xl">
              Cubro todo el proceso: definición del proyecto, guion básico,
              planificación de rodaje, grabación con cámara y dron FPV, y postproducción final (montaje, color, sonido y grafismos) con entregas listas para publicar.
            </p>

            <p className="kv-body-muted text-zinc-500 max-w-xl">
              Mi foco es que cada pieza tenga intención, impacte y genere una repercusión positiva para mejorar
              la percepción de marca y generar resultados medibles en comunicación (más atención, más confianza, más acción).
            </p>

            {/* Etiquetas rápidas */}
            <div className="mt-6 flex flex-wrap gap-2 text-xs md:text-[13px]">
              <span className="kv-chip">
                Piloto de drones certificada por EASA
              </span>
              <span className="kv-chip">
                Realizadora audiovisual
              </span>
              <span className="kv-chip">
                Editora de contenidos
              </span>
            </div>
          </div>

          {/* Foto */}
          <div className="relative w-full max-w-xs md:max-w-sm mx-auto">
            <div className="kv-glass rounded-3xl overflow-hidden">
              <img
                src={fotoIo}
                alt="Retrato de io Rodríguez, creadora audiovisual y piloto de drones"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="kv-caption mt-3 text-zinc-500 text-center">
              io — Kulmen Visuals
            </p>
          </div>
        </div>
      </section>

      {/* Bloque extra: cómo trabajo / lo que mejor hago / con quién encajo */}
      <section className="max-w-6xl mx-auto px-4 pb-16 md:pb-20 border-t border-zinc-900">
        <header className="mb-8 md:mb-10">
          <p className="kv-eyebrow text-amber-300/80 mb-2">
            Forma de trabajar
          </p>
          <h2 className="kv-section-title text-zinc-50">
            Cómo trabajo y con quién tiene sentido colaborar.
          </h2>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {aboutBlocks.map((block) => (
            <article
              key={block.id}
              className="relative kv-glass-soft rounded-3xl overflow-hidden group"
            >
              {/* Foco de color en hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute -top-24 -left-16 w-48 h-48 bg-amber-400/12 blur-3xl" />
                <div className="absolute -bottom-24 -right-8 w-40 h-40 bg-amber-500/10 blur-3xl" />
              </div>

              <div className="relative z-10 px-5 py-5 md:px-6 md:py-6 space-y-3">
                <p className="kv-eyebrow text-amber-300/80">
                  {block.label}
                </p>
                <h3 className="kv-card-title text-zinc-50">
                  {block.title}
                </h3>
                <p className="kv-card-body text-zinc-300 leading-relaxed">
                  {block.text}
                </p>

                <ul className="pt-2 space-y-1.5 text-xs md:text-sm text-zinc-200/90">
                  {block.bullets.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="kv-bullet mt-[6px]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="max-w-6xl mx-auto px-4 pb-16 md:pb-20">
        <div className="kv-glass rounded-3xl px-6 py-10 md:px-10 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="kv-section-title mb-2">
              ¿Hablamos de tu proyecto?
            </h2>
            <p className="kv-lede max-w-md">
              Si buscas un vídeo con intención y un proceso claro, cuéntame tu idea
              y lo vemos sin compromiso.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contacto" className="kv-button-primary kv-button-accent">
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
