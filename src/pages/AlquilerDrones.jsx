import DronLanding from '../components/DronLanding.jsx'

const data = {
  seo: {
    title: 'Alquiler de drones con piloto | Servicio profesional con permisos',
    description:
      'Alquiler de drones con piloto profesional en España. Dron + piloto certificado con permisos AESA incluidos para rodajes, eventos y empresas. Presupuesto sin compromiso.',
    pathname: '/alquiler-drones-con-piloto',
  },

  schema: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Alquiler de drones con piloto',
    description:
      'Servicio de alquiler de drones con piloto profesional certificado. Permisos incluidos para rodajes, eventos y proyectos empresariales en España.',
    provider: {
      '@type': 'Organization',
      name: 'Kulmen Visuals',
      url: 'https://kulmenvisuals.com',
    },
    areaServed: 'ES',
    url: 'https://kulmenvisuals.com/alquiler-drones-con-piloto/',
  },

  eyebrow: 'Alquiler con piloto',
  h1: 'Alquiler de drones con piloto profesional',
  intro:
    'El alquiler de drones con piloto es la solución cuando necesitas un dron operativo desde el primer minuto, con todas las garantías legales y técnicas cubiertas. Proporcionamos el equipo y el piloto certificado para integrarse en tu producción o proyecto, sin que tengas que preocuparte de permisos, seguros ni formación.',

  hubLink: {
    to: '/servicios-grabacion-con-drones/',
    label: 'Ver todos los servicios',
  },

  problema: {
    title: 'Tener el dron no es suficiente. Hace falta saber volarlo y hacerlo legalmente',
    text: 'Muchas productoras, agencias y empresas necesitan dron para un proyecto puntual pero no tienen piloto propio o no quieren gestionar la complejidad regulatoria. El alquiler de drones con piloto resuelve esto en una sola contratación: aportamos el equipo, la certificación, los permisos, el seguro y la experiencia de vuelo. Tú te centras en el proyecto; nosotros nos encargamos de que el dron vuele cuando tiene que volar.',
  },

  paraQuien: {
    title: '¿Para quién es el alquiler de drones con piloto?',
    items: [
      {
        title: 'Productoras audiovisuales',
        desc: 'Que necesitan integrar grabación aérea en un rodaje ya planificado sin añadir personal fijo. El piloto se incorpora al equipo como cualquier otro técnico.',
      },
      {
        title: 'Agencias de comunicación y marketing',
        desc: 'Para proyectos puntuales de cliente donde el dron forma parte de la propuesta creativa pero no justifica tener un piloto en plantilla.',
      },
      {
        title: 'Empresas y departamentos internos',
        desc: 'Que necesitan documentar instalaciones, eventos corporativos o proyectos de forma periódica con un servicio flexible y facturable por proyecto.',
      },
    ],
  },

  tipos: {
    title: 'Equipos disponibles para alquiler con piloto',
    items: [
      {
        title: 'DJI Mini 4 Pro + piloto',
        desc: 'Planos aéreos estables y limpios para exteriores. Ideal para establecer contexto, paisaje y arquitectura con calidad cinematográfica.',
        tags: ['Exterores', 'Inmobiliaria', 'Turismo'],
      },
      {
        title: 'FPV Mark 5 + piloto',
        desc: 'Velocidad, acrobacias y planos dinámicos para exteriores. Para spots, eventos y contenido que necesita impacto y energía.',
        tags: ['Publicidad', 'Eventos', 'Deporte'],
      },
      {
        title: 'Cinewhoop (interior) + piloto',
        desc: 'Vuelo en interiores con máxima seguridad. Naves, eventos en recinto cubierto, edificios y espacios reducidos.',
        tags: ['Interiores', 'Eventos', 'Corporativo'],
      },
    ],
  },

  incluye: {
    title: '¿Qué incluye el alquiler de drones con piloto?',
    items: [
      'Piloto de drones certificado (A2 CofC y STS según la operación)',
      'Dron profesional según las necesidades del proyecto',
      'Revisión del espacio aéreo antes del vuelo',
      'Gestión de permisos y coordinación con AESA si es necesario',
      'Seguro de responsabilidad civil de la operación',
      'Comunicación con la producción antes y durante el rodaje',
      'Material bruto entregado en el formato acordado',
      'Disponibilidad para jornadas de varias horas o días completos',
    ],
  },

  permisos: {
    title: 'Certificaciones y permisos incluidos',
    text: 'El piloto cuenta con las certificaciones exigidas por AESA para operar en las categorías Open y Specific del reglamento europeo de UAS. Antes de cada operación se revisa el espacio aéreo, se verifica la idoneidad de la zona y se gestionan las autorizaciones necesarias. El servicio cumple con el Reglamento de Ejecución (UE) 2019/947 y la normativa española vigente.',
  },

  ejemplos: {
    title: 'Situaciones donde se contrata alquiler de dron con piloto',
    items: [
      'Productora que necesita piloto de dron FPV para una semana de rodaje publicitario',
      'Agencia que incluye dron en la propuesta de un evento de cliente sin tener equipo propio',
      'Empresa industrial que documenta trimestralmente sus instalaciones con dron',
      'Director de fotografía que busca un segundo operador de cámara con especialidad aérea',
      'Festival que necesita cobertura aérea durante los tres días del evento',
      'Promotora que requiere seguimiento mensual de obra en tres localizaciones',
    ],
  },

  zonas: {
    title: 'Disponibles para desplazamiento en toda España',
    text: 'El servicio de alquiler con piloto está disponible para proyectos en cualquier punto de España. El coste de desplazamiento y dietas se incluye en el presupuesto cerrado.',
    chips: ['Galicia', 'Asturias', 'Madrid', 'Barcelona', 'País Vasco', 'Toda España'],
  },

  relatedLinks: [
    {
      to: '/grabacion-con-drones-fpv/',
      label: 'Grabación con drones FPV',
      desc: 'Servicio completo con producción y edición incluida.',
    },
    {
      to: '/dron-para-cine-y-publicidad/',
      label: 'Dron para cine y publicidad',
      desc: 'Integración en rodajes profesionales.',
    },
    {
      to: '/servicios-grabacion-con-drones/',
      label: 'Ver todos los servicios',
      desc: 'Todos los servicios de grabación con drones.',
    },
  ],

  faqs: [
    {
      question: '¿Cuál es la diferencia entre alquilar solo el dron y alquilar dron con piloto?',
      answer:
        'En España, para volar un dron con fines profesionales es obligatorio contar con un piloto certificado, un seguro específico y gestionar los permisos correspondientes. El alquiler de solo el equipo no incluye nada de esto. El alquiler con piloto incluye el dron, el operador certificado, los permisos y el seguro: todo lo necesario para volar legalmente desde el minuto uno.',
    },
    {
      question: '¿Puedo contratar el piloto solo para unas horas?',
      answer:
        'Sí. Trabajamos por jornadas completas o medias jornadas según la duración del proyecto. Para proyectos muy cortos (menos de 2 horas de vuelo efectivo) también podemos adaptarnos, aunque hay un mínimo de facturación por desplazamiento y puesta en marcha.',
    },
    {
      question: '¿El piloto puede coordinarse con el director de fotografía de la producción?',
      answer:
        'Absolutamente. Es habitual que el operador de dron trabaje en coordinación directa con el DP para que los planos aéreos se integren coherentemente con el estilo visual del proyecto. Pedimos un briefing previo o una lectura del guion para anticipar los planos necesarios.',
    },
    {
      question: '¿Qué pasa si el tiempo no acompaña en el día del rodaje?',
      answer:
        'El viento, la lluvia y la visibilidad reducida afectan a la operativa. Acordamos siempre un día alternativo en el presupuesto. Si las condiciones meteorológicas no permiten el vuelo de forma segura, reagendamos sin coste adicional.',
    },
    {
      question: '¿Podéis volar en zonas con restricciones sin problema?',
      answer:
        'Gestionamos los permisos necesarios para casi cualquier localización. Algunas zonas (como el perímetro de aeropuertos o el espacio aéreo controlado de ciertas ciudades) requieren tramitación específica con más tiempo. Comunicando la localización con suficiente antelación, resolvemos la mayoría de situaciones.',
    },
  ],

  cta: {
    title: '¿Necesitas un piloto de drones para tu proyecto?',
    desc: 'Cuéntanos las fechas, la localización y el tipo de proyecto. Te confirmamos disponibilidad y presupuesto en menos de 24 horas.',
  },
}

export default function AlquilerDrones() {
  return <DronLanding data={data} />
}
