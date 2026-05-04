import DronLanding from '../components/DronLanding.jsx'

const data = {
  seo: {
    title: 'Dron para cine y publicidad | Rodajes aéreos profesionales',
    description:
      'Dron para rodaje de cine y publicidad en España. Planos aéreos cinematográficos para spots, campañas y producciones. Piloto certificado con permisos. Presupuesto sin compromiso.',
    pathname: '/dron-para-cine-y-publicidad',
  },

  schema: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Dron para cine y publicidad',
    description:
      'Planos aéreos cinematográficos para spots publicitarios, rodajes de cine y campañas de marca. Piloto certificado con permisos incluidos.',
    provider: {
      '@type': 'Organization',
      name: 'Kulmen Visuals',
      url: 'https://kulmenvisuals.com',
    },
    areaServed: 'ES',
    url: 'https://kulmenvisuals.com/dron-para-cine-y-publicidad/',
  },

  eyebrow: 'Cine y publicidad',
  h1: 'Drones para cine y publicidad',
  intro:
    'Planos aéreos con calidad cinematográfica para spots, rodajes y campañas publicitarias. El dron para cine aporta perspectivas únicas, tomas de establecimiento majestuosas y secuencias dinámicas que elevan cualquier producción audiovisual.',

  hubLink: {
    to: '/servicios-grabacion-con-drones/',
    label: 'Ver todos los servicios',
  },

  problema: {
    title: 'El plano que tu producción necesita y no puedes conseguir de otra forma',
    text: 'En cine y publicidad, el plano aéreo diferencia una producción de alto nivel de una convencional. Un dron profesional permite establecer el escenario con grandiosidad, acompañar al personaje desde el cielo, revelar el entorno de una sola toma o crear una transición visual que conecte secuencias. Con un dron para rodaje de cine bien operado, el resultado compite con producciones de presupuestos muy superiores.',
  },

  paraQuien: {
    title: '¿Para quién es el servicio de dron para cine y publicidad?',
    items: [
      {
        title: 'Productoras y directores de cine',
        desc: 'Para largometrajes, cortometrajes y series que necesitan planos aéreos integrados en la narrativa visual de la obra.',
      },
      {
        title: 'Agencias de publicidad y creativos',
        desc: 'Para spots publicitarios, vídeos de producto y campañas donde el plano aéreo forma parte del guion visual.',
      },
      {
        title: 'Marcas y departamentos de marketing',
        desc: 'Para vídeos de lanzamiento, filmaciones corporativas de alto impacto y contenido premium para web y campañas digitales.',
      },
    ],
  },

  tipos: {
    title: 'Tipos de planos aéreos para cine y publicidad',
    items: [
      {
        title: 'Establishing shot',
        desc: 'Plano panorámico de apertura que sitúa la acción en su contexto geográfico o arquitectónico. Imprescindible en cualquier producción.',
        tags: ['Cine', 'Spots', 'Corporativo'],
      },
      {
        title: 'Travelling aéreo',
        desc: 'Movimiento fluido que acompaña o descubre al sujeto desde el aire. Ideal para escenas de revelación o seguimiento de personajes.',
        tags: ['Narrativa', 'Publicidad', 'Musicales'],
      },
      {
        title: 'Plano FPV dinámico',
        desc: 'Velocidad y energía para secuencias de acción, persecuciones y openings que impactan desde el primer fotograma.',
        tags: ['Acción', 'Spots', 'Tráilers'],
      },
      {
        title: 'Top-down y nadir',
        desc: 'Vistas cenitales que revelan patrones, estructuras y composiciones visuales desde directamente arriba.',
        tags: ['Arte', 'Publicidad', 'Arquitectura'],
      },
    ],
  },

  incluye: {
    title: '¿Qué incluye el servicio de dron para cine y publicidad?',
    items: [
      'Lectura del guion técnico y propuesta de planos aéreos',
      'Scouting aéreo previo si el proyecto lo requiere',
      'Piloto certificado con experiencia en producciones',
      'Revisión del espacio aéreo y gestión de permisos AESA',
      'Grabación en formato RAW o Log para máxima flexibilidad en color',
      'Coordinación con el director de fotografía del proyecto',
      'Integración del material aéreo en el flujo de postproducción',
      'Entrega organizada y etiquetada para facilitar el montaje',
    ],
  },

  permisos: {
    title: 'Operativa y permisos en rodajes profesionales',
    text: 'Los rodajes profesionales a menudo implican localizaciones complejas: espacios con restricciones aéreas, zonas urbanas densas o entornos naturales protegidos. Gestionamos los permisos necesarios ante AESA y coordinamos con las autoridades locales cuando hace falta. Si la localización tiene limitaciones técnicas, proponemos alternativas creativas que consigan el resultado buscado sin comprometer la seguridad ni la viabilidad del rodaje.',
  },

  ejemplos: {
    title: 'Proyectos donde encaja el dron para cine y publicidad',
    items: [
      'Spot de automóvil con seguimiento aéreo de vehículo en carretera de montaña',
      'Apertura de largometraje con plano cenital de ciudad que desciende al protagonista',
      'Campaña de turismo con travellings aéreos sobre costa y paisaje rural',
      'Vídeo de lanzamiento de producto con revealing shot desde gran altura',
      'Secuencia de acción en cortometraje con FPV integrado en la persecución',
      'Videoclip musical con planos aéreos sincronizados al ritmo de la canción',
    ],
  },

  zonas: {
    title: 'Cobertura nacional para rodajes',
    text: 'Disponibles para cualquier localización en España. Con base en Galicia, nos desplazamos a donde requiera el proyecto. El desplazamiento se cierra en el presupuesto inicial para que no haya sorpresas.',
    chips: ['Galicia', 'Madrid', 'Barcelona', 'Sevilla', 'País Vasco', 'Toda España'],
  },

  relatedLinks: [
    {
      to: '/grabacion-con-drones-fpv/',
      label: 'Grabación con drones FPV',
      desc: 'Planos dinámicos e inmersivos para acción y publicidad.',
    },
    {
      to: '/alquiler-drones-con-piloto/',
      label: 'Alquiler de drones con piloto',
      desc: 'Dron + piloto certificado para tus rodajes.',
    },
    {
      to: '/galicia/grabacion-con-drones/',
      label: 'Grabación con drones en Galicia',
      desc: 'Servicio local con conocimiento del territorio.',
    },
  ],

  faqs: [
    {
      question: '¿En qué se diferencia un dron para cine del que se usa en otros servicios?',
      answer:
        'La diferencia no está solo en el equipo, sino en la mentalidad. En cine, el plano aéreo debe integrarse en la narrativa visual: tiene que tener sentido dramático, respetar la dirección de fotografía y coordinarse con el resto del equipo de rodaje. Trabajamos leyendo el guion y proponiendo planos que aporten, no que interrumpan.',
    },
    {
      question: '¿Podéis integraron en el equipo de una producción ya en marcha?',
      answer:
        'Sí. Podemos incorporarnos como operadores de dron a una producción existente, coordinándonos con el director de fotografía y el primer asistente de cámara. Aportamos nuestra propia operativa y nos adaptamos al flujo de trabajo del proyecto.',
    },
    {
      question: '¿Qué resolución y formato de grabación utilizáis?',
      answer:
        'Grabamos en 4K (hasta 60fps) en formatos Log o RAW según el equipo. Esto garantiza la máxima flexibilidad en corrección de color y facilita la integración con el material del resto de cámaras del rodaje.',
    },
    {
      question: '¿Hay zonas donde no podéis grabar?',
      answer:
        'Existen restricciones en determinados espacios aéreos (aeropuertos, zonas militares, parques naturales con regulación específica). Antes de cada rodaje revisamos la viabilidad de la operación. Si hay restricciones, buscamos alternativas técnicas o gestionamos los permisos especiales necesarios.',
    },
  ],

  cta: {
    title: '¿Tienes un rodaje que necesita dron?',
    desc: 'Envíanos el guion técnico o cuéntanos el tipo de planos que buscas y preparamos una propuesta.',
  },
}

export default function DronCinePublicidad() {
  return <DronLanding data={data} />
}
