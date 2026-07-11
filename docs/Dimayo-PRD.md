# DIMAYO — PRD (Product Requirements Document)

**Versión:** 2.0 — reemplaza la v1.0 (que estaba construida sobre la Opción A)
**Sistema de diseño base:** [Opción C — "Objeto Editado"](./identidad-visual.md#opción-c--objeto-editado)
**Stack:** Shopify Liquid, tema Dawn 15.5.0 como base

Este documento es la fuente de verdad para decisiones de diseño y contenido en DIMAYO. Cualquier sección, bloque o copy nuevo se valida contra este PRD antes de implementarse. Reglas de trabajo técnico están en [`CLAUDE.md`](../CLAUDE.md).

**Por qué v2.0:** el sistema se decidió entre las 3 opciones de `docs/identidad-visual.md` en base a dos hechos del negocio: catálogo corto y curado (~15 SKUs o menos) y comprador individual (no B2B técnico). Ambos apuntan a la Opción C. El detalle de esa decisión está documentado en `docs/identidad-visual.md`.

---

## 0. La premisa que sostiene todo el sistema

DIMAYO no vende un catálogo — vende una selección. Esto no es un eslogan: es una restricción de producto real que el diseño tiene que reforzar en cada pantalla.

**Consecuencia directa para el negocio, no solo para el diseño:** si el catálogo crece más allá de ~15-20 SKUs sin que cada producto nuevo desplace a uno viejo, este sistema deja de ser honesto y hay que volver a `docs/identidad-visual.md` a reevaluar. El diseño está construido asumiendo escasez real, no escasez performativa.

---

## 1. Resumen ejecutivo

DIMAYO es una marca de e-commerce de objetos para home office premium — lámparas, pads, soportes y accesorios de escritorio en materiales nobles — con un catálogo deliberadamente corto y editado. Cada producto en catálogo reemplazó a varios que se descartaron; ese criterio de edición es el argumento de venta, no un detalle de operaciones.

**Cliente ideal:** profesionales individuales que trabajan desde su estudio en casa — diseñadores, arquitectos, founders, freelancers — que ya aplican criterio de edición a su propio trabajo y reconocen ese mismo criterio cuando lo ven en un objeto.

**Lo que DIMAYO no es:** un catálogo amplio, una tienda de ofertas de temporada, ni una marca que compite mostrando variedad.

---

## 2. Sistema de diseño

### 2.1 Paleta

*Pared de sala de exhibición, concreto pulido y una sola etiqueta de color saturado — como el punto de color en una ficha técnica de museo. El fondo es claro, no oscuro: la sobriedad viene del espacio en blanco, no de un fondo negro con acento neón.*

| Rol | Nombre | Hex | Uso |
|---|---|---|---|
| Texto principal | Ink | `#1A1917` | Texto, botón primario (fondo), nav |
| Fondo base | Gallery White | `#F4F2ED` | Fondo de página — nunca blanco puro (`#FFF`) |
| Panel / superficie | Panel | `#EDEAE2` | Fondos de galería PDP, tarjetas de producto |
| Neutro estructural | Concrete | `#B7B3AA` | Bandas de sección, bordes, superficies secundarias |
| Texto secundario | Ash | `#7A776F` | Metadata, captions, itálicas |
| **Acento único** | **Lacquer** | `#8C2320` | Ver regla dura abajo — el único color saturado del sistema |
| Alerta | Alert | `#B23A2E` | Envío internacional / stock — visualmente cercano a Lacquer a propósito (ambos son "atención"), pero semánticamente separado: Alert es de sistema, Lacquer es de marca |

#### Regla dura de Lacquer

Lacquer aparece **exactamente una vez por vista**, nunca como fondo de sección ni repetido en múltiples elementos. Su asignación es fija por tipo de página, no discrecional:

| Página | Dónde vive el único Lacquer de la vista |
|---|---|
| Home | El "mark" de la banda de manifiesto/criterio (un trazo, no una banda de color) |
| PDP | Hover del botón "Agregar al Carrito" (estado default del botón es Ink) |
| Categoría | No aparece — la grilla se mantiene neutra hasta que el usuario elige un producto |
| Carrito | Hover del botón "Continuar a Pagar", igual que en PDP |

Si una tarea de diseño pide "usar el color de marca" en un lugar no listado acá, la respuesta correcta es no usarlo — mantener Ink/Ash/Concrete y señalar la duda antes de romper la regla.

#### Mapeo a Dawn `color_scheme_group`

| Scheme | background | text | button | button_label | secondary_button_label |
|---|---|---|---|---|---|
| `scheme-1` (Base / Gallery White) | `#F4F2ED` | `#1A1917` | `#1A1917` | `#F4F2ED` | `#1A1917` |
| `scheme-2` (Vitrina Nocturna — uso escaso, 1 banner como máximo en todo el sitio) | `#1A1917` | `#F4F2ED` | `#F4F2ED` | `#1A1917` | `#F4F2ED` |
| `scheme-3` (Concreto — banda de criterio/manifiesto) | `#B7B3AA` | `#1A1917` | `#1A1917` | `#B7B3AA` | `#1A1917` |
| `scheme-4` (Panel — galería PDP y tarjetas) | `#EDEAE2` | `#1A1917` | `#1A1917` | `#EDEAE2` | `#1A1917` |

`shadow` = `#1A1917` en los cuatro esquemas. **`scheme-2` se usa como máximo una vez en todo el sitio** (ver tabla de Lacquer arriba, "banner de colección" en home) — más de una vez y el sistema se acerca al cliché de "fondo negro + acento" que esta opción evita a propósito manteniendo el terreno claro en el resto del sitio.

Lacquer **no** es color de esquema — no tiene rol de fondo/texto propio, se aplica vía CSS custom en `assets/dimayo-overrides.css`, únicamente en los 4 puntos de la tabla de arriba.

### 2.2 Tipografía

*Sistema de dos grotescas (actualizado — reemplaza el par Bricolage Grotesque/Newsreader original). Bricolage Grotesque funciona como cartel de señalética de sala para títulos y nav; DIN 2014 queda para nav principal, body y descripciones — más industrial/técnico que editorial, coherente con la referencia estructural de Grovemade.*

| Rol | Fuente | Peso / estilo | Uso |
|---|---|---|---|
| Display / títulos | **Bricolage Grotesque** | 600–700, mayúsculas o versalitas, tracking amplio (0.04–0.08em) | H1–H6, nombres de producto, menú de footer |
| Nav principal / body / descripciones | **DIN 2014** | 400 regular, itálica para énfasis puntual, 600 (Demi) para bold | Header nav, párrafos largos, descripciones, ficha curatorial |
| UI / labels / botones | **Bricolage Grotesque** | 600–700, uppercase, tracking 0.1em | Botones, labels, filtros |

**Escala tipográfica** (desktop / mobile):

| Nivel | Tamaño desktop | Tamaño mobile | Fuente |
|---|---|---|---|
| Hero H1 | 46px | 32px | Bricolage Grotesque 700, uppercase |
| H2 sección | 30–34px | 24–26px | Bricolage Grotesque 600, uppercase o versalitas |
| Nombre de producto (PDP) | 26px | 22px | Bricolage Grotesque 600, sin itálica — el objeto se anuncia, no se susurra |
| Body / descripción | 16–17px | 15px | DIN 2014 400 |
| Texto curatorial ("por qué lo elegimos") | 16–17px, itálica | 15px, itálica | DIN 2014 400 itálica |
| Label / botón / nav | 11–12px, uppercase, tracking 0.1em | igual | Bricolage Grotesque 600 |
| Caption / ficha técnica | 12–13px | igual | DIN 2014 400, no itálica — la ficha técnica se lee como dato, no como confidencia |

**Nota de implementación:** ni Bricolage Grotesque ni DIN 2014 están en la librería de Shopify Fonts que expone el `font_picker` nativo (`type_header_font` / `type_body_font` en `config/settings_schema.json`). Ambas están self-hosteadas en `assets/` (Bricolage en `.ttf`, DIN 2014 en `.woff` — no se usa `.woff2` porque los archivos fuente originales no vienen en ese formato) y declaradas como `@font-face` **inline en `layout/theme.liquid`**, no en un archivo `assets/*.css` — los archivos dentro de `assets/` se sirven estáticos y Shopify nunca procesa Liquid ahí, así que un `{{ ... | asset_url }}` dentro de un `.css` de `assets/` no se resuelve nunca. `--font-heading-family` / `--font-body-family` se sobrescriben en `assets/dimayo-overrides.css` sin tocar `snippets/theme-styles-variables.liquid` — ver reglas en `CLAUDE.md`.

### 2.3 Espaciado y grid

- Contenedor máximo: `1180px` (home/categoría), `960px` (carrito y PDP panel de texto) — más angosto que en la Opción A: menos ancho de página refuerza la sensación de pieza editada, no de vitrina amplia.
- Grid de producto: **3 columnas desktop**, no 4 — un catálogo corto no necesita ni debe simular volumen con una grilla densa. Mobile: 1 columna completa (no scroll horizontal tipo carrusel — el scroll horizontal comunica "hay más", que es exactamente lo que este sistema no quiere comunicar).
- Breakpoint único: `900px`.
- Espaciado entre secciones full-width: 120–140px vertical en desktop, 70–80px en mobile — más aire que en la Opción A. El espacio en blanco es, literalmente, la pared de la sala.

### 2.4 Componentes base

| Componente | Regla |
|---|---|
| Botón primario | Fondo Ink, texto Gallery White → hover Lacquer (consume la cuota de Lacquer de la vista, ver 2.1). Esquinas rectas, sin `border-radius`. |
| Botón secundario / ghost | Borde 1px Ink, fondo transparente, texto Ink. Sin relleno de color — nunca usa Champagne ni ningún fill de color (esa opción no existe en este sistema). |
| Imagen de producto | Fondo Panel (`#EDEAE2`) o fotografía real sobre Gallery White — **nunca gradientes decorativos tipo "veta de madera"**. Si no hay foto real todavía, el placeholder es un rectángulo Panel liso con el nombre del producto en Bricolage Grotesque pequeño, no un degradé. |
| Etiqueta curatorial | Pequeño texto DIN 2014 itálica bajo cada producto en grilla, tipo cédula de museo — 1 línea, ej. "Pieza 4 de la selección actual" o el material en una palabra. No es descripción, es contexto. |
| Selects (talla/variante) | Estilo underline, Bricolage Grotesque uppercase — no `<select>` nativo visible. |
| Swatches de color/material | Cuadrados 40×40px, sin border-radius. |
| Inputs de cantidad | Input numérico simple, borde 1px Concrete. |
| Links de acción secundaria ("Quitar", "Ver más") | Subrayado con `text-underline-offset`, color Ink — nunca Lacquer (Lacquer no es color de link). |

---

## 3. Tono de comunicación

Curatorial, selectivo, seguro de decir que no. Español rioplatense neutro-premium. La marca habla como quien ya hizo la parte difícil (elegir) y te cuenta el resultado, no como quien te está tratando de convencer.

| Situación | ✅ Decimos | ❌ No decimos |
|---|---|---|
| Ficha de producto | "Evaluamos doce lámparas de escritorio. Elegimos una." | "¡La mejor lámpara del mercado!" |
| Catálogo corto | "No va a estar en 20 colores. Va a estar bien hecha en tres." | "Próximamente más opciones" (pedir disculpas por lo corto) |
| CTA principal | "Ver la pieza" / "Sumar a la selección" | "¡Comprá ya!" / "No te lo pierdas" |
| Stock/envío | "Envío en 3–4 semanas" | "¡Últimas unidades, apurate!" |
| Descuentos | No existen como mecánica de marca — si hay financiación, se comunica como tal, nunca como oferta | "-30% HOY" / banners rojos |
| Manifiesto de marca | "Cada objeto que vendemos reemplazó a diez que descartamos. Eso es el trabajo." | "Somos la marca #1 de accesorios de escritorio" |
| Carrito vacío / error | "Tu selección está vacía todavía." | "¡Oops! Algo salió mal 😅" |
| Newsletter | "Te avisamos cuando algo nuevo entra a la selección — y cuando algo sale." | "¡Suscribite y ganá un premio!" |
| Producto agotado/descontinuado | "Esta pieza ya no forma parte de la selección." (sin urgencia, sin disculpa) | "¡Se acabó, pero mirá estas alternativas!" |
| Emojis | Nunca | — |
| Signos de exclamación | Casi nunca (máximo 1 por página completa) | Frecuentes |

**Prueba rápida antes de publicar cualquier copy:** ¿esto lo diría alguien que ya decidió qué vale la pena y no necesita convencerte, o alguien que todavía está tratando de cerrar la venta? Si suena a lo segundo, se reescribe.

---

## 4. Sensación general (mood)

Cinco palabras que tiene que transmitir cada pantalla, en orden de prioridad:

1. **Edición** — cada objeto en pantalla está ahí porque otros no lo están. Esto se nota en cuánto espacio recibe cada producto (mucho), no solo en el copy.
2. **Silencio de sala** — más espacio en blanco que en un e-commerce típico. Gallery White no es "el fondo que sobró", es el material principal de la página.
3. **Permanencia editada** — nada sugiere "temporada" ni "colección nueva cada mes". El catálogo cambia poco y cuando cambia, se explica por qué.
4. **Honestidad de la escasez** — la marca puede decir explícitamente "no tenemos eso" o "ya no vendemos esto" sin tratarlo como una falla. Decir que no es parte del posicionamiento, no un problema de inventario a esconder.
5. **Autoridad silenciosa** — la marca no persigue al usuario con popups, countdown timers ni banners de urgencia. Si el usuario se va, se va; la confianza viene de la selección, no de la insistencia.

**Referencia negativa explícita:** cualquier patrón de "growth hacking" genérico de e-commerce (urgencia, popups de descuento, reviews infladas, grillas densas que simulan variedad) está fuera de la marca — y en este sistema en particular, además de estar fuera de tono, contradice directamente la premisa de catálogo corto.

---

## 5. Homepage — sección por sección

Mapeado a secciones reales de Dawn (`sections/*.liquid`) disponibles en `templates/index.json`.

| # | Sección | Sección Dawn a usar | Contenido / reglas específicas DIMAYO |
|---|---|---|---|
| 1 | Header fijo | `sections/header.liquid` (vía `header-group.json`) | Tienda / Explorar (izq) — Logo centrado — Mi Carrito (der), en Bricolage Grotesque. Sin `announcement-bar.liquid` — no hay lugar para "envío gratis hoy". |
| 2 | Hero full-bleed | `sections/image-banner.liquid` (1 imagen fija, no slideshow — un carrusel de hero sugiere "hay más cosas para mostrar") | Banner grande a sangre (~78vh), foto real de la pieza estrella en uso, ambiente oscuro/moody permitido acá específicamente. Texto **superpuesto sobre la imagen**, centrado verticalmente y alineado a la derecha (mismo patrón de superposición que Grovemade): eyebrow ("Pieza X de 5 · Selección actual") + H1 con el nombre de la pieza en Bricolage Grotesque uppercase, color Gallery White + línea de material + link "Más información" hacia el PDP de esa pieza. Padding lateral ~50px. Excepción documentada a la regla de "sin drama visual" de la Opción C: se permite en este único punto del sitio porque es foto de producto real, no una banda de color decorativa — no cuenta como uso de `scheme-2` (ver 2.1), que sigue reservado para la banda de newsletter. |
| 3 | La selección actual | `sections/rich-text.liquid` + `sections/featured-collection.liquid` | Eyebrow: **"La selección de este mes"** (o trimestre — cadencia real, no genérica) + grid de 3 columnas máximo, con etiqueta curatorial de 1 línea bajo cada producto (ver 2.4). No decir "Productos Destacados" — ese lenguaje asume que hay productos no destacados en un catálogo grande, que acá no existe. |
| 4 | Criterio de selección (reemplaza al "manifiesto" de la Opción A) | `sections/rich-text.liquid` sobre `scheme-3` (Concrete) | 1 párrafo explicando el criterio real de edición — no una frase inspiracional genérica, sino algo específico y verificable (ej. "elegimos materiales que se reparan, no que se reemplazan"). Acá vive el único Lacquer de la vista (ver 2.1), como un trazo/mark pequeño, no como fondo. |
| 5 | Lo que ya no está | Sección custom (no nativa de Dawn — requiere bloque nuevo) | Opcional pero recomendado: 1–2 productos discontinuados mostrados brevemente con la nota "Ya no forma parte de la selección." Refuerza honestidad de escasez (mood #4) con evidencia, no solo con copy. |
| 6 | Newsletter band | `sections/newsletter.liquid` sobre `scheme-2` (Vitrina Nocturna — el único uso de este esquema en todo el sitio) | Copy: "Te avisamos cuando algo nuevo entra a la selección — y cuando algo sale." |
| 7 | Footer | `sections/footer.liquid` (vía `footer-group.json`) | Ver sección 9. |

---

## 6. Página de Producto (PDP)

Mapeado a bloques reales disponibles en `sections/main-product.liquid`.

| # | Zona | Bloque Dawn | Contenido / reglas DIMAYO |
|---|---|---|---|
| 1 | Breadcrumb | nativo del tema | Tienda / Categoría / Nombre del producto |
| 2 | Galería | `media` | Fotografía de objeto sobre fondo Panel — nunca gradiente placeholder. Mucho aire alrededor del objeto, no la imagen a sangre. |
| 3 | Título | bloque `title` | Bricolage Grotesque uppercase — sin itálica (el objeto se anuncia, no se susurra; la itálica queda reservada al texto curatorial de la sección 4). |
| 4 | Número/edición de la pieza | texto libre bajo `title` | Ej. "Pieza 4 de la selección actual" — la misma etiqueta curatorial de la grilla, ahora en PDP. |
| 5 | SKU | bloque `sku` | DIN 2014, caption, sin protagonismo. |
| 6 | Swatches | `variant_picker` (estilo swatch) | Grid de cuadrados 40×40px sin `border-radius`. |
| 7 | Selector tamaño/config | `variant_picker` (estilo dropdown) | Underline + Bricolage Grotesque uppercase. |
| 8 | Precio | bloque `price` | Grande, Bricolage Grotesque — nunca en Lacquer (el Lacquer de esta vista ya está asignado al hover del botón, ver 2.1). |
| 9 | Cantidad | bloque `quantity_selector` | Input numérico simple. |
| 10 | Botón compra | bloque `buy_buttons` | "Sumar a la selección" o "Agregar al Carrito" — fondo Ink, **hover Lacquer** (el único Lacquer de esta vista). Abre cart drawer, no redirige a `/cart`. |
| 11 | Por qué la elegimos | bloque de texto libre (nuevo — no existe en Opción A) | El bloque diferencial de este sistema: 2–4 líneas en DIN 2014 itálica explicando el criterio de selección de esta pieza puntual, no una descripción de features. Ej: "La elegimos por el mecanismo de altura, no por el diseño — es el único que no se afloja en un año de uso diario." |
| 12 | Descripción funcional | bloque `description` | DIN 2014 regular, no itálica — datos de uso, separados del bloque curatorial (11) que sí es itálica/voz de marca. |
| 13 | Especificaciones técnicas | bloque `collapsible_tab` × 1 por categoría | DIN 2014, sin itálica — la ficha técnica se lee como dato. Accordion en mobile, igual criterio que en la Opción A. |
| 14 | Reviews | bloque `rating` (opcional) | Si se habilita: sin volumen inflado. Con un catálogo corto, mostrar "8 personas compraron esta pieza" es más honesto y más de marca que "1200 reseñas". |
| 15 | Cart drawer | custom | Se abre al agregar. Upsell limitado a **máximo 1 producto**, no una grilla de sugeridos — con un catálogo de 15 SKUs, sugerir varios se siente a relleno. |
| 16 | Footer | `sections/footer.liquid` | Compartido. |

---

## 7. Página de Categoría/Colección

| # | Zona | Sección Dawn | Reglas |
|---|---|---|---|
| 1 | Encabezado de categoría | `sections/main-collection-banner.liquid` | H1 uppercase + 1 línea que declare cuántas piezas hay en esta categoría ahora mismo (ej. "4 piezas"). Declarar el número es parte del argumento de curaduría, no un detalle técnico a esconder. |
| 2 | Filtros/orden | `sections/main-collection-product-grid.liquid` | Minimalista — con pocos SKUs por categoría, filtros extensos (talla, color, precio, marca...) se sienten sobre-ingenierizados. Como máximo: Material y Ordenar por. |
| 3 | Grid de productos | `sections/main-collection-product-grid.liquid` | **3 columnas desktop, 1 columna mobile** (no carrusel horizontal — ver 2.3). Fondo Panel en foto de producto. Etiqueta curatorial de 1 línea bajo cada producto. Sin quick-add. |
| 4 | Paginación | nativo | Probablemente innecesaria: con ~15 SKUs totales, ninguna categoría debería necesitar paginado. Si aparece, es señal de que el catálogo creció más de lo que este sistema asume — revisar contra `docs/identidad-visual.md`. |
| 5 | Footer | `sections/footer.liquid` | Compartido. |

---

## 8. Carrito

Mapeado a `sections/main-cart-items.liquid` + `sections/cart-drawer.liquid`.

| # | Zona | Bloque/sección Dawn | Reglas |
|---|---|---|---|
| 1 | Título de página | `main-cart-items.liquid` | "Tu Selección" en vez de "Mi Carrito" — consistente con el lenguaje curatorial del resto del sitio. |
| 2 | CTA "Continuar a Pagar" | `sections/main-cart-footer.liquid` | Fondo Ink, **hover Lacquer** (el único Lacquer de esta vista). Repetida arriba y abajo de la lista. |
| 3 | Líneas de producto | `main-cart-items.liquid` | Imagen sobre Panel / nombre + material + tamaño / cantidad / nota de envío en Ash / precio + "Quitar" en underline Ink. |
| 4 | Subtotal | `main-cart-footer.liquid` | Sin desglose de impuestos/envío todavía — eso va en checkout real de Shopify. |
| 5 | Nota internacional/alerta | texto condicional custom | Color Alert, uppercase, centrada — el único lugar del sitio con este tono de color aparte de Lacquer. |
| 6 | Sugerido para completar la selección | `sections/related-products.liquid` o bloque custom | **Máximo 1–2 productos**, con botón ghost (borde Ink, sin relleno) — no un botón de color, porque Lacquer ya está asignado en esta vista al botón de pago. |
| 7 | Nota de envío general | texto libre, DIN 2014 itálica Ash | Sin tono de disculpa. |
| 8 | Footer | `sections/footer.liquid` | Compartido. |

---

## 9. Footer (compartido, todas las páginas)

| Bloque | Contenido |
|---|---|
| Columna Tienda | La Selección / Sobre Nosotros / Journal / Ayuda / Estado del Pedido / Regalos Corporativos — sin "Programa Trade" (era relevante en un ángulo B2B que se descartó, ver `docs/identidad-visual.md`) |
| Newsletter | H4 + copy curatorial + form underline |
| Legal | © año Dimayo — Preferencias de Cookies — Términos y Condiciones — Política de Privacidad, DIN 2014 itálica pequeña, Ash |

---

## 10. Checklist de implementación

Fases pensadas para ejecutarse en orden.

### Fase 0 — Fundaciones del tema
- [x] Bricolage Grotesque / DIN 2014 self-hosteadas en `assets/` (no están en `font_picker` de Shopify Fonts) — `@font-face` inline en `layout/theme.liquid`, `--font-heading-family` / `--font-body-family` sobrescritas en `assets/dimayo-overrides.css`.
- [ ] Configurar los 4 `color_schemes` de la sección 2.1 en Theme Settings → Colors. Confirmar que `scheme-2` (Vitrina Nocturna) quede marcado en comentarios/naming como "uso único" para que no se reutilice por default en secciones futuras.
- [ ] Quitar `border-radius` global si Dawn lo aplica por default a botones/inputs.
- [ ] Deshabilitar `announcement-bar.liquid`.
- [ ] Auditar `config/settings_data.json` / assets existentes en busca de cualquier resabio de la Opción A (gradientes tipo veta de madera, paleta Terracotta/Olive/Champagne) y removerlo — no debe quedar mezcla de sistemas.

### Fase 1 — Home
- [ ] Armar `templates/index.json` con las 7 secciones de la sección 5, en ese orden.
- [ ] Escribir el copy real de "Criterio de selección" (sección 5, #4) — tiene que ser específico y verificable, no una frase inspiracional genérica. Esto es contenido de negocio, no solo de diseño: requiere que el equipo de producto defina el criterio real de curaduría.
- [ ] Decidir cadencia real de "La selección de este mes" (¿mensual? ¿trimestral?) antes de escribir el eyebrow — no dejarlo como placeholder editorial.

### Fase 2 — PDP
- [ ] Configurar `sections/main-product.liquid` con los bloques de la sección 6.
- [ ] Escribir el bloque "Por qué la elegimos" para cada uno de los SKUs actuales — este es el bloque de mayor esfuerzo de copywriting del sitio y el que más sostiene la marca; no lanzar PDPs sin él.
- [ ] Implementar cart drawer custom limitado a 1 upsell (no la grilla de 3 de la Opción A).
- [ ] Configurar los `collapsible_tab` de especificaciones técnicas.

### Fase 3 — Categoría
- [ ] Configurar grid a 3 columnas / fondo Panel / sin quick-add.
- [ ] Agregar el conteo de piezas en el encabezado de cada categoría (dato real desde Liquid, `collection.products_count`, no hardcodeado).

### Fase 4 — Carrito
- [ ] Renombrar "Mi Carrito" → "Tu Selección" en toda la navegación y templates (nav, breadcrumbs, títulos de página).
- [ ] Configurar sugerido limitado a 1–2 productos con botón ghost.

### Fase 5 — Contenido y copy
- [ ] Auditar todo el copy existente (viene de la Opción A) contra la tabla de tono de la sección 3 — el tono de "oficio cálido" y el de "edición curatorial" no son intercambiables, hay que reescribir, no solo revisar.
- [ ] Escribir la página "Sobre Nosotros" explicando el criterio de edición del negocio en detalle — es la pieza de contenido que más trabajo va a pedir sostener en el tiempo.

### Fase 6 — QA
- [ ] Confirmar que Lacquer aparece exactamente una vez por vista en cada uno de los 4 templates — este es el control de calidad más específico de este sistema y el más fácil de romper sin querer.
- [ ] Revisar los 4 templates en los dos breakpoints (`>900px` / `<900px`), confirmando que mobile usa 1 columna (no carrusel) en grillas de producto.
- [ ] Lighthouse / performance: reemplazar cualquier placeholder gradiente heredado de la Opción A por fotografía real con `srcset`.
- [ ] Accesibilidad: foco de teclado visible en swatches, selects custom y botones de accordion.

---

## Documentos relacionados

- [`docs/identidad-visual.md`](./identidad-visual.md) — las 3 opciones evaluadas, los criterios de decisión entre B y C, y por qué se descartó A.
- [`CLAUDE.md`](../CLAUDE.md) — reglas de trabajo técnico para este repositorio.
