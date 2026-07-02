import DronLanding from '../components/DronLanding.jsx'

const data = {
  seo: {
    title: 'Grabación con dron para eventos | Festivales, conciertos y marcas',
    description:
      'Grabación con dron para eventos en España: festivales, conciertos, activaciones de marca y conferencias. FPV y cinematográfico. Piloto certificado con permisos.',
    pathname: '/dron-para-eventos',
  },

  schema: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Grabación con dron para eventos',
    description:
      'Cobertura aérea con dron para festivales, conciertos, eventos corporativos y activaciones de marca. Aftermovies y contenido en directo.',
    provider: {
      '@type': 'Organization',
      name: 'Kulmen Visuals',
      url: 'https://kulmenvisuals.com',
    },
    areaServed: 'ES',
    url: 'https://kulmenvisuals.com/dron-para-eventos/',
  },

  eyebrow: 'Eventos y festivales',
  h1: 'Grabación con dron para eventos',
  intro:
    'La grabación con dron para eventos captura lo que ninguna cámara desde el suelo puede mostrar: la magnitud del evento, la energía de la multitud y los momentos que definen la experiencia. Desde festivales de música hasta conferencias empresariales, el dron convierte la cobertura de tu evento en contenido que prolonga su impacto en el tiempo.',

  hubLink: {
    to: '/servicios-grabacion-con-drones/',
    label: 'Ver todos los servicios',
  },

  problema: {
    title: 'El evento termina, el contenido debe perdurar',
    text: 'Un evento sin documentación audiovisual de calidad pierde la mitad de su valor. Las fotos y los vídeos de suelo no comunican la escala, la energía ni el ambiente. La grabación con dron para eventos resuelve esto: aporta perspectiva, captura la masa en movimiento, muestra el escenario en su contexto y crea imágenes que siguen generando impacto semanas después de que el evento haya concluido.',
  },

  paraQuien: {
    title: '¿Para qué tipo de eventos es el servicio de dron?',
    items: [
      {
        title: 'Festivales de música y cultura',
        desc: 'Festivales de música, culturales y gastronómicos que quieren un aftermovie de impacto y contenido para comunicar la próxima edición.',
      },
      {
        title: 'Eventos corporativos y de marca',
        desc: 'Presentaciones de producto, activaciones, team buildings y convenciones empresariales donde la imagen de marca es esencial.',
      },
      {
        title: 'Eventos deportivos y competiciones',
        desc: 'Carreras, competiciones y eventos de deporte al aire libre donde el dron sigue la acción desde una perspectiva única.',
      },
    ],
  },

  tipos: {
    title: 'Tipos de cobertura con dron para eventos',
    items: [
      {
        title: 'Planos generales del evento',
        desc: 'Tomas aéreas que muestran el alcance, el aforo y la puesta en escena del evento desde perspectivas imposibles para cámaras terrestres.',
        tags: ['Festivales', 'Conferencias', 'Aftermovie'],
      },
      {
        title: 'FPV entre el público y el escenario',
        desc: 'El Cinewhoop vuela entre personas, sobre el escenario y por los espacios del evento para crear planos inmersivos llenos de energía.',
        tags: ['FPV', 'Conciertos', 'Activaciones'],
      },
      {
        title: 'Seguimiento de acción en directo',
        desc: 'Dron FPV siguiendo a deportistas, artistas o participantes durante el evento para capturar el movimiento en tiempo real.',
        tags: ['Deportes', 'Acción', 'En directo'],
      },
    ],
  },

  incluye: {
    title: '¿Qué incluye el servicio de dron para eventos?',
    items: [
      'Reunión previa para conocer el programa y los momentos clave',
      'Revisión del recinto y gestión de permisos de vuelo',
      'Piloto certificado con experiencia en eventos masivos',
      'Cobertura durante las horas acordadas del evento',
      'Material en bruto organizado y etiquetado por momento',
      'Opción de montaje de aftermovie o clips para redes',
      'Entrega en formatos para YouTube, Instagram y web',
      'Versiones verticales (9:16) para Reels y Stories si se incluye',
    ],
  },

  permisos: {
    title: 'Permisos para volar en eventos con público',
    text: 'Volar con dron sobre concentraciones de personas requiere una gestión cuidadosa de los permisos. Coordinamos con la organización del evento y con AESA para obtener las autorizaciones necesarias. Cuando se utilizan Cinewhoops en interiores o seminteriores, el proceso es distinto y más ágil. En todos los casos, la seguridad del público y el cumplimiento normativo son la prioridad.',
  },

  ejemplos: {
    title: 'Ejemplos de eventos donde hemos trabajado con drones',
    items: [
      'Aftermovie de festival de música al aire libre con FPV sobre el público y el escenario',
      'Cobertura aérea de carrera de montaña con seguimiento de participantes',
      'Vídeo de activación de marca en espacio urbano con planos aéreos de los asistentes',
      'Documentación de conferencia empresarial en recinto ferial con planos generales',
      'Clip para redes de evento gastronómico con FPV por los puestos y la zona de degustación',
      'Seguimiento de caravana de vehículos en evento de automoción',
    ],
  },

  zonas: {
    title: 'Disponibles para tu evento en toda España',
    text: 'Cubrimos eventos en cualquier punto de España. Nos incorporamos al equipo de producción del evento o trabajamos de forma independiente. El desplazamiento se incluye en el presupuesto.',
    chips: ['Galicia', 'Madrid', 'Barcelona', 'Sevilla', 'Valencia', 'Toda España'],
  },

  relatedLinks: [
    {
      to: '/fotografia-y-video-de-bodas/',
      label: 'Fotografía y vídeo de bodas',
      desc: 'FPV y entrega de anillos con dron para tu boda.',
    },
    {
      to: '/grabacion-con-drones-fpv/',
      label: 'Grabación con drones FPV',
      desc: 'FPV entre el público y el escenario.',
    },
    {
      to: '/dron-para-cine-y-publicidad/',
      label: 'Dron para cine y publicidad',
      desc: 'Para activaciones y contenido de marca de alto nivel.',
    },
    {
      to: '/galicia/grabacion-con-drones/',
      label: 'Grabación con drones en Galicia',
      desc: 'Cobertura de eventos en toda la comunidad.',
    },
  ],

  faqs: [
    {
      question: '¿Se puede volar con dron sobre el público en un festival?',
      answer:
        'Con los permisos adecuados, sí. AESA permite operaciones sobre aglomeraciones con operadores certificados y bajo condiciones específicas. Para interiores o vuelos muy cercanos al público usamos el Cinewhoop, que por su tamaño y protectores de hélice es mucho más seguro en estas situaciones.',
    },
    {
      question: '¿Cuánto tiempo antes del evento hay que contratar el servicio?',
      answer:
        'Lo antes posible, especialmente para eventos grandes. Los permisos de vuelo sobre concentraciones de personas requieren tiempo de tramitación. Para eventos en espacios abiertos sin restricciones, con 2-3 semanas de antelación es suficiente. Para eventos en zonas restringidas o con muchas personas, recomendamos 4-6 semanas.',
    },
    {
      question: '¿Podéis encargaron también del aftermovie completo?',
      answer:
        'Sí. Ofrecemos cobertura completa del evento (dron + cámara en tierra) y producción del aftermovie: montaje, color, música con licencia y exportación por formatos. También podemos generar clips cortos para redes durante o justo después del evento.',
    },
    {
      question: '¿El dron puede grabar durante la noche o con poca luz?',
      answer:
        'Las cámaras actuales de nuestros drones graban bien en condiciones de luz reducida. Para conciertos nocturnos o eventos con iluminación artificial, el resultado depende de la calidad de la iluminación del escenario. En estas situaciones combinamos con la cámara terrestre para asegurar material de calidad en todos los momentos del evento.',
    },
  ],

  cta: {
    title: '¿Tienes un evento próximo?',
    desc: 'Cuéntanos el tipo de evento, la fecha y la localización. Gestionamos permisos y te damos presupuesto cerrado.',
  },
}

export default function DronEventos() {
  return <DronLanding data={data} />
}
