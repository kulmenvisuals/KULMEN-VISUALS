// src/data/projects.js

export const projects = [
  // 1) Videoclip: Sislah, Albella | MIÉNTETE
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

  // 2) Reportaje: Banca March · Lynda Benglis
  {
    id: "banca-march-lynda-benglis",
    slug: "banca-march-lynda-benglis",

    title: "Reportaje · Lynda Benglis para Banca March",
    client: "Banca March",
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

  // 3) Patrocinio: Cobre San Rafael x Campus Xacobeo (SD Compostela)
  {
    id: "cobre-san-rafael-campus-xacobeo",
    slug: "cobre-san-rafael-campus-xacobeo",

    title: "Patrocinio · Cobre San Rafael x Campus Xacobeo",
    client: "Cobre San Rafael · SD Compostela",
    year: 2025,

    category: "Deporte / Patrocinio",
    type: ["Eventos", "Deporte", "Patrocinio"],
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

  // 4) Evento: Cobre San Rafael x Cross Country Touro
  {
    id: "cobre-san-rafael-cross-country-touro",
    slug: "cobre-san-rafael-cross-country-touro",

    title: "Cobre San Rafael x Cross Country Touro",
    client: "Cobre San Rafael",
    year: 2025,

    category: "Deporte / Evento",
    type: ["Deporte", "Evento"],
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
      "Cobertura del evento y edición.",
    extra: null,
  },

  // 5) Evento deportivo: HXGAP RACE
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

  // 7) RRSS: Norvento Technpower
  {
    id: "rrss-norvento-technpower",
    slug: "rrss-norvento-technpower",

    title: "RRSS · Norvento Technpower",
    client: "Norvento Technpower",
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
