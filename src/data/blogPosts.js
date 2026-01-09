// src/data/blogPosts.js

const assetBase =
  (import.meta && import.meta.env && import.meta.env.BASE_URL) || "/"

export const blogPosts = [
  {
    id: "fpv-turismo-galicia",
    slug: "fpv-turismo-galicia",
    title: "FPV para turismo en Galicia: cómo contar experiencias reales",
    excerpt:
      "El FPV ayuda a mostrar un destino como se vive. Repaso qué tipos de planos funcionan, cómo planificar el recorrido y qué necesita una marca turística para atraer visitas.",
    date: "2024-04-12",
    readTime: "6 min",
    category: "Turismo",
    cover: `${assetBase}images/blog-fpv.jpg`,
    tags: ["FPV", "turismo", "Galicia", "branding territorial"],
    sections: [
      {
        title: "El FPV como recorrido, no como truco",
        paragraphs: [
          "Cuando un potencial visitante investiga un destino, necesita ver la experiencia completa: entradas, recorridos, transiciones entre espacios y el ambiente real. El FPV es ideal porque permite narrar el trayecto de forma continua.",
          "Un buen vídeo turístico no se basa solo en planos espectaculares. La clave es ordenar el recorrido como si fuera una visita guiada y, a partir de ahí, sumar planos más amplios y detalles humanos.",
        ],
      },
      {
        title: "Planificación mínima para grabar sin improvisar",
        paragraphs: [
          "Antes del rodaje recomiendo definir el objetivo: ¿promocionar un lugar concreto, un itinerario o la marca turística completa? Eso determina la ruta, los tiempos y los planos clave.",
        ],
        bullets: [
          "Diseña un recorrido de 3 a 6 minutos que luego puedas cortar.",
          "Define dos horarios: uno para luz suave y otro para actividad real.",
          "Prepara planos de contexto (dron alto) y planos de atmósfera (detalles).",
        ],
      },
      {
        title: "Resultados que ayudan al SEO local",
        paragraphs: [
          "Un vídeo bien planteado genera múltiples piezas: versión principal, clips para redes, miniaturas y textos de apoyo. Todo eso alimenta fichas locales, artículos de blog y campañas.",
          "Para SEO local, combina el vídeo con una página específica del destino, geolocalización y texto que responda preguntas concretas del usuario. Así aumentas el tiempo de permanencia y la relevancia por búsqueda.",
        ],
      },
    ],
  },
  {
    id: "video-marca-local-preproduccion",
    slug: "video-marca-local-preproduccion",
    title: "Vídeo para marcas locales: guía de preproducción clara",
    excerpt:
      "La preproducción evita rodajes caóticos y piezas poco útiles. Aquí explico el brief, la estructura mínima y cómo alinear mensaje, estilo y formato.",
    date: "2024-03-28",
    readTime: "7 min",
    category: "Marcas",
    cover: `${assetBase}images/blog-prepro.jpg`,
    tags: ["preproducción", "video marketing", "marcas locales"],
    sections: [
      {
        title: "Empieza por el mensaje, no por la cámara",
        paragraphs: [
          "Lo primero es definir qué quieres conseguir: tráfico web, reservas, ventas o reconocimiento. Con ese objetivo claro, el vídeo se estructura solo.",
          "Las marcas locales suelen mezclar demasiados mensajes. Es mejor elegir un único foco y reforzarlo con recursos visuales coherentes.",
        ],
      },
      {
        title: "Brief mínimo que siempre funciona",
        bullets: [
          "Qué producto o servicio quieres destacar.",
          "A quién te diriges y en qué canal se verá el vídeo.",
          "Qué acción esperas que haga la persona al final.",
          "Qué referencias visuales te gustan y cuáles no.",
        ],
      },
      {
        title: "Estructura recomendada para piezas de 60-90 segundos",
        paragraphs: [
          "En piezas cortas conviene ir al grano. Una estructura simple ayuda a que el montaje sea eficiente y el resultado más claro.",
        ],
        bullets: [
          "Entrada visual potente en los primeros 3 segundos.",
          "Problema o necesidad del cliente en una frase.",
          "Solución con imágenes reales del servicio.",
          "Cierre con llamada a la acción concreta.",
        ],
      },
    ],
  },
  {
    id: "aftermovies-eventos-ritmo",
    slug: "aftermovies-eventos-ritmo",
    title: "Aftermovies de eventos: ritmo, música y orden narrativo",
    excerpt:
      "La música no es un adorno. Marca el tempo del montaje y condiciona el orden de las escenas. Te cuento cómo lo planifico para eventos deportivos y culturales.",
    date: "2024-02-10",
    readTime: "5 min",
    category: "Eventos",
    cover: `${assetBase}images/blog-eventos.jpg`,
    tags: ["aftermovie", "eventos", "edición"],
    sections: [
      {
        title: "Elegir música pensando en la historia",
        paragraphs: [
          "En un aftermovie, la música es el guion. Lo ideal es escoger un tema con cambios claros de intensidad y estructura.",
          "Si el evento tiene fases (acreditación, actividad, cierre), busca una pista que tenga evolución para acompañar cada bloque.",
        ],
      },
      {
        title: "Orden recomendado para mantener el interés",
        bullets: [
          "Inicio con el momento más potente para enganchar.",
          "Presentación breve del contexto y el público.",
          "Bloque central con variedad de planos y ritmo.",
          "Cierre emocional con el último pico de energía.",
        ],
      },
      {
        title: "Entregas útiles para redes",
        paragraphs: [
          "Además del vídeo principal, suelo entregar cortes verticales de 15 a 30 segundos. Son los que mejor funcionan para anuncios y redes sociales.",
        ],
      },
    ],
  },
  {
    id: "video-espacios-indoor-checklist",
    slug: "video-espacios-indoor-checklist",
    title: "Checklist de grabación para espacios indoor y gimnasios",
    excerpt:
      "Un rodaje en interiores exige preparación: luz, horarios, permisos y seguridad. Aquí tienes una lista práctica para evitar imprevistos.",
    date: "2024-01-22",
    readTime: "6 min",
    category: "Espacios",
    cover: `${assetBase}images/blog-indoor.jpg`,
    tags: ["rodaje", "espacios indoor", "planificación"],
    sections: [
      {
        title: "Coordina la actividad del espacio",
        paragraphs: [
          "Los interiores tienen limitaciones de ruido, movimiento y luz. Es importante definir en qué horas el espacio está más operativo y cuándo se puede grabar sin interrumpir.",
        ],
      },
      {
        title: "Checklist rápida antes del rodaje",
        bullets: [
          "Encendido de todas las luces principales y revisión de color.",
          "Control de reflejos y cristales con telas negras si hace falta.",
          "Permisos internos y aviso al personal.",
          "Plan de seguridad para vuelos FPV o movimientos rápidos.",
        ],
      },
      {
        title: "Material final pensado para conversión",
        paragraphs: [
          "El objetivo no es solo mostrar el espacio, sino generar confianza. Por eso es clave grabar detalles de servicio, personas en acción y planos que expliquen el recorrido del cliente.",
        ],
      },
    ],
  },
]
