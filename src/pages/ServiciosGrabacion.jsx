import { Link } from 'react-router-dom'
import { Plane, Film, Briefcase, Calendar, Building2, Key, MapPin, Camera, HardHat, CheckCircle2 } from 'lucide-react'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'
import { usePageSeo } from '../utils/seo.js'

const seo = {
  title: 'Grabación aérea con dron | Servicios de drones profesionales',
  description:
    'Grabación aérea con dron en España: vídeo FPV, fotografía aérea, eventos, empresas e inmobiliaria. Piloto certificada EASA con más de 5 años de experiencia.',
  pathname: '/servicios-grabacion-con-drones',
}

const datos = [
  { valor: '+5 años', texto: 'volando drones de forma profesional' },
  { valor: 'EASA A1/A3 y A2', texto: 'certificado de piloto en categoría abierta' },
  { valor: 'AESA + seguro', texto: 'operadora UAS registrada y con seguro de responsabilidad civil' },
  { valor: '3-5 días', texto: 'laborables para entregar el vídeo editado' },
]

const servicios = [
  {
    to: '/grabacion-con-drones-fpv/',
    icon: Plane,
    title: 'Vídeos con dron FPV',
    desc: 'Vuelos dinámicos e inmersivos para publicidad, eventos y contenido de marca. Planos continuos, persecuciones y recorridos que una cámara convencional no puede hacer.',
  },
  {
    to: '/dron-para-cine-y-publicidad/',
    icon: Film,
    title: 'Dron para cine y publicidad',
    desc: 'Planos aéreos para spots, videoclips y campañas, integrados en el rodaje y con la estética de la pieza.',
  },
  {
    to: '/video-corporativo-con-dron/',
    icon: Briefcase,
    title: 'Vídeo corporativo con dron',
    desc: 'Instalaciones, fábricas y sedes vistas desde el aire. Piezas B2B con narrativa clara para web, ferias y presentaciones.',
  },
  {
    to: '/dron-para-eventos/',
    icon: Calendar,
    title: 'Grabación con dron para eventos',
    desc: 'Festivales, conciertos, competiciones y activaciones de marca. Aftermovies y piezas para patrocinadores.',
  },
  {
    to: '/dron-para-inmobiliarias/',
    icon: Building2,
    title: 'Dron para inmobiliarias',
    desc: 'Vídeo y foto aérea de viviendas, pazos, parcelas y urbanizaciones para portales y redes.',
  },
  {
    to: '/fotografia-aerea-con-dron-galicia/',
    icon: Camera,
    title: 'Fotografía aérea',
    desc: 'Fotos aéreas en alta resolución de espacios, eventos, empresas y paisaje. Se puede contratar sola o junto al vídeo en la misma sesión de vuelo.',
  },
  {
    to: '/blog/seguimiento-de-obra-con-dron/',
    icon: HardHat,
    title: 'Seguimiento de obra con dron',
    desc: 'Vuelos periódicos desde los mismos puntos para documentar el avance de una construcción y comunicarlo a clientes e inversores.',
    cta: 'Cómo funciona →',
  },
  {
    to: '/alquiler-drones-con-piloto/',
    icon: Key,
    title: 'Alquiler de drones con piloto',
    desc: 'Dron y piloto certificada para tu producción, con permisos y seguro incluidos, integrada en tu equipo de rodaje.',
  },
]

const tiposDron = [
  {
    title: 'Dron FPV',
    equipo: 'GEPRC Mark 5',
    desc: 'Se pilota en manual con gafas de inmersión. Es el dron de grabación para planos rápidos y continuos: persecuciones, vuelos rasantes y transiciones sin cortes.',
    usos: ['Publicidad', 'Deporte', 'Eventos', 'Videoclips'],
  },
  {
    title: 'Cinewhoop de interiores',
    equipo: 'GEPRC Cinelog 30 V3',
    desc: 'Dron FPV pequeño con hélices protegidas, pensado para volar con seguridad dentro de edificios y cerca de personas.',
    usos: ['Hoteles', 'Bodegas', 'Naves', 'Locales'],
  },
  {
    title: 'Dron estabilizado',
    equipo: 'DJI Mini 4 Pro',
    desc: 'Vuelo con GPS y estabilización para tomas aéreas limpias, panorámicas y fotografía aérea. Ligero y discreto en entornos urbanos.',
    usos: ['Inmobiliaria', 'Paisaje', 'Obra', 'Fotografía aérea'],
  },
]

const proceso = [
  {
    title: 'Briefing y propuesta cerrada',
    desc: 'Me cuentas el objetivo, el lugar y dónde se va a publicar el vídeo. Te devuelvo una propuesta con el enfoque, el tipo de dron y un presupuesto cerrado.',
  },
  {
    title: 'Espacio aéreo y permisos',
    desc: 'Compruebo la zona de vuelo y gestiono las autorizaciones necesarias. En zonas sin restricciones bastan una o dos semanas de margen; si hace falta tramitar con AESA (ciudad, eventos con público, espacios controlados), conviene contar con tres o cuatro.',
  },
  {
    title: 'Rodaje',
    desc: 'Planifico la ruta, hago pasadas de prueba y repito cada toma hasta que el movimiento funciona. Si el proyecto lo pide, combino dron con cámara en tierra.',
  },
  {
    title: 'Edición',
    desc: 'Montaje, corrección de color y música con licencia. Puedes revisar la primera versión y pedir ajustes antes de la entrega final.',
  },
  {
    title: 'Entrega',
    desc: 'Vídeo editado en 3-5 días laborables, en horizontal, vertical o ambos. El material en bruto se puede entregar bajo petición.',
  },
]

const checklist = [
  'Número de operador UAS registrado en AESA y certificado de piloto.',
  'Póliza de responsabilidad civil vigente durante el vuelo.',
  'Quién revisa el espacio aéreo y tramita las autorizaciones, y con cuánto margen.',
  'Si la edición está incluida o solo se entregan brutos.',
  'Formatos de entrega: horizontal para web y YouTube, vertical para Reels y TikTok.',
  'Plazo de entrega y número de revisiones incluidas.',
  'Proyectos anteriores parecidos al tuyo, no solo un reel de presentación.',
]

const proyectosConDron = [
  'drone-tour-fpv-albergue-o-lagar-de-jesus',
  'cobertura-fpv-surfing-the-lerez-2026',
  'tour-fpv-nova-vila-enoturismo',
  'anuncio-documental-villa-boutique-1880',
]
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter(Boolean)

const localLinks = [
  {
    to: '/galicia/grabacion-con-drones/',
    label: 'Grabación con drones en Galicia',
    desc: 'Pontevedra, Vigo, A Coruña, Santiago, Lugo, Ourense y cualquier comarca.',
  },
  {
    to: '/pontevedra/grabacion-con-drones/',
    label: 'Grabación con drones en Pontevedra',
    desc: 'Mi base. Respuesta rápida y conocimiento del terreno y del espacio aéreo local.',
  },
  {
    to: '/piloto-de-drones-galicia/',
    label: 'Piloto de drones en Galicia',
    desc: 'Certificaciones, equipo y forma de trabajo como operadora de drones.',
  },
]

const faqs = [
  {
    question: '¿Qué es un servicio de grabación aérea con dron?',
    answer:
      'Es la grabación de vídeo o fotografía desde el aire con un dron pilotado por una persona certificada. Un servicio profesional incluye la planificación del vuelo, la comprobación del espacio aéreo y los permisos, el seguro, el rodaje y, normalmente, la edición del material para entregarlo listo para publicar.',
  },
  {
    question: '¿Qué diferencia hay entre un dron FPV y un dron convencional?',
    answer:
      'El dron convencional vuela con GPS y estabilización, ideal para planos suaves y panorámicos. El FPV se pilota en manual con gafas y permite planos rápidos, rasantes y por interiores. En muchos proyectos se combinan los dos.',
  },
  {
    question: '¿Haces fotografía aérea además de vídeo?',
    answer:
      'Sí. Puedo hacer solo fotografía aérea o combinarla con el vídeo en la misma sesión de vuelo, algo habitual en inmobiliaria, empresas y seguimiento de obra.',
  },
  {
    question: '¿Tienes los permisos necesarios para volar?',
    answer:
      'Sí. Soy piloto certificada EASA (A1/A3 y A2), operadora UAS registrada en AESA y vuelo con seguro de responsabilidad civil. Antes de cada vuelo reviso el espacio aéreo y, si la zona lo exige, tramito la autorización correspondiente.',
  },
  {
    question: '¿Cuánto tardas en entregar el vídeo?',
    answer:
      'El vídeo editado se entrega en 3-5 días laborables desde el rodaje. Proyectos con varias piezas o versiones pueden necesitar algo más; el plazo queda fijado en la propuesta.',
  },
  {
    question: '¿Entregas el material en bruto?',
    answer:
      'Bajo petición. Por defecto entrego la pieza editada, pero si necesitas las tomas originales para tu equipo o agencia, se acuerda en el presupuesto.',
  },
  {
    question: '¿Cuánto cuesta una grabación con dron?',
    answer:
      'Depende del tipo de dron, las horas de vuelo, la localización, los permisos y la edición. Preparo un presupuesto cerrado tras una breve conversación. Si quieres una referencia de mercado, en el blog explico los rangos de precio habituales en España.',
  },
  {
    question: '¿Trabajas solo en Galicia?',
    answer:
      'Mi base está en Pontevedra y cubro toda Galicia, pero también me desplazo al resto de España: he rodado, por ejemplo, en Madrid. El desplazamiento se incluye en el presupuesto cerrado.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Servicios de grabación aérea con drones',
      serviceType: 'Grabación aérea con dron',
      description:
        'Grabación aérea y fotografía con drones FPV, cinewhoop y estabilizados para publicidad, empresas, eventos, inmobiliaria y seguimiento de obra. Piloto certificada EASA y operadora UAS registrada en AESA.',
      url: 'https://kulmenvisuals.com/servicios-grabacion-con-drones/',
      provider: {
        '@type': 'Organization',
        name: 'Kulmen Visuals',
        url: 'https://kulmenvisuals.com',
        founder: { '@type': 'Person', name: 'io Rodríguez' },
      },
      areaServed: { '@type': 'Country', name: 'España' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios con drones',
        itemListElement: servicios.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s.title },
        })),
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
  ],
}

function ServicioCard({ servicio }) {
  const Icon = servicio.icon
  const content = (
    <div className="relative">
      <div className="h-9 w-9 rounded-full border border-amber-300/30 bg-amber-300/10 flex items-center justify-center text-amber-200 mb-3">
        <Icon size={16} />
      </div>
      <h3 className="kv-card-title text-zinc-100 group-hover:text-amber-100 transition-colors mb-2">
        {servicio.title}
      </h3>
      <p className="kv-card-body text-zinc-400 group-hover:text-zinc-200 transition-colors">
        {servicio.desc}
      </p>
      {servicio.to && (
        <span className="mt-3 inline-block text-xs text-amber-300/70 group-hover:text-amber-300 transition-colors">
          {servicio.cta || 'Ver servicio →'}
        </span>
      )}
    </div>
  )

  if (!servicio.to) {
    return <article className="kv-glass-soft rounded-2xl p-5 border border-white/10">{content}</article>
  }

  return (
    <Link
      to={servicio.to}
      className="group relative overflow-hidden kv-glass-soft rounded-2xl p-5 border border-white/10 transition duration-300 ease-out hover:-translate-y-1 hover:border-amber-300/40 hover:shadow-[0_20px_40px_-24px_rgba(251,191,36,0.55)]"
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-amber-300/10 blur-2xl" />
      </div>
      {content}
    </Link>
  )
}

export default function ServiciosGrabacion() {
  usePageSeo(seo)

  return (
    <div className="bg-zinc-950 text-zinc-50">
      {/* Schema inline: presente en el HTML prerenderizado para crawlers sin JS */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* HERO */}
      <section className="relative border-b border-zinc-800/60">
        <div className="max-w-4xl mx-auto px-4 py-14 md:py-20">
          <p className="kv-eyebrow text-amber-300/80 mb-3">Servicio de dron profesional</p>
          <h1 className="kv-page-title mb-5">Servicios de grabación aérea con drones</h1>
          <p className="kv-lede max-w-2xl text-zinc-300">
            Soy io Rodríguez, piloto de drones certificada y realizadora audiovisual. Hago vídeos
            aéreos profesionales y fotografía aérea con drones FPV, cinewhoop y estabilizados para
            marcas, agencias, eventos e inmobiliarias. Me encargo de todo: permisos, vuelo,
            grabación y edición.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contacto/" className="kv-button-primary kv-button-accent">
              Pedir presupuesto
            </Link>
            <Link to="/proyectos/" className="kv-button-secondary">
              Ver proyectos
            </Link>
          </div>
        </div>
      </section>

      {/* DATOS CLAVE */}
      <section className="border-b border-zinc-900">
        <dl className="max-w-6xl mx-auto px-4 py-8 grid gap-6 grid-cols-2 lg:grid-cols-4">
          {datos.map((dato) => (
            <div key={dato.valor}>
              <dt className="kv-card-title text-amber-200">{dato.valor}</dt>
              <dd className="kv-card-body text-zinc-400 mt-1">{dato.texto}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* QUÉ ES */}
      <section className="max-w-4xl mx-auto px-4 py-14 md:py-16 space-y-4">
        <h2 className="kv-section-title">Qué aporta la grabación aérea a tu vídeo</h2>
        <p className="kv-body-muted">
          Un plano aéreo sitúa al espectador en segundos: muestra la escala de un edificio, el
          entorno de una finca o la energía de un evento con miles de personas. Bien usado, no es
          un adorno sino el plano que explica el lugar y hace que el resto del vídeo se entienda.
        </p>
        <p className="kv-body-muted">
          La diferencia entre unas grabaciones aéreas cualquiera y un vídeo profesional está en la
          planificación: elegir el dron adecuado para cada plano, volar dentro de la ley y montar
          el material con una intención clara. Por eso trabajo el proyecto completo, desde el
          primer vuelo de prueba hasta la versión vertical para redes.
        </p>
      </section>

      {/* GRID DE SERVICIOS */}
      <section className="border-t border-zinc-900">
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-20">
          <div className="mb-10">
            <h2 className="kv-section-title mb-3">¿Qué servicio de dron necesitas?</h2>
            <p className="kv-body-muted max-w-2xl">
              Estos son los servicios con drones que ofrezco. Si tu proyecto mezcla varios, se
              resuelven en la misma jornada de vuelo.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {servicios.map((s) => (
              <ServicioCard key={s.title} servicio={s} />
            ))}
          </div>
        </div>
      </section>

      {/* TIPOS DE DRON */}
      <section className="border-t border-zinc-900 bg-zinc-950/80">
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-18">
          <h2 className="kv-section-title mb-3">Qué dron de grabación uso para cada plano</h2>
          <p className="kv-body-muted max-w-2xl mb-8">
            Trabajo con flota propia. El equipo se elige según el plano que necesita el proyecto,
            no al revés.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {tiposDron.map((tipo) => (
              <article key={tipo.title} className="kv-glass-soft rounded-2xl p-5 border border-white/10">
                <h3 className="kv-card-title text-zinc-100">{tipo.title}</h3>
                <p className="kv-caption text-amber-300/80 mb-3">{tipo.equipo}</p>
                <p className="kv-card-body text-zinc-400 mb-3">{tipo.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {tipo.usos.map((uso) => (
                    <span key={uso} className="text-[11px] rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-amber-200">
                      {uso}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <p className="kv-body-muted mt-6">
            ¿Dudas entre uno y otro? Lo explico con ejemplos en{' '}
            <Link to="/blog/fpv-vs-dron-convencional/" className="text-amber-300 hover:text-amber-200 underline decoration-amber-300/30 underline-offset-4">
              FPV vs dron convencional
            </Link>
            .
          </p>
        </div>
      </section>

      {/* PROCESO */}
      <section className="border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-4 py-14 md:py-16">
          <h2 className="kv-section-title mb-8">Cómo trabajo una grabación con dron</h2>
          <ol className="space-y-6">
            {proceso.map((paso, i) => (
              <li key={paso.title} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-amber-300/40 text-sm font-semibold text-amber-200">
                  {i + 1}
                </span>
                <div>
                  <h3 className="kv-card-title text-zinc-100 mb-1">{paso.title}</h3>
                  <p className="kv-body-muted">{paso.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PROYECTOS */}
      {proyectosConDron.length > 0 && (
        <section className="border-t border-zinc-900 bg-zinc-950/80">
          <div className="max-w-6xl mx-auto px-4 py-14 md:py-18">
            <div className="flex flex-wrap items-baseline justify-between gap-4 mb-8">
              <h2 className="kv-section-title">Proyectos recientes con dron</h2>
              <Link to="/proyectos/" className="kv-caption text-zinc-400 hover:text-amber-300">
                Ver todos los proyectos
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {proyectosConDron.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CÓMO ELEGIR */}
      <section className="border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-4 py-14 md:py-16">
          <h2 className="kv-section-title mb-3">Cómo elegir un servicio de dron profesional</h2>
          <p className="kv-body-muted mb-6">
            Contrates conmigo o con otra persona, pide esto antes de cerrar un presupuesto:
          </p>
          <ul className="grid gap-3 md:grid-cols-2">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-3 text-zinc-300">
                <CheckCircle2 size={18} className="text-amber-300 mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="kv-body-muted mt-6">
            Más detalle en{' '}
            <Link to="/blog/requisitos-grabar-dron-galicia/" className="text-amber-300 hover:text-amber-200 underline decoration-amber-300/30 underline-offset-4">
              requisitos para grabar con dron
            </Link>{' '}
            y{' '}
            <Link to="/blog/cuanto-cuesta-grabar-con-dron/" className="text-amber-300 hover:text-amber-200 underline decoration-amber-300/30 underline-offset-4">
              cuánto cuesta grabar con dron
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ZONAS LOCALES */}
      <section className="border-t border-zinc-900 bg-zinc-950/60">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="flex items-center gap-2 mb-6">
            <MapPin size={16} className="text-amber-300" />
            <h2 className="kv-section-title">Dónde trabajo</h2>
          </div>
          <p className="kv-body-muted max-w-2xl mb-6">
            Base en Pontevedra, cobertura en toda Galicia y desplazamientos al resto de España con
            el viaje incluido en el presupuesto.
          </p>
          <div className="grid gap-3 md:grid-cols-3">
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
      <section className="border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
          <h2 className="kv-section-title mb-8">Preguntas frecuentes sobre grabación con dron</h2>
          <div className="space-y-3">
            {faqs.map((item) => (
              <details key={item.question} className="group kv-glass-soft rounded-2xl border border-white/10 p-5">
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
              Cuéntame qué necesitas y te preparo una propuesta cerrada sin compromiso.
            </p>
          </div>
          <Link to="/contacto/" className="kv-button-primary kv-button-accent shrink-0">
            Pedir presupuesto
          </Link>
        </div>
      </section>
    </div>
  )
}
