import {
    FaPuzzlePiece,
    FaCompass,
    FaDesktop,
    FaLayerGroup,
    FaHouse,
    FaDatabase,
    FaCloud,
    FaImages,
} from "react-icons/fa6";

const introductionText =
    "Este proyecto corresponde a la migración del Trabajo Práctico 1 realizado originalmente con HTML, CSS y JavaScript hacia una arquitectura moderna basada en React.";

const objectives = [
    {
        icon: FaPuzzlePiece,
        title: "COMPONENTIZACIÓN",
        description:
            "Reorganizar el proyecto utilizando componentes reutilizables.",
    },
    {
        icon: FaCompass,
        title: "REACT ROUTER",
        description: "Implementar navegación SPA dinámica.",
    },
    {
        icon: FaDesktop,
        title: "RESPONSIVE DESIGN",
        description: "Adaptar el sistema a múltiples dispositivos.",
    },
    {
        icon: FaLayerGroup,
        title: "ESCALABILIDAD",
        description: "Mejorar la organización y mantenimiento del código.",
    },
];

const evolutionItems = [
    {
        title: "TP1",
        items: [
            "HTML estático",
            "CSS tradicional",
            "JavaScript Vanilla",
            "Navegación entre páginas",
        ],
    },
    {
        title: "TP2",
        items: [
            "React + Vite",
            "Arquitectura por componentes",
            "React Router",
            "Dashboard SPA",
        ],
    },
];

const roles = [
    {
        name: "Cristian",
        description:
            "Arquitectura base de React, enrutamiento general, consumo de la API externa y maquetación principal del Dashboard.",
    },
    {
        name: "Lorena",
        description:
            "Desarrollo del componente de Perfiles Dinámicos, integración del carrusel, barras de progreso de tecnologías y ajustes de responsive design.",
    },
    {
        name: "Gisela",
        description:
            "Setup inicial del proyecto (Vite), maquetación inicial de la Bitácora, desarrollo de la sección Hobbies y estructuración del README.",
    },
    {
        name: "Cristina",
        description:
            "Algoritmo de ordenamiento para el explorador JSON, estado interactivo y Zoom del Lightbox de la galería. Documentación técnica final de la Bitácora y sus estilos.",
    },
];

const features = [
    {
        icon: FaHouse,
        title: "DASHBOARD HOME",
        description: "Grilla dinámica de integrantes con navegación.",
    },
    {
        icon: FaDatabase,
        title: "JSON EXPLORER",
        description: "Exploración dinámica de datos locales.",
    },
    {
        icon: FaCloud,
        title: "API EXPLORER",
        description: "Consumo de API externa con paginación.",
    },
    {
        icon: FaImages,
        title: "GALERÍA INTERACTIVA",
        description: "Grid responsive con Lightbox y navegación.",
    },
];

const timelineItems = [
    {
        title: "Migración de Assets",
        description:
            "Fue necesario adaptar imágenes y rutas heredadas del TP1 al entorno Vite.",
    },
    {
        title: "Responsive Sidebar",
        description:
            "Se corrigieron errores relacionados al menú hamburguesa y navegación mobile.",
    },
    {
        title: "Rutas Dinámicas",
        description:
            "Se implementó validación para evitar errores en perfiles inexistentes.",
    },
];

const techStack = [
    "React",
    "Vite",
    "JavaScript",
    "CSS3",
    "React Router",
    "React Icons",
];

export {
    introductionText,
    objectives,
    evolutionItems,
    roles,
    features,
    timelineItems,
    techStack
};