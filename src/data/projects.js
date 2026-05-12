// src/data/projects.js

export const projects = [
  // 0) Anuncio oficial: AE League 2026
  {
    id: "ae-league-2026-anuncio-oficial",
    slug: "ae-league-2026-anuncio-oficial",

    title: "Anuncio oficial · AE League 2026",
    client: "AE League",
    year: 2026,

    category: "Deporte / Evento",
    type: ["Spot", "Deporte", "Evento"],
    location: "A Estrada, Galicia",

    thumbnail: "https://img.youtube.com/vi/-S6_EVetoAo/maxresdefault.jpg",
    youtubeUrl: "https://www.youtube.com/embed/-S6_EVetoAo",

    videoUrl: null,
    poster: null,

    images: [
      "https://img.youtube.com/vi/-S6_EVetoAo/1.jpg",
      "https://img.youtube.com/vi/-S6_EVetoAo/2.jpg",
      "https://img.youtube.com/vi/-S6_EVetoAo/3.jpg",
    ],

    description:
      "Pieza audiovisual de anuncio oficial para AE League 2026, torneo gallego de fútbol 7 que se celebra en A Estrada. El vídeo presenta la identidad del torneo y sirve como lanzamiento de su nueva edición.",
    extra:
      "La información oficial del torneo, categorías, calendario e inscripciones está disponible en aeleague.es.",
  },

  // 1) Vídeo inmobiliario: Grupo Country Homes
  {
    id: "video-inmobiliario-grupo-country-homes",
    slug: "video-inmobiliario-grupo-country-homes",

    title: "Vídeo inmobiliario · Grupo Country Homes",
    client: "Grupo Country Homes",

    category: "Espacios / Inmobiliario",
    type: ["Espacios", "Inmobiliario"],
    roles: ["Grabación", "Edición"],

    thumbnail: "https://img.youtube.com/vi/um5LqwcuABo/maxresdefault.jpg",
    youtubeUrl: "https://www.youtube.com/embed/um5LqwcuABo",

    videoUrl: null,
    poster: null,

    images: [],

    description:
      "Vídeo inmobiliario para Grupo Country Homes, planteado para mostrar el espacio con claridad, ritmo y una presentación visual cuidada.",
    extra:
      "La pieza está orientada a enseñar la vivienda de forma atractiva y funcional, destacando recorrido, amplitud y detalles clave para su presentación online.",
  },

  // 1a) Vídeo inmobiliario RRSS: Land of Eve
  {
    id: "land-of-eve-video-inmobiliario-rrss",
    slug: "land-of-eve-video-inmobiliario-rrss",

    title: "Vídeo inmobiliario RRSS · Land of Eve",
    client: "Land of Eve",

    category: "Espacios / Inmobiliario / RRSS",
    type: ["Espacios", "Inmobiliario", "RRSS"],
    roles: ["Grabación", "Edición"],

    thumbnail: "https://vumbnail.com/1191493306.jpg",

    videos: [
      {
        platform: "vimeo",
        url: "https://player.vimeo.com/video/1191493306?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        aspect: "9/16",
        title: "Land of Eve — Pazo Friol",
      },
      {
        platform: "vimeo",
        url: "https://player.vimeo.com/video/1187808211?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        aspect: "9/16",
        title: "Land of Eve — Vídeo 2",
      },
      {
        platform: "vimeo",
        url: "https://player.vimeo.com/video/1187808272?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        aspect: "9/16",
        title: "Land of Eve — Vídeo 3",
      },
      {
        platform: "vimeo",
        url: "https://player.vimeo.com/video/1191493998?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
        aspect: "9/16",
        title: "Land of Eve — Vídeo 4",
      },
    ],

    youtubeUrl: null,
    vimeoUrl: null,
    videoUrl: null,
    poster: null,
    images: [],

    description:
      "Serie de vídeos inmobiliarios para RRSS producida para Land of Eve, pensada para presentar espacios con un formato vertical, ágil y directo.",
    extra: null,
  },

  // 1) Reportaje: Banca March · Lynda Benglis
  {
    id: "banca-march-lynda-benglis",
    slug: "banca-march-lynda-benglis",

    title: "Reportaje · Lynda Benglis para Banca March",
    client: "Banca March",
    agency: "Starporcasa",
    year: 2024,

    category: "Reportaje / Arte",
    type: ["Reportaje", "Arte", "Eventos"],
    roles: ["Cámara", "Cobertura audiovisual"],
    location: "Madrid",

    thumbnail: "/images/projects/march-3.png",

    // YouTube embed
    youtubeUrl: "https://www.youtube.com/embed/qbNfBMfWglA",

    videoUrl: null,
    poster: null,

    images: [
      "/images/projects/march-1.png",
      "/images/projects/march-2.png",
    ],

    description:
      "Reportaje audiovisual alrededor de la obra de Lynda Benglis para Banca March, grabado en Madrid. Cobertura cuidada del proceso de montado de la exposición y del espacio. Estilo reportaje documental",
    extra:
      "El foco estuvo en el montaje de la exposicion y la relacion entre obra y espacio, con un tratamiento documental sobrio y observacional.",
  },

  // 1b) UGC: Orballo
  {
    id: "ugc-orballo",
    slug: "ugc-orballo",

    title: "UGC · Orballo",
    client: "Orballo",
    year: 2025,

    category: "UGC / RRSS",
    type: ["UGC", "RRSS"],
    roles: ["Grabación", "Edición"],

    thumbnail: "https://img.youtube.com/vi/w4uyxYVJqiA/maxresdefault.jpg",
    cardPlaceholder: {
      eyebrow: "UGC · Orballo",
      title: "Vista previa no disponible",
    },

    videos: [
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/w4uyxYVJqiA",
        aspect: "9/16",
        title: "Orballo — Promo día de la madre",
      },
    ],

    youtubeUrl: null,
    vimeoUrl: null,
    videoUrl: null,
    poster: null,
    images: [],

    description:
      "Contenido UGC para Orballo pensado para redes sociales, con un formato vertical orientado a stories y reels.",
    extra: null,
  },

  // 2) Patrocinios: Cobre San Rafael (Orestes Comunica)
  {
    id: "patrocinios-cobre-san-rafael",
    slug: "patrocinios-cobre-san-rafael",

    title: "Patrocinios · Cobre San Rafael",
    client: "Cobre San Rafael",
    agency: "Orestes Comunica",
    year: 2025,

    category: "Corporativo / Deporte",
    type: ["Corporativo", "Deporte", "Eventos"],
    roles: ["Grabación", "Edición"],
    location: "Galicia",

    thumbnail: "/images/projects/Video-corporativo-fpv-galicia.png",
    vimeoUrl: null,
    youtubeUrl: "https://www.youtube.com/embed/rVydjna50tM",
    videoUrl: null,
    poster: null,
    images: [],

    description:
      "Pieza audiovisual para los patrocinios de Cobre San Rafael, producida junto a la agencia Orestes Comunica. El vídeo recoge el vínculo de la empresa con el territorio y el deporte gallego a través de las acciones de patrocinio que impulsa.",
    extra: null,
  },

  // 3) Patrocinio: Cobre San Rafael x Campus Xacobeo (SD Compostela)
  {
    id: "cobre-san-rafael-campus-xacobeo",
    slug: "cobre-san-rafael-campus-xacobeo",

    title: "Patrocinio · Cobre San Rafael x Campus Xacobeo",
    client: "Cobre San Rafael · SD Compostela",
    agency: "Orestes Comunica",
    year: 2025,

    category: "Deporte",
    type: ["Eventos", "Deporte"],
    roles: ["Cobertura audiovisual", "Montaje para RRSS"], 
    location: "Santiago de Compostela",

  
    thumbnail: "/images/projects/cobre-touro-2.png",

    // Enlace a Instagram
    instagramUrl: "https://www.instagram.com/p/DMuqh9yoWBN/",

    youtubeUrl: null,
    videoUrl: null,
    poster: null,

    images: [
      "/images/projects/cobre-touro-3.png",
      "/images/projects/cobre-touro-4.png",
    ],

    description:
      "Pieza para redes sociales del patrocinio de Cobre San Rafael junto al Campus Xacobeo del Compostela. Cobertura dinámica en campo para transmitir energía, afición y vínculo con el territorio.",
    extra: null,
  },

  // 3) RRSS: Norvento Technpower
  {
    id: "rrss-norvento-technpower",
    slug: "rrss-norvento-technpower",

    title: "RRSS · Norvento Technpower",
    client: "Norvento Technpower",
    agency: "Orestes Comunica",
    year: 2025,

    category: "RRSS / Producto",
    type: ["RRSS", "Producto"],
    roles: ["Grabación", "Edición"],
    location: "Lugo",

    thumbnail: "/images/projects/norvento-1.png",

    instagramUrl: "https://www.instagram.com/reel/DO74XDZiI9O/",

    youtubeUrl: null,
    videoUrl: null,
    poster: null,

    images: [
      "/images/projects/norvento-1.png",
      "/images/projects/norvento-2.png",
    ],

    description:
      "Grabación y edición de vídeos educativos y de producto para RRSS.",
    extra: null,
  },

  // 4) Evento: Cobre San Rafael x Cross Country Touro
  {
    id: "cobre-san-rafael-cross-country-touro",
    slug: "cobre-san-rafael-cross-country-touro",

    title: "Cobre San Rafael x Cross Country Touro",
    client: "Cobre San Rafael",
    agency: "Orestes Comunica",
    year: 2025,

    category: "Deporte / Evento",
    type: ["Deporte", "Eventos"],
    roles: ["Operadora de cámara", "Operadora de dron estabilizado", "Edición"],
    location: "Galicia",

    thumbnail: "/images/projects/cross-1.png",

    instagramUrl: "https://www.instagram.com/p/DPV-FUnDnV1/",

    youtubeUrl: null,
    videoUrl: null,
    poster: null,

    images: [
      "/images/projects/cross-2.png",
      "/images/projects/cross-3.png",
    ],

    description:
      "Cobertura y edición del evento de quads y motos Cross Country organizado por Os do Jatillo y patrocinado por Cobre San Rafael.",
    extra: null,
  },

  // 5) RRSS: XGAP Fitness Center
  {
    id: "hxgap-race",
    slug: "hxgap-race",

    title: "RRSS · XGAP Fitness Center",
    client: "XGAP Fitness Center",
    year: 2025,

    category: "RRSS / Deporte",
    type: ["RRSS", "Deporte"],
    roles: ["Cobertura audiovisual", "Edición"],
    location: "A Estrada",

    thumbnail: "/images/projects/xgap-3.png",

    instagramUrl: "https://www.instagram.com/reel/DRkRXo0kX4J/",
    youtubeUrl: null,
    videoUrl: null,
    poster: null,

    images: [
      "/images/projects/xgap-1.jpeg",
      "/images/projects/xgap-2.jpeg",
    ],

    description:
      "Contenido audiovisual de vídeo para redes sociales.",
  },

  // 6) Tour FPV: Nova Vila Enoturismo
  {
    id: "tour-fpv-nova-vila-enoturismo",
    slug: "tour-fpv-nova-vila-enoturismo",

    title: "Tour FPV · Novavila Design Wine Hotel",
    client: "Novavila Design Wine Hotel",
    year: 2025,

    category: "RRSS / FPV",
    type: ["RRSS", "FPV"],
    roles: ["Piloto de dron FPV", "Edición", "Etalonaje"],

    thumbnail: "https://farm8.staticflickr.com/7721/16895047450_9387760d62_b_d.jpg",

    instagramUrl: "https://www.instagram.com/reel/DS5HOLgCMC0/",

    youtubeUrl: null,
    videoUrl: null,
    poster: null,

    images: [],

    description:
      "Tour FPV para Nova Vila Enoturismo orientado a redes sociales, con recorrido inmersivo del espacio.",
  },

  // 7) Videoclip: Sislah, Albella | MIÉNTETE
  {
    id: "sislah-albella-mientete",
    slug: "sislah-albella-mientete",

    title: "Videoclip · MIÉNTETE",
    client: "Sislah, Albella",
    year: 2024,

    category: "Videoclip / Música",
    type: ["Videoclip", "Música"],
    roles: ["Cámara", "FPV", "Montaje"],
    location: "Madrid",

    // Miniatura: thumbnail de YouTube
    thumbnail: "https://img.youtube.com/vi/C_knrGpZW0k/maxresdefault.jpg",

    // YouTube embed
    youtubeUrl: "https://www.youtube.com/embed/C_knrGpZW0k",

    // Fallback local
    videoUrl: null,
    poster: null,

    images: [
      "/images/projects/mientete-1.png",
      "/images/projects/mientete-2.png",
    ],

    description:
      "Videoclip rodado en Madrid para Sislah y Albella. Rodado íntegramente en estudio con una propuesta visual centrada en el color, la silueta y el movimiento como elementos narrativos principales. La estética (marcada por tonos rosados, siluetas y primeros planos expresivos) busca un equilibrio entre minimalismo, carácter pop y una lectura visual directa, sin elementos superfluos.",
    extra:
      "La direccion se centro en coreografiar la camara dentro del set, usando luz y color para recortar siluetas y potenciar el movimiento como hilo narrativo.",
  },

  // 8) Videoclip: Mamá, Sislah
  {
    id: "mama-sislah-madrid",
    slug: "mama-sislah-madrid",
    title: "MAMÁ — Sislah",
    client: "Sislah",
    year: 2024, 
    type: ["Videoclip","Musica"],
    category: "videoclip",
    roles: ["Dirección de foto", "Cámara", "Operadora FPV", "Edición"],
    location: "Madrid",
    coords: [40.4168, -3.7038],
    thumbnail: "https://img.youtube.com/vi/MYtznjHXaYw/maxresdefault.jpg",
    youtubeUrl: "https://www.youtube.com/embed/MYtznjHXaYw",
    poster: null,
    images: [
      "/images/projects/mama-1.png",
      "/images/projects/mama-2.png",
    ],
    description:
      "Videoclip rodado en estudio con un enfoque íntimo y contenido, donde la luz, el encuadre y el ritmo acompañan el tono emocional del tema.",
  },

]

export default projects
