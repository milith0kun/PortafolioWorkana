export const experiences = [
  {
    id: 1,
    title: "Sistema de Gestión de Portafolios Docentes - UNSAAC",
    role: "Desarrollador Full Stack",
    institution: "Universidad Nacional de San Antonio Abad del Cusco",
    date: "Enero 2025",
    description: "Desarrollé un sistema web completo para la gestión y verificación de portafolios docentes como parte del proceso de acreditación ICACIT de la UNSAAC utilizando stack tecnológico PHP/Laravel para backend, HTML/CSS/JavaScript para frontend y base de datos MySQL.",
    achievements: [
      "Implementé sistema de roles con tres tipos de usuarios: Verificador, Administrador y Docentes",
      "Diseñé módulos de verificación para evaluar trabajos de alumnos y portafolios de cursos",
      "Desarrollé funcionalidades de generación de reportes administrativos",
      "Aplicé metodología Scrum en el desarrollo con sprints de 2 semanas"
    ],
    technologies: ["PHP", "Laravel", "MySQL", "HTML", "CSS", "JavaScript", "Scrum"],
    type: "project"
  },
  {
    id: 2,
    title: "Sistema Integral de Gestión HACCP",
    role: "Desarrollador Full Stack & Mobile",
    institution: "Proyecto Independiente",
    date: "2024",
    description: "Desarrollo de Arquitectura Escalable: Diseñé e implementé una solución tecnológica integral compuesta por una App Móvil (Operativa), Panel Web (Administrativo) y Backend (API REST), centralizando la lógica de negocio.",
    achievements: [
      "Desplegué y configuré el entorno de producción en AWS EC2 con Nginx",
      "Desarrollé el módulo de asistencia con validación de geolocalización (GPS)",
      "Digitalicé los formularios de control HACCP eliminando el uso de papel",
      "Automaticé el flujo de control de calidad e inocuidad alimentaria"
    ],
    technologies: ["React Native", "Kotlin", "React.js", "Node.js", "AWS EC2", "Nginx", "JWT", "SQL"],
    type: "project"
  },
  {
    id: 3,
    title: "Aplicación de Rastreo y Geolocalización en Tiempo Real",
    role: "Desarrollador de Aplicaciones Móviles",
    institution: "Proyecto Independiente",
    date: "2024",
    description: "Desarrollé la lógica para gestionar y visualizar múltiples objetivos de rastreo (personas/dispositivos) de forma simultánea en la interfaz del mapa, asegurando una representación clara en tiempo real.",
    achievements: [
      "Implementé un módulo de búsqueda de lugares mediante geocodificación directa",
      "Desarrollé una funcionalidad de obtención de coordenadas por interacción (clic) sobre el mapa",
      "Implementé la función \"copiar al portapapeles\" (Clipboard API)",
      "Validé la precisión y latencia del sistema mediante pruebas funcionales"
    ],
    technologies: ["JavaScript", "Leaflet.js", "OpenStreetMap", "Fetch API", "Clipboard API", "Android"],
    type: "project"
  },
  {
    id: 4,
    title: "Ecos del SEO - Plataforma Corporativa",
    role: "Desarrollador Full Stack & Web",
    institution: "Ecos del SEO - Agencia Digital",
    date: "2024",
    description: "Desarrollé la plataforma corporativa migrando la arquitectura a React y Next.js, implementando renderizado del lado del servidor (SSR) para optimizar el posicionamiento SEO.",
    achievements: [
      "Diseñé e implementé la persistencia de datos utilizando MongoDB",
      "Programé la lógica de negocio para un sistema dinámico de categorías y servicios",
      "Integré WordPress como gestor de contenidos (Headless CMS) para el Blog",
      "Realicé el despliegue del proyecto en Hostinger"
    ],
    technologies: ["React", "Next.js", "MongoDB", "WordPress", "Node.js", "Hostinger"],
    type: "project"
  },
  {
    id: 5,
    title: "Aprendo Jugando – Aplicación Educativa Interactiva",
    role: "Desarrollador Mobile & Gamification",
    institution: "Proyecto Independiente",
    date: "2024",
    description: "Desarrollé el prototipo funcional (MVP Beta 1.0) utilizando Flutter y Dart, creando una arquitectura escalable que permite el despliegue simultáneo en Android, iOS y Web.",
    achievements: [
      "Implementé actividades tipo quiz y dinámicas visuales interactivas",
      "Diseñé una interfaz gráfica centrada en el usuario infantil",
      "Estructuré un sistema de autenticación jerárquico (Padres/Niños)",
      "Gestioné la persistencia de datos localmente (SQLite/JSON)"
    ],
    technologies: ["Flutter", "Dart", "SQLite", "JSON", "Android", "iOS"],
    type: "project"
  },
  {
    id: 6,
    title: "Hospital Regional - Modelado y Simulación",
    role: "Analista de Sistemas",
    institution: "Proyecto Académico",
    date: "Febrero 2024",
    description: "Realicé simulaciones técnicas para optimizar la asignación de citas médicas y mejorar la eficiencia del sistema hospitalario.",
    achievements: [
      "Implementé algoritmos de optimización mejorando la eficiencia en un 25%",
      "Apliqué técnicas de inteligencia artificial básicas para análisis de patrones",
      "Creé simulaciones de sistemas para evaluar diferentes escenarios de operación"
    ],
    technologies: ["Python", "IA", "Modelado", "Simulación"],
    type: "academic"
  },
  {
    id: 7,
    title: "Escuela Profesional de Enfermería - Cableado Estructurado",
    role: "Analista de Infraestructura de Redes",
    institution: "UNSAAC",
    date: "Agosto 2023",
    description: "Desarrollé el informe técnico de requerimientos para la infraestructura de cableado estructurado de la Escuela Profesional de Enfermería.",
    achievements: [
      "Analicé y documenté las necesidades de conectividad por piso",
      "Elaboré cotizaciones detalladas de equipos y materiales",
      "Diseñé la arquitectura de red especificando requerimientos mínimos",
      "Realicé simulaciones técnicas para validar la cobertura de red"
    ],
    technologies: ["Redes", "Cableado Estructurado", "WiFi", "Análisis de Infraestructura"],
    type: "academic"
  }
];

export const certifications = [
  {
    id: 1,
    name: "SQL - Base de Datos 1",
    issuer: "Universidad Nacional de Ingeniería (UNI) - PIT 2025",
    date: "Mayo 2025",
    credentialId: "017-0065591",
    score: "18/20"
  },
  {
    id: 2,
    name: "Scrum Fundamentals Certified (SFC)",
    issuer: "SCRUMstudy",
    date: "Mayo 2025",
    credentialId: "1079120"
  },
  {
    id: 3,
    name: "C++ Essentials 1",
    issuer: "Cisco Networking Academy",
    date: "Julio 2025"
  },
  {
    id: 4,
    name: "C++ Essentials 2",
    issuer: "Cisco Networking Academy",
    date: "Julio 2025"
  },
  {
    id: 5,
    name: "Aprende React desde cero",
    issuer: "freeCodeCamp - Cursa",
    date: "Marzo 2025",
    credentialId: "u6007941"
  }
];
