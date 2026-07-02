Producción audiovisual con FPV cinematográfico en Galicia.// src/pages/BodasFotografiaVideo.jsx
import ServiceLanding from '../components/ServiceLanding.jsx'

const faqs = [
  {
    question: '¿Hacéis fotografía y vídeo el mismo día, o hay que contratar servicios separados?',
    answer:
      'Puedo cubrir los dos a la vez. Cuento con equipo de foto y vídeo para trabajar en paralelo durante toda la jornada, con una sola interlocutora coordinando el día: preparativos, ceremonia, banquete y fiesta. También podéis contratar solo fotografía o solo vídeo si es lo que necesitáis.',
  },
  {
    question: '¿Es seguro volar un dron cerca de los invitados para entregar los anillos?',
    answer:
      'Sí, cuando se planifica y ensaya con antelación. Visito la localización antes de la boda para diseñar la ruta de vuelo, evaluar el viento y el espacio, y hago un ensayo previo. Soy piloto de drones certificada por EASA y opero con seguro de responsabilidad civil. Si las condiciones del día no son seguras (viento fuerte, lluvia, espacio insuficiente), tengo siempre un plan alternativo a pie.',
  },
  {
    question: '¿Qué pasa si hace mal tiempo el día de la boda?',
    answer:
      'La fotografía y el vídeo se adaptan sin problema a interiores y a luz cambiante. La entrega de anillos con dron es la única parte del servicio que depende del tiempo: si el viento o la lluvia no permiten volar con garantías de seguridad, la entrega se hace a pie, coreografiada igualmente, sin que la boda se resienta.',
  },
  {
    question: '¿Se puede volar dron dentro de una iglesia u otro espacio cerrado?',
    answer:
      'Para interiores utilizo un dron tipo cinewhoop, pequeño y con las hélices protegidas, diseñado para volar con seguridad en espacios cerrados incluso con personas cerca. Si el templo o la sala tiene el espacio y la altura suficientes, es una opción real y muy vistosa para la entrega de anillos.',
  },
  {
    question: '¿Cuánto tiempo tarda en llegar el vídeo y las fotos tras la boda?',
    answer:
      'El trailer o avance (2-3 minutos) suele estar listo en la primera semana, para que podáis compartirlo mientras la boda sigue fresca. La galería de fotos completa y la película de boda se entregan en las semanas siguientes, con un plazo concreto que se acuerda antes de la boda.',
  },
  {
    question: '¿Necesitáis un ensayo antes del día de la boda?',
    answer:
      'Si incluís la entrega de anillos con dron, sí: visito la localización con antelación y hago un ensayo con quien vaya a sujetar la caja de los anillos (padrino, testigo o quien elijáis). Para la cobertura de foto y vídeo no hace falta ensayo, pero sí una reunión previa para conocer el espacio y el timing del día.',
  },
  {
    question: '¿Trabajáis en toda Galicia?',
    answer:
      'Sí. Tengo base en Pontevedra y cubro bodas en toda Galicia: Rías Baixas, Santiago de Compostela, A Coruña, Lugo y Ourense. Para bodas fuera de Galicia preparo un presupuesto cerrado que incluye desplazamiento y alojamiento si hace falta.',
  },
  {
    question: '¿Podemos contratar solo la entrega de anillos con dron, sin el resto del servicio?',
    answer:
      'Sí, es posible contratarla como pieza suelta si ya tenéis fotógrafo o videógrafo para el resto de la boda. En ese caso coordino con vuestro equipo de foto y vídeo para integrar el momento sin interferir en su cobertura.',
  },
]

const data = {
  seo: {
    title: 'Fotografía y vídeo de bodas en Galicia | FPV y entrega de anillos con dron',
    description:
      'Fotografía y vídeo de boda en Galicia: reportaje, película del día, planos aéreos FPV y entrega de anillos con dron. Piloto de drones certificada. Presupuesto sin compromiso.',
    pathname: '/fotografia-y-video-de-bodas',
  },

  schema: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://kulmenvisuals.com/fotografia-y-video-de-bodas/#service',
        name: 'Fotografía y vídeo de bodas en Galicia',
        serviceType: 'Fotografía y vídeo de bodas',
        description:
          'Cobertura fotográfica y audiovisual de bodas en Galicia: reportaje de foto, película de boda, planos aéreos FPV y entrega de anillos con dron. Piloto de drones certificada EASA.',
        provider: { '@id': 'https://kulmenvisuals.com/#localbusiness' },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Galicia' },
          { '@type': 'Country', name: 'España' },
        ],
        url: 'https://kulmenvisuals.com/fotografia-y-video-de-bodas/',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Servicios para bodas',
          itemListElement: [
            { '@type': 'Offer', name: 'Fotografía de boda' },
            { '@type': 'Offer', name: 'Vídeo de boda' },
            { '@type': 'Offer', name: 'FPV cinematográfico de boda' },
            { '@type': 'Offer', name: 'Entrega de anillos con dron FPV' },
          ],
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://kulmenvisuals.com/fotografia-y-video-de-bodas/#faq',
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
          { '@type': 'ListItem', position: 3, name: 'Fotografía y vídeo de bodas', item: 'https://kulmenvisuals.com/fotografia-y-video-de-bodas/' },
        ],
      },
    ],
  },

  eyebrow: 'Bodas · Galicia',
  h1: 'Fotografía y vídeo de bodas en Galicia',
  intro:
    'Soy io Rodríguez, fotógrafa, realizadora audiovisual y piloto de drones FPV certificada. Cubro vuestra boda de principio a fin: reportaje fotográfico, película del día y planos aéreos, con la opción diferencial de una entrega de anillos con dron FPV coreografiada y ensayada.',
  intro2:
    'Un único equipo coordinado en vez de varios proveedores sueltos: menos logística para vosotros el día de la boda, y un resultado con una mirada coherente de principio a fin.',

  incluye: {
    title: 'Qué incluye la cobertura de boda',
    text: 'Cada boda se adapta al espacio, al timing y a lo que queráis contar. Como base, el servicio completo incluye:',
    items: [
      'Reunión previa para conocer la pareja, el espacio y el timing del día',
      'Reportaje fotográfico de preparativos, ceremonia, banquete y fiesta',
      'Película de boda editada con narrativa y música con licencia',
      'Trailer corto (2-3 min) listo para compartir al día siguiente',
      'Planos aéreos FPV y estabilizados de la finca y la ceremonia',
      'Entrega de anillos con dron FPV, ensayada con antelación',
      'Galería digital en alta resolución con descarga privada',
      'Segundo profesional de apoyo en bodas grandes o con dos localizaciones',
    ],
  },

  tipos: {
    title: 'Los cuatro servicios para tu boda',
    text: 'Contratables juntos o por separado, según lo que ya tengáis resuelto.',
    items: [
      {
        title: 'Fotografía de boda',
        desc: 'Reportaje documental completo: preparativos, ceremonia, banquete y baile. Retratos de pareja con luz natural, sin poses forzadas.',
      },
      {
        title: 'Vídeo de boda',
        desc: 'Película del día editada con narrativa propia, más un trailer corto para redes. El ritmo emocional de la jornada, de principio a fin.',
      },
      {
        title: 'FPV cinematográfico',
        desc: 'Planos aéreos dinámicos de la finca, la llegada de los novios y la ceremonia vista desde arriba. El recurso visual que diferencia el vídeo.',
      },
      {
        title: 'Entrega de anillos con dron',
        desc: 'El dron trae los anillos volando hasta el altar. El momento que la pareja y los invitados no olvidan, coreografiado y ensayado antes del gran día.',
      },
    ],
  },

  destacado: {
    title: 'Cómo funciona la entrega de anillos con dron',
    text: 'Es la pieza más pedida y la que más aporta al recuerdo del día. Se planifica con cuidado para que sea segura y salga bien a la primera:',
    items: [
      'Visita previa a la finca o iglesia para diseñar la ruta de vuelo',
      'Ensayo con quien vaya a sujetar la caja de los anillos (padrino o testigo)',
      'Vuelo corto y controlado hasta el altar, con piloto certificada EASA',
      'Vuelo con seguro de responsabilidad civil activo en todo momento',
      'Uso de cinewhoop de hélices protegidas si la entrega es en interior',
      'Plan alternativo a pie si el viento o el espacio no garantizan seguridad',
    ],
  },

  proceso: {
    title: 'Cómo trabajamos juntas',
    items: [
      {
        title: 'Primer contacto',
        desc: 'Me contáis la fecha, el lugar y el estilo que buscáis. Confirmo disponibilidad y preparo una propuesta.',
      },
      {
        title: 'Reunión de planificación',
        desc: 'Repasamos timing, localizaciones y si incluís la entrega de anillos con dron.',
      },
      {
        title: 'El día de la boda',
        desc: 'Cobertura de foto y vídeo durante toda la jornada, con el equipo y los servicios que hayáis elegido.',
      },
      {
        title: 'Entrega',
        desc: 'Trailer en la primera semana, y galería de fotos y película completa en el plazo acordado.',
      },
    ],
  },

  relacionados: [
    {
      to: '/grabacion-con-drones-fpv/',
      label: 'Grabación con drones FPV',
      desc: 'Más sobre los vuelos FPV que dan vida a la entrega de anillos.',
    },
    {
      to: '/piloto-de-drones-galicia/',
      label: 'Piloto de drones en Galicia',
      desc: 'Operadora FPV y estabilizado certificada, con permisos y seguro.',
    },
    {
      to: '/produccion-audiovisual-galicia/',
      label: 'Producción audiovisual en Galicia',
      desc: 'Si buscas también vídeo para otro tipo de evento o marca.',
    },
    {
      to: '/edicion-y-postproduccion-de-video/',
      label: 'Edición y postproducción de vídeo',
      desc: 'Montaje, color y música si ya tienes el material grabado.',
    },
    {
      to: '/dron-para-eventos/',
      label: 'Dron para eventos',
      desc: 'Cobertura aérea de celebraciones, festivales y actos.',
    },
    {
      to: '/galicia/grabacion-con-drones/',
      label: 'Grabación con drones en Galicia',
      desc: 'Cobertura aérea en toda la comunidad, con base en Pontevedra.',
    },
  ],

  faqs,

  cta: {
    title: '¿Os casáis pronto?',
    desc: 'Cuéntame la fecha y el lugar, y te preparo una propuesta a medida sin compromiso.',
  },
}

export default function BodasFotografiaVideo() {
  return <ServiceLanding data={data} />
}
