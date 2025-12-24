# 📋 Tareas Pendientes - Personalización Final

Este documento lista las tareas que debes completar para personalizar completamente tu portafolio.

## 🎨 Imágenes y Multimedia

### 1. Favicon (PNG)
Aunque ya tienes el `favicon.svg`, necesitas generar versiones PNG para mejor compatibilidad:

**Ubicación:** `/public/`

**Archivos necesarios:**
- `favicon-16x16.png` - 16x16 píxeles
- `favicon-32x32.png` - 32x32 píxeles
- `apple-touch-icon.png` - 180x180 píxeles

**Herramientas recomendadas:**
- https://realfavicongenerator.net/
- https://www.favicon-generator.org/

### 2. Imágenes de Proyectos
**Ubicación:** `/public/projects/`

**Archivos necesarios (ya están listados en projects.js):**
- `haccp.jpg` - Sistema HACCP
- `portafolios.jpg` - Gestión de Portafolios
- `gps.jpg` - Rastreador GPS
- `ecos.jpg` - Ecos del SEO
- `aprendo.jpg` - Aprendo en Casa
- `hospital.jpg` - Hospital Regional

**Recomendaciones:**
- Tamaño: 800x600 píxeles o 1200x900 píxeles
- Formato: JPG o PNG
- Peso: Máximo 200KB por imagen
- Optimiza con: TinyPNG.com o Squoosh.app

### 3. Imagen Open Graph
**Ubicación:** `/public/`

**Archivo necesario:**
- `og-image.png` - 1200x630 píxeles

Esta imagen aparecerá cuando compartas tu portafolio en redes sociales.

**Herramienta recomendada:**
- https://www.canva.com/ (template "Facebook Post")

### 4. CV/Resume PDF
**Ubicación:** `/public/`

**Archivo necesario:**
- `resume.pdf` - Tu CV en formato PDF

El botón "Descargar CV" ya está configurado para descargar este archivo.

## 🔗 URLs y Enlaces

### 1. Actualizar URLs en index.html
**Archivo:** `/index.html`

Buscar y reemplazar:
```html
<!-- Cambiar tu-dominio.com por tu dominio real -->
<meta property="og:url" content="https://tu-dominio.com/" />
<link rel="canonical" href="https://tu-dominio.com/" />
```

### 2. Actualizar Sitemap
**Archivo:** `/public/sitemap.xml`

Cambiar `https://tu-dominio.com/` por tu dominio real en todas las URLs.

### 3. Actualizar Robots.txt
**Archivo:** `/public/robots.txt`

Cambiar la línea del sitemap:
```
Sitemap: https://tu-dominio.com/sitemap.xml
```

### 4. Enlaces de Redes Sociales
**Archivos a actualizar:**
- `/src/components/sections/Hero.jsx`
- `/src/components/sections/About.jsx`
- `/src/components/sections/Contact.jsx`
- `/src/components/layout/Footer.jsx`

**URLs a cambiar:**
```javascript
// GitHub
https://github.com/edmilsaire → https://github.com/TU-USUARIO

// LinkedIn
https://linkedin.com/in/edmilSaire → https://linkedin.com/in/TU-USUARIO

// Email
174449@unsaac.edu.pe → TU-EMAIL@ejemplo.com
```

### 5. URLs de Proyectos
**Archivo:** `/src/data/projects.js`

Actualizar `demoUrl` y `githubUrl` de cada proyecto con las URLs reales.

## ✍️ Contenido Personalizado

### 1. Información Personal
**Archivo:** `/src/components/sections/Hero.jsx`

```javascript
// Línea ~52
<h1 className="hero-title">
  Edmil Saire → TU NOMBRE
</h1>

// Línea ~62
<p className="hero-subtitle">
  Full Stack Developer desde Cusco, Perú → TU UBICACIÓN
</p>
```

### 2. Sección About
**Archivo:** `/src/components/sections/About.jsx`

Actualizar:
- Descripción personal
- Ubicación
- Estudios
- Estadísticas de proyectos

### 3. Datos de Proyectos
**Archivo:** `/src/data/projects.js`

Revisar y actualizar todos los proyectos con:
- Descripciones precisas
- Tecnologías utilizadas
- URLs de demo/GitHub

### 4. Experiencia
**Archivo:** `/src/data/experience.js`

Actualizar fechas, descripciones y logros de tu experiencia laboral.

## 🚀 Despliegue

### Opción 1: Vercel (Recomendado)
1. Crea una cuenta en https://vercel.com
2. Conecta tu repositorio de GitHub
3. Vercel detectará automáticamente que es un proyecto Vite
4. Click en "Deploy"

### Opción 2: Netlify
1. Crea una cuenta en https://netlify.com
2. Conecta tu repositorio
3. Build command: `npm run build`
4. Publish directory: `dist`

### Opción 3: GitHub Pages
```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Agregar scripts en package.json
"homepage": "https://TU-USUARIO.github.io/TU-REPO",
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Desplegar
npm run deploy
```

## ⚙️ Configuración Opcional

### Google Analytics
1. Crea una propiedad en https://analytics.google.com
2. Agrega el script al `<head>` de `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### EmailJS (Formulario de Contacto)
1. Crea cuenta en https://www.emailjs.com/
2. Configura un servicio de email
3. Crea una plantilla
4. Instala: `npm install @emailjs/browser`
5. Implementa en `/src/components/sections/Contact.jsx`

### Dominio Personalizado
1. Compra un dominio (Namecheap, GoDaddy, etc.)
2. En Vercel/Netlify, ve a Settings → Domains
3. Agrega tu dominio y sigue las instrucciones DNS

## ✅ Checklist Final

Antes de compartir tu portafolio, verifica:

- [ ] Todas las imágenes de proyectos cargadas
- [ ] CV/Resume PDF subido
- [ ] Favicon configurado (SVG + PNG)
- [ ] URLs de redes sociales actualizadas
- [ ] Información personal personalizada
- [ ] Links de proyectos funcionando
- [ ] Dominio personalizado configurado (opcional)
- [ ] Meta tags con tu nombre y descripción
- [ ] Sitemap y robots.txt actualizados
- [ ] Formulario de contacto probado
- [ ] Responsive design verificado (móvil/tablet/desktop)
- [ ] Velocidad de carga optimizada
- [ ] SEO verificado con Lighthouse

## 📞 Soporte

Si tienes dudas sobre alguna de estas tareas:
1. Revisa la documentación en `/README.md`
2. Consulta los comentarios en el código
3. Usa las herramientas recomendadas

**¡Tu portafolio está casi listo! Solo faltan estos últimos ajustes de personalización.** 🎉
