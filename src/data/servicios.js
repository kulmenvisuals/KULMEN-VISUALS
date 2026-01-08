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
    titulo: "Edición con IA",
    subtitulo: "Extra estratégico",
    texto:
      "IA aplicada para acelerar entregas, crear variantes y sumar recursos visuales sin perder coherencia con la pieza principal.",
    bullets: [
      "Generación de vídeo y animaciones para reforzar mensajes",
      "Optimización de procesos y versionado por formato",
      "Variantes creativas para testing y campañas",
      "Subtítulos y adaptaciones multiidioma cuando hace falta",
    ],
  },
]

export const especialidades = [
  {
    id: "cine",
    titulo: "Cine y Publicidad",
    descripcion:
      "Producción de piezas pensadas para campañas y lanzamientos, donde el vídeo tiene que condensar mensaje, estética y ritmo en pocos segundos.",
    bullets: [
      "Spots y piezas cortas para campañas",
      "Vídeo para web y lanzamientos de producto",
      "Contenido diseñado para anuncios en redes",
    ],
    fondo: `${import.meta.env.BASE_URL}images/spec_cine.jpg`,
  },
  {
    id: "fpv",
    titulo: "FPV Profesional",
    descripcion:
      "Uso del FPV como recurso narrativo, integrado con cámara tradicional para aportar movimiento, continuidad y diferenciación real.",
    bullets: [
      "Persecución de coches, motos y deporte",
      "Recorridos inmersivos por espacios y negocios",
      "Planos imposibles combinados con cámara en tierra",
    ],
    fondo: `${import.meta.env.BASE_URL}images/spec_fpv.jpg`,
  },
  {
    id: "eventos",
    titulo: "Eventos y Cultura",
    descripcion:
      "Piezas que extienden la vida del evento más allá del directo, con un enfoque ágil y pensado para difusión inmediata.",
    bullets: [
      "Aftermovies y resúmenes de evento",
      "Cobertura dinámica con entregas rápidas para redes",
      "Clips verticales listos para publicar durante y después",
    ],
    fondo: `${import.meta.env.BASE_URL}images/spec_eventos.jpg`,
  },
  {
    id: "turismo",
    titulo: "Turismo y Territorio",
    descripcion:
      "Vídeos que sitúan el lugar en contexto, combinando espacio, actividad y personas para una comunicación honesta y atractiva.",
    bullets: [
      "Piezas que muestran el territorio con intención",
      "Integración de paisaje, experiencia y ritmo",
      "Contenido útil para turismo, cultura y promoción local",
    ],
    fondo: `${import.meta.env.BASE_URL}images/spec_turismo.jpg`,
  },
]
