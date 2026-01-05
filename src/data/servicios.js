// src/data/servicios.js

export const fases = [
  {
    id: "prepro",
    titulo: "Preproducción",
    subtitulo: "Definir bien el encargo",
    texto:
      "Aquí cerramos qué pieza tiene sentido, para quién es y dónde se publicará. El objetivo es llegar al rodaje sin improvisar: guion básico claro, mensajes definidos y necesidades técnicas controladas.",
    toggles: [
      {
        id: "brief",
        label: "Brief y objetivos",
        desc: "Qué quieres conseguir, a quién hablas, presupuesto y plazos.",
      },
      {
        id: "guion",
        label: "Guion y estructura",
        desc: "Orden de escenas, mensajes clave y llamadas a la acción.",
      },
      {
        id: "localizaciones",
        label: "Localizaciones y permisos",
        desc: "Búsqueda de espacios, contactos y permisos si hacen falta.",
      },
      {
        id: "plan",
        label: "Plan de rodaje",
        desc: "Cronograma realista, equipo necesario y tiempos por bloque.",
      },
    ],
  },
  {
    id: "pro",
    titulo: "Rodaje",
    subtitulo: "Cámara y FPV",
    texto:
      "Rodaje ágil con cámara y dron FPV, pensado para sacar el máximo contenido útil en el mínimo tiempo posible. Trabajo con un equipo reducido para no bloquear tu actividad ni tu negocio.",
    modos: [
      {
        id: "cine",
        label: "Cámara cine",
        desc: "Imagen limpia y estable para piezas principales y entrevistas.",
      },
      {
        id: "fpv",
        label: "FPV",
        desc: "Planos dinámicos para deporte, vehículos o recorridos de espacio.",
      },
      {
        id: "aereo",
        label: "Dron aéreo",
        desc: "Vistas generales, contexto de localización y planos de recurso.",
      },
      {
        id: "cinewhoop",
        label: "Cinewhoop",
        desc: "Recorridos interiores, trayectorias entre personas y espacios.",
      },
    ],
  },
  {
    id: "post",
    titulo: "Postproducción",
    subtitulo: "Montaje y entregas",
    texto:
      "Montaje, corrección de color, sonido y grafismos. Entrego versiones pensadas para lo que realmente vas a usar: web, redes, presentación o campaña.",
    beforeAfter: {
      before: `${import.meta.env.BASE_URL}images/before.jpg`,
      after: `${import.meta.env.BASE_URL}images/after.jpg`,
    },
    bullets: [
      "Edición principal y cortes específicos para redes",
      "Corrección de color y look coherente con tu marca",
      "Limpieza de audio, música y efectos si encajan",
      "Subtítulos y rótulos básicos cuando son necesarios",
    ],
  },
  {
    id: "ia",
    titulo: "Apoyo con IA",
    subtitulo: "Más material, mismo esfuerzo",
    texto:
      "Uso IA solo cuando mejora el proceso: para explorar estilos, preparar moodboards rápidos o generar variantes de contenido a partir del material grabado.",
    presets: [
      {
        id: "mood",
        label: "Moodboards rápidos",
        desc: "Explorar estilos visuales y gamas de color antes de rodar.",
      },
      {
        id: "story",
        label: "Storyboards ligeros",
        desc: "Previsualizar escenas clave sin invertir horas en dibujo.",
      },
      {
        id: "variaciones",
        label: "Variaciones de contenido",
        desc: "Ideas de cortes, formatos y adaptaciones para distintos canales.",
      },
    ],
    nota:
      "La IA nunca sustituye al rodaje real: la utilizo para ahorrar tiempo en fase creativa y sacar más partido al material que ya tienes.",
  },
]

export const especialidades = [
  {
    id: "cine",
    titulo: "Cine y Publicidad",
    bullets: [
      "Spots y piezas cortas para campañas",
      "Vídeo para webs y lanzamientos de producto",
      "Contenido pensado para anuncios en redes",
    ],
    fondo: `${import.meta.env.BASE_URL}images/spec_cine.jpg`,
  },
  {
    id: "fpv",
    titulo: "FPV Profesional",
    bullets: [
      "Persecución de coches, motos y deporte",
      "Recorridos inmersivos por espacios y negocios",
      "Planos imposibles combinados con cámara tradicional",
    ],
    fondo: `${import.meta.env.BASE_URL}images/spec_fpv.jpg`,
  },
  {
    id: "eventos",
    titulo: "Eventos y Cultura",
    bullets: [
      "Aftermovies y resúmenes de evento",
      "Cobertura ágil con entregas rápidas para redes",
      "Clips verticales listos para publicar durante y después",
    ],
    fondo: `${import.meta.env.BASE_URL}images/spec_eventos.jpg`,
  },
  {
    id: "turismo",
    titulo: "Turismo y Territorio",
    bullets: [
      "Piezas que enseñan el lugar con contexto",
      "Combinación de paisaje, actividad y personas",
      "Vídeo útil para turismo, territorio y promoción local",
    ],
    fondo: `${import.meta.env.BASE_URL}images/spec_turismo.jpg`,
  },
]