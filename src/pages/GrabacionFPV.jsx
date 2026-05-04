import DronLanding from '../components/DronLanding.jsx'

const data = {
  seo: {
    title: 'Grabación con drones FPV | Vuelos inmersivos para publicidad y eventos',
    description:
      'Grabación con drones FPV en España: planos dinámicos e inmersivos para publicidad, eventos y marcas. Piloto certificado, Cinewhoop para interiores. Presupuesto sin compromiso.',
    pathname: '/grabacion-con-drones-fpv',
  },

  schema: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Grabación con drones FPV',
    description:
      'Grabación aérea con drones FPV: planos dinámicos e inmersivos para publicidad, eventos y rodajes. Piloto certificado con permisos.',
    provider: {
      '@type': 'Organization',
      name: 'Kulmen Visuals',
      url: 'https://kulmenvisuals.com',
    },
    areaServed: 'ES',
    url: 'https://kulmenvisuals.com/grabacion-con-drones-fpv/',
  },

  eyebrow: 'Drones FPV',
  h1: 'Grabación con drones FPV',
  intro:
    'Planos inmersivos y dinámicos que ninguna otra cámara puede ofrecer. La grabación con drones FPV transforma cualquier rodaje en una experiencia visual de alto impacto: persecuciones, recorridos fluidos, interiores complejos y movimientos imposibles.',

  hubLink: {
    to: '/servicios-grabacion-con-drones/',
    label: 'Ver todos los servicios',
  },

  problema: {
    title: 'Cuando el vídeo convencional no es suficiente',
    text: 'Los planos estáticos y las panorámicas aéreas clásicas ya no sorprenden. Los drones FPV resuelven el problema de crear contenido que retiene la atención: generan movimiento continuo, perspectivas cercanas al suelo, recorridos dentro de edificios y acelerones que ningún otro equipo puede capturar. Si buscas diferenciarte y generar impacto real en tu audiencia, la grabación con drones FPV es la herramienta.',
  },

  paraQuien: {
    title: '¿Para quién es la grabación con drones FPV?',
    items: [
      {
        title: 'Marcas y agencias de publicidad',
        desc: 'Para spots, campañas y contenido de marca que necesitan un estilo visual diferenciador. El FPV aporta energía, movimiento y una estética propia que conecta con audiencias jóvenes.',
      },
      {
        title: 'Organizadores de eventos',
        desc: 'Festivales, conciertos, competiciones y activaciones de marca. El dron FPV captura la energía del evento desde dentro, no solo desde arriba.',
      },
      {
        title: 'Productoras y directores de cine',
        desc: 'Para secuencias de acción, persecuciones y travellings imposibles. El FPV reemplaza equipos de cámara complejos y costosos con resultados igual de impactantes.',
      },
    ],
  },

  tipos: {
    title: 'Tipos de vuelo FPV',
    items: [
      {
        title: 'FPV freestyle',
        desc: 'Vuelos acrobáticos y dinámicos para exteriores. Velocidad, giros y movimientos agresivos que generan adrenalina y ritmo visual.',
        tags: ['Exteriores', 'Acción', 'Publicidad'],
      },
      {
        title: 'Cinewhoop (interior)',
        desc: 'Drones compactos con hélices protegidas para volar en interiores: naves industriales, estadios, salas de eventos y espacios reducidos.',
        tags: ['Interiores', 'Eventos', 'Corporativo'],
      },
      {
        title: 'FPV long range',
        desc: 'Vuelos suaves y continuos de larga distancia para recorridos de paisaje, arquitectura y seguimiento de vehículos o deportistas.',
        tags: ['Exteriores', 'Turismo', 'Arquitectura'],
      },
    ],
  },

  incluye: {
    title: '¿Qué incluye el servicio de grabación FPV?',
    items: [
      'Planificación del vuelo y storyboard de planos',
      'Revisión del espacio aéreo y gestión de permisos',
      'Piloto FPV certificado con experiencia en rodajes',
      'Grabación en exterior e interior según el proyecto',
      'Material en RAW o H.265 para máxima calidad en edición',
      'Estabilización de imagen en postproducción',
      'Entrega en formatos para web, redes y difusión',
      'Versiones adaptadas por formato (16:9, 9:16)',
    ],
  },

  permisos: {
    title: 'Permisos y operativa legal en España',
    text: 'Todos los vuelos se realizan dentro del marco regulatorio vigente en España (RD 1036/2017 y reglamentos UAS europeos). Revisamos el espacio aéreo, coordinamos con AESA cuando es necesario y gestionamos la documentación de forma transparente. Si un vuelo no es viable en una zona concreta, proponemos alternativas técnicas para conseguir el resultado sin poner en riesgo la operación ni el rodaje.',
  },

  ejemplos: {
    title: 'Ejemplos de proyectos con dron FPV',
    items: [
      'Spot publicitario para marca de ropa deportiva con persecución de atleta en exterior',
      'Aftermovie de festival de música con vuelo dentro de la zona de concierto (Cinewhoop)',
      'Recorrido inmersivo por una bodega para campaña de enoturismo',
      'Secuencia de apertura para cortometraje con flythrough de edificio industrial',
      'Contenido para redes de una competición de MTB con seguimiento de ciclistas',
      'Vídeo corporativo de empresa logística con vuelo por interior de nave',
    ],
  },

  zonas: {
    title: 'Zona de operación',
    text: 'Con base en Pontevedra (Galicia), operamos en toda España para proyectos que lo requieran. El desplazamiento se incluye en el presupuesto de forma transparente desde el inicio.',
    chips: ['Galicia', 'Asturias', 'Madrid', 'Cataluña', 'País Vasco', 'Resto de España'],
  },

  relatedLinks: [
    {
      to: '/dron-para-cine-y-publicidad/',
      label: 'Dron para cine y publicidad',
      desc: 'Planos aéreos estabilizados para rodajes y campañas.',
    },
    {
      to: '/dron-para-eventos/',
      label: 'Grabación con dron para eventos',
      desc: 'Cobertura aérea de festivales, conciertos y activaciones.',
    },
    {
      to: '/alquiler-drones-con-piloto/',
      label: 'Alquiler de drones con piloto',
      desc: 'Servicio completo para productoras y agencias.',
    },
  ],

  faqs: [
    {
      question: '¿Cuál es la diferencia entre un dron FPV y un dron cinematográfico convencional?',
      answer:
        'El dron convencional (como el DJI Mini 4 Pro) ofrece planos estables, lentos y panorámicos, ideales para establecer contexto o mostrar paisajes. El FPV permite velocidad, acrobacias, persecuciones y recorridos inmersivos que generan un impacto visual completamente diferente. Muchos proyectos combinan ambos tipos según las necesidades de cada secuencia.',
    },
    {
      question: '¿Puede volar el FPV en interiores?',
      answer:
        'Sí. Con el Cinewhoop (GEPRC Cinelog 30 V3), que incorpora protectores de hélices, podemos grabar en interiores: naves industriales, salas de eventos, estadios cubiertos, restaurantes y cualquier espacio reducido donde no entraría un dron convencional.',
    },
    {
      question: '¿Cuánto tiempo dura una jornada de grabación FPV?',
      answer:
        'Depende del proyecto. Una sesión estándar incluye entre 2 y 5 horas de vuelo efectivo más tiempo de preparación y traslados. Para proyectos complejos con múltiples localizaciones o muchos planos planificados, puede extenderse a varios días.',
    },
    {
      question: '¿Se puede grabar en 4K con drones FPV?',
      answer:
        'Sí. Nuestros drones FPV graban en 4K a 60fps, lo que permite tanto entrega en alta resolución como ralentización en postproducción. La calidad final depende también del trabajo de color y estabilización en edición.',
    },
    {
      question: '¿Ofrecéis solo grabación o también edición del material FPV?',
      answer:
        'Ofrecemos las dos opciones. Podemos entregar el material en bruto para que lo edite tu equipo, o encargarnos de la postproducción completa: estabilización, corrección de color, montaje, música y exportación por formatos.',
    },
  ],

  cta: {
    title: '¿Necesitas grabación con drones FPV?',
    desc: 'Cuéntanos el proyecto y te preparamos una propuesta con planos, presupuesto y calendario.',
  },
}

export default function GrabacionFPV() {
  return <DronLanding data={data} />
}
