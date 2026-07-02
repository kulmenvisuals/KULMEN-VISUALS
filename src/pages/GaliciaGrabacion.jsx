import LocalLanding from '../components/LocalLanding.jsx'

const data = {
  seo: {
    title: 'Grabación con drones en Galicia | FPV, cine, eventos y corporativo',
    description:
      'Grabación con drones en Galicia: FPV, cine, eventos corporativos e inmobiliaria. Piloto certificado con base en Pontevedra. Cobertura en toda la comunidad. Presupuesto sin compromiso.',
    pathname: '/galicia/grabacion-con-drones',
  },

  schema: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Grabación con drones en Galicia',
    description:
      'Servicio profesional de grabación con drones en Galicia: FPV, cine, vídeo corporativo, eventos e inmobiliaria. Base en Pontevedra con cobertura en toda la comunidad.',
    provider: {
      '@type': 'Organization',
      name: 'Kulmen Visuals',
      url: 'https://kulmenvisuals.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Pontevedra',
        addressRegion: 'Galicia',
        addressCountry: 'ES',
      },
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Galicia',
    },
    url: 'https://kulmenvisuals.com/galicia/grabacion-con-drones/',
  },

  ciudad: 'Galicia',
  eyebrow: 'Galicia · España',
  h1: 'Grabación con drones en Galicia',
  intro:
    'Servicio profesional de grabación con drones en toda Galicia: FPV, cine, vídeo corporativo, eventos e inmobiliaria. Con base en Pontevedra, cubrimos cualquier punto de la comunidad en menos de 2 horas. Piloto certificado con permisos AESA.',

  zonas: {
    title: 'Cobertura en toda Galicia',
    text: 'Operamos en las cuatro provincias gallegas. Pontevedra, Vigo, A Coruña, Santiago de Compostela, Ourense, Lugo y sus respectivas comarcas. La gran mayoría de proyectos en Galicia no requieren desplazamiento adicional: el coste es el mismo que para cualquier proyecto local.',
    chips: [
      'Pontevedra',
      'Vigo',
      'A Coruña',
      'Santiago de Compostela',
      'Ourense',
      'Lugo',
      'Rías Baixas',
      'Costa da Morte',
      'Ría de Arousa',
      'Ría de Vigo',
    ],
  },

  proyectos: {
    title: 'Tipos de proyectos frecuentes en Galicia',
    items: [
      {
        title: 'Turismo y promoción territorial',
        desc: 'Galicia tiene un paisaje excepcional. Creamos piezas aéreas para destinos turísticos, alojamientos rurales, bodegas y espacios naturales que quieren atraer visitantes con contenido que emociona.',
      },
      {
        title: 'Eventos y festivales',
        desc: 'Galicia es tierra de fiestas, festivales y eventos culturales. Cubrimos desde festivales de música y gastronomía hasta romerías y competiciones deportivas en entornos naturales únicos.',
      },
      {
        title: 'Empresas industriales y PYMES',
        desc: 'El tejido empresarial gallego (construcción, naval, alimentación, energía) necesita vídeos corporativos que muestren su capacidad real. El dron es la herramienta más efectiva para hacerlo.',
      },
    ],
  },

  permisos: {
    title: 'Limitaciones y permisos para volar en Galicia',
    text: 'Galicia tiene particularidades que afectan a la operativa de drones. Conocemos el territorio y gestionamos cada situación:',
    items: [
      'Zonas cercanas al aeropuerto de Vigo (Peinador) y A Coruña con restricciones de espacio aéreo',
      'Parques Naturales (Fragas do Eume, Serra do Courel, Baixa Limia) con regulación específica',
      'Costa y espacio marítimo: coordinación especial en algunas zonas',
      'Zonas urbanas densas de Vigo, A Coruña y Santiago: gestión de permisos caso a caso',
      'Eventos con público: tramitación específica ante AESA con antelación suficiente',
    ],
  },

  casos: {
    title: 'Proyectos en Galicia',
    items: [
      {
        title: 'Enoturismo en Rías Baixas',
        desc: 'Recorrido FPV por una bodega de Albariño en la Ría de Arousa para campaña de enoturismo. Planos aéreos de viñedos y la ría al fondo, flythrough por la bodega con Cinewhoop.',
      },
      {
        title: 'Vídeo corporativo empresa logística en Vigo',
        desc: 'Pieza de presentación para empresa del sector naval-logístico con instalaciones en el puerto de Vigo. Planos aéreos de las naves, plano nadir sobre los muelles y combinación con cámara en tierra.',
      },
      {
        title: 'Evento deportivo en Costa da Morte',
        desc: 'Aftermovie de carrera de montaña en la Costa da Morte con seguimiento de participantes en los tramos más espectaculares del recorrido.',
      },
    ],
  },

  serviciosRelacionados: [
    {
      to: '/piloto-de-drones-galicia/',
      label: 'Piloto de drones en Galicia',
      desc: 'Operadora FPV y estabilizado certificada, con permisos y seguro.',
    },
    {
      to: '/grabacion-con-drones-fpv/',
      label: 'Grabación con drones FPV',
      desc: 'Planos dinámicos e inmersivos para eventos y marcas.',
    },
    {
      to: '/dron-para-cine-y-publicidad/',
      label: 'Dron para cine y publicidad',
      desc: 'Planos cinematográficos para spots y rodajes.',
    },
    {
      to: '/video-corporativo-con-dron/',
      label: 'Vídeo corporativo con dron',
      desc: 'Para empresas, industria e instalaciones en Galicia.',
    },
    {
      to: '/dron-para-eventos/',
      label: 'Grabación con dron para eventos',
      desc: 'Festivales, conciertos y activaciones en Galicia.',
    },
    {
      to: '/dron-para-inmobiliarias/',
      label: 'Dron para inmobiliarias',
      desc: 'Foto y vídeo aéreo de propiedades en Galicia.',
    },
    {
      to: '/pontevedra/grabacion-con-drones/',
      label: 'Grabación con drones en Pontevedra',
      desc: 'Servicio específico para la provincia de Pontevedra.',
    },
  ],

  faqs: [
    {
      question: '¿Dónde tenéis la base en Galicia?',
      answer:
        'Estamos basados en Pontevedra. Desde aquí cubrimos todo el sur de Galicia sin coste adicional de desplazamiento, y llegamos a cualquier punto de la comunidad en menos de 2 horas. Para proyectos en A Coruña o Lugo se añade el desplazamiento al presupuesto.',
    },
    {
      question: '¿Podéis grabar en los parques naturales de Galicia?',
      answer:
        'Depende del parque y de la actividad. Algunos espacios naturales protegidos tienen restricciones específicas para drones. Revisamos la normativa de cada espacio antes de presupuestar y en muchos casos es posible obtener los permisos necesarios con antelación suficiente.',
    },
    {
      question: '¿Tenéis experiencia grabando en la costa gallega?',
      answer:
        'Sí. Galicia tiene una costa espectacular y hemos trabajado en múltiples proyectos en las Rías Baixas, la Costa da Morte y otras zonas costeras. El viento y la humedad son factores que contemplamos en la planificación para garantizar la seguridad del vuelo y la calidad del material.',
    },
    {
      question: '¿Habláis gallego?',
      answer:
        'Sí. Somos de aquí y nos comunicamos perfectamente en gallego y castellano. Si el proyecto es para una institución o empresa que trabaja en gallego, el material puede etiquetarse y entregarse con nomenclatura en gallego sin problema.',
    },
  ],

  cta: {
    title: '¿Necesitas grabación con drones en Galicia?',
    desc: 'Somos de aquí. Conocemos el territorio, las limitaciones y las oportunidades. Cuéntanos tu proyecto.',
  },
}

export default function GaliciaGrabacion() {
  return <LocalLanding data={data} />
}
