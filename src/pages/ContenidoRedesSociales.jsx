// src/pages/ContenidoRedesSociales.jsx
import ServiceLanding from '../components/ServiceLanding.jsx'

const faqs = [
  {
    question: '¿Qué incluye un servicio de contenido para redes sociales?',
    answer:
      'La producción completa de las piezas de vídeo: planteamiento de contenidos según tu objetivo, grabación pensada para formato vertical, edición con gancho en los primeros segundos, subtítulos y entrega lista para publicar en Instagram Reels, TikTok y YouTube Shorts. No gestiono la publicación ni la comunidad: produzco el contenido que tu cuenta necesita para funcionar.',
  },
  {
    question: '¿Cuánto cuesta el contenido de vídeo para redes?',
    answer:
      'Un pack de 5 a 10 piezas producidas desde un mismo rodaje se mueve entre 700€ y 2.000€ según jornadas de grabación y nivel de edición. Para publicación sostenida, los packs mensuales con rodaje recurrente reducen el coste por pieza de forma considerable. Siempre con presupuesto cerrado.',
  },
  {
    question: '¿Cuántos vídeos puede sacar una empresa de un solo rodaje?',
    answer:
      'De una jornada bien planificada salen entre 6 y 10 piezas verticales de 15 a 60 segundos, además de material de banco para historias y anuncios. La clave es planificar el multiformato desde el guion: cada escena se graba sabiendo qué piezas van a salir de ella.',
  },
  {
    question: '¿Qué es el contenido UGC y lo ofreces?',
    answer:
      'El UGC (user generated content) es contenido con estética de usuario real, grabado en tono cercano y natural, que las marcas usan en sus perfiles y anuncios porque genera más confianza que la publicidad tradicional. Sí, lo produzco: he creado piezas UGC para marcas como Orballo, pensadas para stories, reels y campañas.',
  },
  {
    question: '¿Con qué frecuencia debería publicar vídeo mi empresa?',
    answer:
      'Más importante que la cantidad es la constancia: dos piezas semanales sostenidas durante meses rinden más que diez en una semana y luego silencio. Los packs mensuales están pensados exactamente para eso: un rodaje periódico que alimenta un calendario de publicación estable.',
  },
  {
    question: '¿El contenido sirve también para anuncios?',
    answer:
      'Sí. Las piezas se entregan en formatos compatibles con Meta Ads y TikTok Ads, y si hay campaña prevista se graban variantes específicas: distintos ganchos de entrada, distintas llamadas a la acción. El vídeo orgánico que funciona suele ser la mejor base para el anuncio.',
  },
  {
    question: '¿Trabajas con negocios locales o solo con marcas grandes?',
    answer:
      'Sobre todo con pymes y negocios locales de Galicia: restaurantes, gimnasios, alojamientos, tiendas y marcas de producto. Son los que más rendimiento sacan al vídeo en redes, porque su público está a menos de 30 kilómetros y el algoritmo local juega a su favor.',
  },
  {
    question: '¿Grabas también con dron para redes?',
    answer:
      'Sí, y funciona especialmente bien: los recorridos FPV verticales por un local, un hotel o una nave son de los formatos con más alcance orgánico para negocios con espacio físico. Soy piloto de drones certificada, así que el vuelo va con permisos y seguro.',
  },
]

const data = {
  seo: {
    title: 'Contenido para redes sociales | Vídeo profesional para Reels, TikTok y Shorts',
    description:
      'Producción de contenido de vídeo para redes sociales: Reels, TikTok, Shorts y UGC para empresas. Grabación vertical, edición con gancho y packs mensuales. Base en Galicia, servicio en toda España.',
    pathname: '/contenido-para-redes-sociales',
  },

  schema: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://kulmenvisuals.com/contenido-para-redes-sociales/#service',
        name: 'Contenido para redes sociales',
        serviceType: 'Producción de contenido de vídeo para redes sociales',
        description:
          'Producción de vídeo para redes sociales: Reels, TikTok, YouTube Shorts y contenido UGC para empresas y negocios locales. Grabación en formato vertical, edición profesional y packs mensuales.',
        provider: { '@id': 'https://kulmenvisuals.com/#localbusiness' },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Galicia' },
          { '@type': 'Country', name: 'España' },
        ],
        url: 'https://kulmenvisuals.com/contenido-para-redes-sociales/',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Contenido para redes sociales',
          itemListElement: [
            { '@type': 'Offer', name: 'Reels e Instagram vertical' },
            { '@type': 'Offer', name: 'TikTok y YouTube Shorts' },
            { '@type': 'Offer', name: 'Contenido UGC para marcas' },
            { '@type': 'Offer', name: 'Packs mensuales de contenido' },
            { '@type': 'Offer', name: 'Vídeo vertical con dron FPV' },
          ],
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://kulmenvisuals.com/contenido-para-redes-sociales/#faq',
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
          { '@type': 'ListItem', position: 3, name: 'Contenido para redes sociales', item: 'https://kulmenvisuals.com/contenido-para-redes-sociales/' },
        ],
      },
    ],
  },

  eyebrow: 'Servicio · Galicia y España',
  h1: 'Contenido para redes sociales',
  intro:
    'Produzco el vídeo que tu marca necesita para funcionar en redes: Reels, TikTok, YouTube Shorts y contenido UGC, grabados en vertical desde el guion y editados con gancho. Para empresas y negocios que quieren publicar con constancia sin montar un departamento de vídeo.',
  intro2:
    'El algoritmo premia dos cosas: retención y constancia. La retención se consigue con piezas bien grabadas y editadas; la constancia, con un sistema de producción que no dependa de la inspiración de cada semana. Ofrezco las dos.',

  incluye: {
    title: 'Qué incluye el servicio',
    items: [
      'Planteamiento de contenidos según tu objetivo y tu canal',
      'Grabación pensada para vertical 9:16 desde el guion',
      'Edición con gancho en los 2 primeros segundos',
      'Subtítulos integrados y rotulación nativa de cada plataforma',
      'Entrega lista para publicar, con variantes para anuncios si hay campaña',
      'Dron FPV para recorridos verticales cuando el negocio tiene espacio que enseñar',
    ],
  },

  tipos: {
    title: 'Formatos que produzco',
    items: [
      {
        title: 'Reels e Instagram',
        desc: 'Piezas de 15 a 60 segundos con estética de marca: producto, proceso, equipo y local.',
      },
      {
        title: 'TikTok',
        desc: 'Contenido más directo y natural, pensado para el tono de la plataforma sin perder calidad.',
      },
      {
        title: 'YouTube Shorts',
        desc: 'Verticales que construyen canal y aparecen en las búsquedas de YouTube y Google.',
      },
      {
        title: 'UGC para marcas',
        desc: 'Contenido con estética de usuario real para perfiles y anuncios. Producido para marcas como Orballo.',
      },
      {
        title: 'Recorridos FPV verticales',
        desc: 'El local, hotel o gimnasio recorrido en un vuelo continuo: el formato con más alcance para negocios físicos.',
      },
      {
        title: 'Cobertura de eventos para redes',
        desc: 'Clips publicables el mismo día del evento, cuando la conversación está viva.',
      },
    ],
  },

  proceso: {
    title: 'Cómo funciona',
    items: [
      {
        title: 'Estrategia',
        desc: 'Definimos objetivo, canales y tipos de pieza. Qué quieres conseguir y quién tiene que verlo.',
      },
      {
        title: 'Rodaje eficiente',
        desc: 'Una jornada de grabación planificada para sacar entre 6 y 10 piezas, no un vídeo suelto.',
      },
      {
        title: 'Edición por lotes',
        desc: 'Cada pieza editada con su gancho, subtítulos y formato nativo. Recibes el lote para revisar de una vez.',
      },
      {
        title: 'Calendario continuo',
        desc: 'Con packs mensuales, el rodaje se repite de forma periódica y tu cuenta nunca se queda sin contenido.',
      },
    ],
  },

  precios: {
    title: 'Cuánto cuesta el contenido para redes',
    text: 'Rangos habituales según volumen y periodicidad:',
    items: [
      ['Pack de 5-10 piezas desde un rodaje', '700€ - 2.000€'],
      ['Pack mensual con rodaje recurrente', '600€ - 1.500€/mes'],
      ['Pieza vertical suelta (grabación + edición)', '150€ - 400€'],
      ['Recorrido FPV vertical de tu espacio', '500€ - 900€'],
      ['Cobertura de evento con clips el mismo día', '400€ - 1.200€'],
    ],
  },

  relacionados: [
    {
      to: '/produccion-audiovisual-galicia/',
      label: 'Producción audiovisual en Galicia',
      desc: 'Para piezas de marca y campañas con producción completa.',
    },
    {
      to: '/edicion-y-postproduccion-de-video/',
      label: 'Edición y postproducción de vídeo',
      desc: 'Si ya grabas tú y solo necesitas edición profesional.',
    },
    {
      to: '/grabacion-con-drones-fpv/',
      label: 'Grabación con drones FPV',
      desc: 'Recorridos inmersivos que disparan el alcance.',
    },
    {
      to: '/dron-para-eventos/',
      label: 'Dron para eventos',
      desc: 'Cobertura aérea de festivales y competiciones.',
    },
    {
      to: '/piloto-de-drones-galicia/',
      label: 'Piloto de drones en Galicia',
      desc: 'Vuelos certificados con permisos y seguro.',
    },
    {
      to: '/dron-para-inmobiliarias/',
      label: 'Dron para inmobiliarias',
      desc: 'Vídeo vertical de propiedades para redes y portales.',
    },
  ],

  faqs,

  cta: {
    title: '¿Tu marca necesita publicar más y mejor?',
    desc: 'Cuéntame qué vendes y en qué canales estás, y te propongo un plan de contenido con presupuesto cerrado.',
  },
}

export default function ContenidoRedesSociales() {
  return <ServiceLanding data={data} />
}
