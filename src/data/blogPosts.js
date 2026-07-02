// src/data/blogPosts.js

const assetBase =
  (import.meta && import.meta.env && import.meta.env.BASE_URL) || "/"

export const blogPosts = [
  {
    id: "cuanto-cuesta-grabar-con-dron",
    slug: "cuanto-cuesta-grabar-con-dron",
    title: "Cuánto cuesta grabar con dron en 2026: precios reales en España",
    excerpt:
      "Tarifas reales de grabación con dron: qué cuesta una media jornada, qué encarece el vuelo FPV y qué debe incluir siempre un presupuesto serio con piloto certificado.",
    date: "2026-06-25",
    readTime: "7 min",
    category: "Presupuesto",
    cover: `${assetBase}images/geprc-mark5.jpg`,
    tags: ["dron", "precio", "presupuesto", "FPV", "grabación aérea"],
    sections: [
      {
        title: "El rango real del mercado",
        paragraphs: [
          "La grabación profesional con dron en España se mueve, como norma general, entre 350€ y 2.000€ por proyecto. Es un rango amplio porque dentro caben cosas muy distintas: desde un vuelo de una hora para tres planos de una parcela hasta un rodaje FPV de jornada completa con edición incluida.",
          "Como referencia orientativa: una media jornada de vuelo con entrega de vídeo editado de 60 a 120 segundos suele costar entre 400€ y 600€. Una jornada completa con dron y piloto, entre 600€ y 900€. A partir de ahí, cada capa extra (FPV, segunda cámara, edición avanzada, permisos especiales) suma.",
        ],
      },
      {
        title: "Qué factores mueven el precio",
        bullets: [
          "Tipo de dron: un vuelo estabilizado estándar cuesta menos que un rodaje FPV, que exige más pericia, más preparación y más margen de seguridad.",
          "Localización y desplazamiento: distancia, dietas y tiempo de viaje entran en el presupuesto.",
          "Espacio aéreo: volar cerca de aeropuertos, en zonas urbanas o espacios protegidos requiere gestiones con AESA que llevan tiempo.",
          "Edición: no es lo mismo entregar brutos que una pieza montada, con color y música con licencia.",
          "Riesgo operativo: interiores, personas cerca o vehículos en movimiento exigen más preparación.",
        ],
      },
      {
        title: "Por qué el FPV cuesta más que el dron convencional",
        paragraphs: [
          "El dron FPV se pilota en manual puro, sin estabilización automática ni sensores que corrijan errores. Cada plano exige ensayos, calibración y un piloto con horas de vuelo reales. A cambio consigue planos que ningún otro equipo puede hacer: recorridos continuos por interiores, persecuciones y transiciones sin cortes.",
          "En la práctica, una sesión FPV se presupuesta como un rodaje, no como un vuelo: hay que planificar la ruta, hacer pasadas de prueba y repetir tomas hasta clavar el movimiento. Por eso los packs de FPV suelen partir de los 500€ a 700€ incluso en proyectos pequeños.",
        ],
      },
      {
        title: "Qué debe incluir siempre el presupuesto",
        bullets: [
          "Piloto con certificado de competencia y número de operador UAS registrado en AESA.",
          "Seguro de responsabilidad civil activo durante el rodaje.",
          "Verificación previa del espacio aéreo y gestión de autorizaciones si hacen falta.",
          "Formatos de entrega pactados: horizontal, vertical o ambos.",
          "Número de revisiones incluidas en la edición.",
        ],
      },
      {
        title: "Cuándo un precio bajo sale caro",
        paragraphs: [
          "Volar sin registro, sin seguro o sin revisar el espacio aéreo puede suponer sanciones de miles de euros, y la responsabilidad alcanza también a quien contrata. Si un presupuesto es sospechosamente bajo, pregunta por el número de operador y la póliza. Un profesional los facilita sin problema.",
          "La forma más fiable de comparar presupuestos es pedir el desglose: vuelo, edición, desplazamiento y permisos. Con eso delante, la diferencia entre dos cifras deja de ser un misterio.",
        ],
      },
    ],
  },
  {
    id: "video-inmobiliario-con-dron-vender-antes",
    slug: "video-inmobiliario-con-dron-vender-antes",
    title: "Vídeo inmobiliario con dron: cómo ayuda a vender una propiedad antes",
    excerpt:
      "Por qué los anuncios con vídeo aéreo captan más contactos, qué planos funcionan en una vivienda y cuánto cuesta un vídeo inmobiliario con dron en Galicia.",
    date: "2026-06-10",
    readTime: "6 min",
    category: "Espacios",
    cover: `${assetBase}images/projects/video-inmobiliario-galicia-1-1620.png`,
    tags: ["inmobiliaria", "dron", "vídeo inmobiliario", "Galicia"],
    sections: [
      {
        title: "El comprador decide con los ojos",
        paragraphs: [
          "La mayor parte del tiempo que un comprador dedica a un anuncio inmobiliario se va en el contenido visual, no en el texto. Un anuncio con vídeo destaca en los portales, retiene más tiempo al usuario y genera contactos de mejor calidad, porque quien llama ya ha visto la casa de verdad.",
          "El dron añade lo que las fotos no pueden contar: el tamaño real de la parcela, la orientación, el entorno y la distancia a la playa, al pueblo o a la carretera. En propiedades de campo y costa gallegas, esa información es la que decide la visita.",
        ],
      },
      {
        title: "Los planos que venden una propiedad",
        bullets: [
          "Apertura aérea que sitúa la propiedad en su entorno.",
          "Órbita del dron alrededor de la vivienda para mostrar volumen y estado.",
          "Recorrido interior continuo, del acceso a las estancias principales.",
          "Detalles que diferencian: chimenea, bodega, piscina, vistas desde la ventana.",
          "Cierre con el plano más potente, normalmente el atardecer o la vista general.",
        ],
      },
      {
        title: "Recorrido FPV: la visita antes de la visita",
        paragraphs: [
          "Para viviendas amplias, pazos o propiedades singulares, el recorrido FPV en un solo plano funciona especialmente bien: el espectador entra por la puerta, atraviesa las estancias y sale al jardín sin un solo corte. Es lo más parecido a estar allí.",
          "Ese formato filtra las visitas: quien pide ver la casa después de un recorrido FPV ya sabe lo que va a encontrar. Menos visitas de curiosidad, más visitas de compra.",
        ],
      },
      {
        title: "Formatos para portales y redes",
        paragraphs: [
          "De un solo rodaje deben salir todas las piezas que necesita la comercialización: el vídeo principal horizontal para el portal y la web, versiones verticales de 30 a 60 segundos para Instagram y TikTok, y fotos aéreas para el anuncio.",
          "Las piezas verticales son las que más alcance orgánico consiguen. Las inmobiliarias que publican vídeo de forma constante construyen audiencia local, y esa audiencia trae mandatos de venta, no solo compradores.",
        ],
      },
      {
        title: "Cuánto cuesta y cuándo compensa",
        paragraphs: [
          "Un vídeo inmobiliario con dron en Galicia se mueve normalmente entre 400€ y 900€ según tamaño de la propiedad, interior más exterior y número de versiones. Para propiedades por encima de 200.000€, el coste del vídeo es marginal frente a lo que aporta: mejor precio de salida defendible y menos meses de anuncio publicado.",
          "En propiedades de precio medio, la alternativa eficiente es agrupar: grabar varias viviendas de la misma cartera en una jornada reduce el coste por propiedad de forma considerable.",
        ],
      },
    ],
  },
  {
    id: "seguimiento-de-obra-con-dron",
    slug: "seguimiento-de-obra-con-dron",
    title: "Seguimiento de obra con dron: qué gana una promotora o constructora",
    excerpt:
      "El seguimiento aéreo de obra convierte el avance de una construcción en documentación útil y en material de marketing: qué incluye, cada cuánto grabar y qué cuesta.",
    date: "2026-05-28",
    readTime: "6 min",
    category: "Técnico",
    cover: `${assetBase}images/dji-mini-4pro.webp`,
    tags: ["obra", "construcción", "dron", "timelapse", "promotoras"],
    sections: [
      {
        title: "Qué es exactamente el seguimiento de obra con dron",
        paragraphs: [
          "Consiste en grabar la obra desde el aire a intervalos regulares (cada semana, cada quince días o cada mes) repitiendo los mismos encuadres en cada visita. El resultado es una serie de imágenes comparables entre sí que documenta el avance real de la construcción.",
          "Con ese material se generan dos productos distintos: documentación visual para dirección facultativa, promotores e inversores, y un timelapse de obra que comprime meses de trabajo en un vídeo de un minuto. El primero es gestión; el segundo, marketing.",
        ],
      },
      {
        title: "Para qué lo usa una promotora",
        bullets: [
          "Informes de avance para inversores y entidades financieras, con imagen real y fechada.",
          "Comercialización sobre plano: el comprador ve que la obra avanza de verdad.",
          "Contenido para redes y web durante los meses de construcción, cuando no hay piso piloto que enseñar.",
          "Documentación ante disputas: el estado de la obra en cada fecha queda registrado.",
          "Vídeo de entrega final que resume todo el proceso, útil para la marca de la promotora.",
        ],
      },
      {
        title: "Cada cuánto conviene grabar",
        paragraphs: [
          "Depende del ritmo de la obra. En fase de estructura, cuando el cambio visual es rápido, una visita mensual suele bastar para un timelapse fluido. En fases largas de acabados interiores, las visitas pueden espaciarse y complementarse con grabación interior.",
          "Lo importante es la constancia de encuadre: mismas posiciones, mismas alturas y, a ser posible, condiciones de luz parecidas. Esa disciplina es lo que hace que el timelapse final funcione.",
        ],
      },
      {
        title: "Qué requisitos legales tiene",
        paragraphs: [
          "Una obra suele estar en entorno urbano, y volar en ciudad exige piloto certificado, dron con marcado de clase adecuado y, según la zona, coordinación con AESA. Además, la presencia de trabajadores obliga a planificar el vuelo con margen de seguridad sobre personas.",
          "Contratar a un operador registrado resuelve todo esto: verificación del espacio aéreo, seguro de responsabilidad civil y procedimiento de vuelo seguro dentro del recinto de obra.",
        ],
      },
      {
        title: "Qué cuesta un seguimiento completo",
        paragraphs: [
          "Cada visita de grabación se mueve en el rango de una media jornada de dron (400€ a 600€), con descuentos habituales al contratar el seguimiento completo de la obra. Una promoción de 18 meses con visita mensual y timelapse final editado suele suponer bastante menos que una sola campaña de publicidad convencional.",
          "La diferencia es que este material trabaja dos veces: primero como gestión durante la obra y después como pieza de marca cuando la promoción se entrega.",
        ],
      },
    ],
  },
  {
    id: "video-para-restaurantes-hosteleria",
    slug: "video-para-restaurantes-hosteleria",
    title: "Vídeo para restaurantes: qué grabar para llenar mesas",
    excerpt:
      "El 93% de las marcas de hostelería afirma que el vídeo les trae clientes nuevos. Qué grabar en un restaurante, qué formatos funcionan y cómo rentabilizar un solo rodaje.",
    date: "2026-05-14",
    readTime: "6 min",
    category: "Marcas",
    cover: `${assetBase}images/blog-indoor.jpg`,
    tags: ["restaurantes", "hostelería", "reels", "vídeo marketing"],
    sections: [
      {
        title: "Por qué el vídeo funciona tan bien en hostelería",
        paragraphs: [
          "La comida es el producto más visual que existe, y la decisión de ir a un restaurante se toma cada vez más en Instagram y TikTok antes que en Google. El 93% de las marcas de hostelería asegura que el vídeo les ayuda a atraer clientes nuevos, y el vídeo de producto aumenta la intención de compra frente a la foto estática.",
          "La ventaja para un restaurante es que no necesita inventar contenido: el servicio de cada día ya es el contenido. Lo que necesita es capturarlo con oficio y publicarlo con constancia.",
        ],
      },
      {
        title: "Los cuatro vídeos que todo restaurante debería tener",
        bullets: [
          "La pieza de marca (60-90 segundos): quiénes sois, cómo se cocina y cómo se vive el local. Para la web, Google Business y campañas.",
          "El plato estrella en primer plano: vapor, corte, textura. El formato que más se comparte.",
          "La cocina por dentro: el equipo trabajando en servicio real. Genera confianza y humaniza.",
          "El recorrido del local: de la puerta a la mesa. Ideal en FPV si el espacio tiene recorrido, terraza o vistas.",
        ],
      },
      {
        title: "Grabar en servicio real, no en escenario",
        paragraphs: [
          "El error más común es grabar el restaurante vacío un lunes por la mañana. La energía de un local lleno no se puede fingir, y el espectador la nota. Lo ideal es combinar una sesión tranquila para los planos de plato y detalle con una sesión en servicio real para el ambiente.",
          "Con la planificación adecuada, el rodaje no interrumpe el servicio: se define antes qué mesas, qué pases de cocina y qué momentos se van a grabar, y el equipo trabaja alrededor sin molestar.",
        ],
      },
      {
        title: "Un rodaje, un mes de contenido",
        paragraphs: [
          "La forma eficiente de plantearlo no es un vídeo, sino un banco de piezas: de una jornada de rodaje bien planificada salen la pieza principal y entre 6 y 10 verticales de 15 a 30 segundos listos para publicar semana a semana.",
          "Ese ritmo de publicación constante es lo que el algoritmo premia, y lo que convierte una cuenta de restaurante en un canal de reservas.",
        ],
      },
      {
        title: "El detalle que casi nadie aprovecha",
        paragraphs: [
          "El vídeo en la ficha de Google Business. Casi ningún restaurante lo usa, aparece directamente en los resultados de búsqueda locales y es gratis. Una pieza de 30 segundos ahí trabaja todos los días del año en la búsqueda con más intención que existe: 'dónde comer en' tu zona.",
        ],
      },
    ],
  },
  {
    id: "video-casa-rural-hotel-galicia-reservas",
    slug: "video-casa-rural-hotel-galicia-reservas",
    title: "Vídeo para casas rurales y hoteles en Galicia: más reservas directas",
    excerpt:
      "Cómo un vídeo bien planteado ayuda a un alojamiento rural gallego a conseguir reservas directas: qué grabar, en qué temporada y dónde publicarlo para que trabaje.",
    date: "2026-04-30",
    readTime: "7 min",
    category: "Turismo",
    cover: `${assetBase}images/hero-poster.jpg`,
    tags: ["turismo rural", "hoteles", "Galicia", "reservas", "vídeo promocional"],
    sections: [
      {
        title: "El huésped reserva la experiencia, no la habitación",
        paragraphs: [
          "Galicia se ha consolidado como uno de los destinos favoritos para escapadas auténticas, y la competencia entre alojamientos rurales crece cada año. Las fotos enseñan la habitación; el vídeo transmite lo que se siente al estar allí. Y esa sensación es lo que se reserva.",
          "Además, YouTube es el segundo buscador más usado en España. Un vídeo bien titulado del alojamiento aparece en búsquedas donde tu web sola no llega, y en la propia web multiplica el tiempo de permanencia, una de las señales que mejoran tu posicionamiento.",
        ],
      },
      {
        title: "Qué grabar en un alojamiento rural",
        bullets: [
          "La llegada: el camino, la primera vista de la casa, la puerta abriéndose. El plano que activa las ganas de ir.",
          "El recorrido continuo por los espacios comunes y una habitación, idealmente en FPV para que fluya sin cortes.",
          "El entorno desde el aire: monte, viñedo, río o mar. En Galicia el paisaje es la mitad del motivo de viaje.",
          "Los detalles de la experiencia: desayuno, chimenea, bañera, huerta.",
          "Las personas que lo llevan: treinta segundos del anfitrión valen más que un párrafo de descripción.",
        ],
      },
      {
        title: "La temporada importa más de lo que parece",
        paragraphs: [
          "Grabar en la estación equivocada resta credibilidad: un vídeo de piscina y sol no ayuda a vender escapadas de otoño. Lo ideal es rodar en la temporada que quieres potenciar, o plantear dos sesiones cortas en épocas distintas y tener material para todo el año.",
          "En Galicia, la primavera y el comienzo del otoño dan la mejor combinación de luz, verde y disponibilidad del alojamiento para rodar sin interferir con huéspedes.",
        ],
      },
      {
        title: "Dónde debe vivir ese vídeo",
        bullets: [
          "En la portada de tu web, donde empuja la reserva directa sin comisión de intermediarios.",
          "En YouTube, titulado con el nombre del alojamiento y la zona ('casa rural en Ribeira Sacra').",
          "En la ficha de Google Business, visible en las búsquedas locales.",
          "En Instagram y TikTok, en versiones verticales cortas publicadas de forma sostenida.",
          "En Booking y portales, donde el vídeo diferencia tu ficha de las veinte de al lado.",
        ],
      },
      {
        title: "Qué presupuesto tiene sentido",
        paragraphs: [
          "Una producción completa para un alojamiento rural (pieza principal más versiones verticales, con dron y FPV) suele moverse entre 800€ y 2.000€ según jornadas y entregas. Con una ocupación media, recuperar esa inversión requiere apenas un puñado de reservas directas que no pagan comisión a ningún portal.",
          "El vídeo no es un gasto de decoración: es la pieza de captación que más años trabaja de todo tu marketing.",
        ],
      },
    ],
  },
  {
    id: "cuanto-cuesta-un-videoclip",
    slug: "cuanto-cuesta-un-videoclip",
    title: "Cuánto cuesta un videoclip en 2026: presupuesto real por niveles",
    excerpt:
      "De 500€ a 6.000€: qué videoclip puedes hacer con cada presupuesto, en qué se va el dinero y cómo aprovechar bien el rodaje si eres artista independiente.",
    date: "2026-03-05",
    readTime: "7 min",
    category: "Presupuesto",
    cover: `${assetBase}images/projects/mientete-1.png`,
    tags: ["videoclip", "música", "presupuesto", "producción audiovisual"],
    sections: [
      {
        title: "Los tres niveles de presupuesto",
        paragraphs: [
          "En España, un videoclip profesional se mueve en tres rangos claros. Entre 500€ y 1.200€: rodaje de una jornada, una localización, planteamiento sencillo (estudio, plató o exterior único) y edición cuidada. Entre 1.200€ y 3.000€: guion desarrollado, dos o tres localizaciones, iluminación diseñada y color trabajado. A partir de 3.000€: dirección de arte, equipo ampliado, actores y postproducción avanzada.",
          "Los tres niveles pueden dar resultados buenos. La diferencia no está en la dignidad del resultado, sino en la ambición de la idea que puedes ejecutar bien con cada cifra.",
        ],
      },
      {
        title: "En qué se va el dinero realmente",
        bullets: [
          "Rodaje: es la partida principal. Días de grabación, equipo de cámara e iluminación y personas implicadas.",
          "Localizaciones: cada localización extra añade logística, transporte y tiempo de montaje.",
          "Arte y estilismo: vestuario, maquillaje y atrezzo, decisivos si el clip tiene estética marcada.",
          "Postproducción: montaje, etalonaje de color y efectos. El acabado que separa lo correcto de lo memorable.",
          "Extras: FPV, steadicam, actores o figurantes, alquiler de plató.",
        ],
      },
      {
        title: "Una idea fuerte vale más que tres localizaciones",
        paragraphs: [
          "El error clásico del artista independiente es dispersar el presupuesto: muchas localizaciones, muchos cambios de vestuario y ninguna imagen memorable. Los videoclips que funcionan con poco presupuesto hacen lo contrario: una sola idea visual potente, ejecutada a fondo.",
          "Un plató con un diseño de luz y color bien pensado da más personalidad que cinco exteriores genéricos. La cámara coreografiada con el artista, las siluetas, el ritmo del montaje: eso es lo que se recuerda, y no depende de la cifra sino del oficio.",
        ],
      },
      {
        title: "Qué aporta el FPV en un videoclip",
        paragraphs: [
          "El dron FPV permite movimientos de cámara que en cine tradicional exigirían grúas y travelling: pasadas rápidas alrededor del artista, entradas y salidas de espacios, planos secuencia imposibles. En un videoclip, un solo plano FPV bien colocado puede ser el momento que la gente rebobina.",
          "Se presupuesta como un extra de rodaje y compensa cuando la canción tiene un pico de energía que pide ese movimiento.",
        ],
      },
      {
        title: "Cómo estirar el presupuesto si autoproduces",
        bullets: [
          "Rueda todo en una jornada: la segunda jornada es el mayor salto de coste.",
          "Elige una localización con variedad interna (un edificio con estancias distintas rinde como tres localizaciones).",
          "Cierra la idea y las referencias visuales antes de contratar: las horas de indecisión en rodaje se pagan.",
          "Pide versiones verticales del clip para redes en el mismo presupuesto: es el material de promoción del single.",
        ],
      },
    ],
  },
  {
    id: "como-elegir-productora-audiovisual",
    slug: "como-elegir-productora-audiovisual",
    title: "Cómo elegir productora audiovisual: 10 preguntas antes de contratar",
    excerpt:
      "Guía práctica para comparar productoras y videógrafos sin saber de vídeo: qué mirar en el portfolio, qué preguntar y las señales de alarma en un presupuesto.",
    date: "2026-02-04",
    readTime: "8 min",
    category: "Marcas",
    cover: `${assetBase}images/blackmagic.jpg`,
    tags: ["productora audiovisual", "contratar", "vídeo corporativo", "guía"],
    sections: [
      {
        title: "Empieza por el portfolio, pero míralo bien",
        paragraphs: [
          "Lo que ves en el portfolio es lo que vas a recibir. No mires solo si los vídeos son bonitos: mira si hay trabajos parecidos al tuyo en tipo y en escala. Una productora brillante en spots de gran presupuesto no es necesariamente la mejor opción para un pack mensual de contenido de redes, y al revés.",
          "Fíjate también en para quién ha trabajado. Clientes reales y reconocibles, con piezas publicadas que puedes encontrar, valen más que un reel de imágenes espectaculares sin contexto.",
        ],
      },
      {
        title: "Las 10 preguntas",
        bullets: [
          "¿Habéis hecho proyectos parecidos al mío? ¿Puedo verlos?",
          "¿Quién va a estar en el rodaje y quién edita después?",
          "¿Qué necesitáis de mí antes, durante y después del rodaje?",
          "¿Qué incluye exactamente el presupuesto y qué se cobra aparte?",
          "¿Cuántas revisiones de montaje están incluidas?",
          "¿En qué formatos se entrega y para qué canales están pensados?",
          "¿De quién son los derechos del material bruto y de la música?",
          "¿Qué pasa si llueve o hay que mover la fecha?",
          "¿Cuál es el plazo de entrega desde que se graba?",
          "Si hay dron: ¿me facilitas número de operador UAS y seguro?",
        ],
      },
      {
        title: "Videógrafo independiente o productora: qué cambia",
        paragraphs: [
          "Un profesional independiente que cubre todo el proceso suele ser más ágil y más económico: menos intermediarios, un solo interlocutor y decisiones rápidas. Es la opción natural para pymes, eventos y contenido recurrente.",
          "Una productora con equipo amplio tiene sentido cuando el proyecto exige rodar en varios sitios a la vez, mover actores y arte, o producir volúmenes grandes con plazos rígidos. Se paga la estructura, y a veces hace falta. La pregunta correcta no es cuál es mejor, sino cuánta estructura necesita tu proyecto.",
        ],
      },
      {
        title: "Señales de alarma en un presupuesto",
        bullets: [
          "Un número redondo sin desglose de partidas.",
          "Precio cerrado antes de haber preguntado qué quieres conseguir con el vídeo.",
          "Revisiones ilimitadas: suena bien y suele esconder falta de método.",
          "Sin contrato ni condiciones por escrito.",
          "Drones sin mencionar registro de operador ni seguro.",
        ],
      },
      {
        title: "El criterio final: que pregunte por tus objetivos",
        paragraphs: [
          "La señal más fiable de un buen profesional es que antes de hablar de cámaras y precios pregunte qué quieres conseguir: ventas, reservas, visibilidad, contratación. El vídeo es una herramienta, y quien no pregunta para qué la vas a usar difícilmente te la va a dar en la forma que te sirva.",
          "Si además te explica sus decisiones con claridad y te dice que no a alguna cosa razonando por qué, es la persona con la que quieres trabajar.",
        ],
      },
    ],
  },
  {
    id: "tour-fpv-vs-tour-virtual-360",
    slug: "tour-fpv-vs-tour-virtual-360",
    title: "Tour FPV o tour virtual 360: qué le conviene a tu negocio",
    excerpt:
      "Ambos enseñan tu espacio, pero no hacen el mismo trabajo. Comparo el recorrido FPV y el tour 360 en emoción, alcance en redes, coste y casos de uso.",
    date: "2026-01-28",
    readTime: "6 min",
    category: "FPV",
    cover: `${assetBase}images/geprc-cinelog-30-v3.png`,
    tags: ["FPV", "tour virtual", "negocios", "espacios", "comparativa"],
    sections: [
      {
        title: "Dos herramientas, dos trabajos distintos",
        paragraphs: [
          "El tour virtual 360 (tipo Matterport o Street View) es una herramienta de consulta: el usuario explora tu espacio a su ritmo, se detiene donde quiere y vuelve cuando lo necesita. Es interactivo, exhaustivo y frío.",
          "El tour FPV es una pieza de emoción: un vuelo continuo que atraviesa el espacio en 40 a 90 segundos y transmite su energía. No permite explorar; hace algo distinto: dan ganas de ir. Confundir estos dos trabajos es la razón de que muchos negocios inviertan en la herramienta equivocada.",
        ],
      },
      {
        title: "Dónde gana cada uno",
        bullets: [
          "El 360 gana en consulta práctica: inmobiliaria de detalle, alquiler de salas, planificación de eventos en el espacio.",
          "El FPV gana en redes sociales: un tour 360 no se puede compartir como Reel; un vuelo FPV es de lo más compartido que existe.",
          "El 360 gana en exhaustividad: cada rincón, a ritmo del usuario.",
          "El FPV gana en memoria: el espectador recuerda la sensación del recorrido, no los metros cuadrados.",
          "El FPV gana en diferenciación: casi todos tus competidores tienen fotos; casi ninguno tiene un vuelo por dentro de su local.",
        ],
      },
      {
        title: "El caso típico: gimnasio, hotel, bodega, restaurante",
        paragraphs: [
          "Para negocios donde la experiencia del espacio es parte del producto, el FPV suele rendir más: un gimnasio en plena clase, una bodega entre barricas, un hotel del vestíbulo a la terraza. El dron tipo cinewhoop, pequeño y con hélices protegidas, permite volar interiores con seguridad incluso con gente presente.",
          "La pieza resultante trabaja en todas partes: web, Instagram, TikTok, ficha de Google y presentaciones comerciales. Es un formato, no una plataforma.",
        ],
      },
      {
        title: "Qué cuesta cada opción",
        paragraphs: [
          "Un tour virtual 360 de un local medio se mueve entre 100€ y 500€ según superficie, más el alojamiento de la plataforma si lo hay. Un tour FPV editado con música y color se mueve entre 500€ y 1.200€ según complejidad del vuelo y versiones de entrega.",
          "No son excluyentes: el 360 como herramienta de consulta en la web y el FPV como pieza de captación en redes se complementan bien. Si el presupuesto obliga a elegir, la pregunta es cuál es tu cuello de botella: si la gente no te conoce, FPV; si te conocen pero dudan de los detalles, 360.",
        ],
      },
      {
        title: "Cómo se planifica un buen vuelo interior",
        bullets: [
          "Recorrido con sentido: entrada, momento fuerte y salida. Como una visita guiada.",
          "Ensayos previos sin grabar para ajustar velocidades y pasos estrechos.",
          "El espacio en su mejor versión: luces encendidas, actividad real, gente avisada.",
          "Coordinación de seguridad: el piloto marca distancias y el personal sabe qué va a pasar.",
        ],
      },
    ],
  },
  {
    id: "video-eventos-deportivos-patrocinadores",
    slug: "video-eventos-deportivos-patrocinadores",
    title: "Vídeo para eventos deportivos: la pieza que trae patrocinadores",
    excerpt:
      "Un evento deportivo sin vídeo desaparece al terminar. Cómo la cobertura audiovisual multiplica la visibilidad de los patrocinadores y asegura la siguiente edición.",
    date: "2025-11-19",
    readTime: "7 min",
    category: "Eventos",
    cover: `${assetBase}images/projects/cross-2.png`,
    tags: ["deporte", "eventos", "patrocinio", "aftermovie", "FPV"],
    sections: [
      {
        title: "El evento dura un día; el vídeo, todo el año",
        paragraphs: [
          "Una carrera, un torneo o una competición concentran meses de trabajo en unas horas. Sin cobertura audiovisual, todo ese esfuerzo se evapora al recoger el podio. Con ella, el evento sigue trabajando doce meses: en las redes del organizador, en los informes a patrocinadores y en la promoción de la siguiente edición.",
          "Los patrocinadores lo saben. Cuando evalúan dónde poner su logo, buscan eventos con buena cobertura mediática y un retorno que puedan enseñar dentro de su empresa. El vídeo es exactamente ese retorno.",
        ],
      },
      {
        title: "Qué debe capturar la cobertura de un evento deportivo",
        bullets: [
          "La acción de verdad: el barro, el sprint, el contacto. Es lo que diferencia deporte de publirreportaje.",
          "La marca del patrocinador integrada en momentos reales: el arco de meta, los dorsales, el podio.",
          "El público y el ambiente: un evento con gente es un evento que crece.",
          "La organización trabajando: voluntarios, montaje, trastienda. Humaniza y da confianza institucional.",
          "Planos FPV siguiendo la acción: en quads, rallies, ciclismo o carreras, el dron FPV va donde ninguna cámara puede.",
        ],
      },
      {
        title: "Las entregas que importan y sus plazos",
        paragraphs: [
          "La cobertura moderna de un evento tiene tres tiempos. Durante el evento: clips verticales de 15 a 30 segundos publicados el mismo día, cuando la conversación está viva. La semana siguiente: el aftermovie de 2 a 3 minutos que resume la edición. Y para patrocinadores: una versión con presencia de marca cuantificable que puedan usar en su propia comunicación.",
          "Ese tercer entregable es el más olvidado y el que más renueva contratos: le da al patrocinador algo que enseñar, no solo algo que pagar.",
        ],
      },
      {
        title: "Cómo usar el vídeo para vender la siguiente edición",
        paragraphs: [
          "El aftermovie de esta edición es el argumento de venta de la próxima: abre el dossier de patrocinio, encabeza la web de inscripciones y alimenta la campaña de anuncios. Un evento que enseña vídeo profesional transmite una escala y una seriedad que ninguna memoria en PDF consigue.",
          "Por eso conviene plantear la cobertura antes del evento, con briefing: qué patrocinadores hay que cubrir, qué momentos son innegociables y qué piezas hacen falta después. Grabar sin ese guion es dejar el resultado al azar.",
        ],
      },
      {
        title: "Qué presupuesto maneja un evento medio",
        paragraphs: [
          "Una cobertura de jornada completa con cámara y dron, clips para redes y aftermovie editado se mueve normalmente entre 800€ y 2.500€ según duración, equipo y plazos de entrega. En eventos con varios patrocinadores, es habitual que la propia cobertura se financie incluyéndola como contrapartida en los paquetes de patrocinio.",
          "Dicho de otra forma: el vídeo no compite con el presupuesto del evento, lo amplía.",
        ],
      },
    ],
  },
  {
    id: "video-vertical-empresas-formatos-2026",
    slug: "video-vertical-empresas-formatos-2026",
    title: "Vídeo vertical para empresas: guía de formatos en 2026",
    excerpt:
      "Reels, TikTok, Shorts y las historias exigen pensar en vertical desde el rodaje. Qué formato pide cada canal, qué dura cada pieza y cómo rodar una vez y publicar en todos.",
    date: "2025-10-22",
    readTime: "6 min",
    category: "Redes",
    cover: `${assetBase}images/projects/norvento-1.png`,
    tags: ["vídeo vertical", "reels", "TikTok", "formatos", "redes sociales"],
    sections: [
      {
        title: "El vertical ya no es la versión pequeña",
        paragraphs: [
          "Durante años, el vídeo vertical fue un recorte del horizontal: se rodaba en 16:9 y se cortaba lo que cupiera. Hoy es al revés: para la mayoría de las empresas, el vertical es donde está la audiencia, y el horizontal es la pieza de ocasión para web y YouTube.",
          "Eso cambia el rodaje. Un plano pensado para 9:16 encuadra distinto, mueve la cámara distinto y coloca a las personas distinto. Rodar en horizontal y confiar en el recorte produce ese efecto de contenido reciclado que el espectador detecta al instante.",
        ],
      },
      {
        title: "Qué pide cada canal en 2026",
        bullets: [
          "Instagram Reels: 9:16, entre 15 y 60 segundos. Lo primero que se ve decide todo: los 2 primeros segundos son la miniatura en movimiento.",
          "TikTok: 9:16, tolera piezas más largas si retienen. Premia lo auténtico sobre lo pulido.",
          "YouTube Shorts: 9:16 hasta 60 segundos. La vía para que un canal corporativo gane suscriptores.",
          "Stories: 9:16 efímero. Ideal para trastienda, avances y encuestas, no para la pieza principal.",
          "Web y YouTube: ahí sigue mandando el 16:9. La pieza de marca completa vive aquí.",
        ],
      },
      {
        title: "Rodar una vez, publicar en todo: el rodaje multiformato",
        paragraphs: [
          "La forma eficiente de producir es planificar el multiformato desde el guion: se define qué piezas van a salir del rodaje (una principal horizontal y de 6 a 10 verticales) y se graba cada escena teniendo en cuenta ambos encuadres, protegiendo los márgenes del plano.",
          "Ese planteamiento cuesta poco más que un rodaje normal y multiplica las entregas. Es la diferencia entre pagar un vídeo y pagar un mes de contenido.",
        ],
      },
      {
        title: "Los tres errores más comunes de las empresas",
        bullets: [
          "Publicar el spot horizontal recortado, con logos y rótulos cortados por los bordes.",
          "Piezas de 90 segundos donde lo importante llega tarde: en vertical, el gancho va al principio.",
          "Publicar tres semanas y parar. La constancia pesa más que la perfección de cada pieza.",
        ],
      },
      {
        title: "Qué papel juega el FPV en vertical",
        paragraphs: [
          "El vuelo FPV funciona especialmente bien en vertical: el movimiento continuo retiene, y los recorridos por espacios (un local, una nave, un hotel) encajan de forma natural en pantalla completa de móvil. Muchos de los Reels con más alcance de negocios locales son exactamente eso: un vuelo de 30 segundos por su espacio.",
          "Si tu empresa tiene un lugar que enseñar, el tour FPV vertical es probablemente la pieza con mejor relación coste-alcance que puedes producir hoy.",
        ],
      },
    ],
  },
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
          "Un aftermovie que funciona en redes (el que genera reservas para la siguiente edición) se planifica con semanas de antelación. No hace falta un equipo grande. Hace falta tiempo para pensar qué quieres contar.",
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
