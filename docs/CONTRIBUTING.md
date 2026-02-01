# Guía de Contribución

¡Gracias por querer construir con nosotros!

## Cómo agregar un nuevo proyecto

No necesitas saber programar todo el sitio para agregar tu proyecto al showcase.

1. Abre `src/data/projects.ts`.
2. Agrega un objeto nuevo al array `projects` siguiendo este formato:

```typescript
{
  id: 5,
  title: "NOMBRE_PROYECTO",
  description: "Descripción corta...",
  status: "BUILDING", // o "LIVE"
  link: "https://..."
}
```
