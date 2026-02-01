# Buidlers Bolivia - Community Website

> 🇧🇴 Sitio web oficial de la comunidad de desarrolladores Web3 en Bolivia.
> Estética Pixel Art / Terminal / Hacker.

![Buidlers Banner](public/buidlers-banner.png)

## 🚀 Tecnologías

Este proyecto utiliza el stack moderno de React:

- **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/) (Tipado estricto)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animaciones:** [Framer Motion](https://www.framer.com/motion/)
- **Iconos/UI:** CSS puro para componentes Pixel Art.

## 📂 Estructura del Proyecto

El código fuente se encuentra centralizado en la carpeta `src/`:

```bash
src/
├── app/             # Rutas y páginas (Next.js App Router)
├── components/      # Componentes React
│   ├── layout/      # Navbar, Footer
│   └── ui/          # Botones, Cards, PixelBracket
├── data/            # "Base de datos" estática (archivos .ts)
├── types/           # Definiciones de tipos e interfaces TypeScript
└── utils/           # Funciones de utilidad (formatos, lógica)
```

## 🛠️ Instalación y Uso

Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/buidlers-bolivia.git
cd buidlers-bolivia
```

Instalar dependencias:

```bash
npm install
```

Correr servidor de desarrollo:

```bash
npm run dev
```

Abre http://localhost:3000 en tu navegador.

## 🎨 Guía de Estilo

**Colores Principales:**
- Amarillo Buidlers: `#FFC800` (Usar `text-buidlers-yellow` o `bg-buidlers-yellow`)
- Fondo: `#0a0a0a` (Casi negro)

**Fuentes:**
- Títulos: `VT323` (Pixelada)
- Texto: `Share Tech Mono` (Terminal)

## 🤝 Contribución

¡Las PRs son bienvenidas! Por favor lee `docs/CONTRIBUTING.md` para conocer las normas de la comunidad.
