import { Link } from 'react-router-dom'
import { Plane, Film, Briefcase, Calendar, Building2, Key, MapPin } from 'lucide-react'
import { usePageSeo, useJsonLd } from '../utils/seo.js'

const seo = {
  title: 'Servicios de grabación con drones | FPV, eventos, empresa y rodajes',
  description:
    'Grabación con drones profesionales en España: FPV, cine, vídeo corporativo, eventos e inmobiliaria. Piloto con permisos AESA. Presupuesto sin compromiso.',
  pathname: '/servicios-grabacion-con-drones',
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Servicios de grabación con drones',
  description: 'Grabación aérea con drones profesionales: FPV, cine y publicidad, vídeo corporativo, eventos, inmobiliaria y alquiler con piloto.',
  provider: {
    '@type': 'Organization',
    name: 'Kulmen Visuals',
    url: 'https://kulmenvisuals.com',
  },
  areaServed: 'ES',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de drones',
    itemListElement: [
      { '@type': 'Offer', name: 'Grabación con drones FPV' },
      { '@type': 'Offer', name: 'Dron para cine y publicidad' },
      { '@type': 'Offer', name: 'Vídeo corporativo con dron' },
      { '@type': 'Offer', name: 'Grabación con dron para eventos' },
      { '@type': 'Offer', name: 'Dron para inmobiliarias' },
      { '@type': 'Offer', name: 'Alquiler de drones con piloto' },
    ],
  },
}

const servicios = [
  {
    to: '/grabacion-con-drones-fpv/',
    icon: Plane,
    title: 'Grabación con drones FPV',
    desc: 'Vuelos dinámicos e inmersivos para publicidad, eventos y contenido de marca. El FPV genera planos imposibles para cámaras convencionales.',
    keyword: 'grabación drones FPV',
  },
  {
    to: '/dron-para-cine-y-publicidad/',
    icon: Film,
    title: 'Dron para cine y publicidad',
    desc: 'Planos aéreos de alto nivel para spots, rodajes y campañas. Imágenes estabilizadas con calidad cinematográfica.',
    keyword: 'dron para rodaje',
  },
  {
    to: '/video-corporativo-con-dron/',
    icon: Briefcase,
    title: 'Vídeo corporativo con dron',
    desc: 'Muestra tus instalaciones, fábrica o empresa desde el aire. Piezas B2B con narrativa clara y resultado profesional.',
    keyword: 'vídeo corporativo',
  },
  {
    to: '/dron-para-eventos/',
    icon: Calendar,
    title: 'Grabación con dron para eventos',
    desc: 'Cobertura aérea de festivales, conciertos y activaciones de marca. Aftermovies que prolongan el impacto del evento.',
    keyword: 'dron para eventos',
  },
  {
    to: '/dron-para-inmobiliarias/',
    icon: Building2,
    title: 'Dron para inmobiliarias',
    desc: 'Foto y vídeo aéreo de propiedades, parcelas y urbanizaciones. El recurso más efectivo para acelerar la venta o el alquiler.',
    keyword: 'dron para inmobiliaria',
  },
  {
    to: '/alquiler-drones-con-piloto/',
    icon: Key,
    title: 'Alquiler de drones con piloto',
    desc: 'Dron profesional + piloto certificado para tu proyecto. Permisos incluidos y operativa lista desde el primer día.',
    keyword: 'alquiler con piloto',
  },
]

const localLinks = [
  {
    to: '/galicia/grabacion-con-drones/',
    label: 'Grabación con drones en Galicia',
    desc: 'Cobertura en toda la comunidad: Pontevedra, Vigo, A Coruña, Santiago y más.',
  },
  {
    to: '/pontevedra/grabacion-con-drones/',
    label: 'Grabación con drones en Pontevedra',
    desc: 'Servicio local con base en Pontevedra. Respuesta rápida y conocimiento del territorio.',
  },
]

const faqs = [
  {
    question: '¿Con qué tipo de drones trabajáis?',
    answer:
      'Utilizamos drones FPV (GEPRC Mark 5, GEPRC Cinelog 30 V3) para planos dinámicos e inmersivos, y DJI Mini 4 Pro para tomas estables y panorámicas. La elección depende del tipo de proyecto y el resultado que buscas.',
  },
  {
    question: '¿Los pilotos tienen todos los permisos necesarios?',
    answer:
      'Sí. Operamos con la regulación UAS vigente en España, gestionamos la coordinación con AESA cuando es necesario y revisamos el espacio aéreo antes de cada vuelo.',
  },
  {
    question: '¿Trabajáis solo en Galicia o en toda España?',
    answer:
      'Tenemos base en Pontevedra (Galicia) y podemos desplazarnos a cualquier punto de España. Para proyectos fuera de Galicia se añade al presupuesto el coste de desplazamiento.',
  },
  {
    question: '¿Cuánto cuesta una sesión de grabación con dron?',
    answer:
      'El precio varía según el tipo de servicio, horas de vuelo, localizaciones y si se incluye edición. Prepara un presupuesto cerrado tras una breve conversación para ajustarlo a tu proyecto.',
  },
  {
    question: '¿Podéis encargaos también de la edición del material?',
    answer:
      'Sí. Ofrecemos producción completa: grabación aérea, montaje, corrección de color, música y entrega en formatos listos para web, redes y campañas.',
  },
]

export default function ServiciosGrabacion() {
  usePageSeo(seo)
  useJsonLd(schema)

  return (
    <div className="bg-zinc-950 text-zinc-50">
      {/* HERO */}
      <section className="relative border-b border-zinc-800/60">
        <div className="max-w-4xl mx-auto px-4 py-14 md:py-20">
          <p className="kv-eyebrow text-amber-300/80 mb-3">Servicios de drones</p>
          <h1 className="kv-page-title mb-5">Servicios de grabación con drones</h1>
          <p className="kv-lede max-w-2xl text-zinc-300">
            Producción aérea profesional con drones FPV y cinematográficos para empresas, agencias y productoras. Piloto certificado, permisos incluidos y resultado listo para publicar.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contacto/" className="kv-button-primary kv-button-accent">
              Pedir presupuesto
            </Link>
            <Link to="/" className="kv-button-secondary">
              Ver portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* GRID DE SERVICIOS */}
      <section className="max-w-6xl mx-auto px-4 py-14 md:py-20">
        <div className="mb-10">
          <h2 className="kv-section-title mb-3">¿Qué tipo de grabación con dron necesitas?</h2>
          <p className="kv-body-muted max-w-2xl">
            Cada proyecto tiene una demanda distinta. Selecciona el servicio que mejor encaje con tu objetivo o contáctanos para que te asesoremos.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {servicios.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group relative overflow-hidden kv-glass-soft rounded-2xl p-5 border border-white/10 transition duration-300 ease-out hover:-translate-y-1 hover:border-amber-300/40 hover:shadow-[0_20px_40px_-24px_rgba(251,191,36,0.55)]"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-amber-300/10 blur-2xl" />
              </div>
              <div className="relative">
                <div className="h-9 w-9 rounded-full border border-amber-300/30 bg-amber-300/10 flex items-center justify-center text-amber-200 mb-3">
                  <s.icon size={16} />
                </div>
                <h2 className="kv-card-title text-zinc-100 group-hover:text-amber-100 transition-colors mb-2">
                  {s.title}
                </h2>
                <p className="kv-card-body text-zinc-400 group-hover:text-zinc-200 transition-colors">
                  {s.desc}
                </p>
                <span className="mt-3 inline-block text-xs text-amber-300/70 group-hover:text-amber-300 transition-colors">
                  Ver servicio →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* POR QUÉ ELEGIRNOS */}
      <section className="border-t border-zinc-900 bg-zinc-950/80">
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-18">
          <h2 className="kv-section-title mb-8">Por qué contratar un servicio de dron profesional</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Piloto certificado con permisos AESA',
                desc: 'Operamos dentro del marco legal vigente en España. Gestionamos los permisos necesarios para cada vuelo y zona.',
              },
              {
                title: 'Equipo FPV y cinematográfico propio',
                desc: 'Desde Cinewhoops para interiores hasta drones FPV de alta velocidad y plataformas estables para tomas limpias.',
              },
              {
                title: 'Producción completa sin intermediarios',
                desc: 'Un solo equipo se encarga de planificación, vuelo, grabación y edición. Menos fricción, más coherencia visual.',
              },
            ].map((item, i) => (
              <article key={i} className="kv-glass-soft rounded-2xl p-5 border border-white/10">
                <h3 className="kv-card-title text-zinc-100 mb-2">{item.title}</h3>
                <p className="kv-card-body text-zinc-400">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ZONAS LOCALES */}
      <section className="border-t border-zinc-900">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="flex items-center gap-2 mb-6">
            <MapPin size={16} className="text-amber-300" />
            <h2 className="kv-section-title">Zonas donde operamos</h2>
          </div>
          <p className="kv-body-muted max-w-2xl mb-6">
            Base en Pontevedra (Galicia). Disponibles para proyectos en toda España con desplazamiento incluido en el presupuesto.
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            {localLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="kv-glass-soft rounded-xl p-4 border border-white/10 hover:border-amber-300/30 transition-colors group"
              >
                <span className="kv-card-title text-zinc-200 group-hover:text-amber-200 transition-colors block">
                  {link.label}
                </span>
                <p className="kv-card-body text-zinc-400 mt-1">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="border-t border-zinc-900 bg-zinc-950/60">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
          <h2 className="kv-section-title mb-8">Preguntas frecuentes sobre grabación con drones</h2>
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <details key={i} className="group kv-glass-soft rounded-2xl border border-white/10 p-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span className="kv-card-title text-zinc-100">{item.question}</span>
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/20 text-zinc-300 transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="kv-body-muted mt-3">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 py-14 md:py-20">
        <div className="kv-glass rounded-3xl px-6 py-10 md:px-10 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="kv-section-title mb-2">¿Tienes un proyecto con dron en mente?</h2>
            <p className="kv-lede max-w-md">
              Cuéntanos qué necesitas y te preparamos una propuesta ajustada sin compromiso.
            </p>
          </div>
          <Link to="/contacto/" className="kv-button-primary kv-button-accent shrink-0">
            Solicitar presupuesto
          </Link>
        </div>
      </section>
    </div>
  )
}
