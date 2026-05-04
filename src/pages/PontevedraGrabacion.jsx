import LocalLanding from '../components/LocalLanding.jsx'

const data = {
  seo: {
    title: 'Grabación con drones en Pontevedra | FPV, rodajes y empresa',
    description:
      'Grabación con drones en Pontevedra y provincia: FPV, vídeo corporativo, eventos e inmobiliaria. Base local, respuesta en 24 horas. Piloto certificado con permisos AESA.',
    pathname: '/pontevedra/grabacion-con-drones',
  },

  schema: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Grabación con drones en Pontevedra',
    description:
      'Servicio local de grabación con drones en Pontevedra y provincia. FPV, cine, vídeo corporativo, eventos e inmobiliaria. Piloto certificado con base en la ciudad.',
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
      name: 'Pontevedra',
    },
    url: 'https://kulmenvisuals.com/pontevedra/grabacion-con-drones/',
  },

  ciudad: 'Pontevedra',
  eyebrow: 'Pontevedra · Galicia',
  h1: 'Grabación con drones en Pontevedra',
  intro:
    'Servicio de grabación con drones en Pontevedra y su provincia: FPV, cine, vídeo corporativo, eventos e inmobiliaria. Base local en la ciudad con disponibilidad inmediata. Piloto certificado con permisos AESA para cualquier tipo de proyecto.',

  zonas: {
    title: 'Zona de cobertura en Pontevedra',
    text: 'Cubrimos toda la provincia de Pontevedra sin coste de desplazamiento adicional. Desde la capital hasta las Rías Baixas, el interior y la costa norte. La cercanía permite reaccionar rápido ante cambios de fecha o condiciones meteorológicas.',
    chips: [
      'Pontevedra ciudad',
      'Vigo',
      'Cangas',
      'Sanxenxo',
      'O Grove',
      'Cambados',
      'Caldas de Reis',
      'Lalín',
      'A Guarda',
      'Tui',
      'Ría de Pontevedra',
      'Ría de Vigo',
    ],
  },

  proyectos: {
    title: 'Proyectos frecuentes en Pontevedra',
    items: [
      {
        title: 'Turismo en las Rías Baixas',
        desc: 'Pontevedra es el corazón de las Rías Baixas. Trabajamos con alojamientos, bodegas, destinos turísticos y empresas de turismo activo que necesitan contenido audiovisual de calidad para atraer visitantes.',
      },
      {
        title: 'Inmobiliaria y promotoras',
        desc: 'La provincia tiene una actividad inmobiliaria intensa, especialmente en zonas costeras y la periferia de Vigo. Producimos foto y vídeo aéreo de propiedades para acelerar la venta o el alquiler.',
      },
      {
        title: 'Empresa y sector náutico-industrial',
        desc: 'Vigo y su entorno concentran empresas del sector naval, logístico y agroalimentario. Producimos vídeos corporativos con dron para mostrar instalaciones y capacidad productiva.',
      },
    ],
  },

  permisos: {
    title: 'Permisos y limitaciones en Pontevedra',
    text: 'La provincia de Pontevedra tiene características específicas que condicionan la operativa de drones. Conocemos cada zona y gestionamos proactivamente:',
    items: [
      'Zona de influencia del aeropuerto de Vigo (Peinador): espacio aéreo controlado que requiere coordinación con AENA',
      'Espacio marítimo y litoral: coordinación con Capitanía Marítima en operaciones sobre el mar',
      'Centro histórico de Pontevedra: ciudad peatonal con restricciones de vuelo en zona urbana densa',
      'Parque Natural de Corrubedo y otros espacios protegidos: tramitación específica',
      'Eventos con público en la Alameda o el Pazo da Cultura: permisos municipales y AESA',
    ],
  },

  casos: {
    title: 'Trabajos realizados en Pontevedra',
    items: [
      {
        title: 'Vídeo inmobiliario en zona costera',
        desc: 'Grabación aérea de villa con vistas a la ría para agencia inmobiliaria de lujo en Sanxenxo. Planos de la propiedad, acceso y entorno para portal internacional.',
      },
      {
        title: 'Aftermovie de evento deportivo en Pontevedra',
        desc: 'Cobertura completa con dron y cámara en tierra de competición de kayak en la Ría de Pontevedra. Entrega de aftermovie y clips para redes en 48 horas.',
      },
      {
        title: 'Vídeo corporativo para empresa en polígono industrial',
        desc: 'Pieza de presentación para empresa del sector agroalimentario con planta en Lalín. Planos aéreos de instalaciones combinados con entrevistas a responsables de producción.',
      },
    ],
  },

  serviciosRelacionados: [
    {
      to: '/grabacion-con-drones-fpv/',
      label: 'Grabación con drones FPV',
      desc: 'Planos dinámicos para eventos y marcas en Pontevedra.',
    },
    {
      to: '/dron-para-inmobiliarias/',
      label: 'Dron para inmobiliarias',
      desc: 'Foto y vídeo aéreo de propiedades en la provincia.',
    },
    {
      to: '/video-corporativo-con-dron/',
      label: 'Vídeo corporativo con dron',
      desc: 'Para empresas e instalaciones en Pontevedra y Vigo.',
    },
    {
      to: '/dron-para-eventos/',
      label: 'Grabación con dron para eventos',
      desc: 'Festivales, conciertos y eventos en la provincia.',
    },
    {
      to: '/alquiler-drones-con-piloto/',
      label: 'Alquiler de drones con piloto',
      desc: 'Piloto disponible para tu producción.',
    },
    {
      to: '/galicia/grabacion-con-drones/',
      label: 'Grabación con drones en Galicia',
      desc: 'Cobertura en toda la comunidad gallega.',
    },
  ],

  faqs: [
    {
      question: '¿Cuánto tiempo tardáis en responder a un presupuesto en Pontevedra?',
      answer:
        'Por ser servicio local, respondemos en menos de 24 horas. Para proyectos urgentes o fechas muy concretas, contáctanos por teléfono o email directamente.',
    },
    {
      question: '¿Podéis grabar en el casco histórico de Pontevedra?',
      answer:
        'El casco histórico de Pontevedra es zona urbana densa con restricciones de vuelo. Es necesario gestionar permisos específicos con el Ayuntamiento y AESA. Es posible hacerlo, pero hay que planificarlo con suficiente antelación (mínimo 3-4 semanas).',
    },
    {
      question: '¿Trabajáis también en Vigo?',
      answer:
        'Sí. Vigo está a 30 minutos de Pontevedra y es una de nuestras zonas habituales de trabajo. Los proyectos en Vigo tienen el mismo coste que en Pontevedra. Para vuelos en la zona del aeropuerto de Peinador se gestiona coordinación con AENA.',
    },
    {
      question: '¿Cuándo es mejor grabar en las Rías Baixas?',
      answer:
        'La primavera y el verano ofrecen mejor luz y condiciones más estables para volar. El otoño también da resultados espectaculares con cielos limpios y luz dorada. El invierno es más complicado por el viento y la lluvia, aunque algunos proyectos aprovechan precisamente ese ambiente para un resultado más dramático.',
    },
  ],

  cta: {
    title: '¿Proyecto en Pontevedra o la provincia?',
    desc: 'Somos locales. Conocemos las zonas, los permisos y los mejores momentos para grabar. Cuéntanos tu proyecto.',
  },
}

export default function PontevedraGrabacion() {
  return <LocalLanding data={data} />
}
