// src/data/blogPosts.js

const assetBase =
  (import.meta && import.meta.env && import.meta.env.BASE_URL) || "/"

export const blogPosts = [
  {
    id: "cuanto-cuesta-video-corporativo-galicia",
    slug: "cuanto-cuesta-video-corporativo-galicia",
    title: "Cuánto cuesta un vídeo corporativo en Galicia en 2026",
    excerpt:
      "Precio real de un vídeo corporativo en Galicia: qué factores lo determinan, qué está incluido y cómo evaluar si un presupuesto es razonable para tu proyecto.",
    date: "2026-04-15",
    readTime: "8 min",
    category: "Presupuesto",
    cover: `${assetBase}images/blog-prepro.jpg`,
    tags: ["presupuesto", "vídeo corporativo", "Galicia", "producción audiovisual"],
    sections: [
      {
        title: "Por qué el precio varía tanto",
        paragraphs: [
          "Cuando buscas 'cuánto cuesta un vídeo corporativo' encuentras rangos que van de 300€ a 30.000€. Ambos pueden ser correctos. El problema es que sin contexto esa cifra no sirve de nada.",
          "El precio de un vídeo corporativo depende principalmente de tres variables: duración y complejidad del rodaje, número de personas implicadas y nivel de acabado en postproducción. Un vídeo de 90 segundos rodado en un día con una persona y un drone no tiene nada que ver con un spot de tres días con actores, localizaciones y colorista externo.",
        ],
      },
      {
        title: "Rangos reales por tipo de proyecto en Galicia",
        paragraphs: [
          "Estos son los rangos habituales para proyectos en Galicia, asumiendo un profesional o equipo pequeño, sin grandes agencias de por medio:",
        ],
        bullets: [
          "Vídeo de marca o presentación (60–90 seg): 800€ – 2.500€",
          "Aftermovie de evento (2–4 min): 600€ – 1.800€",
          "Vídeo inmobiliario con dron: 400€ – 900€",
          "Spot publicitario con guion, actores y localizaciones: 3.000€ – 8.000€",
          "Pack de contenido para redes (5–10 piezas): 700€ – 2.000€",
        ],
      },
      {
        title: "Qué incluye un presupuesto serio",
        paragraphs: [
          "Un presupuesto bien hecho especifica qué está dentro y qué no. Los conceptos más habituales son: preproducción (reuniones, guion básico, localización), rodaje (días, equipo técnico, desplazamientos), postproducción (montaje, corrección de color, audio) y entregas (formatos y revisiones incluidas).",
          "Lo que suele no estar incluido por defecto: música con licencia, actores o locutores profesionales, subtítulos, animaciones gráficas complejas o traducciones. Pregunta siempre antes de firmar.",
        ],
      },
      {
        title: "Cómo saber si un presupuesto es razonable",
        paragraphs: [
          "La mejor señal es que el presupuesto esté desglosado. Un profesional que sabe lo que hace puede explicarte en qué se va el dinero. Si recibes un número redondo sin detalle, pide el desglose.",
          "Desconfía de presupuestos muy bajos sin explicación. No es imposible producir bien con poco, pero sí hay un mínimo por debajo del cual la calidad sufre. Para un vídeo de marca con intención comercial, menos de 500€ raramente da un resultado que funcione.",
        ],
      },
      {
        title: "Cuándo merece la pena invertir más",
        paragraphs: [
          "Si el vídeo va a ser el centro de una campaña, la portada de tu web o la presentación de una marca nueva, merece la pena subir el presupuesto. El coste de un vídeo mal hecho no es solo el dinero pagado, es la primera impresión de tu marca para los próximos años.",
          "Para contenido recurrente de redes o piezas internas, una producción más ágil y económica puede ser la decisión correcta. El objetivo manda el presupuesto.",
        ],
      },
    ],
  },
  {
    id: "fpv-vs-dron-convencional",
    slug: "fpv-vs-dron-convencional",
    title: "FPV vs dron convencional: cuál necesita tu proyecto",
    excerpt:
      "No son rivales sino herramientas distintas. Te explico qué hace bien cada uno, cuándo combinarlos y cómo decidir según tu tipo de proyecto.",
    date: "2026-03-20",
    readTime: "6 min",
    category: "FPV",
    cover: `${assetBase}images/blog-fpv.jpg`,
    tags: ["FPV", "dron", "producción audiovisual", "cinematografía"],
    sections: [
      {
        title: "Qué hace cada uno bien",
        paragraphs: [
          "El dron convencional (DJI Mini, Mavic o similar) está pensado para estabilidad. Planos altos, panorámicas, orbits lentos alrededor de un edificio o paisaje. Es predecible, fácil de controlar y genera imágenes limpias en la mayoría de condiciones.",
          "El dron FPV está diseñado para movimiento. Permite entrar dentro de espacios, perseguir vehículos o personas, hacer transiciones imposibles con ópticas convencionales y generar esa sensación inmersiva que el espectador siente físicamente. A cambio, es más difícil de volar, más sensible al viento y requiere más experiencia del piloto.",
        ],
      },
      {
        title: "Cuándo usar solo dron convencional",
        bullets: [
          "Fotografía o vídeo aéreo de edificios, parcelas o infraestructuras.",
          "Proyectos donde prima la estabilidad y el plano limpio.",
          "Presupuestos ajustados donde no hay margen para la variedad técnica.",
          "Interiores con muy poco espacio (el FPV necesita margen para maniobrar).",
        ],
      },
      {
        title: "Cuándo el FPV marca la diferencia",
        bullets: [
          "Eventos deportivos: carreras, surf, escalada, ciclismo de montaña.",
          "Turismo y hostelería: recorridos por bodega, restaurante o alojamiento rural.",
          "Marcas que quieren diferenciarse con contenido visualmente dinámico.",
          "Spots donde la cámara tiene que seguir la acción sin cortes.",
        ],
      },
      {
        title: "La combinación que más funciona",
        paragraphs: [
          "En proyectos de marca con presupuesto medio, la combinación habitual es: dron convencional para los planos de contexto y establecimiento de lugar, FPV para la secuencia de acción o el recorrido del espacio, y cámara en mano para los detalles y los planos de personas.",
          "Esa mezcla da variedad de ritmo al montaje y permite contar una historia completa: dónde estás, cómo se vive el espacio y qué hace la marca.",
        ],
      },
      {
        title: "Qué preguntarle a tu realizador antes de decidir",
        paragraphs: [
          "No es necesario que sepas de antemano si quieres FPV o no. Cuéntale al realizador qué quieres transmitir y qué va a hacer el espectador con ese vídeo. A partir de ahí, la decisión técnica es cosa suya.",
          "Lo que sí conviene aclarar: si hay espacio suficiente para volar FPV de forma segura, si el proyecto requiere autorización especial de vuelo y si el plazo permite los repasos de calibración que necesita el FPV para dar lo mejor.",
        ],
      },
    ],
  },
  {
    id: "video-bodegas-vino-galicia",
    slug: "video-bodegas-vino-galicia",
    title: "Vídeo para bodegas de vino en Galicia: guía completa",
    excerpt:
      "Cómo planificar y producir vídeo para una bodega gallega: temporadas, planos clave, formatos útiles y errores habituales que conviene evitar.",
    date: "2026-02-18",
    readTime: "7 min",
    category: "Turismo",
    cover: `${assetBase}images/blog-fpv.jpg`,
    tags: ["bodegas", "vino", "Galicia", "turismo enológico", "vídeo corporativo"],
    sections: [
      {
        title: "Por qué el vídeo de bodega es diferente",
        paragraphs: [
          "Una bodega no es solo un producto, es un lugar con historia, paisaje y proceso. El vídeo tiene que transmitir todo eso en poco tiempo. El Albariño, el Mencía o el Ribeiro no se venden solo por sus características: se venden por el territorio que los produce.",
          "El reto es que ese territorio cambia radicalmente según la época. Los viñedos en primavera, vendimia o invierno son tres mundos distintos. Planificar bien el rodaje en la temporada adecuada marca la diferencia entre un vídeo genérico y uno que conecta de verdad.",
        ],
      },
      {
        title: "Temporadas ideales para grabar",
        bullets: [
          "Primavera (abril–junio): viñedos en flor, luz suave, verde intenso. Ideal para piezas de marca o turismo enológico.",
          "Vendimia (agosto–octubre en Rías Baixas, septiembre–noviembre en interior): actividad real, gente trabajando, uva en primer plano. La temporada más demandada.",
          "Invierno: paisaje desnudo, niebla sobre los viñedos, atmósfera cinematográfica. Ideal para bodegas con narrativa artesanal o proyectos de alta gama.",
        ],
      },
      {
        title: "Planos que no pueden faltar",
        paragraphs: [
          "Independientemente del estilo visual, hay una serie de recursos que aparecen en todos los vídeos de bodega porque funcionan. No porque sean un cliché, sino porque responden a lo que el espectador quiere ver.",
        ],
        bullets: [
          "FPV sobre los viñedos para establecer el territorio.",
          "Detalle de uvas, hojas y tierra.",
          "Proceso de vinificación: prensa, barricas, laboratorio.",
          "La bodega desde dentro: arquitectura, luz filtrada, botellas.",
          "La persona detrás del vino: enólogo, propietario o trabajador de vendimia.",
        ],
      },
      {
        title: "Formatos útiles según el canal",
        paragraphs: [
          "Un rodaje bien planificado en una bodega puede generar material para varios canales. La clave es plantearlo desde el principio pensando en las entregas, no rodar y luego decidir.",
        ],
        bullets: [
          "Vídeo de marca principal (2–3 min) para web y presentaciones.",
          "Reels verticales (30–60 seg) para Instagram y TikTok.",
          "Vídeo de experiencia para rutas del vino o turismo enológico.",
          "Clips para ficha de Google Business o descripción de producto.",
        ],
      },
      {
        title: "Errores habituales que conviene evitar",
        paragraphs: [
          "El más común es rodar fuera de temporada por comodidad logística. Un viñedo en agosto seco no cuenta la misma historia que uno en plena vendimia. Si puedes esperar, espera.",
          "El segundo error es no grabar personas. Una bodega sin caras es un catálogo de arquitectura. El espectador necesita identificarse con alguien que le cuente por qué ese vino vale la pena.",
        ],
      },
    ],
  },
  {
    id: "como-preparar-aftermovie-festival",
    slug: "como-preparar-aftermovie-festival",
    title: "Cómo preparar un aftermovie de festival en 2026",
    excerpt:
      "Guía práctica para que el vídeo de tu festival esté listo en 48 horas: planificación previa, grabación durante el evento y montaje con criterio.",
    date: "2026-01-14",
    readTime: "7 min",
    category: "Eventos",
    cover: `${assetBase}images/blog-eventos.jpg`,
    tags: ["aftermovie", "festival", "eventos", "edición", "planificación"],
    sections: [
      {
        title: "El error que comete casi todo el mundo",
        paragraphs: [
          "La mayoría de los organizadores de festivales contratan el vídeo muy tarde o lo plantean como algo secundario. El resultado: un realizador que llega el día del evento sin briefing, graba lo que puede y entrega algo aceptable que nadie comparte.",
          "Un aftermovie que funciona en redes —que genera reservas para la siguiente edición— se planifica con semanas de antelación. No hace falta un equipo grande. Hace falta tiempo para pensar qué quieres contar.",
        ],
      },
      {
        title: "Qué definir antes del festival",
        bullets: [
          "Propósito del vídeo: ¿es para redes sociales, para patrocinadores, para la web?",
          "Duración objetivo y formatos de entrega (horizontal, vertical, corto).",
          "Momentos clave que no pueden faltar: cabezas de cartel, ambiente nocturno, actividades paralelas.",
          "Restricciones de acceso o zonas donde no se puede grabar.",
          "Plazo de entrega: 24h, 48h o semana posterior.",
        ],
      },
      {
        title: "Cómo organizar el rodaje durante el evento",
        paragraphs: [
          "En un festival, el caos es la norma. La única forma de que el material sea aprovechable es tener una estructura mínima: qué vas a grabar en cada tramo horario y qué tipo de plano necesitas en cada momento.",
          "La regla de los tres bloques funciona bien: inicio (llegada, ambiente, expectativa), núcleo (actuaciones, reacciones, energía) y cierre (últimos momentos, gente yéndose, resumen emocional). Con material de los tres bloques tienes todo lo que necesitas para el montaje.",
        ],
      },
      {
        title: "Planos que no pueden faltar",
        bullets: [
          "Planos aéreos al inicio y al final para establecer el escenario.",
          "Reacciones del público, no solo a los artistas.",
          "Detalles pequeños: manos aplaudiendo, carteles, comida, calzado en el barro.",
          "Al menos un plano largo sin corte que dé respiro al montaje.",
          "Material del equipo organizador o voluntarios (humaniza el evento).",
        ],
      },
      {
        title: "Montaje: ritmo antes que cantidad",
        paragraphs: [
          "El error de montaje más frecuente es querer meter todo. Un aftermovie de 4 minutos con 300 cortes no es más completo, es más difícil de ver. Elige los 40–50 mejores clips y trabaja solo con ellos.",
          "La música manda el tempo. Empieza por elegirla y estructura el montaje sobre sus cambios de energía. Un buen aftermovie de festival puede estar listo en 48 horas si el material está bien organizado desde el rodaje.",
        ],
      },
    ],
  },
  {
    id: "requisitos-grabar-dron-galicia",
    slug: "requisitos-grabar-dron-galicia",
    title: "Requisitos para grabar con dron en Galicia: licencias y espacios",
    excerpt:
      "Qué documentación necesitas, qué zonas están permitidas y cómo evitar sanciones al rodar con dron en Galicia. Guía actualizada a la normativa EASA 2026.",
    date: "2025-12-10",
    readTime: "8 min",
    category: "Técnico",
    cover: `${assetBase}images/blog-fpv.jpg`,
    tags: ["dron", "normativa", "EASA", "Galicia", "permisos", "espacios aéreos"],
    sections: [
      {
        title: "La normativa que aplica en España desde 2021",
        paragraphs: [
          "Desde enero de 2021, España aplica el Reglamento UAS de la Unión Europea (Reglamento de Ejecución UE 2019/947). Esto unifica las reglas en toda Europa bajo la autoridad de AESA (Agencia Estatal de Seguridad Aérea) en España.",
          "Lo más importante: el tipo de categoría de operación (Abierta, Específica o Certificada) determina qué documentación necesitas, qué zonas puedes volar y bajo qué condiciones. Para la mayoría de los rodajes comerciales en exteriores aplica la categoría Abierta, subcategoría A1, A2 o A3 según el dron y la distancia a personas.",
        ],
      },
      {
        title: "Qué necesita un piloto profesional en 2026",
        bullets: [
          "Certificado de competencia de piloto (CCP): expedido por AESA tras examen teórico (A1/A3) y práctico (A2).",
          "Registro de operador UAS: número de registro obligatorio para cualquier dron de más de 250g.",
          "Seguro de responsabilidad civil: obligatorio para operaciones comerciales. Cubre daños a terceros.",
          "Plan de vuelo en zonas controladas: obligatorio antes de operar en o cerca de aeropuertos, helipuertos o zonas restringidas.",
          "Identificación remota: los drones de clase C1 en adelante deben emitir señal de identificación durante el vuelo.",
        ],
      },
      {
        title: "Zonas problemáticas en Galicia",
        paragraphs: [
          "Galicia tiene varias zonas que requieren autorización específica o donde el vuelo está prohibido. Las más habituales en proyectos de producción audiovisual son:",
        ],
        bullets: [
          "Entorno de aeropuertos (Santiago, Vigo, A Coruña, Ourense): zonas protegidas de geometría variable. Consultar siempre con AESA y la app Enaire.",
          "Espacios naturales protegidos (Parque Nacional Islas Atlánticas, etc.): pueden requerir autorización de la Xunta.",
          "Zonas urbanas densas: limitaciones adicionales en categoría Abierta A1.",
          "Costa: proximidad a playas concurridas implica restricciones en verano.",
        ],
      },
      {
        title: "Herramientas para verificar antes de volar",
        bullets: [
          "App Enaire Drones: mapa oficial con zonas geográficas UAS en España. Gratuita.",
          "Droniq / AirMap: alternativas con cobertura europea.",
          "Notificación AESA: para zonas que requieren aviso previo pero no autorización expresa.",
          "Portal AESA (aesa.gob.es): solicitud de autorizaciones específicas y consulta de normativa vigente.",
        ],
      },
      {
        title: "Qué pasa si contratas a un profesional",
        paragraphs: [
          "Un piloto profesional certificado por EASA lleva consigo toda la documentación necesaria y conoce el procedimiento para solicitar autorizaciones en zonas especiales. Eso incluye comunicación con AESA, verificación de espacio aéreo y seguro activo durante el rodaje.",
          "Antes de contratar, pide el número de operador UAS, el certificado de competencia y la póliza de seguro. Un profesional serio los tiene listos y no pone objeciones a compartirlos.",
        ],
      },
    ],
  },
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
