# CLAUDE.md

Instrucciones de proyecto para trabajar en este repositorio.

## Descripción

DIMAYO es una tienda Shopify de artículos para home office premium — lámparas, pads, soportes y accesorios de escritorio en materiales nobles, con un **catálogo deliberadamente corto y curado (~15 SKUs o menos)**. Inspirada estructuralmente en [grovemade.com](https://grovemade.com), con identidad visual y voz propias (ver `docs/`).

Cliente ideal: profesionales individuales que trabajan desde su estudio en casa — diseñadores, arquitectos, founders, freelancers — que valoran productividad, estética y criterio de edición por igual. No es una marca B2B para estudios/oficinas técnicas.

## Stack

- **Shopify Liquid** — templating y lógica de secciones/bloques.
- **Tema base: Dawn 15.5.0** (`config/settings_schema.json` lo confirma) — no se parte desde cero, se extiende Dawn.
- **GitHub** — control de versiones del tema.
- Sin Node/Shopify CLI instalado en este entorno de desarrollo por defecto — si una tarea requiere `shopify theme dev` o `theme push`, confirmar antes que el entorno tiene Node.js y Shopify CLI disponibles, o coordinar el push manualmente.

## Sistema de diseño

El sistema de diseño completo (paleta, tipografía, tono de comunicación, estructura de cada template, checklist de implementación) está definido en:

- **[`docs/Dimayo-PRD.md`](./docs/Dimayo-PRD.md)** — documento de referencia obligatorio, versión 2.0. Sistema construido sobre la **Opción C ("Objeto Editado")**: paleta Ink/Gallery White/Panel/Concrete/Ash + un único acento saturado (Lacquer, `#8C2320`) con una regla dura de uso (aparece exactamente una vez por vista — ver sección 2.1 del PRD). Tipografía Bricolage Grotesque (display) + Newsreader (body/curatorial). Incluye el mapeo a `color_scheme_group` de Dawn, la estructura sección-por-sección de home/PDP/categoría/carrito, y el checklist de implementación por fases.
- **[`docs/identidad-visual.md`](./docs/identidad-visual.md)** — las 3 opciones de marca evaluadas, los criterios de decisión (catálogo corto + comprador individual → Opción C, no B2B técnico) y por qué se descartaron A y B.

No inventar paleta, tipografía, tono de copy o estructura de página por fuera de `docs/PRD.md`. Si una tarea requiere algo que el PRD no cubre, señalarlo y proponer una extensión coherente con el sistema existente en vez de improvisar. **Cuidado especial:** cualquier código o mockup previo construido sobre la Opción A (paleta Terracotta/Olive/Champagne, tipografía Fraunces/Inter, placeholders con gradiente tipo veta de madera) queda obsoleto — no reutilizar esos valores en trabajo nuevo.

## Reglas de trabajo

1. **Trabajar siempre en Liquid**, no en HTML estático suelto. Los mockups en `.html` que puedan existir en el repo son referencia de diseño, no el entregable final — todo cambio de producto se implementa como sección/bloque/snippet de Dawn.
2. **No romper la estructura de Dawn.** Extender secciones y bloques existentes (`sections/*.liquid`, `snippets/*.liquid`) en vez de reescribirlos desde cero. Si Dawn ya resuelve algo (variant picker, cart drawer base, collapsible tabs), customizar ese componente en vez de duplicar lógica en un archivo nuevo. Cambios de tema (`theme.liquid`, `settings_schema.json`, snippets core como `theme-styles-variables.liquid`) se hacen con cuidado explícito de no romper otras secciones que dependen de ellos.
3. **Respetar el PRD en cada decisión de diseño.** Antes de escribir copy, elegir un color, definir un componente o estructurar una sección nueva, verificar contra `docs/Dimayo-PRD.md`. Esto incluye la regla dura de "Lacquer aparece exactamente una vez por vista, y solo en los 4 puntos listados en la sección 2.1", el tono de comunicación curatorial (sin urgencia falsa, sin emojis, casi sin signos de exclamación, cómodo con decir que un producto "ya no forma parte de la selección"), y el mapeo de colores a los 4 `color_schemes` definidos — no crear esquemas de color nuevos sin necesidad, y no usar `scheme-2` (Vitrina Nocturna) más de una vez en todo el sitio.
4. Antes de acciones destructivas o que afecten el store/tema en producción (push a Shopify, force push, borrar secciones), confirmar con el usuario — igual que con cualquier acción de alto impacto.
