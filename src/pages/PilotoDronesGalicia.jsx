// src/pages/PilotoDronesGalicia.jsx
// Landing hub del cluster "piloto / operador / servicios de drones en Galicia".
// Optimizada para búsqueda clásica y para motores de IA: respuestas directas,
// datos concretos y schema completo (Service + Person + FAQPage + Breadcrumb).
import { Link } from 'react-router-dom'
import { MapPin, Shield, CheckCircle2 } from 'lucide-react'
import { usePageSeo } from '../utils/seo.js'

const faqs = [
  {
    question: '¿Qué hace un piloto de drones profesional?',
    answer:
      'Un piloto de drones profesional planifica y ejecuta vuelos con fines comerciales: grabación aérea para cine y publicidad, cobertura de eventos, vídeo inmobiliario, seguimiento de obra o recorridos FPV. Además del vuelo, se encarga de la parte legal: verificar el espacio aéreo, gestionar permisos con AESA cuando hacen falta y operar con seguro de responsabilidad civil.',
  },
  {
    question: '¿Qué diferencia hay entre un piloto de dron estabilizado y un piloto FPV?',
    answer:
      'El piloto de dron estabilizado opera equipos con GPS y sensores (tipo DJI) que producen planos suaves y panorámicos: es la opción para tomas aéreas limpias, inmobiliaria y paisaje. El piloto FPV vuela en manual puro con gafas de inmersión, sin asistencias: eso permite planos dinámicos, persecuciones, vuelos por interiores y transiciones imposibles para un dron convencional. Son especialidades distintas; en Kulmen Visuals cubro ambas y las combino según lo que pida cada proyecto.',
  },
  {
    question: '¿Qué necesita un piloto de drones para trabajar legalmente en España?',
    answer:
      'Tres cosas: certificado de piloto expedido tras los exámenes oficiales (niveles A1/A3 y A2 en categoría abierta), registro como operador UAS en AESA con su número identificativo, y seguro de responsabilidad civil activo. Para vuelos en zonas controladas (cerca de aeropuertos, en ciudad o sobre eventos) se añaden coordinaciones y autorizaciones específicas. Antes de contratar, pide siempre el número de operador y la póliza.',
  },
  {
    question: '¿Cuánto cuesta contratar un piloto de drones en Galicia?',
    answer:
      'Una media jornada de vuelo con dron estabilizado y entrega de vídeo editado suele costar entre 400€ y 600€. La jornada completa, entre 600€ y 900€. Los rodajes FPV parten de 500€ a 700€ porque exigen más preparación y ensayos. El precio final depende de la localización, el espacio aéreo, la edición incluida y las versiones de entrega. Siempre trabajo con presupuesto cerrado por escrito.',
  },
  {
    question: '¿Trabajas en toda Galicia?',
    answer:
      'Sí. Tengo base en Pontevedra y cubro las cuatro provincias: Pontevedra, A Coruña, Lugo y Ourense, incluyendo Vigo, Santiago de Compostela, Ferrol y cualquier comarca. La mayor parte de Galicia está a menos de dos horas de mi base. Para proyectos en el resto de España preparo presupuesto cerrado con desplazamiento incluido.',
  },
  {
    question: '¿Puedes volar drones en interiores?',
    answer:
      'Sí. Para interiores utilizo un dron FPV tipo cinewhoop, pequeño y con hélices protegidas, diseñado para volar con seguridad en espacios cerrados incluso con personas presentes. Es el equipo con el que se hacen los recorridos inmersivos por hoteles, bodegas, gimnasios, naves industriales o locales comerciales.',
  },
  {
    question: '¿Gestionas los permisos de vuelo con AESA?',
    answer:
      'Sí, la gestión de permisos está incluida en el servicio. Verifico el espacio aéreo de cada localización con las herramientas oficiales (Enaire Drones), tramito las coordinaciones necesarias en zonas controladas y me encargo de las autorizaciones para vuelos urbanos o sobre eventos. Si un vuelo no es viable legalmente, lo digo desde el principio y propongo alternativas.',
  },
  {
    question: '¿Solo grabas, o también editas el material?',
    answer:
      'Cubro el proceso completo. Además de piloto de drones soy realizadora audiovisual: grabo también con cámara en tierra, edito, hago la corrección de color y entrego piezas terminadas en los formatos que necesites (horizontal para web y vertical para redes). No necesitas contratar a un editor aparte.',
  },
  {
    question: '¿Qué equipos utilizas?',
    answer:
      'Drones FPV para planos dinámicos y persecuciones, cinewhoop para interiores, dron estabilizado DJI para tomas aéreas limpias, y cámara de cine Blackmagic y Lumix full frame para el material en tierra. El equipo se elige en función del proyecto, no al revés.',
  },
  {
    question: '¿Con cuánta antelación hay que reservar?',
    answer:
      'Para vuelos en zonas sin restricciones, una o dos semanas suelen bastar. Si el proyecto requiere autorizaciones de AESA (zonas urbanas, eventos con público, espacios controlados), conviene contactar con tres o cuatro semanas de margen para que la tramitación llegue a tiempo.',
  },
]

const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://kulmenvisuals.com/piloto-de-drones-galicia/#service',
      name: 'Piloto de drones en Galicia',
      serviceType: 'Piloto y operadora de drones profesional (FPV y estabilizado)',
      description:
        'Servicio profesional de piloto de drones en Galicia: grabación aérea FPV y estabilizada, interiores con cinewhoop, eventos, inmobiliaria, obra y publicidad. Piloto certificada EASA y operadora UAS registrada en AESA, con seguro de responsabilidad civil y gestión de permisos incluida.',
      provider: { '@id': 'https://kulmenvisuals.com/#localbusiness' },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Galicia' },
        { '@type': 'City', name: 'Pontevedra' },
        { '@type': 'City', name: 'Vigo' },
        { '@type': 'City', name: 'Santiago de Compostela' },
        { '@type': 'City', name: 'A Coruña' },
        { '@type': 'City', name: 'Lugo' },
        { '@type': 'City', name: 'Ourense' },
      ],
      url: 'https://kulmenvisuals.com/piloto-de-drones-galicia/',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios de drones en Galicia',
        itemListElement: [
          { '@type': 'Offer', name: 'Grabación con dron FPV' },
          { '@type': 'Offer', name: 'Grabación con dron estabilizado' },
          { '@type': 'Offer', name: 'Vuelos FPV en interiores (cinewhoop)' },
          { '@type': 'Offer', name: 'Dron para eventos y deporte' },
          { '@type': 'Offer', name: 'Vídeo aéreo inmobiliario' },
          { '@type': 'Offer', name: 'Seguimiento de obra con dron' },
          { '@type': 'Offer', name: 'Dron para cine y publicidad' },
        ],
      },
    },
    {
      '@type': 'Person',
      '@id': 'https://kulmenvisuals.com/piloto-de-drones-galicia/#pilot',
      name: 'io Rodríguez',
      jobTitle: 'Piloto de drones FPV y realizadora audiovisual',
      description:
        'Piloto de drones certificada por EASA y operadora UAS registrada en AESA, con base en Pontevedra, Galicia. Especializada en vuelo FPV cinematográfico, interiores con cinewhoop y grabación aérea estabilizada.',
      url: 'https://kulmenvisuals.com/sobre-mi/',
      image: 'https://kulmenvisuals.com/images/io-portrait.jpg',
      worksFor: { '@id': 'https://kulmenvisuals.com/#localbusiness' },
      knowsAbout: [
        'Vuelo FPV cinematográfico',
        'Drones estabilizados',
        'Normativa UAS EASA/AESA',
        'Producción audiovisual',
        'Edición y postproducción de vídeo',
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Pontevedra',
        addressRegion: 'Galicia',
        addressCountry: 'ES',
      },
      sameAs: ['https://www.instagram.com/kulmenvisuals/'],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://kulmenvisuals.com/piloto-de-drones-galicia/#faq',
      mainEntity: faqs.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Inicio',
          item: 'https://kulmenvisuals.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Piloto de drones en Galicia',
          item: 'https://kulmenvisuals.com/piloto-de-drones-galicia/',
        },
      ],
    },
  ],
}

const pageSeo = {
  title: 'Piloto de drones en Galicia | Operadora FPV y estabilizado certificada',
  description:
    'Piloto de drones profesional en Galicia: FPV, estabilizado e interiores. Operadora UAS registrada en AESA, certificada EASA, con seguro y gestión de permisos. Base en Pontevedra, cobertura en toda Galicia.',
  pathname: '/piloto-de-drones-galicia',
}

const servicios = [
  {
    title: 'Grabación con dron FPV',
    desc: 'Planos dinámicos en manual puro: persecuciones, recorridos continuos y transiciones imposibles para un dron convencional.',
    to: '/grabacion-con-drones-fpv/',
  },
  {
    title: 'Dron estabilizado',
    desc: 'Tomas aéreas limpias y panorámicas con GPS: paisaje, arquitectura, parcelas y establecimiento de localización.',
    to: '/servicios-grabacion-con-drones/',
  },
  {
    title: 'Vuelos FPV en interiores',
    desc: 'Recorridos inmersivos por hoteles, bodegas, gimnasios y naves con cinewhoop de hélices protegidas.',
    to: '/grabacion-con-drones-fpv/',
  },
  {
    title: 'Eventos y deporte',
    desc: 'Cobertura aérea de festivales, carreras y competiciones: la acción seguida desde donde ninguna cámara llega.',
    to: '/dron-para-eventos/',
  },
  {
    title: 'Inmobiliaria y espacios',
    desc: 'Vídeo y foto aérea de propiedades, parcelas y promociones que aceleran la venta.',
    to: '/dron-para-inmobiliarias/',
  },
  {
    title: 'Cine y publicidad',
    desc: 'Planos aéreos cinematográficos para spots, campañas y rodajes, integrados con el equipo de tierra.',
    to: '/dron-para-cine-y-publicidad/',
  },
  {
    title: 'Vídeo corporativo e industria',
    desc: 'Instalaciones, procesos y seguimiento de obra desde el aire para empresas y promotoras.',
    to: '/video-corporativo-con-dron/',
  },
  {
    title: 'Alquiler de dron con piloto',
    desc: 'Dron y piloto certificada para tu producción, con permisos y seguro incluidos.',
    to: '/alquiler-drones-con-piloto/',
  },
]

const credenciales = [
  'Certificado de piloto EASA (categoría abierta, niveles A1/A3 y A2)',
  'Operadora UAS registrada en AESA con número identificativo',
  'Seguro de responsabilidad civil activo en todas las operaciones',
  'Verificación de espacio aéreo y gestión de permisos incluidas',
  'Flota propia: FPV, cinewhoop de interiores y dron estabilizado DJI',
  'Realizadora audiovisual: grabación, edición y color en el mismo servicio',
]

const comparativa = [
  {
    aspecto: 'Tipo de plano',
    fpv: 'Dinámico, inmersivo, en movimiento continuo',
    estabilizado: 'Suave, panorámico, contemplativo',
  },
  {
    aspecto: 'Dónde brilla',
    fpv: 'Deporte, eventos, recorridos por interiores, spots con energía',
    estabilizado: 'Paisaje, inmobiliaria, arquitectura, tomas de contexto',
  },
  {
    aspecto: 'Espacios interiores',
    fpv: 'Sí, con cinewhoop de hélices protegidas',
    estabilizado: 'Limitado, necesita amplitud y no vuela cerca de personas',
  },
  {
    aspecto: 'Sensación en el espectador',
    fpv: 'Estar dentro de la escena',
    estabilizado: 'Ver la escena desde arriba',
  },
]

export default function PilotoDronesGalicia() {
  usePageSeo(pageSeo)

  return (
    <div className="bg-zinc-950 text-zinc-50">
      {/* Schema inline para que quede en el HTML prerenderizado (crawlers sin JS) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      {/* HERO con respuesta directa (extraíble por motores de IA) */}
      <section className="relative border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={14} className="text-amber-300" aria-hidden="true" />
            <p className="kv-eyebrow text-amber-300/80">Galicia · Base en Pontevedra</p>
          </div>
          <h1 className="kv-page-title mb-6">
            Piloto de drones en Galicia: FPV y estabilizado
          </h1>
          <p className="kv-lede max-w-2xl mb-4">
            Soy io Rodríguez, piloto de drones certificada por EASA y operadora
            UAS registrada en AESA. Ofrezco servicios de drones en toda Galicia:
            grabación aérea FPV y estabilizada, vuelos en interiores, eventos,
            inmobiliaria, obra y publicidad. Con seguro de responsabilidad civil
            y gestión de permisos incluida en cada vuelo.
          </p>
          <p className="kv-body-muted max-w-2xl mb-8">
            A diferencia de un operador que solo vuela, cubro el proceso
            completo: planifico el vuelo, grabo también con cámara en tierra,
            edito y entrego piezas terminadas listas para publicar.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/contacto/" className="kv-button-primary kv-button-accent">
              Pedir presupuesto
            </Link>
            <Link to="/proyectos/" className="kv-button-secondary">
              Ver proyectos
            </Link>
          </div>
        </div>
      </section>

      {/* CREDENCIALES: el bloque E-E-A-T */}
      <section className="max-w-4xl mx-auto px-4 py-14 md:py-20">
        <div className="flex items-center gap-3 mb-6">
          <Shield size={20} className="text-amber-300 shrink-0" aria-hidden="true" />
          <h2 className="kv-section-title">Una operadora de drones legal y asegurada</h2>
        </div>
        <p className="kv-body-muted max-w-2xl mb-6">
          Contratar un piloto de drones sin registro ni seguro expone a
          sanciones también a quien contrata. Esto es lo que aporto en cada
          operación, verificable antes de empezar:
        </p>
        <ul className="grid gap-3 md:grid-cols-2">
          {credenciales.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm md:text-base text-zinc-300">
              <CheckCircle2 size={16} className="text-amber-300 mt-1 shrink-0" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* SERVICIOS DE DRONES: hub de enlaces internos */}
      <section className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-20">
          <h2 className="kv-section-title mb-3">Servicios de drones en Galicia</h2>
          <p className="kv-body-muted max-w-2xl mb-10">
            Todos los servicios incluyen planificación de vuelo, verificación
            del espacio aéreo y entrega en los formatos que necesites.
          </p>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {servicios.map((servicio) => (
              <Link
                key={servicio.title}
                to={servicio.to}
                className="group rounded-2xl border border-white/10 p-5 transition-colors hover:border-amber-300/40"
              >
                <h3 className="kv-card-title text-zinc-100 group-hover:text-amber-200 transition-colors mb-2">
                  {servicio.title}
                </h3>
                <p className="text-sm text-zinc-400">{servicio.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FPV VS ESTABILIZADO: comparativa estructurada */}
      <section className="border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 py-14 md:py-20">
          <h2 className="kv-section-title mb-3">
            ¿Dron FPV o dron estabilizado?
          </h2>
          <p className="kv-body-muted max-w-2xl mb-8">
            Son herramientas distintas para trabajos distintos, y la mayoría de
            proyectos rinden más combinándolas. Esta es la diferencia práctica:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm md:text-base border-collapse">
              <thead>
                <tr className="text-left border-b border-white/15">
                  <th scope="col" className="py-3 pr-4" />
                  <th scope="col" className="py-3 pr-4 font-semibold text-amber-300">Dron FPV</th>
                  <th scope="col" className="py-3 font-semibold text-zinc-100">Dron estabilizado</th>
                </tr>
              </thead>
              <tbody>
                {comparativa.map((fila) => (
                  <tr key={fila.aspecto} className="border-b border-white/5 align-top">
                    <th scope="row" className="py-4 pr-4 font-medium text-zinc-500 text-left">
                      {fila.aspecto}
                    </th>
                    <td className="py-4 pr-4 text-zinc-200">{fila.fpv}</td>
                    <td className="py-4 text-zinc-300">{fila.estabilizado}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* COBERTURA */}
      <section className="border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 py-14 md:py-20">
          <h2 className="kv-section-title mb-4">Cobertura en toda Galicia</h2>
          <p className="kv-body-muted max-w-2xl mb-6">
            Con base en Pontevedra, opero en las cuatro provincias gallegas.
            La mayor parte del territorio está a menos de dos horas: en muchos
            proyectos el desplazamiento no supone coste adicional. También me
            desplazo al resto de España con presupuesto cerrado.
          </p>
          <ul className="flex flex-wrap gap-2">
            {[
              'Pontevedra',
              'Vigo',
              'Santiago de Compostela',
              'A Coruña',
              'Ferrol',
              'Lugo',
              'Ourense',
              'Rías Baixas',
              'Costa da Morte',
              'Ribeira Sacra',
            ].map((zona) => (
              <li key={zona} className="kv-chip text-[12px]">
                {zona}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PRECIOS ORIENTATIVOS: datos concretos que los motores de IA citan */}
      <section className="border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 py-14 md:py-20">
          <h2 className="kv-section-title mb-3">
            Cuánto cuesta contratar un piloto de drones en Galicia
          </h2>
          <p className="kv-body-muted max-w-2xl mb-8">
            Cada proyecto se presupuesta cerrado y por escrito. Estos rangos
            orientativos te sirven para situarte antes de pedir presupuesto:
          </p>
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {[
              ['Media jornada de dron estabilizado con vídeo editado', '400€ - 600€'],
              ['Jornada completa de vuelo con edición', '600€ - 900€'],
              ['Rodaje FPV (exterior o interior) con edición', '500€ - 700€'],
              ['Vídeo inmobiliario con dron', '400€ - 900€'],
              ['Cobertura aérea de evento con aftermovie', '800€ - 2.500€'],
            ].map(([concepto, precio]) => (
              <li key={concepto} className="flex items-baseline justify-between gap-6 py-4">
                <span className="text-sm md:text-base text-zinc-300">{concepto}</span>
                <span className="font-semibold text-amber-300 whitespace-nowrap">{precio}</span>
              </li>
            ))}
          </ul>
          <p className="kv-caption text-zinc-500 mt-4">
            Rangos orientativos según localización, espacio aéreo y entregas.
            El presupuesto final siempre se cierra antes de empezar.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 py-14 md:py-20">
          <h2 className="kv-section-title mb-8">
            Preguntas frecuentes sobre pilotos de drones
          </h2>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {faqs.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span className="text-base font-semibold text-zinc-100">
                    {item.question}
                  </span>
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/15 text-zinc-400 transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="kv-body-muted mt-3 pr-10">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 py-20 md:py-28 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.02em] mb-5 [text-wrap:balance]">
            ¿Necesitas un piloto de drones en Galicia?
          </h2>
          <p className="kv-lede max-w-lg mx-auto mb-9">
            Cuéntame qué quieres grabar y dónde, y te digo qué es viable, qué
            permisos hacen falta y qué costaría. Sin compromiso.
          </p>
          <Link to="/contacto/" className="kv-button-primary kv-button-accent text-base px-8 py-3.5">
            Pedir presupuesto
          </Link>
        </div>
      </section>
    </div>
  )
}
