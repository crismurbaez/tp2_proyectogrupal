const members = [
  {
    id: "steve",
    name: "Cristian",

    profiles: {
      hawkins: {
        img: "/img/img_card_steve_profile_light.png",

        role: "QA - Tester / Ciberseguridad",

        quote:
          '"Si algo puede fallar, lo voy a encontrar primero"',

        desc:
          "Carismático y resolutivo, se encarga de que todo funcione como debería. Detecta bugs antes de que lleguen al usuario y asegura la calidad del producto final.",

        skills: [
          "Observación detallada de sistemas y flujos",
          "Detección y análisis de vulnerabilidades",
          "Reacción rápida ante errores críticos",
          "Validación de seguridad y calidad del software"
        ]
      },

      "upside-down": {
        img: "/img/img_card_steve_profile_dark.png",

        role: "Monster Hunter",

        quote:
          '"Puede que no sea perfecto, pero soy el que mantiene todo bajo control"',

        desc:
          "Carismático y resiliente, enfrenta fallas ocultas y detecta Demobugs antes de que emerjan, protegiendo la estabilidad del entorno y evitando que el caos se propague.",

        skills: [
          "Instinto de supervivencia ante errores críticos",
          "Detección de anomalías ocultas",
          "Trabajo en equipo bajo presión extrema",
          "Reacción inmediata ante amenazas del sistema"
        ]
      }
    },

    favoriteMusic: [
      "Megadeth",
      "Queen",
      "The Beattles",
      "Michael Jackson"
    ],
    favoriteMovies: [
      "The Matrix",
      "Interstellar",
      "Back to the Future",
      "The Lord of the Rings"
    ],
    age: 18,
    location: "Silent Hill",
    //TODO: cambiar si es necesario y agregar las imagenes en la carpeta correspondiente
    techStack: [
      { name: "JavaScript", level: 90, img: "/img/techIcons/javascript-js-logo.png" },
      { name: "Node JS", level: 85, img: "/img/techIcons/nodejs-logo.png" },
      { name: "CSS", level: 75, img: "/img/techIcons/css-3-logo.png" },
      { name: "HTML", level: 80, img: "/img/techIcons/html5-logo.png" },
      { name: "React", level: 85, img: "/img/techIcons/react-logo.png" },
    ],
    projects: [
      { title: "Clinica SePrice", img: "/img/projects/lorena/clinica.png" },
      { title: "Club deportivo Mobile", img: "/img/projects/lorena/club-deportivo-c-sharp.png" },
      { title: "Club deportivo", img: "/img/projects/lorena/club-deportivo.png" }
    ],
    socialMedia: [
      { platform: "GitHub", url: "https://github.com/", icon: "github" },
      { platform: "LinkedIn", url: "https://linkedin.com/", icon: "linkedin" }
    ],

    surprise:
      "/img/mind-flayer-stranger-things.gif"
  },

  {
    id: "max",
    name: "Gisela",
    age: 15,
    location: " Lanoth",

    profiles: {
      hawkins: {
        img: "/img/img_card_max_profile_light.png",

        role: "Front-end Developer",

        quote:
          '"No diseño por estética, diseño para vivirlo"',

        desc:
          "Creativa, directa y con personalidad fuerte, transforma ideas en interfaces modernas e intuitivas. Le encanta romper estructuras tradicionales y darle al usuario una experiencia visual única.",

        skills: [
          "Pensamiento creativo",
          "Atención al detalle",
          "Optimización de interfaces",
          "Experiencia de Usuario (UX)"
        ]
      },

      "upside-down": {
        img: "/img/img_card_max_profile_dark.png",

        role: "Reality Breaker",

        quote:
          '"No quiero morir. No estoy lista"',

        desc:
          "Indomable y desafiante, rompe reglas visuales. Moldea interfaces que desafían la lógica y alteran la percepción. Lo visual ya no es solo diseño: es una ilusión controlada donde cada detalle puede atraer o perder al usuario en la oscuridad.",

        skills: [
          "Manipulación de interfaces en entornos inestables",
          "Precisión visual en escenarios caóticos",
          "Detección de errores en sistemas corruptos",
          "Adaptación a realidades cambiantes"
        ]
      }
    },
    favoriteMusic: [
      "Kate Bush",
      "Sabrina Carpenter",
      "Queen",
      "The Beattles"
    ],
    favoriteMovies: [
      "El Hobbit",
      "F1 Movie",
      "Star Wars",
      "Harry Potter"
    ],
    //TODO: cambiar si es necesario y agregar las imagenes en la carpeta correspondiente
    techStack: [
      { name: "JavaScript", level: 90, img: "/img/techIcons/javascript-js-logo.png" },
      { name: "Node JS", level: 85, img: "/img/techIcons/nodejs-logo.png" },
      { name: "CSS", level: 75, img: "/img/techIcons/css-3-logo.png" },
      { name: "HTML", level: 80, img: "/img/techIcons/html5-logo.png" },
      { name: "React", level: 85, img: "/img/techIcons/react-logo.png" },
    ],
    projects: [
      { title: "Clinica SePrice", img: "/img/projects/lorena/clinica.png" },
      { title: "Club deportivo Mobile", img: "/img/projects/lorena/club-deportivo-c-sharp.png" },
      { title: "Club deportivo", img: "/img/projects/lorena/club-deportivo.png" }
    ],
    socialMedia: [
      { platform: "GitHub", url: "https://github.com/", icon: "github" },
      { platform: "LinkedIn", url: "https://linkedin.com/", icon: "linkedin" }
    ],

    surprise:
      "/img/vecna-stranger-things.gif"
  },

  {
    id: "nancy",
    name: "Lorena",

    profiles: {
      hawkins: {
        img: "/img/img_card_nancy_profile_light.png",

        role: "Back-end Developer",

        quote:
          '"La lógica siempre tiene una respuesta"',

        desc:
          "Analítica y estructurada, domina la lógica del sistema.",

        skills: [
          "Bases de datos relacionales",
          "Lógica computacional",
          "Debugging de código avanzado",
          "Estructuración de APIs seguras"
        ]
      },

      "upside-down": {
        img: "/img/img_card_nancy_profile_dark.png",

        role: "Data Hunter",

        quote:
          '"Nada se esconde para siempre"',

        desc:
          "Busca patrones ocultos en la oscuridad del código.",

        skills: [
          "Rastreo de datos corruptos",
          "Detección de patrones anómalos",
          "Filtrado de ruido digital",
          "Extracción de información en el vacío"
        ]
      }
    },
    age: 25,
    location: "Gotham City",
    techStack: [
      { name: "JavaScript", level: 90, img: "/img/techIcons/javascript-js-logo.png" },
      { name: "Node JS", level: 85, img: "/img/techIcons/nodejs-logo.png" },
      { name: "CSS", level: 75, img: "/img/techIcons/css-3-logo.png" },
      { name: "HTML", level: 80, img: "/img/techIcons/html5-logo.png" },
      { name: "React", level: 85, img: "/img/techIcons/react-logo.png" },
    ],
    projects: [
      { title: "Clinica SePrice", img: "/img/projects/lorena/clinica.png" },
      { title: "Club deportivo Mobile", img: "/img/projects/lorena/club-deportivo-c-sharp.png" },
      { title: "Club deportivo", img: "/img/projects/lorena/club-deportivo.png" }
    ],
    socialMedia: [
      { platform: "GitHub", url: "https://github.com/", icon: "github" },
      { platform: "LinkedIn", url: "https://linkedin.com/", icon: "linkedin" }
    ],

  favoriteMusic: [
    "Keane",
    "Adele",
    "N´SYNC",
    "Los piojos"
  ],
  favoriteMovies: [
    "Batman begins",
    "Your name",
    "Terminator 2",
    "El origen"
  ],

    surprise:
      "/img/stranger-things-demogorgon.gif"
  },

  {
    id: "robin",
    name: "Cristina",

    profiles: {
      hawkins: {
        img: "/img/img_card_robin_profile_light.png",

        role: "Data Analyst",

        quote:
          '"Todo es un patrón si sabes mirar"',

        desc:
          "Rápida mentalmente, analiza y conecta información.",

        skills: [
          "Análisis estadístico avanzado",
          "Lógica de sistemas",
          "Interpretación de datos masivos",
          "Visualización de la información"
        ]
      },

      "upside-down": {
        img: "/img/img_card_robin_profile_dark.png",

        role: "Code Breaker",

        quote:
          '"Los códigos siempre hablan"',

        desc:
          "Descifra códigos ocultos en el Upside Down.",

        skills: [
          "Decodificación de señales entrópicas",
          "Pensamiento abstracto extremo",
          "Traducción de lenguajes del abismo",
          "Identificación de brechas interdimensionales"
        ]
      }
    },
    favoriteMusic: [
      "The Beatles",
      "Deep Purple",
      "The Rolling Stones",
      "Aerosmith"
    ],
    favoriteMovies: [
      "El Señor de los Anillos",
      "Star Wars",
      "Harry Potter",
      "F1 Movie"
    ],
    age: 18,
    location: "La Montaña Solitaria (Lonely Mountain)",
    //TODO: cambiar si es necesario y agregar las imagenes en la carpeta correspondiente
    techStack: [
      { name: "JavaScript", level: 90, img: "/img/techIcons/javascript-js-logo.png" },
      { name: "Node JS", level: 85, img: "/img/techIcons/nodejs-logo.png" },
      { name: "CSS", level: 75, img: "/img/techIcons/css-3-logo.png" },
      { name: "HTML", level: 80, img: "/img/techIcons/html5-logo.png" },
      { name: "React", level: 85, img: "/img/techIcons/react-logo.png" },
    ],
    projects: [
      { title: "Clinica SePrice", img: "/img/projects/lorena/clinica.png" },
      { title: "Club deportivo Mobile", img: "/img/projects/lorena/club-deportivo-c-sharp.png" },
      { title: "Club deportivo", img: "/img/projects/lorena/club-deportivo.png" }
    ],
    socialMedia: [
      { platform: "GitHub", url: "https://github.com/", icon: "github" },
      { platform: "LinkedIn", url: "https://linkedin.com/", icon: "linkedin" }
    ],
    surprise:
      "/img/giphy.gif"
  }
];

export default members;