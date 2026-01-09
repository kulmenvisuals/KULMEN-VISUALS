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

    thumbnail: "https://img.youtube.com/vi/qbNfBMfWglA/maxresdefault.jpg",

    // YouTube embed
    youtubeUrl: "https://www.youtube.com/embed/qbNfBMfWglA",

    videoUrl: null,
    poster: null,

    images: [
      "https://img.youtube.com/vi/qbNfBMfWglA/maxresdefault.jpg",
      "https://img.youtube.com/vi/qbNfBMfWglA/sddefault.jpg",
    ],

    description:
      "Reportaje audiovisual alrededor de la obra de Lynda Benglis para Banca March, grabado en Madrid. Cobertura cuidada de la exposición y del espacio, poniendo el foco en la relación entre arte, materia y luz.",
    extra:
      "El objetivo fue documentar la experiencia expositiva con un lenguaje cercano al documental, respetando el ritmo de las obras y el contexto del espacio.",
  },

  // 3) Patrocinio: Cobre San Rafael x Campus Xacobeo (SD Compostela)
  {
    id: "cobre-san-rafael-campus-xacobeo",
    slug: "cobre-san-rafael-campus-xacobeo",

    title: "Patrocinio · Cobre San Rafael x Campus Xacobeo",
    client: "Cobre San Rafael · SD Compostela",
    year: 2024, 

    category: "Deporte / Patrocinio",
    type: ["Eventos", "Deporte", "Patrocinio"],
    roles: ["Cobertura audiovisual", "Montaje para RRSS"], 
    location: "Santiago de Compostela",

  
    thumbnail:
      "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1280&auto=format",

    // Enlace a Instagram
    instagramUrl: "https://www.instagram.com/p/DMuqh9yoWBN/",

    youtubeUrl: null,
    videoUrl: null,
    poster: null,

    images: [
      "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1200&auto=format",
    ],

    description:
      "Pieza para redes sociales del patrocinio de Cobre San Rafael junto al Campus Xacobeo del Compostela. Cobertura dinámica en campo para transmitir energía, afición y vínculo con el territorio.",
    extra:
      "Orientado a Instagram, con montaje ágil y énfasis en planos de juego, detalles de marca y ambiente de grada.",
  },

  // 4) Evento deportivo: HXGAP RACE
  {
    id: "hxgap-race",
    slug: "hxgap-race",

    title: "HXGAP RACE",
    client: "XGAP Fitness Center",
    year: 2025,

    category: "RRSS / Deporte",
    type: ["RRSS", "Deporte"],
    roles: ["Cobertura audiovisual", "Edición"],
    location: "A Estrada",

    thumbnail: null,

    instagramUrl: "https://www.instagram.com/reel/DRkRXo0kX4J/",
    youtubeUrl: null,
    videoUrl: null,
    poster: null,

    images: [],

    description:
      "Evento deportivo para amantes del gimnasio y el crossfit.",
  },

  // 5) Tour FPV: Nova Vila Enoturismo
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

    // 5) Videoclip: Mamá, Sislah
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
  images: [],
  description:
    "Videoclip 'MAMÁ' para Sislah, rodado en Madrid. Pieza emocional con enfoque íntimo, mezclando planos de cámara y recursos urbanos.",
},

]

export default projects
