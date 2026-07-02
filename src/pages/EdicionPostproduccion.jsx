// src/pages/EdicionPostproduccion.jsx
import ServiceLanding from '../components/ServiceLanding.jsx'

const faqs = [
  {
    question: '¿Puedo contratar solo la edición si ya tengo el material grabado?',
    answer:
      'Sí. Reviso primero una muestra de tu material para confirmar que da la calidad necesaria, y a partir de ahí me encargo de todo: ordenar los brutos, montar, corregir color, limpiar el audio, añadir música con licencia y preparar las versiones para cada canal. Muchos clientes graban con su móvil o su equipo y externalizan solo esta fase.',
  },
  {
    question: '¿Qué incluye la postproducción de un vídeo?',
    answer:
      'El montaje (selección de planos, ritmo y estructura narrativa), la corrección de color o etalonaje, la limpieza y mezcla de audio, la música con licencia comercial, los rótulos y subtítulos si el proyecto los pide, y la exportación en los formatos de entrega: horizontal para web y YouTube, vertical para Reels, TikTok y Shorts.',
  },
  {
    question: '¿Cuánto cuesta editar un vídeo?',
    answer:
      'Como referencia: la edición de una pieza corta (hasta 2 minutos) desde material ya grabado se mueve entre 250€ y 500€; un aftermovie de evento entre 300€ y 700€; y las piezas verticales para redes, entre 80€ y 150€ por unidad según volumen. La corrección de color como servicio suelto, entre 100€ y 300€ por pieza. El precio depende sobre todo de la cantidad de material bruto y del acabado que busques.',
  },
  {
    question: '¿Trabajas la edición en remoto?',
    answer:
      'Sí. La edición y la postproducción no necesitan presencialidad: recibes un enlace para subir el material, trabajamos las revisiones sobre versiones online comentables y la entrega final llega por transferencia digital. Edito para clientes de toda España.',
  },
  {
    question: '¿Cuántas revisiones incluye el servicio?',
    answer:
      'El presupuesto incluye siempre una primera versión y una ronda de revisión con tus comentarios. Las rondas adicionales se presupuestan aparte y te lo digo antes, no después. Este método mantiene los plazos y evita ediciones eternas.',
  },
  {
    question: '¿Qué es la corrección de color y por qué importa?',
    answer:
      'Es el proceso que iguala y da intención al color de todos los planos: corrige diferencias de luz entre tomas y aplica un acabado coherente con la marca. Es la diferencia más visible entre un vídeo amateur y uno profesional, especialmente cuando el material viene de cámaras distintas.',
  },
  {
    question: '¿En qué plazos entregas una edición?',
    answer:
      'Piezas cortas y verticales, entre 3 y 7 días laborables desde que recibo el material. Proyectos con más volumen de brutos o motion graphics, entre 1 y 3 semanas. Si tienes fecha de publicación, se planifica para llegar con margen.',
  },
  {
    question: '¿Puedes reeditar o actualizar un vídeo antiguo?',
    answer:
      'Sí, siempre que conserves el material original o el proyecto. Es habitual actualizar vídeos corporativos con datos nuevos, cortar versiones para redes de piezas largas o remontar material de archivo para una campaña nueva.',
  },
]

const data = {
  seo: {
    title: 'Edición y postproducción de vídeo | Montaje, color y formatos para redes',
    description:
      'Servicio profesional de edición y postproducción de vídeo: montaje, corrección de color, audio y versiones para redes. Desde tu material o desde rodaje propio. En remoto para toda España.',
    pathname: '/edicion-y-postproduccion-de-video',
  },

  schema: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://kulmenvisuals.com/edicion-y-postproduccion-de-video/#service',
        name: 'Edición y postproducción de vídeo',
        serviceType: 'Edición y postproducción de vídeo',
        description:
          'Edición profesional de vídeo: montaje, corrección de color, limpieza de audio, música con licencia y exportación multiformato. Servicio presencial en Galicia y en remoto para toda España.',
        provider: { '@id': 'https://kulmenvisuals.com/#localbusiness' },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Galicia' },
          { '@type': 'Country', name: 'España' },
        ],
        url: 'https://kulmenvisuals.com/edicion-y-postproduccion-de-video/',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Edición y postproducción',
          itemListElement: [
            { '@type': 'Offer', name: 'Montaje de vídeo' },
            { '@type': 'Offer', name: 'Corrección de color y etalonaje' },
            { '@type': 'Offer', name: 'Edición de piezas verticales para redes' },
            { '@type': 'Offer', name: 'Postproducción de audio y música con licencia' },
            { '@type': 'Offer', name: 'Subtítulos y rótulos' },
          ],
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://kulmenvisuals.com/edicion-y-postproduccion-de-video/#faq',
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
          { '@type': 'ListItem', position: 3, name: 'Edición y postproducción de vídeo', item: 'https://kulmenvisuals.com/edicion-y-postproduccion-de-video/' },
        ],
      },
    ],
  },

  eyebrow: 'Servicio · Presencial y en remoto',
  h1: 'Edición y postproducción de vídeo',
  intro:
    'Servicio profesional de edición de vídeo: montaje, corrección de color, audio y entrega en todos los formatos. Puedo editar el material que yo misma grabo o el que tú ya tienes, y trabajo en remoto para clientes de toda España desde mi base en Galicia.',
  intro2:
    'La edición es donde un vídeo se gana o se pierde: el ritmo, el color y el sonido deciden si la pieza retiene o se salta. Mi trabajo es que cada plano que grabaste (o que grabamos juntas) acabe contando lo que necesitas.',

  incluye: {
    title: 'Qué incluye el servicio de edición',
    items: [
      'Revisión y organización del material bruto',
      'Montaje con estructura narrativa y ritmo adaptado al canal',
      'Corrección de color y etalonaje profesional',
      'Limpieza de audio, mezcla y música con licencia comercial',
      'Rótulos, subtítulos y grafismos básicos',
      'Exportación multiformato: 16:9 para web, 9:16 para redes',
    ],
  },

  tipos: {
    title: 'Qué tipo de piezas edito',
    items: [
      {
        title: 'Vídeo de marca y corporativo',
        desc: 'Montaje y acabado de piezas de presentación, con versiones para web, campañas y presentaciones comerciales.',
      },
      {
        title: 'Aftermovies y eventos',
        desc: 'Del bruto de un evento a una pieza con ritmo: selección de los mejores momentos, música y estructura emocional.',
      },
      {
        title: 'Verticales para redes',
        desc: 'Reels, TikTok y Shorts editados con gancho en los primeros segundos y formato nativo 9:16.',
      },
      {
        title: 'Videoclips',
        desc: 'Montaje musical con sincronía, color con intención y el ritmo que pide el tema.',
      },
      {
        title: 'Material FPV y dron',
        desc: 'Edición especializada de tomas aéreas: estabilización, color y montaje que aprovecha el movimiento.',
      },
      {
        title: 'Reediciones y versiones',
        desc: 'Actualización de vídeos existentes, cortes para redes de piezas largas y remontajes de archivo.',
      },
    ],
  },

  proceso: {
    title: 'Cómo trabajamos la edición',
    items: [
      {
        title: 'Material y objetivo',
        desc: 'Me envías el material (o una muestra) y me cuentas qué quieres conseguir y dónde se va a publicar.',
      },
      {
        title: 'Presupuesto cerrado',
        desc: 'Te confirmo viabilidad, plazos y precio por escrito antes de empezar.',
      },
      {
        title: 'Primera versión',
        desc: 'Recibes un enlace de revisión online donde puedes comentar sobre el propio vídeo, minuto a minuto.',
      },
      {
        title: 'Revisión y entrega',
        desc: 'Aplico tus comentarios y entrego los másteres finales en todos los formatos pactados.',
      },
    ],
  },

  precios: {
    title: 'Cuánto cuesta editar un vídeo',
    text: 'Rangos habituales editando desde material ya grabado:',
    items: [
      ['Pieza corta (hasta 2 min) desde tus brutos', '250€ - 500€'],
      ['Aftermovie de evento', '300€ - 700€'],
      ['Pieza vertical para redes (por unidad, según volumen)', '80€ - 150€'],
      ['Corrección de color por pieza', '100€ - 300€'],
      ['Pack mensual de edición para redes', '400€ - 900€'],
    ],
  },

  relacionados: [
    {
      to: '/produccion-audiovisual-galicia/',
      label: 'Producción audiovisual en Galicia',
      desc: 'Si necesitas también el rodaje: producción completa.',
    },
    {
      to: '/contenido-para-redes-sociales/',
      label: 'Contenido para redes sociales',
      desc: 'Grabación y edición pensadas para Reels, TikTok y Shorts.',
    },
    {
      to: '/grabacion-con-drones-fpv/',
      label: 'Grabación con drones FPV',
      desc: 'Material aéreo dinámico para elevar tu pieza.',
    },
    {
      to: '/piloto-de-drones-galicia/',
      label: 'Piloto de drones en Galicia',
      desc: 'Vuelos certificados con permisos y seguro.',
    },
    {
      to: '/dron-para-cine-y-publicidad/',
      label: 'Dron para cine y publicidad',
      desc: 'Planos aéreos cinematográficos para spots.',
    },
    {
      to: '/video-corporativo-con-dron/',
      label: 'Vídeo corporativo con dron',
      desc: 'Presenta tu empresa e instalaciones desde el aire.',
    },
  ],

  faqs,

  cta: {
    title: '¿Tienes material esperando a convertirse en vídeo?',
    desc: 'Envíame una muestra de tus brutos y te digo qué se puede hacer con ellos, en qué plazo y por cuánto.',
  },
}

export default function EdicionPostproduccion() {
  return <ServiceLanding data={data} />
}
