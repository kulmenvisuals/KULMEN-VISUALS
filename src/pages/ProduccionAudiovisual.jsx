// src/pages/ProduccionAudiovisual.jsx
import ServiceLanding from '../components/ServiceLanding.jsx'

const faqs = [
  {
    question: '¿Qué incluye un servicio de producción audiovisual completo?',
    answer:
      'Las tres fases del proyecto: preproducción (definición de objetivo, guion, localización y planificación), rodaje (cámara de cine, dron FPV y estabilizado, y sonido) y postproducción (montaje, corrección de color, música con licencia y entrega en los formatos pactados). Trabajas con una sola interlocutora durante todo el proceso.',
  },
  {
    question: '¿Cuánto cuesta una producción audiovisual en Galicia?',
    answer:
      'Depende del alcance del proyecto: duración, número de localizaciones, si hay dron o cámara (o ambos) y la complejidad de la edición. No hay una tarifa fija porque cada pieza tiene necesidades distintas. Preparo siempre un presupuesto cerrado y desglosado antes de empezar, tras una breve llamada o correo para entender qué necesitas.',
  },
  {
    question: '¿Qué diferencia hay entre una productora grande y una creadora independiente?',
    answer:
      'Una productora grande aporta estructura para proyectos con muchos frentes simultáneos: varios sets, actores, arte. Una creadora independiente que cubre todo el proceso aporta agilidad, menos coste de estructura y una comunicación directa: la persona con la que hablas es la que graba y edita tu pieza. Para pymes, eventos y contenido recurrente, esa cercanía suele dar mejor resultado por euro invertido.',
  },
  {
    question: '¿Trabajas solo en Galicia?',
    answer:
      'Mi base está en Pontevedra y la mayoría de proyectos son en Galicia (Vigo, Santiago, A Coruña, Lugo, Ourense y sus comarcas). Para el resto de España preparo un presupuesto cerrado que incluye desplazamiento, dietas y alojamiento, de forma que conoces el coste total desde el principio.',
  },
  {
    question: '¿Qué equipo utilizas en los rodajes?',
    answer:
      'Cámara de cine Blackmagic 4K y Lumix S5II full frame para el material en tierra, dron FPV para planos dinámicos, cinewhoop para interiores y dron estabilizado DJI para tomas aéreas limpias. El equipo se elige según lo que pida cada proyecto.',
  },
  {
    question: '¿En cuánto tiempo se entrega un vídeo?',
    answer:
      'Eventos y piezas sencillas, entre 3 y 10 días laborables. Spots, vídeos de marca y proyectos con más postproducción, entre 2 y 4 semanas. Si hay una fecha límite, se planifica desde el inicio y se cumple.',
  },
  {
    question: '¿El vídeo sirve también para redes sociales?',
    answer:
      'Sí, y conviene plantearlo desde el guion. De un mismo rodaje salen la pieza principal horizontal y versiones verticales de 15 a 60 segundos para Reels, TikTok y Shorts. Es la forma más eficiente de producir: un rodaje, un mes de contenido.',
  },
]

const data = {
  seo: {
    title: 'Producción audiovisual en Galicia | Vídeo para marcas, empresas y eventos',
    description:
      'Servicio de producción audiovisual en Galicia: spots, vídeo corporativo, eventos y videoclips. Preproducción, rodaje con cámara de cine y dron FPV, y edición. Presupuesto cerrado sin compromiso.',
    pathname: '/produccion-audiovisual-galicia',
  },

  schema: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://kulmenvisuals.com/produccion-audiovisual-galicia/#service',
        name: 'Producción audiovisual en Galicia',
        serviceType: 'Producción audiovisual',
        description:
          'Producción audiovisual completa en Galicia: preproducción, rodaje con cámara de cine y drones FPV, y postproducción. Vídeo para marcas, empresas, eventos y videoclips.',
        provider: { '@id': 'https://kulmenvisuals.com/#localbusiness' },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Galicia' },
          { '@type': 'Country', name: 'España' },
        ],
        url: 'https://kulmenvisuals.com/produccion-audiovisual-galicia/',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Producción audiovisual',
          itemListElement: [
            { '@type': 'Offer', name: 'Vídeo de marca y spots publicitarios' },
            { '@type': 'Offer', name: 'Vídeo corporativo y de empresa' },
            { '@type': 'Offer', name: 'Cobertura audiovisual de eventos' },
            { '@type': 'Offer', name: 'Videoclips musicales' },
            { '@type': 'Offer', name: 'Vídeo para turismo y territorio' },
          ],
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://kulmenvisuals.com/produccion-audiovisual-galicia/#faq',
        mainEntity: faqs.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://kulmenvisuals.com/' },
          { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://kulmenvisuals.com/servicios/' },
          { '@type': 'ListItem', position: 3, name: 'Producción audiovisual en Galicia', item: 'https://kulmenvisuals.com/produccion-audiovisual-galicia/' },
        ],
      },
    ],
  },

  eyebrow: 'Servicio · Galicia y España',
  h1: 'Producción audiovisual en Galicia',
  intro:
    'Soy io Rodríguez, creadora audiovisual con base en Pontevedra. Produzco vídeo profesional para marcas, empresas y eventos en toda Galicia: spots, vídeo corporativo, aftermovies y videoclips, cubriendo el proceso completo desde la idea hasta la pieza final lista para publicar.',
  intro2:
    'Trabajo con cámara de cine, dron FPV y dron estabilizado, y edito todo el material yo misma. Un solo interlocutor, presupuesto cerrado y piezas pensadas para cumplir un objetivo: vender, llenar un evento o posicionar una marca.',

  incluye: {
    title: 'Qué incluye la producción completa',
    text: 'Cada proyecto cubre las tres fases, sin subcontratas ni intermediarios:',
    items: [
      'Preproducción: objetivo, guion, localización y planificación de rodaje',
      'Rodaje con cámara de cine (Blackmagic 4K, Lumix S5II) y sonido',
      'Dron FPV y dron estabilizado cuando aportan al proyecto',
      'Montaje, ritmo y narrativa adaptados al canal de destino',
      'Corrección de color y música con licencia comercial',
      'Entrega en horizontal y vertical, lista para web, campañas y redes',
    ],
  },

  tipos: {
    title: 'Tipos de proyecto que produzco',
    text: 'Del spot de campaña al aftermovie: el enfoque cambia, el estándar de acabado no.',
    items: [
      {
        title: 'Vídeo de marca y spots',
        desc: 'Piezas de 30 a 90 segundos con enfoque publicitario: lanzamientos, campañas y presentación de producto o servicio.',
      },
      {
        title: 'Vídeo corporativo',
        desc: 'Presentación de empresa, instalaciones y equipo. Con dron para industria, naves y espacios grandes.',
      },
      {
        title: 'Eventos y aftermovies',
        desc: 'Cobertura de festivales, competiciones deportivas y eventos de empresa, con clips el mismo día y aftermovie final.',
      },
      {
        title: 'Videoclips',
        desc: 'Dirección, rodaje y montaje de videoclips musicales, en estudio o localización.',
      },
      {
        title: 'Turismo y territorio',
        desc: 'Piezas para destinos, alojamientos, bodegas y experiencias que necesitan atraer visitantes.',
      },
      {
        title: 'Espacios e inmobiliario',
        desc: 'Recorridos FPV y vídeo aéreo para propiedades, hoteles y locales que quieren enseñarse de verdad.',
      },
    ],
  },

  proceso: {
    title: 'Cómo es el proceso',
    items: [
      {
        title: 'Propuesta',
        desc: 'Una llamada o correo para entender objetivo, fechas y presupuesto. Te envío propuesta y presupuesto cerrado.',
      },
      {
        title: 'Preproducción',
        desc: 'Guion, localizaciones, permisos si hay dron y calendario de rodaje acordado contigo.',
      },
      {
        title: 'Rodaje',
        desc: 'Grabación ágil y planificada, con cámara, dron y sonido según lo definido. Sin sorpresas de última hora.',
      },
      {
        title: 'Edición y entrega',
        desc: 'Primera versión para tus comentarios, revisión incluida y entrega final en todos los formatos pactados.',
      },
    ],
  },


  relacionados: [
    {
      to: '/grabacion-con-drones-fpv/',
      label: 'Grabación con drones FPV',
      desc: 'Planos dinámicos e inmersivos que diferencian tu pieza.',
    },
    {
      to: '/edicion-y-postproduccion-de-video/',
      label: 'Edición y postproducción de vídeo',
      desc: 'Montaje, color y entrega si ya tienes el material grabado.',
    },
    {
      to: '/contenido-para-redes-sociales/',
      label: 'Contenido para redes sociales',
      desc: 'Reels, TikTok y Shorts producidos con constancia.',
    },
    {
      to: '/video-corporativo-con-dron/',
      label: 'Vídeo corporativo con dron',
      desc: 'Empresas, industria e instalaciones desde el aire.',
    },
    {
      to: '/piloto-de-drones-galicia/',
      label: 'Piloto de drones en Galicia',
      desc: 'Operadora FPV y estabilizado certificada, con permisos.',
    },
    {
      to: '/dron-para-eventos/',
      label: 'Dron para eventos',
      desc: 'Cobertura aérea de festivales y competiciones.',
    },
  ],

  faqs,

  cta: {
    title: '¿Producimos tu próximo vídeo?',
    desc: 'Cuéntame el objetivo y te preparo una propuesta con presupuesto cerrado. Sin compromiso.',
  },
}

export default function ProduccionAudiovisual() {
  return <ServiceLanding data={data} />
}
