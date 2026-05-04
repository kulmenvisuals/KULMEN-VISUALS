import DronLanding from '../components/DronLanding.jsx'

const data = {
  seo: {
    title: 'Vídeo corporativo con dron | Empresas, industria e instalaciones',
    description:
      'Vídeo corporativo con dron para empresas, industria e instalaciones. Muestra tus instalaciones desde el aire con calidad profesional. Piloto certificado con permisos.',
    pathname: '/video-corporativo-con-dron',
  },

  schema: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Vídeo corporativo con dron',
    description:
      'Producción de vídeo corporativo e industrial con dron para empresas. Muestra instalaciones, fábricas y sedes con planos aéreos profesionales.',
    provider: {
      '@type': 'Organization',
      name: 'Kulmen Visuals',
      url: 'https://kulmenvisuals.com',
    },
    areaServed: 'ES',
    url: 'https://kulmenvisuals.com/video-corporativo-con-dron/',
  },

  eyebrow: 'Corporativo e industrial',
  h1: 'Vídeo corporativo e industrial con drones',
  intro:
    'Muestra tus instalaciones, planta de producción o sede corporativa desde una perspectiva que transmite escala, capacidad y profesionalidad. El vídeo corporativo con dron es la herramienta más efectiva para comunicar el tamaño y la solidez de tu empresa a clientes, inversores y partners.',

  hubLink: {
    to: '/servicios-grabacion-con-drones/',
    label: 'Ver todos los servicios',
  },

  problema: {
    title: 'El reto de mostrar una empresa desde dentro',
    text: 'Las imágenes corporativas convencionales rara vez transmiten la magnitud real de una empresa. Una planta industrial de 20.000 m², un complejo logístico o una sede moderna pierden su impacto fotografiadas desde el suelo. El vídeo corporativo con dron resuelve este problema: aporta contexto, escala y una perspectiva que genera confianza y credibilidad ante cualquier audiencia.',
  },

  paraQuien: {
    title: '¿Para qué tipo de empresas es el vídeo corporativo con dron?',
    items: [
      {
        title: 'Empresas industriales y manufactura',
        desc: 'Fábricas, naves de producción, parques industriales y complejos logísticos que necesitan mostrar su capacidad y dimensiones reales.',
      },
      {
        title: 'Empresas de construcción e ingeniería',
        desc: 'Seguimiento aéreo de obras, documentación de proyectos de infraestructura y presentación de proyectos terminados a clientes y promotores.',
      },
      {
        title: 'Empresas de servicios y corporaciones',
        desc: 'Sedes corporativas, parques empresariales y instalaciones que buscan comunicar imagen de marca, solidez e internacionalización.',
      },
    ],
  },

  tipos: {
    title: 'Tipos de proyecto de vídeo corporativo con dron',
    items: [
      {
        title: 'Presentación de instalaciones',
        desc: 'Pieza audiovisual que muestra las instalaciones desde el exterior con planos aéreos y planos terrestres integrados.',
        tags: ['B2B', 'Inversores', 'Clientes'],
      },
      {
        title: 'Vídeo de empresa institucional',
        desc: 'Pieza completa que combina entrevistas, planos de trabajo y tomas aéreas para un retrato completo de la compañía.',
        tags: ['Corporativo', 'RRHH', 'Comunicación'],
      },
      {
        title: 'Documentación de obra y progreso',
        desc: 'Seguimiento periódico de construcciones, infraestructuras o proyectos de ingeniería desde el inicio hasta la entrega.',
        tags: ['Construcción', 'Ingeniería', 'Due diligence'],
      },
      {
        title: 'Vídeo para ferias y presentaciones',
        desc: 'Piezas de impacto para stands, pantallas en eventos y presentaciones a clientes con los mejores planos de tus instalaciones.',
        tags: ['Ferias', 'Eventos B2B', 'Ventas'],
      },
    ],
  },

  incluye: {
    title: '¿Qué incluye el servicio de vídeo corporativo con dron?',
    items: [
      'Reunión previa para definir objetivos y mensajes clave',
      'Guion técnico y propuesta de planos aéreos',
      'Revisión del espacio aéreo y permisos necesarios',
      'Jornada de rodaje aéreo y terrestre si se combina',
      'Grabación en 4K con calidad cinematográfica',
      'Montaje, corrección de color y música corporativa',
      'Locución o subtítulos si el proyecto los requiere',
      'Entrega en formatos para web, LinkedIn, YouTube y presentaciones',
    ],
  },

  permisos: {
    title: 'Permisos para volar en zonas industriales',
    text: 'Los polígonos industriales y las instalaciones corporativas a menudo están en zonas con restricciones aéreas específicas o requieren coordinación con el propietario y las autoridades locales. Gestionamos todos los permisos de forma proactiva: revisamos el espacio aéreo, coordinamos con AESA cuando es necesario y notificamos a los responsables de seguridad de tus instalaciones. El rodaje se realiza con total seguridad y dentro del marco legal.',
  },

  ejemplos: {
    title: 'Ejemplos de vídeos corporativos con dron',
    items: [
      'Vídeo de presentación de planta de energía renovable para inversores',
      'Pieza institucional de grupo logístico con 5 centros de distribución en España',
      'Vídeo de seguimiento de obra de parque eólico para memoria anual',
      'Presentación audiovisual de complejo industrial para feria internacional del sector',
      'Vídeo de empresa constructora para candidatura a licitación pública',
      'Pieza de bienvenida a nuevas incorporaciones de empresa con 3 sedes',
    ],
  },

  zonas: {
    title: 'Desplazamiento a cualquier instalación en España',
    text: 'Nos desplazamos a cualquier punto de la Península para proyectos corporativos. El coste de desplazamiento se incluye en el presupuesto cerrado desde el inicio para que tengas el coste total sin sorpresas.',
    chips: ['Galicia', 'Asturias', 'Castilla y León', 'Madrid', 'País Vasco', 'Toda España'],
  },

  relatedLinks: [
    {
      to: '/grabacion-con-drones-fpv/',
      label: 'Grabación con drones FPV',
      desc: 'Para piezas con mayor dinamismo e impacto visual.',
    },
    {
      to: '/alquiler-drones-con-piloto/',
      label: 'Alquiler de drones con piloto',
      desc: 'Servicio completo para equipos de producción internos.',
    },
    {
      to: '/pontevedra/grabacion-con-drones/',
      label: 'Grabación con drones en Pontevedra',
      desc: 'Servicio local para empresas de la zona.',
    },
  ],

  faqs: [
    {
      question: '¿Podéis grabar dentro de nuestras instalaciones cerradas?',
      answer:
        'Sí. Con el Cinewhoop, un dron compacto con protectores de hélice, podemos grabar en interiores: naves, almacenes, centros de datos o cualquier espacio cerrado. Es el equipo ideal cuando se quiere mostrar el interior de una planta sin recurrir a planos terrestres convencionales.',
    },
    {
      question: '¿Necesitamos permisos especiales para grabar en nuestras propias instalaciones?',
      answer:
        'Depende de la ubicación. Si las instalaciones están cerca de un aeropuerto o en una zona con restricciones aéreas, hay que gestionar autorización previa. En otros casos basta con la coordinación interna y la notificación a las autoridades. Nos encargamos de revisar y gestionar esto antes del rodaje.',
    },
    {
      question: '¿Cuánto tiempo lleva producir un vídeo corporativo con dron?',
      answer:
        'Un proyecto estándar se desarrolla en 2 a 4 semanas: una reunión de briefing, preparación y permisos, una o dos jornadas de rodaje y entre 1 y 2 semanas de edición. Si hay fecha límite, se planifica desde el principio.',
    },
    {
      question: '¿Podéis combinar el dron con grabación en tierra con cámara de cine?',
      answer:
        'Sí. La mayoría de los vídeos corporativos combinan planos aéreos con rodaje terrestre: entrevistas con directivos, planos de detalle de maquinaria, trabajadores en acción... Ofrecemos producción completa con ambas modalidades integradas.',
    },
  ],

  cta: {
    title: '¿Quieres mostrar tu empresa desde el aire?',
    desc: 'Cuéntanos qué instalaciones quieres mostrar y a qué audiencia se dirige el vídeo. Te preparamos la propuesta.',
  },
}

export default function VideoCorporativo() {
  return <DronLanding data={data} />
}
