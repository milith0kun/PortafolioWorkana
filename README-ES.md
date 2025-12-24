# 💼 Portafolio Profesional - Full Stack Developer

[![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5+-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11+-FF0055?logo=framer&logoColor=white)](https://www.framer.com/motion/)

> Portafolio web profesional moderno y responsive construido con React, Vite y Framer Motion. Diseño azul/cyan minimalista con animaciones suaves y optimización SEO completa.

## ✨ Características Principales

- 🎨 **Diseño Profesional**: Paleta azul/cyan con gradientes elegantes
- 📱 **100% Responsive**: Optimizado para todos los dispositivos
- ⚡ **Performance**: Build optimizado con Vite
- 🔍 **SEO Completo**: Meta tags, sitemap, robots.txt
- 🎯 **14+ Iconos Profesionales**: De Lucide React
- ✨ **Animaciones Suaves**: Con Framer Motion
- 🎨 **CSS Puro**: Sin frameworks, código limpio

## 🛠️ Tecnologías

- React 18.3+
- Vite 5.4+
- Framer Motion 11+
- Lucide React
- CSS3 Puro
- Google Fonts

## 📦 Instalación Rápida

```bash
# Clonar
git clone https://github.com/TU-USUARIO/portfolio.git
cd portfolio

# Instalar
npm install

# Desarrollo
npm run dev
# Abrir http://localhost:5173

# Build
npm run build
```

## 📁 Estructura

```
portfolio/
├── public/              # Archivos estáticos
│   ├── favicon.svg     # Favicon profesional
│   ├── robots.txt      # SEO
│   ├── sitemap.xml     # SEO
│   └── projects/       # Imágenes de proyectos
├── src/
│   ├── components/     # Componentes React
│   │   ├── layout/    # Navbar, Footer
│   │   ├── sections/  # Hero, About, Skills...
│   │   └── ui/        # Button, Card, Badge
│   ├── data/          # Datos (proyectos, skills)
│   ├── App.jsx
│   └── index.css      # Estilos globales
└── index.html         # Meta tags completos
```

## 🎨 Secciones

1. **Hero** - Presentación con CTA
2. **About** - Información personal
3. **Skills** - 7 categorías técnicas
4. **Experience** - Timeline de experiencia
5. **Projects** - 6 proyectos filtrables
6. **Contact** - Formulario con validación

## 🚀 Personalización

### 1. Información Personal

Actualiza en:
- `src/components/sections/Hero.jsx` - Nombre, título
- `src/components/sections/About.jsx` - Descripción, ubicación
- `index.html` - Meta tags

### 2. Proyectos

Edita `src/data/projects.js`:
```javascript
{
  title: "Tu Proyecto",
  description: "Descripción",
  image: "/projects/proyecto.jpg",
  technologies: ["React", "Node.js"],
  demoUrl: "https://demo.com",
  githubUrl: "https://github.com/user/repo"
}
```

### 3. Redes Sociales

Actualiza URLs en Hero, About, Contact y Footer.

### 4. Imágenes

Agrega en `/public/`:
- `projects/` - Imágenes de proyectos (800x600px)
- `resume.pdf` - Tu CV
- Favicons PNG (16x16, 32x32, 180x180)

## 📊 Despliegue

### Vercel (Recomendado)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod
```

### GitHub Pages
```bash
npm i -D gh-pages
# Agregar a package.json:
"homepage": "https://USER.github.io/repo",
"deploy": "gh-pages -d dist"

npm run deploy
```

## ✅ Checklist

Antes de publicar:
- [ ] Información personal actualizada
- [ ] URLs de redes sociales
- [ ] Imágenes de proyectos
- [ ] CV PDF subido
- [ ] Favicons PNG generados
- [ ] Meta tags personalizados
- [ ] Build sin errores
- [ ] Testing responsive
- [ ] Lighthouse score >90

Ver [CHECKLIST-VERIFICACION.md](CHECKLIST-VERIFICACION.md) para más detalles.

## 📚 Documentación

- [TAREAS-PENDIENTES.md](TAREAS-PENDIENTES.md) - Guía de personalización
- [RESUMEN-MEJORAS.md](RESUMEN-MEJORAS.md) - Mejoras implementadas
- [CHECKLIST-VERIFICACION.md](CHECKLIST-VERIFICACION.md) - Verificación final

## 🎨 Paleta de Colores

```css
--primary-500: #0ea5e9  /* Azul cielo */
--accent-500: #06b6d4   /* Cyan */
```

Aplicado en:
- Gradientes de botones y badges
- Iconos de habilidades
- Timeline de experiencia
- Hover effects

## 🎯 Iconos Mejorados

- **Layout**: Frontend Development
- **ServerCog**: Backend Development  
- **DatabaseZap**: Databases
- **GitBranch**: DevOps
- **Workflow**: Automation
- **Sparkles**: Features destacadas

## 📄 Licencia

MIT License - ver [LICENSE](LICENSE)

## 👤 Autor

**Tu Nombre**
- Portfolio: [tu-dominio.com](https://tu-dominio.com)
- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- LinkedIn: [Tu Nombre](https://linkedin.com/in/tu-usuario)

## 📊 Estado

**Versión:** 1.0.0  
**Estado:** ✅ Producción Ready  
**Actualización:** 21/12/2025

### ✅ Completado
- Diseño completo
- Responsive
- Animaciones
- SEO optimizado
- Iconos profesionales
- Documentación

### ⏳ Personalización Pendiente
- Imágenes de proyectos
- CV PDF
- URLs personales
- Dominio (opcional)

---

**¡Tu portafolio está listo! Solo falta tu toque personal.** 🚀

¿Preguntas? Revisa la documentación o abre un issue.
