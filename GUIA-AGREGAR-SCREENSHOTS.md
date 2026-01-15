# 📸 GUÍA COMPLETA: CÓMO AGREGAR SCREENSHOTS A LOS PROYECTOS

## 📋 PASO A PASO

### 1️⃣ PREPARAR LAS IMÁGENES

#### Formatos Recomendados:
- ✅ **JPG** - Para capturas de pantalla reales (menor peso)
- ✅ **PNG** - Para capturas con transparencias o UI
- ✅ **WebP** - Para mejor compresión (opcional)

#### Tamaños Ideales:
- **Horizontal (16:9):** 1920x1080px, 1280x720px, o 800x450px
- **Cuadrado (1:1):** 1000x1000px, 800x800px, o 600x600px
- **Peso:** Máximo 500KB por imagen

#### Optimización:
```bash
# Usa herramientas como:
- TinyPNG (https://tinypng.com/)
- Squoosh (https://squoosh.app/)
- ImageOptim (Mac)
```

---

### 2️⃣ GUARDAR LAS IMÁGENES

#### Estructura de Carpetas (NUEVA - Organizada por Proyecto):
```
public/
  projects/
    screenshots/
      denuncias-ciudadanas/
        denuncias-home-desktop.png
        denuncias-desktop-2.png
        denuncias-desktop-3.png
        denuncias-tablet-1.png
        denuncias-tablet-2.png
        denuncias-mobile-1.png
      chatpdf/
        chatpdf-dashboard.png
        chatpdf-upload.png
        chatpdf-chat.png
      streaming-app/
        streaming-web.png
        streaming-mobile.png
      ...
```

**✅ VENTAJAS:**
- Cada proyecto tiene su propia carpeta
- No se mezclan las imágenes
- Fácil de mantener y escalar
- Más organizado

#### Nombres de Archivo Recomendados:
```
[nombre-proyecto]-[descripcion].jpg

Ejemplos:
✅ chatpdf-dashboard.jpg
✅ denuncias-mapa-interactivo.jpg
✅ streaming-mobile-app.jpg
❌ Captura de pantalla 2024.png (mal)
❌ IMG_1234.jpg (mal)
```

---

### 3️⃣ AGREGAR SCREENSHOTS AL PROYECTO

Abre el archivo: `src/data/projects.js`

#### Ejemplo con 1 imagen:
```javascript
{
  id: 1,
  title: "Mi Proyecto",
  // ... otras propiedades ...
  date: "Enero 2025",
  screenshots: [
    {
      image: "/projects/screenshots/mi-proyecto/dashboard.jpg",
      label: "Dashboard Principal",
      iconType: "monitor"
    }
  ]
}
```

#### Ejemplo con 2 imágenes:
```javascript
screenshots: [
  {
    image: "/projects/screenshots/proyecto-web.jpg",
    label: "Vista Desktop",
    iconType: "monitor"
  },
  {
    image: "/projects/screenshots/proyecto-mobile.jpg",
    label: "App Móvil",
    iconType: "smartphone"
  }
]
```

#### Ejemplo con 3 imágenes (RECOMENDADO):
```javascript
screenshots: [
  {
    image: "/projects/screenshots/proyecto-mobile1.jpg",
    label: "Pantalla Principal",
    iconType: "smartphone"
  },
  {
    image: "/projects/screenshots/proyecto-mobile2.jpg",
    label: "Perfil de Usuario",
    iconType: "smartphone"
  },
  {
    image: "/projects/screenshots/proyecto-dashboard.jpg",
    label: "Panel de Administración",
    iconType: "monitor"
  }
]
```
**Resultado:** 2 cuadrados verticales arriba + 1 horizontal abajo

---

### 4️⃣ TIPOS DE ICONOS DISPONIBLES

```javascript
iconType: "monitor"      // 💻 Para vistas desktop/web
iconType: "smartphone"   // 📱 Para apps móviles
iconType: "tablet"       // 📱 Para vistas en tablet
iconType: "layout"       // 🎨 Para diseños responsive/landing
```

---

### 5️⃣ LAYOUTS AUTOMÁTICOS

| # Screenshots | Layout Resultante |
|---------------|-------------------|
| 1 | 1 imagen horizontal (100% ancho) |
| 2 | 2 imágenes lado a lado (50% cada una) |
| 3 | **2 cuadrados arriba + 1 horizontal abajo** ⭐ |
| 4+ | Grid de 2 cols (mobile) / 3 cols (desktop) |

---

## 💡 EJEMPLOS REALES

### Ejemplo 1: ChatPDF (IA)
```javascript
{
  id: 1,
  title: "ChatPDF – Sistema RAG con IA",
  // ... propiedades existentes ...
  screenshots: [
    {
      image: "/projects/screenshots/chatpdf-upload.jpg",
      label: "Subida de Documentos",
      iconType: "monitor"
    },
    {
      image: "/projects/screenshots/chatpdf-chat.jpg",
      label: "Interfaz de Chat IA",
      iconType: "monitor"
    },
    {
      image: "/projects/screenshots/chatpdf-dashboard.jpg",
      label: "Dashboard Analytics",
      iconType: "monitor"
    }
  ]
}
```

### Ejemplo 2: App Móvil + Web
```javascript
{
  id: 2,
  title: "Sistema HACCP",
  // ... propiedades existentes ...
  screenshots: [
    {
      image: "/projects/screenshots/haccp-mobile-home.jpg",
      label: "App - Inicio",
      iconType: "smartphone"
    },
    {
      image: "/projects/screenshots/haccp-mobile-control.jpg",
      label: "App - Control HACCP",
      iconType: "smartphone"
    },
    {
      image: "/projects/screenshots/haccp-web-admin.jpg",
      label: "Panel Web Administrativo",
      iconType: "monitor"
    }
  ]
}
```

### Ejemplo 3: Plataforma Completa (4+ screenshots)
```javascript
screenshots: [
  {
    image: "/projects/screenshots/plataforma-landing.jpg",
    label: "Landing Page",
    iconType: "layout"
  },
  {
    image: "/projects/screenshots/plataforma-dashboard.jpg",
    label: "Dashboard Principal",
    iconType: "monitor"
  },
  {
    image: "/projects/screenshots/plataforma-mobile.jpg",
    label: "App Móvil",
    iconType: "smartphone"
  },
  {
    image: "/projects/screenshots/plataforma-tablet.jpg",
    label: "Vista Tablet",
    iconType: "tablet"
  }
]
```

---

## 🎨 TIPS PARA MEJORES CAPTURAS

### Para Aplicaciones Web:
1. ✅ Usa modo "Responsive" del navegador (F12)
2. ✅ Captura en 1920x1080 o 1280x720
3. ✅ Asegúrate de que todo el contenido sea visible
4. ✅ Oculta información sensible

### Para Aplicaciones Móviles:
1. ✅ Usa emulador en modo vertical
2. ✅ Captura en resolución nativa del dispositivo
3. ✅ No incluyas barra de notificaciones si no es necesario
4. ✅ Muestra funcionalidad clave

### Para Dashboards:
1. ✅ Muestra datos reales (o datos de prueba realistas)
2. ✅ Incluye gráficos o KPIs visibles
3. ✅ Captura pantalla completa del panel
4. ✅ Asegúrate de que se vea profesional

---

## ⚠️ ERRORES COMUNES

❌ **Imágenes muy pesadas** (>1MB)
✅ Optimiza con TinyPNG o Squoosh

❌ **Rutas incorrectas** (`/screenshots/...`)
✅ Usa siempre `/projects/screenshots/...`

❌ **Imágenes muy pequeñas** (<400px)
✅ Usa mínimo 800px de ancho

❌ **Capturas borrosas o pixeladas**
✅ Captura en alta resolución

❌ **Información sensible visible**
✅ Difumina o reemplaza datos sensibles

---

## 🔄 PROCESO COMPLETO

1. **Captura** screenshot del proyecto en acción
2. **Optimiza** el tamaño/peso de la imagen
3. **Renombra** con formato claro: `proyecto-descripcion.jpg`
4. **Guarda** en `public/projects/screenshots/`
5. **Agrega** en `src/data/projects.js`:
   ```javascript
   screenshots: [
     {
       image: "/projects/screenshots/tu-imagen.jpg",
       label: "Descripción clara",
       iconType: "monitor" // o smartphone, tablet, layout
     }
   ]
   ```
6. **Recarga** la página (Ctrl + Shift + R)

---

## 🎯 EJEMPLO COMPLETO PASO A PASO

### Proyecto: Plataforma de Denuncias Ciudadanas

**Paso 1:** Capturo 3 screenshots:
- Mapa interactivo (web)
- App móvil ciudadanos
- Dashboard autoridades (web)

**Paso 2:** Optimizo y renombro:
- `denuncias-mapa.jpg` (320KB)
- `denuncias-mobile-app.jpg` (280KB)
- `denuncias-admin-dashboard.jpg` (350KB)

**Paso 3:** Guardo en:
```
public/projects/screenshots/
  ├─ denuncias-mapa.jpg
  ├─ denuncias-mobile-app.jpg
  └─ denuncias-admin-dashboard.jpg
```

**Paso 4:** Agrego en `projects.js`:
```javascript
{
  id: 2,
  title: "Plataforma de Denuncias Ciudadanas",
  // ... propiedades existentes ...
  screenshots: [
    {
      image: "/projects/screenshots/denuncias-mapa.jpg",
      label: "Mapa Interactivo en Tiempo Real",
      iconType: "monitor"
    },
    {
      image: "/projects/screenshots/denuncias-mobile-app.jpg",
      label: "App Móvil Ciudadanos",
      iconType: "smartphone"
    },
    {
      image: "/projects/screenshots/denuncias-admin-dashboard.jpg",
      label: "Panel de Autoridades con KPIs",
      iconType: "monitor"
    }
  ]
}
```

**Resultado:** 2 screenshots cuadrados arriba + 1 horizontal abajo, alternando en el timeline.

---

## ✅ CHECKLIST FINAL

Antes de hacer commit:
- [ ] Imágenes optimizadas (<500KB cada una)
- [ ] Nombres de archivo claros y descriptivos
- [ ] Guardadas en `public/projects/screenshots/`
- [ ] Rutas correctas en `projects.js` (`/projects/screenshots/...`)
- [ ] Labels descriptivos para cada screenshot
- [ ] iconType apropiado (monitor/smartphone/tablet/layout)
- [ ] Probado en browser (Ctrl + Shift + R para limpiar caché)

---

**¡Listo! Ahora tus proyectos lucirán profesionales con screenshots de calidad.** 🚀✨
