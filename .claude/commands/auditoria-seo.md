# Skill: auditoria-seo

Audita el SEO completo de una URL y genera un informe HTML visual interactivo.

## Uso

```
/auditoria-seo <URL>
```

Si no se proporciona URL, pide al usuario que la introduzca antes de continuar.

## Instrucciones de ejecución

Sigue estos pasos **en orden** sin saltarte ninguno:

### Paso 1 — Obtener la URL

Si `$ARGUMENTS` contiene una URL válida, úsala directamente.  
Si no, pregunta: **"¿Qué URL quieres auditar?"** y espera la respuesta.

Normaliza la URL: si no empieza por `http://` o `https://`, añade `https://`.

---

### Paso 2 — Recopilar datos con WebFetch

Haz las siguientes llamadas **en paralelo**:

1. **Página principal** — `WebFetch(url)` → HTML completo
2. **robots.txt** — `WebFetch(url + "/robots.txt")`
3. **sitemap.xml** — `WebFetch(url + "/sitemap.xml")`

Si alguna llamada falla (404, timeout), anótalo como hallazgo negativo para esa categoría.

---

### Paso 3 — Analizar las 8 categorías SEO

Extrae y evalúa lo siguiente del HTML y las respuestas obtenidas:

#### 1. Meta Tags (0-100)
- `<title>`: ¿existe? ¿longitud entre 50-60 caracteres? ¿contiene keyword principal?
- `<meta name="description">`: ¿existe? ¿longitud entre 150-160 caracteres?
- `<meta name="keywords">`: presencia (bonus, no penaliza si falta)
- `<link rel="canonical">`: ¿definido?
- `<meta name="viewport">`: ¿presente?
- `<meta charset>`: ¿declarado?

Puntuación: empieza en 100, resta puntos por cada elemento ausente o mal configurado.

#### 2. Headings / Estructura (0-100)
- ¿Hay exactamente 1 `<h1>`?
- ¿Los headings siguen jerarquía lógica (h1 → h2 → h3)?
- ¿El H1 contiene la keyword principal?
- ¿Hay al menos 3 H2 para estructurar el contenido?
- ¿Algún heading está vacío?

#### 3. Imágenes (0-100)
- Número de `<img>` sin atributo `alt`
- Número de `<img>` con `alt` vacío (`alt=""` en imágenes decorativas es correcto)
- ¿Se usan formatos modernos (webp, avif)? (heurística: inspecciona las extensiones en `src`)
- ¿Hay atributos `width` y `height` para evitar CLS?
- ¿Se usa `loading="lazy"` en imágenes?

#### 4. Open Graph & Twitter Cards (0-100)
- `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
- `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- ¿La imagen OG tiene URL absoluta?

#### 5. Schema / Datos Estructurados (0-100)
- ¿Existe algún `<script type="application/ld+json">`?
- ¿Qué tipos de schema hay? (Organization, WebSite, BreadcrumbList, Product, Article…)
- ¿El JSON-LD es válido (bien formado)?
- ¿Hay microdata o RDFa como alternativa?

#### 6. Velocidad & Core Web Vitals (estimación, 0-100)
- Número de scripts `<script>` externos en `<head>` sin `defer` ni `async`
- Número de hojas de estilo externas (`<link rel="stylesheet">`)
- ¿Se usa `<link rel="preload">` o `<link rel="preconnect">`?
- ¿Las imágenes hero tienen `fetchpriority="high"`?
- ¿El HTML pesa más de ~100 KB? (estimación por longitud del string)
- ¿Hay `<iframe>` de terceros sin `loading="lazy"`?

**Nota**: esta es una estimación estática. Para métricas reales recomendarás PageSpeed Insights.

#### 7. Robots.txt & Crawlabilidad (0-100)
- ¿Existe `/robots.txt`?
- ¿Apunta a un Sitemap?
- ¿Bloquea recursos importantes (CSS, JS, imágenes)?
- `<meta name="robots">` en el HTML: ¿tiene `noindex` o `nofollow` accidentales?
- `<meta name="googlebot">`: ¿hay directivas problemáticas?

#### 8. Sitemap & Enlaces (0-100)
- ¿Existe `/sitemap.xml` y responde 200?
- ¿El sitemap está referenciado en robots.txt?
- Número de enlaces internos en la página
- Número de enlaces externos
- ¿Hay enlaces rotos evidentes (href vacío, `#`, `javascript:void`)?
- ¿Los enlaces externos tienen `rel="noopener noreferrer"`?

---

### Paso 4 — Calcular puntuación global

```
Puntuación global = promedio ponderado de las 8 categorías
```

Pesos sugeridos:
- Meta Tags: 20%
- Headings: 10%
- Imágenes: 10%
- Open Graph: 10%
- Schema: 10%
- Velocidad: 20%
- Robots/Crawl: 10%
- Sitemap/Links: 10%

Clasifica el resultado:
- 90-100 → Excelente
- 75-89 → Bueno
- 50-74 → Mejorable
- 0-49 → Crítico

---

### Paso 5 — Generar el informe HTML

Genera un archivo HTML completo (`seo-report-<dominio>-<fecha>.html`) con este diseño:

**Estructura del dashboard:**

```
┌─────────────────────────────────────────────────────┐
│  AUDITORÍA SEO — ejemplo.com          22 jun 2026   │
├─────────────────────────────────────────────────────┤
│           PUNTUACIÓN GLOBAL: 73/100                 │
│              ████████░░  MEJORABLE                  │
├──────────┬──────────┬──────────┬────────────────────┤
│ META     │ HEADINGS │ IMÁGENES │  OPEN GRAPH        │
│  82/100  │  90/100  │  65/100  │    55/100          │
├──────────┼──────────┼──────────┼────────────────────┤
│ SCHEMA   │ VELOCIDAD│ ROBOTS   │  SITEMAP           │
│  40/100  │  70/100  │ 100/100  │    80/100          │
├─────────────────────────────────────────────────────┤
│  CORRECCIONES PRIORIZADAS (ordenadas por impacto)   │
│  🔴 CRÍTICO   · Schema: No se encontró JSON-LD      │
│  🟠 ALTO      · OG image usa URL relativa           │
│  🟡 MEDIO     · 3 imágenes sin atributo alt         │
│  🟢 BAJO      · Añadir twitter:card                 │
└─────────────────────────────────────────────────────┘
```

**Requisitos del HTML:**
- Diseño oscuro (`#0f172a` fondo, `#1e293b` tarjetas)
- Colores de acento: verde `#22c55e`, amarillo `#eab308`, naranja `#f97316`, rojo `#ef4444`
- Tipografía: `font-family: 'Inter', system-ui, sans-serif`
- Barra de progreso animada para cada categoría
- Sección de correcciones con íconos de prioridad (🔴🟠🟡🟢)
- Completamente autónomo: sin dependencias externas (sin CDN, sin JS externo)
- Responsive (funciona en móvil y escritorio)
- Incluye en el pie de página: "Generado por Claude · kulmenvisuals.com · [fecha]"

**Correcciones priorizadas:**
- Ordénalas de mayor a menor impacto SEO
- Para cada una indica: categoría, descripción del problema, cómo corregirlo (1 línea de acción concreta)
- Usa colores según gravedad: Crítico / Alto / Medio / Bajo

---

### Paso 6 — Guardar y abrir

1. Guarda el HTML con `Write` en la ruta:
   ```
   /tmp/seo-report-<dominio>-<YYYYMMDD>.html
   ```
2. Ábrelo en el navegador:
   ```bash
   open /tmp/seo-report-<dominio>-<YYYYMMDD>.html
   ```

---

### Paso 7 — Resumen en consola

Tras abrir el informe, muestra en la conversación un resumen compacto:

```
✅ Informe abierto en el navegador

📊 PUNTUACIÓN GLOBAL: 73/100 — Mejorable
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Meta Tags     ████████░░  82
Headings      █████████░  90
Imágenes      ██████░░░░  65
Open Graph    █████░░░░░  55
Schema        ████░░░░░░  40
Velocidad     ███████░░░  70
Robots/Crawl  ██████████ 100
Sitemap/Links ████████░░  80

🔴 Top problema: Schema — No se encontró ningún JSON-LD
```

Luego pregunta:
> ¿Quieres que aplique alguna corrección directamente en tu código?
