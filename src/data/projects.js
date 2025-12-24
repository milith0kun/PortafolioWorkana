export const projects = [
  {
    id: 1,
    title: "Sistema Integral de Gestión HACCP",
    description: "Sistema integral de gestión de calidad e inocuidad alimentaria con app móvil y panel administrativo web.",
    longDescription: "Desarrollo completo de arquitectura escalable con validación GPS, digitalización de formularios de control HACCP y automatización del flujo de control de calidad.",
    image: "/projects/haccp.jpg", // Puedes agregar tu imagen aquí
    technologies: ["React Native", "Kotlin", "React.js", "Node.js", "AWS EC2", "Nginx", "JWT", "SQL"],
    demoUrl: null, // Agrega la URL si tienes demo desplegado
    githubUrl: null, // Agrega tu repo de GitHub si es público
    featured: true,
    category: "full-stack",
    date: "2024"
  },
  {
    id: 2,
    title: "Sistema de Gestión de Portafolios Docentes",
    description: "Sistema web completo para la gestión y verificación de portafolios docentes UNSAAC - Acreditación ICACIT.",
    longDescription: "Sistema con roles (Verificador, Administrador, Docentes), módulos de verificación y generación de reportes administrativos.",
    image: "/projects/portafolios.jpg",
    technologies: ["PHP", "Laravel", "MySQL", "HTML", "CSS", "JavaScript"],
    demoUrl: null, // Puedes agregar URL del sistema si está desplegado
    githubUrl: null,
    featured: true,
    category: "full-stack",
    date: "Enero 2025"
  },
  {
    id: 3,
    title: "Rastreo GPS en Tiempo Real",
    description: "Aplicación de rastreo y geolocalización en tiempo real con múltiples objetivos simultáneos.",
    longDescription: "Sistema con geocodificación directa e inversa, visualización en mapas interactivos con Leaflet.js y OpenStreetMap.",
    image: "/projects/gps.jpg",
    technologies: ["JavaScript", "Leaflet.js", "OpenStreetMap", "Fetch API", "Clipboard API"],
    demoUrl: null, // Agrega URL si tienes demo
    githubUrl: null,
    featured: true,
    category: "mobile",
    date: "2024"
  },
  {
    id: 4,
    title: "Ecos del SEO - Plataforma Corporativa",
    description: "Plataforma corporativa con arquitectura moderna para agencia digital integral.",
    longDescription: "Desarrollo con SSR, arquitectura NoSQL, integración de WordPress como Headless CMS para blog.",
    image: "/projects/ecos.jpg",
    technologies: ["React", "Next.js", "MongoDB", "WordPress", "Node.js", "Hostinger"],
    demoUrl: "https://ecosdelseo.com", // Ejemplo: reemplaza con tu URL real
    githubUrl: null,
    featured: true,
    category: "full-stack",
    date: "2024"
  },
  {
    id: 5,
    title: "Aprendo Jugando - App Educativa",
    description: "Aplicación educativa interactiva multiplataforma con gamificación para niños de primaria.",
    longDescription: "MVP con actividades tipo quiz, dinámicas visuales interactivas, sistema de autenticación jerárquico (Padres/Niños).",
    image: "/projects/aprendo.jpg",
    technologies: ["Flutter", "Dart", "SQLite", "JSON", "Android", "iOS"],
    demoUrl: null, // Si tienes en Play Store o App Store, agrega el link
    githubUrl: null,
    featured: true,
    category: "mobile",
    date: "2024"
  },
  {
    id: 6,
    title: "Hospital Regional - Modelado y Simulación",
    description: "Sistema de simulación y optimización para gestión hospitalaria.",
    longDescription: "Algoritmos de optimización para asignación de citas médicas, análisis de patrones con IA básica, simulaciones de operación hospitalaria.",
    image: "/projects/hospital.jpg",
    technologies: ["Python", "IA", "Modelado", "Simulación"],
    demoUrl: null,
    githubUrl: null,
    featured: false,
    category: "data-science",
    date: "Febrero 2024"
  }
];

export const projectCategories = [
  { id: 'all', name: 'Todos' },
  { id: 'full-stack', name: 'Full Stack' },
  { id: 'mobile', name: 'Mobile' },
  { id: 'data-science', name: 'Data Science' }
];
