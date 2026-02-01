# Arquitectura del Proyecto

## 1. Filosofía de Diseño
El sitio está diseñado para ser **estático, rápido y fácil de mantener**. No utilizamos base de datos en esta versión (v1.0) para facilitar el despliegue gratuito en Vercel y reducir la complejidad.

## 2. Gestión de Datos
Actualmente, los datos (Proyectos, Miembros del Equipo) viven en archivos estáticos dentro de `src/data/`.

**Flujo de datos:**
1. Se define la interfaz en `src/types/index.ts`.
2. Se llenan los datos en `src/data/projects.ts`.
3. El componente `page.tsx` importa los datos y los renderiza iterando un array.

*Nota: En el futuro, `src/data` podría ser reemplazado por llamadas a una API (CMS o Supabase) sin romper la UI, gracias a que usamos interfaces estrictas.*

## 3. Sistema de Componentes (Atomic Design Simplificado)

Separamos los componentes en dos categorías dentro de `src/components/`:

- **Layout:** Componentes estructurales que aparecen en todas las páginas (Navbar, Footer).
- **UI:** Componentes pequeños y reutilizables con estilo específico (PixelBracket, CardFrame, Buttons).
  - *PixelBracket:* Componente puramente CSS/Divs para generar el corchete amarillo estilo Figma sin usar imágenes.

## 4. Estilos y Tema
Utilizamos **Tailwind CSS v4**. Las variables de colores y fuentes están definidas nativamente en CSS dentro de `src/app/globals.css` usando la directiva `@theme`.
