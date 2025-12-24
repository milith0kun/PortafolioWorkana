# Especificaciones Técnicas - Portafolio Profesional Dev
## Edmil Jampier Saire Bustamante

---

## 1. INFORMACIÓN DEL PROYECTO

### Objetivo
Crear un portafolio web profesional, moderno y minimalista que muestre proyectos, habilidades técnicas y experiencia de manera directa y efectiva, optimizado para reclutadores y clientes potenciales.

### Stack Tecnológico
- **Frontend**: React 18+ (Vite como build tool)
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Iconos**: React Icons (Lucide React, Simple Icons)
- **Tipografía**: Google Fonts (Inter, Poppins, JetBrains Mono)
- **Despliegue**: Vercel
- **Routing**: React Router DOM v6
- **Formulario de contacto**: EmailJS o Formspree

---

## 2. ARQUITECTURA Y ESTRUCTURA

### Estructura de Carpetas
```
portfolio/
├── public/
│   ├── favicon.ico
│   ├── projects/           # Screenshots de proyectos
│   └── resume.pdf          # CV descargable
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ScrollToTop.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Contact.jsx
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Badge.jsx
│   │   │   └── SectionTitle.jsx
│   │   └── ProjectCard.jsx
│   ├── data/
│   │   ├── projects.js
│   │   ├── skills.js
│   │   └── experience.js
│   ├── utils/
│   │   └── helpers.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 3. DISEÑO VISUAL Y UI/UX

### Paleta de Colores Corporativa

```javascript
// tailwind.config.js
colors: {
  // Colores principales
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',  // Color principal
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
  },
  // Neutros
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
  },
  // Acento
  accent: {
    500: '#06b6d4',  // Cyan para highlights
    600: '#0891b2',
  }
}
```

### Tipografía

```javascript
// tailwind.config.js
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],      // Textos generales
  display: ['Poppins', 'sans-serif'],               // Títulos
  mono: ['JetBrains Mono', 'monospace'],           // Código
}

fontSize: {
  // Títulos
  'display': ['4rem', { lineHeight: '1', fontWeight: '700' }],      // 64px
  'h1': ['3rem', { lineHeight: '1.1', fontWeight: '700' }],         // 48px
  'h2': ['2.25rem', { lineHeight: '1.2', fontWeight: '600' }],      // 36px
  'h3': ['1.875rem', { lineHeight: '1.3', fontWeight: '600' }],     // 30px
  'h4': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],       // 24px
  
  // Cuerpo
  'body-lg': ['1.125rem', { lineHeight: '1.7' }],                   // 18px
  'body': ['1rem', { lineHeight: '1.6' }],                          // 16px
  'body-sm': ['0.875rem', { lineHeight: '1.5' }],                   // 14px
  'caption': ['0.75rem', { lineHeight: '1.4' }],                    // 12px
}
```

---

## 4. COMPONENTES Y SECCIONES

### 4.1 Navbar (Header)
**Características:**
- Fixed top, backdrop blur, transparencia al scroll
- Logo/Nombre a la izquierda
- Links de navegación: Inicio, Sobre mí, Proyectos, Experiencia, Contacto
- Botón "Descargar CV" con estilo destacado
- Hamburger menu responsive para móviles
- Indicador visual de sección activa

**Estructura:**
```jsx
<nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 border-b">
  <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
    <Logo />
    <DesktopMenu />
    <MobileMenuButton />
    <DownloadCVButton />
  </div>
</nav>
```

---

### 4.2 Hero Section
**Características:**
- Altura completa viewport (min-h-screen)
- Título principal: "Edmil Saire" con animación de entrada
- Subtítulo: "Ingeniero de Sistemas | Full Stack Developer"
- Descripción breve (2-3 líneas) sobre expertise
- CTA buttons: "Ver Proyectos" y "Contactar"
- Iconos de redes sociales (GitHub, LinkedIn, Email)
- Animación sutil de gradiente en background
- Scroll indicator (flecha animada hacia abajo)

**Texto sugerido:**
```
EDMIL SAIRE
Ingeniero de Sistemas | Full Stack Developer

Desarrollo soluciones tecnológicas escalables con React, Node.js y Flutter.
Especializado en aplicaciones web modernas, automatización y sistemas móviles multiplataforma.

[Ver Proyectos] [Contactar]
```

---

### 4.3 About (Sobre mí)
**Características:**
- Grid de 2 columnas (desktop) / 1 columna (mobile)
- Columna izquierda: Foto profesional con efecto hover
- Columna derecha: Biografía profesional concisa
- Destacar: Universidad, especialidad, stack principal
- Botones de acción: LinkedIn, GitHub, Email

**Contenido sugerido:**
```
SOBRE MÍ

Ingeniero de Sistemas e Informática de la Universidad Nacional de San Antonio Abad del Cusco, 
con experiencia en desarrollo Full Stack y soluciones tecnológicas para empresas. 

He liderado proyectos desde sistemas de gestión empresarial hasta aplicaciones móviles educativas, 
trabajando con tecnologías modernas como React, Node.js, Flutter y Laravel. Mi enfoque se centra 
en crear productos escalables, optimizados y centrados en el usuario.

Actualmente dirijo "Ecos del SEO", una agencia digital integral donde desarrollo soluciones web, 
automatización y estrategias SEO para clientes en Perú.
```

---

### 4.4 Skills (Habilidades Técnicas)
**Características:**
- Organización por categorías con iconos
- Badges/Pills con tecnologías
- Hover effects sutiles
- Progreso visual opcional (barras o niveles)

**Categorías:**

1. **Frontend Development**
   - React.js, Next.js, HTML5, CSS3, Tailwind CSS, JavaScript (ES6+), Bootstrap

2. **Backend Development**
   - Node.js, Express.js, PHP, Laravel, API RESTful

3. **Mobile Development**
   - Flutter, Dart, React Native, Android

4. **Databases**
   - MySQL, PostgreSQL, MongoDB, SQL Server, SQLite

5. **Tools & DevOps**
   - Git, GitHub, Docker, Nginx, AWS EC2, Vercel, Hostinger

6. **Automation & Integration**
   - n8n, WhatsApp Business API, Google Apps Script

7. **Other Skills**
   - SEO, WordPress, Scrum, Metodologías Ágiles, UI/UX

**Estructura visual:**
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <SkillCategory 
    icon={CodeIcon}
    title="Frontend Development"
    skills={['React', 'Next.js', 'Tailwind CSS', ...]}
  />
  ...
</div>
```

---

### 4.5 Experience (Experiencia)
**Características:**
- Timeline vertical con línea conectora
- Cards para cada experiencia/proyecto académico
- Fecha, título, institución, descripción
- Tecnologías utilizadas (badges)
- Alternancia de posición (izquierda-derecha en desktop)

**Proyectos destacados:**

1. **Sistema de Gestión de Portafolios Docentes - UNSAAC** (Enero 2025)
   - Desarrollador Full Stack
   - Stack: PHP, Laravel, MySQL, HTML/CSS/JavaScript
   - Sistema de roles, verificación de documentos, reportes administrativos

2. **Sistema Integral de Gestión HACCP** (2024)
   - Desarrollador Full Stack & Mobile
   - Stack: React Native, Kotlin, React.js, Node.js, AWS EC2
   - App móvil con GPS, panel web administrativo, backend escalable

3. **Rastreo GPS en Tiempo Real** (2024)
   - Desarrollador Mobile
   - Stack: JavaScript, Leaflet.js, OpenStreetMap
   - Geolocalización en tiempo real, geocodificación

4. **Ecos del SEO - Plataforma Corporativa** (2024)
   - Desarrollador Full Stack
   - Stack: React, Next.js, MongoDB, WordPress
   - SSR, arquitectura NoSQL, Headless CMS

5. **Aprendo Jugando - App Educativa** (2024)
   - Desarrollador Mobile
   - Stack: Flutter, Dart, SQLite
   - Multiplataforma, gamificación, UX infantil

---

### 4.6 Projects (Proyectos)
**Características:**
- Grid responsive (3 columnas desktop, 2 tablet, 1 mobile)
- Cards con imagen destacada, título, descripción corta
- Badges de tecnologías usadas
- Botones: "Demo en vivo", "Ver código" (GitHub)
- Filtros opcionales por tecnología
- Hover effect: elevación y overlay con información adicional

**Estructura de ProjectCard:**
```jsx
<div className="group relative overflow-hidden rounded-lg border">
  <img src={screenshot} className="w-full h-48 object-cover" />
  <div className="p-6">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-neutral-600 mt-2">{description}</p>
    <div className="flex flex-wrap gap-2 mt-4">
      {techs.map(tech => <Badge>{tech}</Badge>)}
    </div>
    <div className="flex gap-3 mt-6">
      <Button variant="primary">Demo</Button>
      <Button variant="outline">Código</Button>
    </div>
  </div>
</div>
```

**Proyectos a incluir:**
- Sistema Gestión HACCP
- Portafolios Docentes UNSAAC
- Rastreo GPS
- Aprendo Jugando
- Ecos del SEO
- (Otros proyectos relevantes del CV)

---

### 4.7 Contact (Contacto)
**Características:**
- Grid de 2 columnas (desktop)
- Columna izquierda: Información de contacto con iconos
  - Email: 174449@unsaac.edu.pe
  - Teléfono: +51 901 246 936
  - Ubicación: Cusco, Perú
  - Redes sociales: LinkedIn, GitHub
- Columna derecha: Formulario de contacto funcional
  - Campos: Nombre, Email, Asunto, Mensaje
  - Validación en tiempo real
  - Botón de envío con loading state
  - Confirmación de envío exitoso

**Formulario:**
```jsx
<form className="space-y-4">
  <Input label="Nombre completo" required />
  <Input label="Email" type="email" required />
  <Input label="Asunto" required />
  <Textarea label="Mensaje" rows={5} required />
  <Button type="submit" fullWidth>
    Enviar mensaje
  </Button>
</form>
```

---

### 4.8 Footer
**Características:**
- Background oscuro (neutral-900)
- Logo/nombre centrado
- Links de navegación
- Iconos de redes sociales
- Copyright: "© 2025 Edmil Saire. Todos los derechos reservados."
- Texto pequeño: "Desarrollado con React + Tailwind CSS"

---

## 5. ANIMACIONES Y MICROINTERACCIONES

### Framer Motion - Configuraciones

**Fade In on Scroll:**
```javascript
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}
```

**Stagger Children:**
```javascript
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}
```

**Hover Effects:**
- Cards: Elevación suave + escala ligera (scale: 1.02)
- Buttons: Cambio de color + sombra
- Links: Underline animation

**Page Transitions:**
- Fade entre secciones con scroll
- Parallax sutil en Hero section

---

## 6. RESPONSIVE DESIGN

### Breakpoints (Tailwind)
```javascript
screens: {
  'sm': '640px',   // Mobile landscape
  'md': '768px',   // Tablet
  'lg': '1024px',  // Desktop
  'xl': '1280px',  // Large desktop
  '2xl': '1536px', // Extra large
}
```

### Consideraciones:
- Mobile-first approach
- Navegación hamburger < 768px
- Grid ajustable en todas las secciones
- Imágenes optimizadas con lazy loading
- Fuentes responsivas (clamp)

---

## 7. OPTIMIZACIÓN Y SEO

### Performance
- Lazy loading de imágenes
- Code splitting por rutas
- Minificación de assets (Vite)
- Compression (gzip/brotli en Vercel)
- Lighthouse score objetivo: >90

### SEO
```html
<head>
  <title>Edmil Saire - Full Stack Developer | Portafolio</title>
  <meta name="description" content="Portafolio profesional de Edmil Saire, Ingeniero de Sistemas especializado en desarrollo Full Stack con React, Node.js y Flutter.">
  <meta name="keywords" content="desarrollador full stack, react developer, flutter, cusco, peru, ingeniero de sistemas">
  
  <!-- Open Graph -->
  <meta property="og:title" content="Edmil Saire - Full Stack Developer">
  <meta property="og:description" content="Portafolio profesional de desarrollo Full Stack">
  <meta property="og:image" content="/og-image.jpg">
  <meta property="og:type" content="website">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  
  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
</head>
```

---

## 8. ICONOGRAFÍA

### React Icons - Bibliotecas a usar

**Lucide React** (iconos modernos minimalistas):
- Home, User, Code, Briefcase, Mail, FileText
- Github, Linkedin, Download, ExternalLink

**Simple Icons** (logos de tecnologías):
- React, JavaScript, TypeScript, Node.js, Flutter
- PostgreSQL, MongoDB, Docker, AWS, etc.

**Ejemplo de uso:**
```jsx
import { Github, Linkedin, Mail, Code2 } from 'lucide-react'
import { SiReact, SiNodedotjs, SiFlutter } from 'react-icons/si'
```

---

## 9. DATOS ESTRUCTURADOS

### projects.js
```javascript
export const projects = [
  {
    id: 1,
    title: "Sistema Gestión HACCP",
    description: "Sistema integral de gestión de calidad e inocuidad alimentaria con app móvil y panel administrativo web.",
    longDescription: "Desarrollo completo de arquitectura escalable con validación GPS...",
    image: "/projects/haccp.jpg",
    technologies: ["React Native", "Kotlin", "React.js", "Node.js", "AWS EC2", "Nginx"],
    demoUrl: null,
    githubUrl: null,
    featured: true,
    category: "full-stack"
  },
  // ... más proyectos
]
```

### skills.js
```javascript
export const skillCategories = [
  {
    name: "Frontend Development",
    icon: "Code2",
    skills: [
      { name: "React.js", level: "Avanzado", icon: "SiReact" },
      { name: "Next.js", level: "Intermedio", icon: "SiNextdotjs" },
      // ...
    ]
  },
  // ... más categorías
]
```

---

## 10. CONFIGURACIÓN DE DEPLOYMENT

### Vercel
**Pasos:**
1. Conectar repositorio GitHub
2. Framework Preset: Vite
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Instalar variables de entorno (si hay)
6. Deploy

**vercel.json** (opcional):
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

---

## 11. ACCESIBILIDAD (a11y)

### Buenas prácticas:
- Uso correcto de etiquetas semánticas (header, nav, main, section, footer)
- Alt text en todas las imágenes
- Contraste de color WCAG AA (mínimo 4.5:1)
- Focus visible en elementos interactivos
- ARIA labels en iconos sin texto
- Navegación por teclado funcional
- Skip to main content link

---

## 12. INSTALACIÓN Y COMANDOS

### Setup inicial
```bash
# Crear proyecto con Vite
npm create vite@latest portfolio -- --template react

# Instalar dependencias
cd portfolio
npm install

# Instalar Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Instalar dependencias adicionales
npm install framer-motion react-router-dom react-icons lucide-react emailjs-com
```

### Scripts package.json
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint .",
    "format": "prettier --write \"src/**/*.{js,jsx}\""
  }
}
```

---

## 13. DISEÑO DE COMPONENTES UI

### Button Component
```jsx
const Button = ({ children, variant = 'primary', size = 'md', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg"
  
  const variants = {
    primary: "bg-primary-500 text-white hover:bg-primary-600 hover:shadow-lg",
    outline: "border-2 border-primary-500 text-primary-500 hover:bg-primary-50",
    ghost: "text-neutral-700 hover:bg-neutral-100"
  }
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}
      {...props}
    >
      {children}
    </button>
  )
}
```

### Card Component
```jsx
const Card = ({ children, className = '' }) => {
  return (
    <div className={`
      bg-white border border-neutral-200 rounded-lg shadow-sm
      hover:shadow-md transition-shadow duration-300
      ${className}
    `}>
      {children}
    </div>
  )
}
```

---

## 14. MEJORES PRÁCTICAS DE CÓDIGO

### Organización:
- Un componente por archivo
- Naming conventions: PascalCase para componentes
- Destructuring de props
- PropTypes o TypeScript para validación
- Comentarios JSDoc para funciones complejas

### Performance:
- React.memo para componentes que no cambian frecuentemente
- useMemo/useCallback para cálculos costosos
- Lazy loading de componentes con React.lazy
- Code splitting por ruta

---

## 15. TESTING (Opcional pero recomendado)

### Testing Libraries
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

### Tests básicos:
- Renderizado de componentes principales
- Navegación funcional
- Envío de formulario de contacto
- Responsive breakpoints

---

## 16. ENTREGABLES FINALES

### Checklist de completitud:
- [ ] Todas las secciones implementadas
- [ ] Responsive en mobile, tablet, desktop
- [ ] Animaciones funcionando correctamente
- [ ] Formulario de contacto enviando emails
- [ ] CV descargable en PDF
- [ ] Links a GitHub y LinkedIn funcionando
- [ ] Screenshots de proyectos optimizados
- [ ] SEO meta tags configurados
- [ ] Performance optimizado (Lighthouse >90)
- [ ] Deployed en Vercel con dominio personalizado
- [ ] README.md con instrucciones de instalación
- [ ] Código limpio y documentado

---

## 17. RECURSOS ADICIONALES

### Fuentes de inspiración:
- Brittany Chiang (https://brittanychiang.com)
- Jack Jeznach (https://jacekjeznach.com)
- Adenekan Peace
- Kenneth Jimmy

### Herramientas útiles:
- Coolors.co (paletas de colores)
- Hero Icons (iconos adicionales)
- Unsplash (imágenes placeholder)
- PageSpeed Insights (testing performance)
- Wave (testing accesibilidad)

---

## NOTAS FINALES PARA LA IA

**Instrucciones de implementación:**

1. Crear estructura de carpetas exacta como se especifica
2. Implementar sistema de diseño (colores, tipografía) desde tailwind.config.js
3. Desarrollar componentes reutilizables (Button, Card, Badge, etc.) antes de las secciones
4. Implementar secciones en orden: Navbar → Hero → About → Skills → Experience → Projects → Contact → Footer
5. Agregar animaciones con Framer Motion progresivamente
6. Integrar datos desde archivos .js en /data
7. Implementar responsive design con mobile-first approach
8. Configurar formulario de contacto con EmailJS
9. Optimizar imágenes y performance
10. Desplegar en Vercel

**Estilo de código:**
- Componentes funcionales con hooks
- Tailwind classes en lugar de CSS inline
- Comentarios claros en funciones complejas
- Naming semántico y descriptivo
- Código limpio y DRY (Don't Repeat Yourself)

**Prioridades:**
1. Funcionalidad completa
2. Diseño responsive
3. Performance
4. Animaciones sutiles
5. SEO básico

---

**Documento creado:** Diciembre 2025
**Última actualización:** Diciembre 2025
**Versión:** 1.0