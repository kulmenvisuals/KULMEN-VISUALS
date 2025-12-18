// src/data/projects.js

export const projects = [
  // 1) Videoclip real: Sislah, Albella | MIÉNTETE
  {
    id: "sislah-albella-mientete",
    slug: "sislah-albella-mientete",

    title: "Videoclip · MIÉNTETE",
    client: "Sislah, Albella",
    year: 2024, // ajusta el año si quieres

    category: "Videoclip / Música",
    type: ["Videoclip", "Música"],
    roles: ["Cámara", "FPV", "Apoyo en dirección", "Montaje"], // ajusta a lo que hiciste exactamente
    location: "Madrid",

    // Miniatura: usamos thumbnail de YouTube
    thumbnail: "https://img.youtube.com/vi/C_knrGpZW0k/maxresdefault.jpg",

    // YouTube en formato EMBED (importante para el iframe)
    youtubeUrl: "https://www.youtube.com/embed/C_knrGpZW0k",

    // Si en algún momento tienes export en archivo local, puedes rellenar esto:
    videoUrl: null,
    poster: null,

    images: [
      "https://img.youtube.com/vi/C_knrGpZW0k/maxresdefault.jpg",
      "https://img.youtube.com/vi/C_knrGpZW0k/sddefault.jpg",
    ],

    description:
      "Videoclip rodado en Madrid para Sislah y Albella. Trabajo de cámara y FPV mezclando cercanía, movimiento y atmósfera intimista.",
    extra:
      "En este proyecto el foco estuvo en integrar el movimiento de cámara con la narrativa emocional del tema, jugando con espacios interiores y detalles del performance.",
  },

  // 2) Ejemplo: FPV en Torre de Hércules
  {
    id: "torre-hercules-fpv",
    slug: "torre-hercules-fpv",

    title: "FPV en Torre de Hércules",
    client: "Turismo A Coruña",
    year: 2024,

    category: "FPV / Turismo",
    type: ["FPV", "Turismo"],
    roles: ["Dirección", "Piloto FPV", "Edición"],
    location: "A Coruña",
    coords: [43.385, -8.406],

    thumbnail:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1280&auto=format",

    youtubeUrl: "https://www.youtube.com/embed/TU_ID_DE_VIDEO_1",

    videoUrl: "/assets/videos/reel_hercules.mp4",
    poster: "/assets/posters/torre.jpg",

    images: [
      "https://images.unsplash.com/photo-1520975682031-df6a02c0bcb6?q=80&w=1200&auto=format",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format",
    ],

    description:
      "Pieza promocional FPV para Turismo con narrativa fluida y planos de vértigo rodeando la Torre de Hércules.",
    extra:
      "Trabajo orientado a redes sociales y difusión digital, con versiones adaptadas a diferentes formatos.",
  },

  // 3) Ejemplo: Spot Ribeira Sacra
  {
    id: "ribeira-sacra-spot",
    slug: "ribeira-sacra-spot",

    title: "Spot Ribeira Sacra",
    client: "Consorcio Ribeira Sacra",
    year: 2023,

    category: "Cine / Publicidad",
    type: ["Cine", "Publicidad"],
    roles: ["Dirección de Foto", "Color"],
    location: "Lugo",
    coords: [42.415, -7.56],

    thumbnail:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1280&auto=format",

    youtubeUrl: "https://www.youtube.com/embed/TU_ID_DE_VIDEO_2",

    videoUrl: "/assets/videos/reel_sacra.mp4",
    poster: "/assets/posters/sacra.jpg",

    images: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format",
    ],

    description:
      "Campaña emocional con look cinematográfico. Rodaje en viñedos y miradores con dron y cámara en mano.",
    extra:
      "Se desarrollaron diferentes piezas para televisión local, redes sociales y proyección en eventos.",
  },

  // 4) Ejemplo: Cobertura Evento Cultural
  {
    id: "pontevedra-evento",
    slug: "pontevedra-evento",

    title: "Cobertura Evento Cultural",
    client: "Deputación de Pontevedra",
    year: 2024,

    category: "Eventos / Cultura",
    type: ["Eventos", "Documental"],
    roles: ["Operador Cámara", "Postproducción"],
    location: "Pontevedra",
    coords: [42.431, -8.644],

    thumbnail:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1280&auto=format",

    youtubeUrl: "https://www.youtube.com/embed/TU_ID_DE_VIDEO_3",

    videoUrl: "/assets/videos/reel_evento.mp4",
    poster: "/assets/posters/evento.jpg",

    images: [
      "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1200&auto=format",
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1200&auto=format",
    ],

    description:
      "Cobertura multicámara con entrega express para redes sociales. Piezas verticales y horizontales optimizadas.",
    extra:
      "El objetivo era capturar la energía del público y el contexto del festival para reforzar la marca del evento.",
  },
]

export default projects