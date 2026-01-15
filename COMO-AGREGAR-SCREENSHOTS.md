# 🖼️ SISTEMA DE SCREENSHOTS ADAPTATIVO - LAYOUT PERFECTO

## 📋 LAYOUTS AUTOMÁTICOS

El sistema ahora se adapta de forma inteligente según el número de imágenes:

| # Imágenes | Layout |
|------------|--------|
| **1** | 1 imagen horizontal (100% ancho) |
| **2** | 2 imágenes horizontales lado a lado (50% cada una) |
| **3** | 2 cuadrados verticales arriba + 1 horizontal abajo |
| **4+** | Grid de 2 columnas (mobile) / 3 columnas (desktop) |

---

## ✨ EJEMPLOS VISUALES

### Con 1 Imagen:
```
┌───────────────────────┐
│   HORIZONTAL (16:9)   │
└───────────────────────┘
```

### Con 2 Imágenes:
```
┌──────────┬──────────┐
│  IMG 1   │  IMG 2   │
│  (16:9)  │  (16:9)  │
└──────────┴──────────┘
```

### Con 3 Imágenes (⭐ ESPECIAL):
```
┌──────┬──────┐
│  1   │  2   │  (Cuadrados 1:1)
│      │      │
├──────┴──────┤
│      3      │  (Horizontal 16:9)
└──────────────┘
```

### Con 4+ Imágenes:
```
Mobile (2 cols):        Desktop (3 cols):
┌─────┬─────┐          ┌────┬────┬────┐
│  1  │  2  │          │ 1  │ 2  │ 3  │
├─────┼─────┤          ├────┼────┼────┤
│  3  │  4  │          │ 4  │ 5  │ 6  │
└─────┴─────┘          └────┴────┴────┘
```

---

## 💡 USO SIMPLE

```javascript
// En projects.js:
{
  id: 1,
  title: "Mi Proyecto",
  screenshots: [
    { image: "/ruta/img1.jpg", label: "Vista 1" },
    { image: "/ruta/img2.jpg", label: "Vista 2" },
    { image: "/ruta/img3.jpg", label: "Vista 3" }
  ]
}
```

**¡Eso es todo!** El layout se ajusta automáticamente.

---

## 🎯 CARACTERÍSTICAS POR LAYOUT

### Layout de 3 imágenes (especial):
- ✅ **Primeras 2:** Cuadrados verticales (aspect-square)
- ✅ **Tercera:** Horizontal completa (aspect-video)
- ✅ **Perfecto para:** Web + 2 móviles, Desktop + Tablet + Mobile

### Layout normal (1, 2, 4+):
- ✅ **Todas:** Aspect ratio 16:9 (video)
- ✅ **Consistente:** Mismo tamaño
- ✅ **Responsive:** Se adapta a pantalla

---

## 📝 ESTRUCTURA MÍNIMA

```javascript
{
  image: "/ruta/imagen.jpg",    // REQUERIDO
  label: "Descripción",         // Opcional
  icon: <Monitor size={14} />   // Opcional
}
```

---

## ✅ EJEMPLOS COMPLETOS

### Ejemplo 1: Dashboard Web (1 imagen)
```javascript
screenshots: [
  { 
    image: "/projects/screenshots/dashboard.jpg",
    label: "Dashboard Principal",
    icon: <Monitor size={14} />
  }
]
```

### Ejemplo 2: Web + Móvil (2 imágenes)
```javascript
screenshots: [
  { 
    image: "/projects/screenshots/web.jpg",
    label: "Vista Desktop",
    icon: <Monitor size={14} />
  },
  { 
    image: "/projects/screenshots/mobile.jpg",
    label: "App Móvil",
    icon: <Smartphone size={14} />
  }
]
```

### Ejemplo 3: Multiplataforma (3 imágenes) ⭐
```javascript
screenshots: [
  { 
    image: "/projects/screenshots/mobile1.jpg",
    label: "App - Home",
    icon: <Smartphone size={14} />
  },
  { 
    image: "/projects/screenshots/mobile2.jpg",
    label: "App - Profile",
    icon: <Smartphone size={14} />
  },
  { 
    image: "/projects/screenshots/web-dashboard.jpg",
    label: "Panel Web",
    icon: <Monitor size={14} />
  }
]
```
**Resultado:** 2 apps móviles (cuadrados) arriba, dashboard web (horizontal) abajo.

### Ejemplo 4: Showcase Completo (4+ imágenes)
```javascript
screenshots: [
  { 
    image: "/projects/screenshots/home.jpg",
    label: "Landing",
    icon: <Layout size={14} />
  },
  { 
    image: "/projects/screenshots/dashboard.jpg",
    label: "Dashboard",
    icon: <Monitor size={14} />
  },
  { 
    image: "/projects/screenshots/mobile.jpg",
    label: "App Móvil",
    icon: <Smartphone size={14} />
  },
  { 
    image: "/projects/screenshots/tablet.jpg",
    label: "Tablet",
    icon: <Tablet size={14} />
  }
]
```

---

## 🎨 EFECTOS VISUALES

Todos los screenshots tienen:
- ✅ **Hover zoom:** 105% scale
- ✅ **Ring púrpura:** Al pasar el mouse
- ✅ **Overlay oscuro:** Con información
- ✅ **Transiciones suaves:** 300-500ms
- ✅ **Responsive:** Mobile → Desktop

---

## 📂 ESTRUCTURA DE CARPETAS

```
public/
  projects/
    screenshots/
      chatpdf-dashboard.jpg
      chatpdf-mobile.jpg
      denuncias-map.jpg
      denuncias-admin.jpg
      streaming-app.jpg
      ...
```

---

## 🎨 ICONOS DISPONIBLES

Ya importados (opcional):
- `<Monitor />` - Desktop/Web
- `<Smartphone />` - Móvil
- `<Tablet />` - Tablet  
- `<Layout />` - Responsive

---

## 🚀 RECOMENDACIONES

### Para 3 imágenes:
- **Primeras 2:** Usa imágenes verticales (móvil, login, perfil)
- **Tercera:** Usa imagen horizontal (dashboard, landing, web)

### Tamaños ideales:
- **Cuadrado (1:1):** 1000x1000px
- **Horizontal (16:9):** 1920x1080px o 1280x720px
- **Formato:** JPG o PNG
- **Peso:** Máximo 500KB por imagen

---

## 💡 TIPS PRO

1. ✅ **3 imágenes es perfecto** para mostrar app móvil + web
2. ✅ **Usa capturas reales** del proyecto en acción
3. ✅ **Incluye iconos** para identificar el tipo de vista
4. ✅ **Labels descriptivos** aparecen en hover
5. ✅ **Calidad alta** para que se vea profesional

---

## ⚡ EJEMPLO CON PLACEHOLDERS

```javascript
screenshots: [
  { 
    image: "https://placehold.co/600x600/8b5cf6/ffffff?text=Mobile+1",
    label: "Vista Móvil 1",
    icon: <Smartphone size={14} />
  },
  { 
    image: "https://placehold.co/600x600/6d28d9/ffffff?text=Mobile+2",
    label: "Vista Móvil 2",
    icon: <Smartphone size={14} />
  },
  { 
    image: "https://placehold.co/1920x1080/a78bfa/ffffff?text=Dashboard",
    label: "Dashboard Web",
    icon: <Monitor size={14} />
  }
]
```

---

## ✨ VENTAJAS DEL SISTEMA

1. ✅ **Layout especial para 3 imágenes** - Perfecto balance
2. ✅ **Auto-adaptativo** - No configuras tamaños
3. ✅ **Mismo ancho que la card** - Siempre encaja
4. ✅ **Responsive automático** - Mobile y desktop
5. ✅ **Consistente y profesional** - Diseño premium

---

**¡El sistema está completo y optimizado!** 🚀

Solo agrega el array `screenshots` y disfruta de los layouts automáticos perfectos.
