import DronLanding from '../components/DronLanding.jsx'

const data = {
  seo: {
    title: 'Servicios de dron para inmobiliarias | Vídeo y foto aérea de propiedades',
    description:
      'Dron para inmobiliaria: foto y vídeo aéreo de propiedades, parcelas y urbanizaciones en España. Piloto certificado con permisos. Acelera la venta con imágenes únicas.',
    pathname: '/dron-para-inmobiliarias',
  },

  schema: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Dron para inmobiliarias',
    description:
      'Foto y vídeo aéreo con dron para inmobiliarias y promotoras. Muestra propiedades, parcelas y urbanizaciones desde el aire para acelerar la venta.',
    provider: {
      '@type': 'Organization',
      name: 'Kulmen Visuals',
      url: 'https://kulmenvisuals.com',
    },
    areaServed: 'ES',
    url: 'https://kulmenvisuals.com/dron-para-inmobiliarias/',
  },

  eyebrow: 'Inmobiliaria y promotora',
  h1: 'Dron para inmobiliarias',
  intro:
    'Las imágenes aéreas de una propiedad multiplican el interés de los compradores y reducen el tiempo de venta. El dron para inmobiliaria ofrece la perspectiva completa que el comprador necesita: la ubicación, el entorno, la parcela y las dimensiones reales de la propiedad en un solo vídeo de impacto.',

  hubLink: {
    to: '/servicios-grabacion-con-drones/',
    label: 'Ver todos los servicios',
  },

  problema: {
    title: 'Por qué las fotos de suelo no son suficientes para vender propiedades',
    text: 'Un comprador de inmueble no solo evalúa el interior. Quiere saber dónde está, qué hay alrededor, cuánto mide la parcela, cómo es el acceso y qué vistas tiene. Todo esto es imposible de mostrar con fotografía convencional. El dron para inmobiliaria resuelve estas preguntas en segundos: una secuencia aérea comunica la ubicación, el entorno y el potencial de una propiedad mejor que cualquier descripción textual.',
  },

  paraQuien: {
    title: '¿Para quién es el servicio de dron para inmobiliaria?',
    items: [
      {
        title: 'Agencias inmobiliarias',
        desc: 'Para diferenciar los anuncios premium en Idealista, Fotocasa y portales internacionales. Las propiedades con vídeo aéreo generan más clics y más contactos.',
      },
      {
        title: 'Promotoras residenciales',
        desc: 'Para documentar el avance de obra, presentar la urbanización terminada a compradores e inversores y crear el material de comercialización.',
      },
      {
        title: 'Propietarios de propiedades singulares',
        desc: 'Fincas, villas, casas de lujo o propiedades con terreno donde el valor diferencial no se aprecia desde el suelo.',
      },
    ],
  },

  tipos: {
    title: 'Servicios de dron para el sector inmobiliario',
    items: [
      {
        title: 'Vídeo aéreo de propiedad',
        desc: 'Secuencia de vídeo que muestra la propiedad, la parcela y el entorno desde diferentes alturas y ángulos. El formato más efectivo para portales y web.',
        tags: ['Viviendas', 'Fincas', 'Villas'],
      },
      {
        title: 'Fotografía aérea',
        desc: 'Imágenes estáticas de alta resolución para portales y materiales de venta. Imprescindibles para propiedades con terreno o vistas especiales.',
        tags: ['Portales', 'Catálogos', 'Marketing'],
      },
      {
        title: 'Flythrough inmersivo',
        desc: 'Recorrido fluido que pasa del exterior al interior (si se combina con cámara en tierra) creando una visita virtual de alto impacto.',
        tags: ['Lujo', 'Alquiler vacacional', 'Portales premium'],
      },
      {
        title: 'Seguimiento de obra',
        desc: 'Documentación periódica del avance de la construcción para promotoras, bancos e inversores.',
        tags: ['Obra nueva', 'Promotoras', 'Due diligence'],
      },
    ],
  },

  incluye: {
    title: '¿Qué incluye el servicio de dron para inmobiliaria?',
    items: [
      'Revisión previa de la propiedad y planificación de planos',
      'Gestión de permisos de vuelo si la zona lo requiere',
      'Sesión de fotografía y/o vídeo aéreo',
      'Selección y edición del material',
      'Corrección de color e iluminación de las imágenes',
      'Entrega en formatos para portales (máx. calidad permitida)',
      'Exportación de vídeo para web, YouTube e Instagram',
      'Versión corta para redes sociales si se solicita',
    ],
  },

  permisos: {
    title: 'Permisos de vuelo para propiedades y zonas residenciales',
    text: 'Las zonas residenciales y urbanas tienen restricciones de vuelo que varían según la proximidad a aeropuertos, la densidad de población y otros factores. Revisamos el espacio aéreo antes de cada sesión. En muchos casos residenciales el vuelo es directo y no requiere permisos adicionales. En zonas con restricciones, gestionamos la coordinación necesaria para que la sesión pueda realizarse con total legalidad.',
  },

  ejemplos: {
    title: 'Propiedades donde encaja el dron',
    items: [
      'Villa con piscina y jardín en zona costera: vídeo aéreo para portal de lujo',
      'Parcela rústica de 5 hectáreas en venta: imágenes aéreas que muestran los límites y el entorno',
      'Urbanización nueva de 80 viviendas: material de presentación a compradores e inversores',
      'Ático con terraza en ciudad: planos aéreos que muestran las vistas desde la terraza',
      'Finca agrícola con nave: vídeo completo exterior + interior para venta',
      'Seguimiento mensual de construcción de edificio residencial para promotora',
    ],
  },

  zonas: {
    title: 'Servicio en Galicia y toda España',
    text: 'Con base en Pontevedra, cubrimos toda Galicia y nos desplazamos a cualquier provincia de España para propiedades que lo justifiquen. Coste de desplazamiento cerrado en el presupuesto.',
    chips: ['Galicia', 'Asturias', 'Cantabria', 'Madrid', 'Costa mediterránea', 'Toda España'],
  },

  relatedLinks: [
    {
      to: '/alquiler-drones-con-piloto/',
      label: 'Alquiler de drones con piloto',
      desc: 'Para agencias con equipo de producción propio.',
    },
    {
      to: '/pontevedra/grabacion-con-drones/',
      label: 'Grabación con drones en Pontevedra',
      desc: 'Servicio local para inmobiliarias de la provincia.',
    },
    {
      to: '/galicia/grabacion-con-drones/',
      label: 'Grabación con drones en Galicia',
      desc: 'Cobertura en toda la comunidad gallega.',
    },
  ],

  faqs: [
    {
      question: '¿Cuánto mejora la venta de una propiedad con vídeo aéreo?',
      answer:
        'Los estudios del sector inmobiliario indican que los anuncios con vídeo aéreo reciben entre un 40% y un 70% más de visitas en portales. Para propiedades con terreno, vistas o ubicación especial, el diferencial es aún mayor porque el comprador puede evaluar lo que más valora antes de desplazarse.',
    },
    {
      question: '¿Podéis hacer también las fotos del interior?',
      answer:
        'Nos especializamos en producción aérea. Para el interior podemos coordinarnos con un fotógrafo de interiores o encargarnos nosotros con cámara terrestre si el proyecto lo incluye. Consulta para un presupuesto combinado.',
    },
    {
      question: '¿Cuánto tiempo lleva una sesión de dron para una propiedad?',
      answer:
        'Una sesión estándar (vídeo + foto aérea) de una vivienda o finca media dura entre 1 y 2 horas de vuelo. La edición y entrega del material suele estar lista en 2-3 días laborables.',
    },
    {
      question: '¿Podéis grabar propiedades en zonas de costa con acceso difícil?',
      answer:
        'Sí. El dron es especialmente útil en propiedades costeras o con acceso complicado. Podemos mostrar la propiedad desde el mar, el acantilado o cualquier perspectiva que sería imposible con cámara convencional.',
    },
  ],

  cta: {
    title: '¿Quieres mostrar tu propiedad desde el aire?',
    desc: 'Dinos la dirección de la propiedad y qué quieres mostrar. Te preparamos el presupuesto en 24 horas.',
  },
}

export default function DronInmobiliarias() {
  return <DronLanding data={data} />
}
