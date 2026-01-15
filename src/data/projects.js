export const projects = [
  {
    id: 1,
    title: "ChatPDF – Sistema RAG con IA",
    description: "Sistema de IA para comprensión documental con arquitectura RAG híbrida y GPT-4 Turbo.",
    longDescription: "Diseñé un sistema de inteligencia artificial que combina búsqueda semántica vectorial y búsqueda léxica (BM25) con fusión de rangos (RRF), logrando un Hit Rate@10 del 94%. Arquitectura de microservicios con procesamiento asíncrono usando FastAPI y Celery para gestionar tareas pesadas (OCR, Embeddings), optimizando tiempos de respuesta a 3-8 segundos. Implementé mecanismos de validación multicapa que reducen alucinaciones al 0%.",
    image: "/projects/chatpdf.jpg",
    technologies: ["Python", "FastAPI", "React", "Qdrant", "Redis", "Celery", "Docker", "OpenAI GPT-4"],
    demoUrl: null,
    githubUrl: "https://github.com/milith0kun/ChatPDF",
    featured: true,
    category: "data-science",
    date: "Octubre 2025",
    screenshotsByDevice: {
      desktop: [
        { image: "/projects/screenshots/chat-pdf/desktop-1.jpeg", label: "Interfaz de Chat", disableScroll: true },
        { image: "/projects/screenshots/chat-pdf/desktop-2.jpeg", label: "Procesamiento de Documentos", disableScroll: true },
        { image: "/projects/screenshots/chat-pdf/desktop-3.jpeg", label: "Análisis de Contenido", disableScroll: true },
        { image: "/projects/screenshots/chat-pdf/desktop-4.jpeg", label: "Respuesta Generada" }
      ]
    }
  },
  {
    id: 2,
    title: "Plataforma de Denuncias Ciudadanas",
    description: "Plataforma web MERN para la denuncia de problemas urbanos con geolocalización interactiva.",
    longDescription: "Implementé el módulo de reportes integrando Leaflet.js y Geolocation API para captura precisa de coordenadas. Diseñé una arquitectura backend RESTful segura con JWT y Bcrypt, estableciendo un sistema de control de acceso basado en roles (RBAC) para segregar permisos entre ciudadanos y autoridades. Desarrollé el Dashboard de Autoridades con lógica de agregación en MongoDB para cálculo de KPIs en tiempo real (Tasa de Resolución, Tiempos Promedio).",
    image: "/projects/denuncias.jpg",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Leaflet.js", "JWT", "Bcrypt", "JMeter"],
    demoUrl: "https://plataformadenuncias.myvnc.com",
    githubUrl: "https://github.com/milith0kun/Plataforma-de-Denuncias",
    featured: true,
    category: "full-stack",
    date: "Noviembre 2025",
    screenshotsByDevice: {
      desktop: [
        { image: "/projects/screenshots/denuncias-ciudadanas/denuncias-home-desktop.png", label: "Vista Principal" },
        { image: "/projects/screenshots/denuncias-ciudadanas/denuncias-desktop-2.png", label: "Dashboard", disableScroll: true },
        { image: "/projects/screenshots/denuncias-ciudadanas/denuncias-desktop-3.png", label: "Gestión de Reportes", disableScroll: true }
      ],
      tablet: [
        { image: "/projects/screenshots/denuncias-ciudadanas/denuncias-tablet-1.png", label: "Vista Tablet 1" },
        { image: "/projects/screenshots/denuncias-ciudadanas/denuncias-tablet-2.png", label: "Vista Tablet 2" }
      ],
      mobile: [
        { image: "/projects/screenshots/denuncias-ciudadanas/denuncias-mobile-1.png", label: "App Móvil" }
      ]
    }
  },
  {
    id: 3,
    title: "Web Scraping para Prospección Comercial",
    description: "Sistema de scraping automatizado con tasa de éxito del 94.3% para extracción de leads comerciales.",
    longDescription: "Desarrollé un motor de extracción híbrido combinando Google Places API con Puppeteer como respaldo, implementando estrategias de rate limiting y manejo de errores que garantizan una tasa de éxito del 94.3%. Implementé la generación dinámica de archivos Excel con formato profesional y segmentación lógica de leads, procesando más de 1,300 negocios. Desplegué la arquitectura en AWS EC2 configurando Nginx como proxy inverso y PM2 para alta disponibilidad, utilizando asistentes de IA para optimizar la configuración y reducir tiempos de despliegue en un 80%.",
    image: "/projects/scraping.jpg",
    technologies: ["Node.js", "React", "Puppeteer", "PostgreSQL", "AWS EC2", "Nginx", "PM2", "ExcelJS", "Google Places API"],
    demoUrl: null,
    githubUrl: "https://github.com/milith0kun/EcosdelSeoWebscraping",
    featured: true,
    category: "full-stack",
    date: "Diciembre 2025",
    screenshotsByDevice: {
      desktop: [
        { image: "/projects/screenshots/scraping/desktop-1.png", label: "Resultados del Scraping" }
      ]
    }
  },
  {
    id: 4,
    title: "Streaming de Video en Vivo IoT",
    description: "Sistema de streaming de video en vivo con latencia de 2-3 segundos para dispositivos IoT.",
    longDescription: "Desarrollé una aplicación nativa Android optimizada que utiliza aceleración por hardware (MediaCodec) para la codificación eficiente de video H.264/AAC y transmisión en tiempo real vía protocolo RTMP. Implementé la arquitectura de distribución en AWS EC2 utilizando Node Media Server, logrando una latencia end-to-end de 2 a 3 segundos mediante el protocolo HTTP-FLV y reproducción web con mpegts.js. Gestioné el despliegue del servidor en Ubuntu asegurando la persistencia de servicios con PM2 y escalabilidad horizontal.",
    image: "/projects/streaming.jpg",
    technologies: ["Kotlin", "Jetpack Compose", "Node.js", "AWS EC2", "RTMP", "HTTP-FLV", "H.264/AAC", "RootEncoder", "PM2"],
    demoUrl: null,
    githubUrl: "https://github.com/milith0kun/SistemaStraming",
    featured: true,
    category: "mobile",
    date: "Diciembre 2025",
    screenshotsByDevice: {
      desktop: [
        { image: "/projects/screenshots/streaming-iot/desktop-1.png", label: "Web Streaming", disableScroll: true },
        { image: "/projects/screenshots/streaming-iot/desktop-2.png", label: "Dashboard Web", disableScroll: true }
      ],
      mobile: [
        { image: "/projects/screenshots/streaming-iot/app-1.jpeg", label: "App Streaming" },
        { image: "/projects/screenshots/streaming-iot/app-2.jpeg", label: "App Control" }
      ]
    }
  },
  {
    id: 5,
    title: "Sistema Integral de Gestión HACCP",
    description: "Sistema integral de gestión de calidad e inocuidad alimentaria con app móvil y panel administrativo web.",
    longDescription: "Diseñé e implementé una solución tecnológica integral compuesta por una App Móvil (Operativa), Panel Web (Administrativo) y Backend (API REST), centralizando la lógica de negocio mediante autenticación JWT. Desplegué y configuré el entorno de producción en AWS EC2, implementando Nginx como proxy inverso garantizando disponibilidad 24/7. Desarrollé el módulo de asistencia con validación de geolocalización (GPS) para asegurar fichados dentro de zonas autorizadas, y digitalicé los formularios de control HACCP (temperaturas, sanidad), eliminando el uso de papel y automatizando el flujo de control de calidad.",
    image: "/projects/haccp.jpg",
    technologies: ["React Native", "Kotlin", "React.js", "Node.js", "AWS EC2", "Nginx", "JWT", "SQL", "GPS"],
    demoUrl: null,
    githubUrl: "https://github.com/milith0kun/Sistema-de-Calidad",
    featured: true,
    category: "full-stack",
    date: "Marzo 2025",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.sistemahaccp.calidad&pcampaignid=web_share",
    screenshotsByDevice: {
      mobile: [
        { image: "/projects/screenshots/haccp-system/mobile-1.png", label: "Login Seguro" },
        { image: "/projects/screenshots/haccp-system/mobile-2.png", label: "Menú de Módulos" },
        { image: "/projects/screenshots/haccp-system/mobile-3.png", label: "Registro de Control" },
        { image: "/projects/screenshots/haccp-system/mobile-4.png", label: "Validación GPS" },
        { image: "/projects/screenshots/haccp-system/mobile-5.png", label: "Historial de Registros" }
      ]
    }
  },
  {
    id: 6,
    title: "Aplicación de Rastreo GPS en Tiempo Real",
    description: "Sistema de rastreo y geolocalización en tiempo real con múltiples objetivos simultáneos.",
    longDescription: "Desarrollé la lógica para gestionar y visualizar múltiples objetivos de rastreo (personas/dispositivos) de forma simultánea en la interfaz del mapa. Implementé un módulo de búsqueda de lugares mediante geocodificación directa, consumiendo la API de Nominatim (OpenStreetMap) con JavaScript (Fetch). Desarrollé una funcionalidad de obtención de coordenadas por interacción (clic) sobre el mapa utilizando Leaflet.js, diseñando un popup interactivo que muestra coordenadas y dirección (geocodificación inversa). Implementé la función 'copiar al portapapeles' (Clipboard API) para facilitar la extracción rápida de coordenadas geográficas.",
    image: "/projects/gps.jpg",
    technologies: ["JavaScript", "Leaflet.js", "OpenStreetMap", "Nominatim API", "Fetch API", "Clipboard API", "Android"],
    demoUrl: null,
    githubUrl: "https://github.com/milith0kun/ServidorGps",
    featured: true,
    category: "mobile",
    date: "Mayo 2025"
  },
  {
    id: 7,
    title: "Ecos del SEO - Plataforma Corporativa",
    description: "Plataforma corporativa con arquitectura moderna para agencia digital integral.",
    longDescription: "Desarrollé la plataforma corporativa migrando la arquitectura a React y Next.js, implementando renderizado del lado del servidor (SSR) para optimizar el posicionamiento SEO y mejorar drásticamente los tiempos de carga. Diseñé e implementé la persistencia de datos utilizando MongoDB, creando esquemas flexibles para almacenamiento de leads y gestión dinámica del contenido. Programé la lógica de negocio para un sistema dinámico de categorías y servicios. Integré WordPress como gestor de contenidos (Headless CMS) dedicado exclusivamente para la sección del Blog, permitiendo la creación ágil de artículos mientras se mantiene el rendimiento de la aplicación principal.",
    image: "/projects/ecos.jpg",
    technologies: ["React", "Next.js", "MongoDB", "WordPress", "Node.js", "Hostinger", "SEO"],
    demoUrl: "https://www.ecosdelseo.com",
    githubUrl: null,
    featured: true,
    category: "full-stack",
    date: "Julio 2025",
    screenshotsByDevice: {
      desktop: [
        { image: "/projects/screenshots/ecos-del-seo/desktop-1.png", label: "Home - Servicios" },
        { image: "/projects/screenshots/ecos-del-seo/desktop-2.png", label: "Portafolio" },
        { image: "/projects/screenshots/ecos-del-seo/desktop-3.png", label: "Blog y Contacto" }
      ],
      tablet: [
        { image: "/projects/screenshots/ecos-del-seo/tablet-1.png", label: "Vista Tablet Home" },
        { image: "/projects/screenshots/ecos-del-seo/tablet-2.png", label: "Vista Tablet Servicios" },
        { image: "/projects/screenshots/ecos-del-seo/tablet-3.png", label: "Vista Tablet Blog" }
      ],
      mobile: [
        { image: "/projects/screenshots/ecos-del-seo/mobile-1.png", label: "Mobile Home" },
        { image: "/projects/screenshots/ecos-del-seo/mobile-2.png", label: "Mobile Servicios" },
        { image: "/projects/screenshots/ecos-del-seo/mobile-3.png", label: "Mobile Blog" }
      ]
    }
  },
  {
    id: 8,
    title: "Aprendo Jugando - App Educativa",
    description: "Aplicación educativa interactiva multiplataforma con gamificación para niños de primaria.",
    longDescription: "Desarrollé el prototipo funcional (MVP Beta 1.0) utilizando Flutter y Dart, creando una arquitectura escalable que permite el despliegue simultáneo en Android, iOS y Web desde una única base de código. Implementé actividades tipo quiz y dinámicas visuales interactivas para el refuerzo de matemáticas y lenguaje, programando sistemas de retroalimentación inmediata para mejorar la experiencia de aprendizaje. Diseñé una interfaz gráfica centrada en el usuario infantil, priorizando el uso de colores, elementos visuales grandes y una navegación intuitiva. Estructuré un sistema de autenticación jerárquico (Padres/Niños) con seguridad mediante PIN y contraseña, gestionando la persistencia de datos localmente (SQLite/JSON).",
    image: "/projects/aprendo.jpg",
    technologies: ["Flutter", "Dart", "SQLite", "JSON", "Android", "iOS", "UX/UI", "Gamification"],
    demoUrl: null,
    githubUrl: "https://github.com/milith0kun/aprendo_jugando",
    featured: true,
    category: "mobile",
    date: "Agosto 2025",
    screenshotsByDevice: {
      mobile: [
        { image: "/projects/screenshots/aprendo-jugando/mobile-1.jpeg", label: "Pantalla de Inicio" },
        { image: "/projects/screenshots/aprendo-jugando/mobile-2.jpeg", label: "Login / Acceso" },
        { image: "/projects/screenshots/aprendo-jugando/mobile-3.jpeg", label: "Selección de Perfil" },
        { image: "/projects/screenshots/aprendo-jugando/mobile-4.jpeg", label: "Menú Principal" },
        { image: "/projects/screenshots/aprendo-jugando/mobile-5.jpeg", label: "Niveles de Juego" },
        { image: "/projects/screenshots/aprendo-jugando/mobile-6.jpeg", label: "Juego Matemáticas" },
        { image: "/projects/screenshots/aprendo-jugando/mobile-7.jpeg", label: "Progreso del Alumno" },
        { image: "/projects/screenshots/aprendo-jugando/mobile-8.jpeg", label: "Logros y Recompensas" },
        { image: "/projects/screenshots/aprendo-jugando/mobile-9.jpeg", label: "Configuración" }
      ]
    }
  },
  {
    id: 9,
    title: "Sistema de Gestión de Portafolios Docentes - UNSAAC",
    description: "Sistema web completo para la gestión y verificación de portafolios docentes - Acreditación ICACIT.",
    longDescription: "Desarrollé un sistema web completo para la gestión y verificación de portafolios docentes como parte del proceso de acreditación ICACIT de la UNSAAC utilizando stack tecnológico PHP/Laravel para backend, HTML/CSS/JavaScript para frontend y MySQL. Implementé sistema de roles con tres tipos de usuarios: Verificador, Administrador y Docentes, cada uno con permisos específicos según sus funciones. Diseñé módulos de verificación para evaluar trabajos de alumnos y portafolios de cursos, facilitando el proceso de acreditación institucional. Desarrollé funcionalidades de generación de reportes administrativos. Apliqué metodología Scrum en el desarrollo, documentando el progreso mediante sprints de 2 semanas.",
    image: "/projects/portafolios.jpg",
    technologies: ["PHP", "Laravel", "MySQL", "HTML", "CSS", "JavaScript", "Scrum", "RBAC"],
    demoUrl: "https://miro.com/welcomeonboard/cXFmUXRrOXRSSjlDQW80QW9tc1I0UTEzUEFqL0FRMFlhUHNJZkh1RzBkaGgyWmdIQ25PZ05CMVNVWGZXMUFyVGprSXNYQVVpUU5CTkViRWlsSFRJcDFXODVNUnhLQ3pydGZwQVpaeVpnQ3JrNjNxZDU2ZGFuaGorM2crUFlnQllNakdSWkpBejJWRjJhRnhhb1UwcS9BPT0hdjE=?share_link_id=631395697573",
    githubUrl: "https://github.com/milith0kun/Portafolio-Docente-Metodologia",
    featured: true,
    category: "full-stack",
    date: "Enero 2025",
    screenshotsByDevice: {
      desktop: [
        { image: "/projects/screenshots/sistema-portafolios/desktop-1.png", label: "Login Docente" },
        { image: "/projects/screenshots/sistema-portafolios/desktop-2.png", label: "Dashboard Principal" },
        { image: "/projects/screenshots/sistema-portafolios/desktop-3.png", label: "Gestión de Cursos" },
        { image: "/projects/screenshots/sistema-portafolios/desktop-4.png", label: "Subida de Evidencias" },
        { image: "/projects/screenshots/sistema-portafolios/desktop-5.png", label: "Evaluación de Portafolios" },
        { image: "/projects/screenshots/sistema-portafolios/desktop-6.png", label: "Reportes de Cumplimiento" },
        { image: "/projects/screenshots/sistema-portafolios/desktop-7.png", label: "Vista de Administrador" },
        { image: "/projects/screenshots/sistema-portafolios/desktop-8.png", label: "Verificación ICACIT" },
        { image: "/projects/screenshots/sistema-portafolios/desktop-9.png", label: "Configuración del Sistema" }
      ]
    }
  },
  {
    id: 10,
    title: "Booking Inca Trail - Plataforma de Reservas",
    description: "Plataforma de reservas y turismo con integración de pagos digitales y estrategia SEO.",
    longDescription: "Diseñé una identidad visual moderna ('Dark Mode') implementando componentes interactivos complejos (MegaMenús, botones con efectos de pulso, transiciones slide-in) para maximizar la retención del usuario y la experiencia de navegación. Desarrollé la integración de pasarelas de pago digitales, implementando la documentación técnica de Yape y Nuvei para asegurar transacciones fluidas y seguras adaptadas al mercado local e internacional. Ejecuté una auditoría técnica integral y una estrategia de contenidos basada en el análisis del ecosistema 'Inca Trail 2025-2026', optimizando la arquitectura del sitio para dominar las búsquedas competitivas del sector turismo.",
    image: "/projects/booking.jpg",
    technologies: ["WordPress", "PHP", "CSS3", "Yape API", "Nuvei", "SEO Técnico", "UX/UI"],
    demoUrl: "https://bookingincatrail.com",
    githubUrl: null,
    featured: true,
    category: "full-stack",
    date: "Febrero 2026",
    screenshotsByDevice: {
      desktop: [
        { image: "/projects/screenshots/booking-incatrail/desktop-1.png", label: "Página Principal" },
        { image: "/projects/screenshots/booking-incatrail/desktop-2.png", label: "Tours y Paquetes" },
        { image: "/projects/screenshots/booking-incatrail/desktop-3.png", label: "Sistema de Reservas" }
      ],
      tablet: [
        { image: "/projects/screenshots/booking-incatrail/tablet-1.png", label: "Vista Tablet 1" },
        { image: "/projects/screenshots/booking-incatrail/tablet-2.png", label: "Vista Tablet 2" }
      ],
      mobile: [
        { image: "/projects/screenshots/booking-incatrail/mobile-1.png", label: "Home Móvil" },
        { image: "/projects/screenshots/booking-incatrail/mobile-2.png", label: "Tours Móvil" },
        { image: "/projects/screenshots/booking-incatrail/mobile-3.png", label: "Reserva Móvil" }
      ]
    }
  },
  {
    id: 11,
    title: "Sistema IoT con ESP32 y BLE",
    description: "Sistema de escaneo IoT y geolocalización con ESP32 y Bluetooth Low Energy.",
    longDescription: "Programé el firmware del microcontrolador ESP32 para realizar escaneos activos de espectro mediante el protocolo Bluetooth Low Energy (BLE), capturando identificadores únicos (MAC) y niveles de señal (RSSI) para la detección eficiente de dispositivos circundantes. Desplegué y configuré el backend en una instancia AWS EC2 con Node.js, garantizando la alta disponibilidad del servicio de recolección de datos mediante el gestor de procesos PM2 y la exposición de endpoints para la ingesta de telemetría. Desarrollé una interfaz web de visualización que procesa la telemetría recibida para calcular la distancia aproximada de los activos basándose en la atenuación de la señal y representarlos en un mapa interactivo en tiempo real.",
    image: "/projects/esp32.jpg",
    technologies: ["ESP32", "C++", "Arduino", "Node.js", "AWS EC2", "BLE", "PM2", "RSSI", "IoT"],
    demoUrl: null,
    githubUrl: "https://github.com/milith0kun/Esp32-Server",
    featured: true,
    category: "iot",
    date: "Enero 2026",
    screenshotsByDevice: {
      desktop: [
        { image: "/projects/screenshots/esp32-iot/desktop-1.png", label: "Dashboard de Monitoreo" },
        { image: "/projects/screenshots/esp32-iot/desktop-2.png", label: "Gestión de Dispositivos" },
        { image: "/projects/screenshots/esp32-iot/desktop-3.png", label: "Configuración de Red" },
        { image: "/projects/screenshots/esp32-iot/desktop-4.png", label: "Análisis de Señal RSSI" },
        { image: "/projects/screenshots/esp32-iot/desktop-5.png", label: "Visualización de Datos" },
        { image: "/projects/screenshots/esp32-iot/desktop-6.png", label: "Alertas y Notificaciones" }
      ]
    }
  },
  {
    id: 12,
    title: "Central Telefónica IP - Issabel PBX",
    description: "Implementación de central telefónica IP con Issabel PBX y configuración VoIP completa.",
    longDescription: "Desplegué un servidor de telefonía IP sobre un entorno virtualizado (VirtualBox) configurando adaptadores de red en modo puente (Bridge) para asegurar la accesibilidad total e integración dentro de la red corporativa. Implementé la gestión de extensiones utilizando el estándar moderno PJSIP y optimicé los parámetros de NAT y transporte UDP para garantizar la estabilidad de las comunicaciones y el registro exitoso de softphones. Gestioné la configuración integral de la central telefónica mediante la interfaz web de Issabel, validando la operatividad del sistema y la calidad de voz mediante pruebas de conectividad en la red LAN.",
    image: "/projects/pbx.jpg",
    technologies: ["Issabel PBX", "Asterisk", "VirtualBox", "Linux", "SIP/PJSIP", "MariaDB", "VoIP"],
    demoUrl: null,
    githubUrl: null,
    featured: false,
    category: "infrastructure",
    date: "Enero 2026",
    screenshotsByDevice: {
      desktop: [
        { image: "/projects/screenshots/issabel-pbx/desktop-1.png", label: "Dashboard Principal" },
        { image: "/projects/screenshots/issabel-pbx/desktop-2.png", label: "Configuración de Extensiones" },
        { image: "/projects/screenshots/issabel-pbx/desktop-3.png", label: "Panel de Operador" }
      ],
      mobile: [
        { image: "/projects/screenshots/issabel-pbx/mobile-1.png", label: "Login Móvil" },
        { image: "/projects/screenshots/issabel-pbx/mobile-2.png", label: "Menú Principal" },
        { image: "/projects/screenshots/issabel-pbx/mobile-3.png", label: "Estado del Sistema" }
      ]
    }
  },
  {
    id: 13,
    title: "Hospital Regional - Modelado y Simulación",
    description: "Simulaciones técnicas y optimización de asignación de citas médicas con IA.",
    longDescription: "Realicé simulaciones técnicas para validar la cobertura de red y optimizar la distribución de puntos de acceso en toda la infraestructura hospitalaria. Implementé algoritmos de optimización para mejorar la asignación de citas médicas, aumentando la eficiencia del sistema en un 25%. Apliqué técnicas de inteligencia artificial básicas para el análisis de patrones en datos hospitalarios y predicción de demanda de servicios. Creé simulaciones de sistemas utilizando herramientas de modelado para evaluar diferentes escenarios de operación hospitalaria.",
    image: "/projects/hospital.jpg",
    technologies: ["Python", "IA", "Algoritmos de Optimización", "Análisis de Datos", "Simulación"],
    demoUrl: null,
    githubUrl: null,
    featured: false,
    category: "data-science",
    date: "Febrero 2024"
  },
  {
    id: 14,
    title: "Cableado Estructurado - Escuela de Enfermería",
    description: "Diseño completo de infraestructura de cableado estructurado con análisis de cobertura WiFi.",
    longDescription: "Desarrollé el informe técnico de requerimientos para la infraestructura de cableado estructurado de la Escuela Profesional de Enfermería. Analicé y documenté las necesidades de conectividad por piso, incluyendo ubicaciones estratégicas para puntos de red y cobertura WiFi. Elaboré cotizaciones detalladas de equipos y materiales necesarios para la implementación del sistema de cableado estructurado. Diseñé la arquitectura de red especificando requerimientos mínimos de conectividad para red cableada e inalámbrica (WiFi). Realicé simulaciones técnicas para validar la cobertura de red y optimizar la distribución de puntos de acceso.",
    image: "/projects/networking.jpg",
    technologies: ["Networking", "WiFi", "Cableado Estructurado", "Análisis de Cobertura", "Diseño de Redes"],
    demoUrl: null,
    githubUrl: null,
    featured: false,
    category: "infrastructure",
    date: "Agosto 2023"
  },
  {
    id: 15,
    title: "Sumador Digital con Contadores",
    description: "Diseño e implementación de circuito digital sumador con displays de 7 segmentos.",
    longDescription: "Diseñé e implementé un circuito digital sumador utilizando contadores y circuitos lógicos para realizar operaciones aritméticas. Desarrollé la lógica de entrada para permitir el ingreso de números mediante switches y pulsadores en el sistema digital. Implementé la visualización del resultado de la suma utilizando displays de 7 segmentos para mostrar el número resultante. Apliqué fundamentos de electrónica digital, álgebra booleana y diseño de circuitos secuenciales para el funcionamiento del sistema. Documenté el proceso completo incluyendo diagramas de circuitos, tablas de verdad y manual de operación del sumador digital.",
    image: "/projects/digital.jpg",
    technologies: ["Electrónica Digital", "Álgebra Booleana", "Circuitos Lógicos", "Displays 7 Segmentos"],
    demoUrl: null,
    githubUrl: null,
    featured: false,
    category: "electronics",
    date: "Julio 2021"
  }
];

export const projectCategories = [
  { id: 'all', label: 'Todos los Proyectos' },
  { id: 'full-stack', label: 'Full Stack' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'data-science', label: 'IA & Data Science' },
  { id: 'iot', label: 'IoT' },
  { id: 'infrastructure', label: 'Infraestructura' },
  { id: 'electronics', label: 'Electrónica' }
];
