import DronLanding from '../components/DronLanding.jsx'

const pageUrl = 'https://kulmenvisuals.com/fotografia-aerea-con-dron-galicia/'

const faqs = [
  {
    question: '¿Cuántas fotos aéreas entregas por sesión?',
    answer:
      'En una sesión típica entrego entre 20 y 30 fotos editadas, con varias alturas y puntos de vista. Si el encargo necesita más (por ejemplo, una urbanización con varias parcelas), el número se ajusta en el presupuesto.',
  },
  {
    question: '¿En cuánto tiempo tengo las fotos?',
    answer:
      'Las fotos editadas se entregan en 24-48 horas desde la sesión, listas para portales, web, redes e impresión.',
  },
  {
    question: '¿Me das también los archivos RAW?',
    answer:
      'Sí. Además de las fotos editadas puedo entregar los RAW originales para que tu equipo de diseño o tu agencia pueda revelarlos a su manera.',
  },
  {
    question: '¿Qué es la fotografía aérea HDR y cuándo conviene?',
    answer:
      'Es una foto que combina varias exposiciones de la misma toma para que se vean bien a la vez el cielo y las zonas en sombra. Conviene en espacios e inmobiliaria, sobre todo en Galicia, donde el cielo cambia rápido y los contrastes entre luz y sombra son fuertes.',
  },
  {
    question: '¿Puedes hacer panorámicas 360° para un tour virtual?',
    answer:
      'Sí. Hago panorámicas amplias y esféricas 360° desde el aire, que se pueden integrar en tours virtuales, webs de alojamientos o fichas de propiedades.',
  },
  {
    question: '¿Puedo combinar fotografía y vídeo aéreo en la misma sesión?',
    answer:
      'Sí, y suele ser lo más eficiente: en el mismo desplazamiento y con los mismos permisos se hacen las fotos y el vídeo para redes o web.',
  },
  {
    question: '¿Hace falta pedir permiso para hacer fotos aéreas de mi propiedad?',
    answer:
      'Depende de la zona. Antes de cada sesión reviso el espacio aéreo; en muchas propiedades rurales el vuelo es directo, pero cerca de aeropuertos, en núcleos urbanos o en espacios protegidos hay que tramitar autorizaciones con antelación. Me encargo de esa gestión.',
  },
]

const data = {
  seo: {
    title: 'Fotografía aérea con dron en Galicia | Fotos para empresas',
    description:
      'Fotografía aérea con dron en Galicia para inmobiliarias, alojamientos, obras y empresas. 20-30 fotos editadas en 24-48 h, RAW y 360°. Piloto certificada EASA.',
    pathname: '/fotografia-aerea-con-dron-galicia',
  },

  schema: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Fotografía aérea con dron en Galicia',
        serviceType: 'Fotografía aérea con dron',
        description:
          'Fotografía aérea profesional con dron para inmobiliarias, alojamientos turísticos, constructoras y empresas en Galicia. Fotos editadas, HDR, panorámicas 360° y archivos RAW.',
        url: pageUrl,
        provider: {
          '@type': 'Organization',
          '@id': 'https://kulmenvisuals.com/#localbusiness',
          name: 'Kulmen Visuals',
          url: 'https://kulmenvisuals.com',
          founder: { '@type': 'Person', name: 'io Rodríguez' },
        },
        areaServed: { '@type': 'AdministrativeArea', name: 'Galicia' },
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
  },

  eyebrow: 'Fotografía aérea profesional',
  h1: 'Fotografía aérea con dron en Galicia',
  intro:
    'Soy io Rodríguez, piloto de drones certificada con más de 5 años de experiencia. Hago fotografía aérea para inmobiliarias, alojamientos turísticos, constructoras y empresas en toda Galicia: entre 20 y 30 fotos editadas por sesión, entregadas en 24-48 horas y listas para publicar.',

  hubLink: {
    to: '/servicios-grabacion-con-drones/',
    label: 'Todos los servicios con dron',
  },

  problema: {
    title: 'Lo que una foto desde el suelo no puede enseñar',
    text: 'Desde el suelo no se ven los límites de una parcela, lo que hay alrededor de un alojamiento, el tamaño real de una nave o cuánto ha avanzado una obra. Una foto aérea lo resuelve en una sola imagen: sitúa el lugar, muestra la escala y enseña el entorno, que en Galicia (ríos, viñedos, costa, monte) suele ser el mejor argumento de venta.',
  },

  paraQuien: {
    title: 'Fotografía aérea para tu sector',
    items: [
      {
        title: 'Inmobiliarias y alojamientos',
        desc: 'Viviendas, pazos, fincas, casas rurales y hoteles. Fotos para portales, fichas de propiedad, Booking, Airbnb, Google y la web de reservas directas.',
      },
      {
        title: 'Obra y construcción',
        desc: 'Fotos desde los mismos puntos en cada visita para documentar el avance, informar a inversores y preparar la comercialización de la promoción.',
      },
      {
        title: 'Empresas e industria',
        desc: 'Naves, fábricas, sedes e instalaciones vistas desde el aire para la web corporativa, memorias, dosieres comerciales y licitaciones.',
      },
    ],
  },

  tipos: {
    title: 'Qué incluye cada encargo de fotografía aérea',
    items: [
      {
        title: 'Fotos editadas',
        desc: 'Entre 20 y 30 fotos por sesión, con corrección de color, enderezado y retoque, listas para web, portales e impresión.',
        tags: ['20-30 fotos', '24-48 h'],
      },
      {
        title: 'HDR para espacios',
        desc: 'Varias exposiciones combinadas para que cielo, fachadas y zonas en sombra se vean bien a la vez. Ideal para inmobiliaria y alojamientos.',
        tags: ['Inmobiliaria', 'Hoteles'],
      },
      {
        title: 'Panorámicas y 360°',
        desc: 'Panorámicas amplias y esféricas desde el aire para tours virtuales, webs de alojamientos y fichas de propiedades.',
        tags: ['Tours virtuales', 'Web'],
      },
      {
        title: 'Archivos RAW',
        desc: 'Los originales sin procesar del sensor de 48 MP, para que tu agencia o equipo de diseño los revele a su manera.',
        tags: ['Agencias', 'Diseño'],
      },
    ],
  },

  // Para activar la galería, añade aquí las fotos (guardadas en /public/images/fotografia-aerea/):
  // { src: '/images/fotografia-aerea/nombre.jpg', alt: 'Descripción de la foto', caption: 'Cliente o lugar' }
  galeria: {
    title: 'Trabajos de fotografía aérea',
    text: 'Una selección de fotos aéreas de alojamientos, propiedades y espacios en Galicia.',
    items: [],
  },

  incluye: {
    title: 'Cómo es una sesión de fotografía aérea',
    items: [
      'Briefing: qué quieres enseñar y dónde se van a usar las fotos',
      'Revisión del espacio aéreo y gestión de permisos si la zona lo requiere',
      'Elección de la hora del día según la orientación del espacio',
      'Sesión de vuelo con varias alturas y puntos de vista',
      'Selección y edición de 20-30 fotos, con HDR cuando conviene',
      'Panorámicas o 360° si el proyecto las necesita',
      'Entrega en 24-48 horas en alta resolución',
      'Archivos RAW originales si los necesitas',
    ],
  },

  permisos: {
    title: 'Permisos, seguro y privacidad',
    text: 'Soy piloto certificada EASA (A1/A3 y A2) y operadora UAS registrada en AESA, con seguro de responsabilidad civil en todas las sesiones. Antes de volar reviso el espacio aéreo y, si la propiedad está cerca de un aeropuerto, en núcleo urbano o en un espacio protegido, tramito la autorización con antelación. Durante la sesión encuadro para no captar a personas identificables ni el interior de propiedades vecinas.',
  },

  ejemplos: {
    title: 'Algunos trabajos con fotografía aérea',
    items: [
      'Grupo Country Homes: fotografía y vídeo aéreo de propiedades para su comercialización.',
      'Land of Eve: fotos aéreas de la propiedad y su entorno, junto a vídeos para redes.',
      'Pazo en Lugo: fotografía aérea de la finca para su venta, combinada con vídeo vertical.',
      'Cabañas Ribeira Sacra: fotos aéreas del alojamiento y el paisaje que lo rodea.',
      'Seiscerocatro Suitel: fotografía aérea del alojamiento y su entorno.',
    ],
  },

  zonas: {
    title: 'Fotografía aérea en toda Galicia',
    text: 'Tengo base en Pontevedra y hago sesiones en las cuatro provincias. La mayor parte de Galicia está a menos de dos horas, así que en muchos encargos el desplazamiento no supone un coste añadido.',
    chips: ['Pontevedra', 'Vigo', 'Rías Baixas', 'A Coruña', 'Santiago', 'Lugo', 'Ourense', 'Ribeira Sacra', 'Costa da Morte'],
  },

  relatedLinks: [
    {
      to: '/blog/fotografia-aerea-para-empresas/',
      label: 'Guía: fotografía aérea para empresas',
      desc: 'Usos por sector, formatos, permisos y qué pedir antes de contratar.',
    },
    {
      to: '/dron-para-inmobiliarias/',
      label: 'Dron para inmobiliarias',
      desc: 'Foto y vídeo aéreo para vender o alquilar propiedades.',
    },
    {
      to: '/blog/seguimiento-de-obra-con-dron/',
      label: 'Seguimiento de obra con dron',
      desc: 'Cómo documentar una construcción con vuelos periódicos.',
    },
    {
      to: '/video-corporativo-con-dron/',
      label: 'Vídeo corporativo con dron',
      desc: 'Para completar las fotos de tus instalaciones con vídeo.',
    },
    {
      to: '/piloto-de-drones-galicia/',
      label: 'Piloto de drones en Galicia',
      desc: 'Certificaciones, equipo y forma de trabajo.',
    },
  ],

  faqs,

  cta: {
    title: '¿Necesitas fotos aéreas de tu espacio?',
    desc: 'Dime dónde está y para qué vas a usar las fotos. Te preparo una propuesta cerrada sin compromiso.',
  },
}

export default function FotografiaAerea() {
  return <DronLanding data={data} />
}
