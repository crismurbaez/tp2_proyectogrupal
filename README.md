# 🚀 Strange Project — TP2 React

## 🌐 Deploy del Proyecto

🔗 [Ver proyecto online](https://tp2-proyectogrupal.vercel.app/)

---

# 📌 Descripción

Strange Project es una aplicación web desarrollada como parte del Trabajo Práctico Grupal 2 de Frontend.

El proyecto consiste en la migración del TP1, originalmente realizado con HTML, CSS y JavaScript, hacia una arquitectura moderna basada en React.

La aplicación fue desarrollada utilizando una estructura de componentes reutilizables, navegación SPA mediante React Router y un diseño tipo Dashboard con Sidebar fija.

Además, incorpora funcionalidades dinámicas como:

* Explorador de datos locales
* Consumo de APIs externas
* Galería interactiva
* Renderizado dinámico
* Navegación responsive
* Perfiles individuales

---

# 👥 Integrantes

| Nombre       | GitHub                     |
| ------------ | -------------------------- |
| **Lorena Cohene Baez** | <a href="https://github.com/LorenaCoheneBaez" target="_blank"><img src="public/img/github.png" alt="GitHub" width="60"></a> |
| **Gisela Colmeiro (Gisse)** | <a href="https://github.com/gissestephy" target="_blank"><img src="public/img/github.png" alt="GitHub" width="60"></a> |
| **Cristian Vivar** | <a href="https://github.com/ecvivar" target="_blank"><img src="public/img/github.png" alt="GitHub" width="60"></a> |
| **Cristina Murguía** | <a href="https://github.com/crismurbaez" target="_blank"><img src="public/img/github.png" alt="GitHub" width="60"></a> |

---

# 🛠 Tecnologías Utilizadas

## Frontend

* React
* Vite
* JavaScript
* CSS3
* HTML5

## Routing

* React Router DOM

## Librerías

* react-icons

## Herramientas

* GitHub
* Vercel
* VSCode

---

# 📁 Estructura del Proyecto

```bash
src/
│
├── assets/
├── components/
│   ├── bitacora/
│   ├── cards/
│   ├── gallery/
│   ├── layout/
│   ├── profile/
│   ├── ui/
│
├── data/
├── pages/
├── routes/
├── styles/
├── themes/
│
├── App.jsx
└── main.jsx
```

---

# 🎨 Guía de Estilos

## Paleta de colores

| Color           | Código  |
| --------------- | ------- |
| Fondo principal | #111827 |
| Sidebar         | #1f2937 |
| Azul principal  | #60a5fa |
| Texto principal | #f9fafb |
| Bordes          | #374151 |

---

## Tipografías

* [Poppins](https://fonts.google.com/specimen/Poppins)
* [Inter](https://fonts.google.com/specimen/Inter)

---

## Iconografía

Librería utilizada:

* react-icons

---

# ⚙️ Funcionalidades y Componentes Clave (React)

## 🏠 Dashboard Home
* **Funciones Dinámicas:** Iteración de arreglos con `.map()` para generar perfiles de manera dinámica sin repetir código HTML.
* **Componentes Clave:** `Home.jsx` y `MemberCard.jsx`.
*(Ver capturas de pantalla al final del documento).*

---

## 👤 Perfiles Individuales
* **Funciones Dinámicas:** Uso de React Router (`useParams()`) para capturar el ID de la URL y renderizar datos condicionalmente. Inclusión de animaciones interactivas (hover) controladas por CSS.
* **Componentes Clave:** `MembersProfiles.jsx` y subcomponentes modulares (`ProfileList.jsx`, `ProjectsCarousel.jsx`, `TechStack.jsx`, `SocialMedia.jsx`, `SurpriseAnimation.jsx`).

---

## 🔍 JSON Explorer
* **Funciones Dinámicas:** Gestión del estado de la UI con `useState` para actualizar filtros en tiempo real y lógica funcional en arreglos (`.filter()`, `.sort()`) para realizar búsquedas instantáneas en el JSON.
* **Componente Clave:** `Explorer.jsx`.
*(Ver capturas de pantalla al final del documento).*

---

## 🌎 API Explorer
* **Funciones Dinámicas:** Consumo asíncrono de APIs externas mediante `useEffect` y promesas (`async/await`). Implementación de múltiples estados (`useState`) para manejar la paginación dinámica, los "loading states" y el control de errores.
* **Componente Clave:** `ApiExplorer.jsx`.
*(Ver capturas de pantalla al final del documento).*

---

## 🖼️ Galería Interactiva
* **Funciones Dinámicas:** Control de componentes modales (Lightbox) condicionado por `useState`. Integración de `useEffect` para adjuntar listeners globales (eventos del teclado como `ESC` para cerrar).
* **Componentes Clave:** `Gallery.jsx`, `GalleryGrid.jsx`, `GalleryItem.jsx` y `Lightbox.jsx`.
*(Ver capturas de pantalla al final del documento).*

---

## 🌳 Árbol de Renderizado & 📖 Bitácora
* **Funciones Dinámicas:** Estructuración y renderizado dinámico de datos y documentación técnica modularizando la interfaz con JSX.
* **Componentes Clave:** `RenderTree.jsx`, `Bitacora.jsx` y `BitacoraComponents.jsx`.

---

## 🌓 Contexto Global y Theming (ThemeContext)
* **Funciones Dinámicas:** Implementación avanzada de **Context API** (`createContext`, `useContext`) para proveer a toda la aplicación del estado del tema actual. Uso de `localStorage` para persistencia del tema (Hawkins / Upside Down) y `useEffect` para mutar variables CSS globales (`data-theme`).
* **Componentes Clave:** `ThemeContext.jsx` y `ThemeToggle.jsx`.

---

## 🗄️ Modularización de Datos (Local JSON)
* **Estructura:** Separación absoluta de la lógica visual y los datos puros. Toda la información estática requerida por los componentes se inyecta desde archivos modulares independientes.
* **Archivos Clave:** `members.js`, `bitacoraData.js`, `explorerData.js` y `galleryData.js`.

---

# 📱 Responsive Design

El proyecto fue desarrollado utilizando diseño adaptable para:

* 📱 Mobile
* 📲 Tablet
* 💻 Desktop

Breakpoints implementados:

* 400px
* 900px
* 1200px

---

# 🧠 Uso de Inteligencia Artificial

Para agilizar el desarrollo y mejorar la calidad del código, el equipo integró activamente herramientas de Inteligencia Artificial en diversas etapas del proyecto.

## Herramientas Utilizadas
* **Gemini (IA Conversacional):** Asistencia en lógica compleja de React, refactorización, resolución de errores (debugging) y redacción de documentación técnica.
* **GitHub Copilot:** Autocompletado inteligente de código y sugerencias rápidas durante la maquetación.
* **Gemini (Imagen 3):** Ideación visual y generación de todos los assets gráficos (avatares, logos y fondos).

---

## Ejemplos de Uso y Prompts

### 1. Generación de Assets y UI/UX
Se utilizó Gemini (con su modelo integrado Imagen 3) en su versión gratuita para la ideación y generación del contenido visual, avatares y logos del proyecto.   
* **Criterio de Prompt:** Se definieron instrucciones estructuradas para mantener coherencia visual en toda la SPA. Los criterios clave incluyeron:
  1. **Estilo Artístico:** Estética retro años 80s, temática sci-fi / horror (inspirada en Stranger Things), pixel art y flat design.
  2. **Paleta de Colores:** Uso intensivo de contrastes neón (magenta `#ff3d6b` y cian/azul) sobre fondos oscuros, respetando la guía de estilos del proyecto.
  3. **Dualidad de Temas:** Especificaciones de iluminación para crear versiones adaptadas al "Modo Claro" (tonos más limpios y legibles) y al "Modo Oscuro / Upside Down" (atmósferas lúgubres y misteriosas).
  4. **Propósito:** Creación de avatares consistentes para los integrantes, banners de perfil, y logotipos sin fondo (transparencias) para la correcta integración en la interfaz.
* **Ejemplo de Prompt:** *"Generá un avatar estilo pixel art oscuro y misterioso para un perfil de desarrollador frontend, utiliza una paleta de colores azul oscuro y magenta neón."*

### 2. Asistencia en Lógica de React
La IA nos ayudó a resolver problemas de estado y a optimizar nuestros algoritmos matemáticos en el explorador.

### 3. Debugging y Resolución de Errores
Identificación rápida de errores de dependencias y de renderizado en nuestro entorno local Vite.

### 4. Documentación Técnica
Se utilizó IA conversacional (como Gemini/ChatGPT) para estructurar y redactar secciones técnicas de alta complejidad.


---

# 🔄 Evolución del Proyecto

La transición del TP1 al TP2 representó un gran salto técnico y organizativo, pasando de un sitio web tradicional a una **Single Page Application (SPA)** moderna y escalable.

### 📉 Trabajo Práctico 1
* **Tecnologías Base:** HTML5, CSS3, JavaScript Vanilla.
* **Arquitectura:** Múltiples archivos `.html` independientes con navegación tradicional (recargas de página).
* **Desafíos:** Código repetitivo en múltiples vistas (menús, pies de página) y manipulación manual y tediosa del DOM.

### 📈 Trabajo Práctico 2
* **Tecnologías Base:** React, Vite, React Router DOM.
* **Arquitectura:** Desarrollo basado en **componentización**. La interfaz se dividió en piezas reutilizables (Sidebar, Lightbox, Cards) con un único `index.html` y navegación SPA sin recargas.
* **Nuevos Logros:** Renderizado dinámico de datos locales (JSON), consumo asíncrono de APIs externas con manejo de errores y estados de carga, y lógica avanzada.

---

# 📸 Capturas del Proyecto

## Home

![Home](./public/screenshots/home.png)

---

## Explorer

![Explorer](./public/screenshots/explorer.png)

---

## API Explorer

![API](./public/screenshots/api.png)

---

## Galería

![Gallery](./public/screenshots/gallery.png)

---

# 🚀 Instalación y ejecución

## Clonar repositorio

```bash
git clone https://github.com/gissestephy/tp2_proyectogrupal.git
```

## Instalar dependencias

```bash
npm install
```

## Ejecutar proyecto

```bash
npm run dev
```

---

# 📦 Build de producción

```bash
npm run build
```

---

# 🌐 Deploy

Proyecto desplegado utilizando:

* Vercel

🔗 https://tp2-proyectogrupal.vercel.app/

---

# 📌 Estado Actual del Proyecto

✅ Migración a React completada
✅ Navegación SPA implementada
✅ Sidebar Dashboard responsive
✅ Explorer dinámico
✅ Integración API
✅ Galería interactiva
✅ Responsive Design

---

# 📚 Conclusión

Este proyecto permitió aplicar conceptos modernos de desarrollo frontend utilizando React y arquitectura basada en componentes.

La migración desde una estructura estática hacia una SPA permitió mejorar la organización del código, la reutilización de componentes y la experiencia de usuario.