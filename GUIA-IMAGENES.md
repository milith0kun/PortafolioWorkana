# 📸 Guía para Agregar Imágenes y Enlaces a tus Proyectos

## 🖼️ Cómo Agregar Imágenes de Proyectos

### Opción 1: Imágenes Locales (Recomendado)

1. **Coloca tus imágenes en la carpeta `public/projects/`**
   ```
   portfolio/
   └── public/
       └── projects/
           ├── haccp.jpg
           ├── portafolios.jpg
           ├── gps.jpg
           ├── ecos.jpg
           ├── aprendo.jpg
           └── hospital.jpg
   ```

2. **Formatos recomendados:**
   - JPG/JPEG (mejor para fotos)
   - PNG (mejor para capturas de pantalla con texto)
   - WebP (mejor compresión, recomendado)

3. **Tamaño recomendado:**
   - Ancho: 800-1200px
   - Alto: 500-750px
   - Peso: Menos de 500KB (usa TinyPNG.com para optimizar)

### Opción 2: Imágenes Externas (URLs)

Puedes usar URLs directas de servicios como:
- Imgur
- GitHub Assets
- Cloudinary
- Tu propio servidor

Ejemplo en `src/data/projects.js`:
```javascript
{
  id: 1,
  title: "Mi Proyecto",
  image: "https://i.imgur.com/tu-imagen.jpg",
  // ...
}
```

### Si No Tienes Imagen

Si no tienes imagen para un proyecto, déjalo como:
```javascript
image: "/projects/proyecto.jpg",
```

El componente mostrará automáticamente un placeholder con un icono bonito.

---

## 🔗 Cómo Agregar Enlaces a tus Proyectos

### En el archivo `src/data/projects.js`:

```javascript
export const projects = [
  {
    id: 1,
    title: "Sistema HACCP",
    
    // URL de demo (sitio web desplegado)
    demoUrl: "https://mi-proyecto.vercel.app",
    
    // URL de GitHub (código fuente)
    githubUrl: "https://github.com/tu-usuario/proyecto",
    
    // Si es app móvil, usa:
    demoUrl: "https://play.google.com/store/apps/details?id=com.tuapp",
    // o
    demoUrl: "https://apps.apple.com/app/tuapp/id123456",
  },
  
  // Para proyectos privados (sin acceso público)
  {
    id: 2,
    title: "Proyecto Privado",
    demoUrl: null,  // No tiene demo público
    githubUrl: null, // Código no es público
  }
];
```

---

## 📝 Ejemplos Reales

### Proyecto Web Desplegado
```javascript
{
  id: 4,
  title: "Ecos del SEO",
  image: "/projects/ecos.jpg",
  demoUrl: "https://ecosdelseo.com",
  githubUrl: null, // Si es privado
}
```

### Proyecto con Código Público
```javascript
{
  id: 3,
  title: "Rastreo GPS",
  image: "/projects/gps.jpg",
  demoUrl: "https://gps-tracker-demo.vercel.app",
  githubUrl: "https://github.com/edmilsaire/gps-tracker",
}
```

### App Móvil en Play Store
```javascript
{
  id: 5,
  title: "Aprendo Jugando",
  image: "/projects/aprendo.jpg",
  demoUrl: "https://play.google.com/store/apps/details?id=com.aprendo.jugando",
  githubUrl: null,
}
```

### App Móvil en App Store
```javascript
{
  id: 5,
  title: "Aprendo Jugando",
  image: "/projects/aprendo.jpg",
  demoUrl: "https://apps.apple.com/us/app/aprendo-jugando/id1234567890",
  githubUrl: null,
}
```

### Proyecto Solo con Código (GitHub)
```javascript
{
  id: 6,
  title: "Hospital Simulation",
  image: "/projects/hospital.jpg",
  demoUrl: null, // No tiene demo en vivo
  githubUrl: "https://github.com/edmilsaire/hospital-simulation",
}
```

---

## 🎨 Cómo Tomar Screenshots de tus Proyectos

### Para Sitios Web:
1. Abre tu proyecto en el navegador
2. Usa F12 → Toggle device toolbar para vista responsive
3. Toma screenshot con:
   - Windows: Win + Shift + S
   - Mac: Cmd + Shift + 4
   - O usa extensiones: Full Page Screen Capture

### Para Apps Móviles:
1. Abre tu app en el emulador o dispositivo real
2. Toma screenshot de la pantalla principal
3. Opcional: Usa mockups de dispositivos (mockuphone.com)

### Para Sistemas de Escritorio:
1. Captura la pantalla principal del sistema
2. Muestra la funcionalidad más importante
3. Asegúrate que se vea profesional y limpia

---

## 🔧 Herramientas Útiles

### Optimizar Imágenes:
- **TinyPNG** (https://tinypng.com) - Reduce tamaño sin perder calidad
- **Squoosh** (https://squoosh.app) - Herramienta de Google

### Crear Mockups:
- **Mockuphone** (https://mockuphone.com) - Mockups de dispositivos
- **Shots** (https://shots.so) - Screenshots bonitos con fondos

### Editar Imágenes:
- **Photopea** (https://www.photopea.com) - Photoshop online gratis
- **Canva** (https://www.canva.com) - Diseño fácil

---

## ✅ Checklist Final

Antes de desplegar, verifica:

- [ ] Todas las imágenes están en `public/projects/`
- [ ] Imágenes optimizadas (< 500KB cada una)
- [ ] URLs de demo funcionan correctamente
- [ ] URLs de GitHub son correctas
- [ ] Proyectos privados tienen `demoUrl: null` y `githubUrl: null`
- [ ] Probaste haciendo clic en los botones de Demo y Código

---

## 🚀 Ejemplo Completo

```javascript
// src/data/projects.js
export const projects = [
  {
    id: 1,
    title: "E-commerce Moderno",
    description: "Tienda online con pasarela de pago integrada",
    longDescription: "E-commerce completo con carrito, checkout y panel admin",
    image: "/projects/ecommerce.jpg", // ← Tu imagen aquí
    technologies: ["React", "Node.js", "Stripe", "MongoDB"],
    demoUrl: "https://mi-tienda.vercel.app", // ← URL de demo
    githubUrl: "https://github.com/tuusuario/ecommerce", // ← Repo público
    featured: true,
    category: "full-stack",
    date: "2025"
  }
];
```

---

¡Listo! Ahora puedes personalizar completamente tus proyectos con imágenes y enlaces reales.
