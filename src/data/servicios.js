// Datos ligeros para textos e interfaz
export const fases = [
  {
    id: "prepro",
    titulo: "Preproducción",
    subtitulo: "Donde nace la historia",
    texto:
      "Definimos concepto, guion, estética y plan de rodaje. Preparamos el terreno para que todo fluya en set.",
    toggles: [
      { id: "guion", label: "Guion técnico", desc: "Estructura narrativa, escaleta y tiempos." },
      { id: "storyboard", label: "Storyboard", desc: "Shots clave, encuadres y referencias visuales." },
      { id: "localizaciones", label: "Localizaciones", desc: "Búsqueda, permisos y logística de rodaje." },
      { id: "plan", label: "Plan de rodaje", desc: "Desglose técnico, equipo, ritmos y seguridad." }
    ],
  },
  {
    id: "pro",
    titulo: "Producción",
    subtitulo: "La imagen en movimiento",
    texto:
      "Rodamos con cámaras de cine, ópticas y drones FPV. Precisión técnica con mirada cinematográfica.",
    modos: [
      { id: "cine", label: "Cámara cine", desc: "Imagen orgánica, ópticas prime y control de luz." },
      { id: "fpv", label: "FPV", desc: "Persecución, cercanía y planos imposibles." },
      { id: "aereo", label: "Dron aéreo", desc: "Estable, panorámico y majestuoso." },
      { id: "cinewhoop", label: "Cinewhoop", desc: "Interior, entre personas y espacios reducidos." },
    ],
  },
  {
    id: "post",
    titulo: "Postproducción",
    subtitulo: "Donde todo cobra sentido",
    texto:
      "Montaje, color, sonido y gráficos para una pieza con ritmo, coherencia y atmósfera.",
    beforeAfter: {
      // coloca una imagen base en public/images/
      before: `${import.meta.env.BASE_URL}images/before.jpg`,
      after: `${import.meta.env.BASE_URL}images/after.jpg`,
    },
    bullets: [
      "Edición narrativa y ritmo visual",
      "Corrección de color y look cinematográfico",
      "Diseño y mezcla de sonido",
      "Gráficos/motion y master final"
    ]
  },
  {
    id: "ia",
    titulo: "Contenido con IA",
    subtitulo: "Innovación visual",
    texto:
      "Ampliamos la creatividad con IA: moodboards, storyboards y assets híbridos que conviven con rodaje real.",
    presets: [
      { id: "mood", label: "Moodboard", desc: "Exploración de estilo, color y textura." },
      { id: "story", label: "Storyboard", desc: "Planificación visual de escenas y acciones." },
      { id: "imagen", label: "Imagen clave", desc: "Pieza conceptual para campañas." }
    ],
    nota: "La IA no sustituye al rodaje: lo potencia. Ética y transparencia en cada entrega.",
  }
]

export const especialidades = [
  {
    id: "cine",
    titulo: "Cine y Publicidad",
    bullets: ["Ritmo narrativo", "Fotografía cuidada", "Color con intención"],
    fondo: `${import.meta.env.BASE_URL}images/spec_cine.jpg`,
  },
  {
    id: "fpv",
    titulo: "FPV Profesional",
    bullets: ["Velocidad y precisión", "Cercanía al sujeto", "Planos imposibles"],
    fondo: `${import.meta.env.BASE_URL}images/spec_fpv.jpg`,
  },
  {
    id: "eventos",
    titulo: "Eventos y Cultura",
    bullets: ["Energía y emoción", "Cobertura ágil", "Entrega express"],
    fondo: `${import.meta.env.BASE_URL}images/spec_eventos.jpg`,
  },
  {
    id: "turismo",
    titulo: "Turismo y Territorio",
    bullets: ["Identidad del lugar", "Paisaje y atmósfera", "Narrativa de territorio"],
    fondo: `${import.meta.env.BASE_URL}images/spec_turismo.jpg`,
  },
]