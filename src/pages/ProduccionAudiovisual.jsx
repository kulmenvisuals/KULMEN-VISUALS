// src/pages/ProduccionAudiovisual.jsx
// Landing de "producción de vídeos para empresas". La búsqueda "productora
// audiovisual Galicia" la trabaja la home: no reutilizar ese enfoque aquí.
import ServiceLanding from '../components/ServiceLanding.jsx'

const pageUrl = 'https://kulmenvisuals.com/produccion-audiovisual-galicia/'

const faqs = [
  {
    question: '¿Qué tipos de vídeo puedo encargar para mi empresa?',
    answer:
      'Presentación de empresa, vídeo de producto o servicio, entrevistas y testimonios, formación interna, employer branding para atraer talento, patrocinios y eventos de empresa, y contenido para redes. Muchas veces conviene planificar varias piezas desde un mismo rodaje.',
  },
  {
    question: '¿Hay que parar la actividad de la empresa para grabar?',
    answer:
      'No. Trabajo con un equipo reducido y discreto, organizo el rodaje por zonas o turnos y, si hace falta, grabo a primera hora, al cierre o en fin de semana. Tu equipo sigue trabajando mientras grabamos.',
  },
  {
    question: '¿Puedo usar el vídeo en anuncios, ferias y en la web?',
    answer:
      'Sí. El vídeo se entrega con uso comercial libre: web, redes sociales, ferias, presentaciones y campañas de publicidad de pago, sin costes extra por uso. La música va con licencia comercial.',
  },
  {
    question: '¿Haces versiones en otros idiomas?',
    answer:
      'Sí. Entrego subtítulos en español o en otros idiomas, versiones completas en otro idioma y locución profesional cuando la pieza la necesita. Es habitual en empresas que exportan o que trabajan con turismo internacional.',
  },
  {
    question: '¿Cuánto cuesta un vídeo para empresa?',
    answer:
      'Depende del tipo de pieza, las jornadas de rodaje, las localizaciones, si hay entrevistas, dron o locución, y de cuántas versiones necesitas. Preparo un presupuesto cerrado y desglosado tras una breve llamada. En el blog tienes una guía con precios orientativos de vídeo corporativo en Galicia.',
  },
  {
    question: '¿En cuánto tiempo se entrega?',
    answer:
      'Piezas sencillas y vídeos de evento, entre 3 y 10 días laborables. Vídeos corporativos, de producto o con entrevistas y más postproducción, entre 2 y 4 semanas. Si hay una fecha límite, como una feria, se planifica desde el inicio.',
  },
  {
    question: '¿Qué necesitas de mi empresa para empezar?',
    answer:
      'El objetivo del vídeo, a quién va dirigido y dónde se va a publicar. Con eso preparo la propuesta. Para el rodaje, una persona de contacto, acceso a las instalaciones y, si hay entrevistas, que las personas sepan con antelación qué se les va a preguntar.',
  },
  {
    question: '¿Trabajas solo en Galicia?',
    answer:
      'Mi base está en Pontevedra y la mayoría de proyectos son en Galicia, pero también me desplazo al resto de España. El desplazamiento va incluido en el presupuesto cerrado.',
  },
]

const data = {
  seo: {
    title: 'Producción de vídeos para empresas en Galicia | Kulmen Visuals',
    description:
      'Producción de vídeos para empresas en Galicia: presentación de empresa, producto, testimonios, formación y RRHH. Subtítulos, idiomas y uso comercial libre.',
    pathname: '/produccion-audiovisual-galicia',
  },

  schema: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: 'Producción de vídeos para empresas',
        serviceType: 'Producción de vídeo corporativo',
        description:
          'Producción de vídeos para empresas en Galicia: presentación de empresa, vídeo de producto, entrevistas y testimonios, formación y employer branding. Subtítulos, versiones en otros idiomas, locución y uso comercial libre.',
        provider: { '@id': 'https://kulmenvisuals.com/#localbusiness' },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Galicia' },
          { '@type': 'Country', name: 'España' },
        ],
        audience: { '@type': 'BusinessAudience', name: 'Empresas y pymes' },
        url: pageUrl,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Vídeos para empresas',
          itemListElement: [
            'Vídeo de presentación de empresa',
            'Vídeo de producto o servicio',
            'Entrevistas y testimonios',
            'Vídeo de formación y employer branding',
            'Vídeo de patrocinio y eventos de empresa',
            'Contenido de vídeo para redes de empresa',
          ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
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
          { '@type': 'ListItem', position: 3, name: 'Producción de vídeos para empresas', item: pageUrl },
        ],
      },
    ],
  },

  eyebrow: 'Vídeo para empresas · Galicia y España',
  h1: 'Producción de vídeos para empresas en Galicia',
  intro:
    'Soy io Rodríguez y produzco vídeos para empresas desde Pontevedra: presentación de empresa, producto, entrevistas, formación y contenido para redes. Me encargo del proceso completo, del guion a la entrega, con una sola interlocutora y presupuesto cerrado.',
  intro2:
    'He trabajado para empresas como Norvento Technpower, Cobre San Rafael o Banca March, también a través de agencias. Cada vídeo se entrega con uso comercial libre, subtítulos o versiones en otros idiomas si los necesitas, y listo para web, ferias, redes y campañas.',

  incluye: {
    title: 'Qué incluye un vídeo para empresa',
    text: 'Producción completa, sin subcontratas ni intermediarios:',
    items: [
      'Briefing: objetivo, público y canales donde se va a usar el vídeo',
      'Guion, plan de rodaje y preparación de entrevistas',
      'Rodaje con cámara de cine (Blackmagic 4K, Lumix S5II) y sonido para entrevistas',
      'Dron estabilizado o FPV si las instalaciones lo merecen',
      'Montaje, corrección de color y música con licencia comercial',
      'Subtítulos, versiones en otros idiomas y locución profesional',
      'Versiones horizontal y vertical para web, ferias y redes',
      'Uso comercial libre, también en publicidad de pago',
    ],
  },

  tipos: {
    title: 'Tipos de vídeo para empresas',
    text: 'Cada pieza responde a un objetivo distinto. Muchas salen del mismo rodaje.',
    items: [
      {
        title: 'Presentación de empresa',
        desc: 'Quiénes sois, qué hacéis y cómo trabajáis: instalaciones, equipo y proceso. La pieza base para la web y las presentaciones comerciales.',
      },
      {
        title: 'Producto o servicio',
        desc: 'Un vídeo que enseña y explica lo que vendes: uso, detalles, ventajas. Para fichas de producto, ferias, comerciales y anuncios.',
      },
      {
        title: 'Entrevistas y testimonios',
        desc: 'Clientes, directivos o empleados hablando a cámara con sonido cuidado. La prueba social que más convence en B2B.',
      },
      {
        title: 'Formación y RRHH',
        desc: 'Vídeos de formación interna, onboarding y employer branding para atraer talento y enseñar cómo es trabajar en tu empresa.',
      },
      {
        title: 'Patrocinios y eventos de empresa',
        desc: 'Piezas que rentabilizan un patrocinio o un evento corporativo, como las que produje para Cobre San Rafael con la agencia Orestes Comunica.',
      },
      {
        title: 'Contenido para redes de empresa',
        desc: 'Clips verticales de producto, proceso y equipo para LinkedIn, Instagram o TikTok, sueltos o en packs mensuales.',
      },
    ],
  },

  destacado: {
    title: 'Grabar en tu empresa sin parar la actividad',
    text: 'Un rodaje no debería costarte una jornada de producción. Por eso lo organizo para que tu equipo siga trabajando mientras grabamos:',
    items: [
      'Equipo reducido y discreto, sin montajes aparatosos',
      'Horarios flexibles: primera hora, cierre o fin de semana',
      'Rodaje planificado por zonas o turnos',
      'Entrevistas preparadas para no robar tiempo a nadie',
      'Permisos de vuelo gestionados si se graba con dron',
      'Una sola persona de contacto durante todo el proceso',
    ],
  },

  proceso: {
    title: 'Cómo es el proceso',
    items: [
      {
        title: 'Propuesta',
        desc: 'Una llamada para entender objetivo, público, fechas y presupuesto. Te envío propuesta y presupuesto cerrado.',
      },
      {
        title: 'Preproducción',
        desc: 'Guion, preguntas de entrevista, localizaciones dentro de la empresa y calendario de rodaje acordado contigo.',
      },
      {
        title: 'Rodaje',
        desc: 'Grabación planificada por bloques, con cámara, sonido y dron si hace falta, sin interrumpir la actividad.',
      },
      {
        title: 'Edición y entrega',
        desc: 'Primera versión para tus comentarios, revisión incluida y entrega con subtítulos, idiomas y formatos pactados.',
      },
    ],
  },

  relacionados: [
    {
      to: '/video-corporativo-con-dron/',
      label: 'Vídeo corporativo con dron',
      desc: 'Instalaciones, industria y naves vistas desde el aire.',
    },
    {
      to: '/contenido-para-redes-sociales/',
      label: 'Contenido para redes sociales',
      desc: 'Reels, TikTok y Shorts para empresas, en packs mensuales.',
    },
    {
      to: '/edicion-y-postproduccion-de-video/',
      label: 'Edición y postproducción de vídeo',
      desc: 'Si ya tienes material grabado y necesitas montarlo.',
    },
    {
      to: '/blog/cuanto-cuesta-video-corporativo-galicia/',
      label: 'Cuánto cuesta un vídeo corporativo en Galicia',
      desc: 'Guía con rangos de precio y qué los hace variar.',
    },
    {
      to: '/servicios/',
      label: 'Todos los servicios audiovisuales',
      desc: 'Catálogo completo y formas de contratación.',
    },
    {
      to: '/',
      label: 'Productora audiovisual en Galicia',
      desc: 'Quién soy, proyectos y zonas donde trabajo.',
    },
  ],

  faqs,

  cta: {
    title: '¿Qué vídeo necesita tu empresa?',
    desc: 'Cuéntame el objetivo y dónde lo vas a usar. Te preparo una propuesta con presupuesto cerrado, sin compromiso.',
  },
}

export default function ProduccionAudiovisual() {
  return <ServiceLanding data={data} />
}
