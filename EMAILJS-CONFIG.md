# 📧 CONFIGURACIÓN DE EMAILJS - GUÍA PASO A PASO

## 🎯 **OBJETIVO**
Configurar EmailJS para recibir mensajes del formulario de contacto directamente en tu Gmail.

---

## 📝 **PASOS PARA CONFIGURAR EMAILJS:**

### 1️⃣ **Crear Cuenta en EmailJS**
1. Ve a: https://www.emailjs.com/
2. Haz clic en "Sign Up" (es GRATIS)
3. Regístrate con tu email (puedes usar tu Gmail)
4. Confirma tu email

---

### 2️⃣ **Conectar tu Gmail**
1. Una vez dentro, ve a: **"Email Services"**
2. Haz clic en **"Add New Service"**
3. Selecciona **"Gmail"**
4. Haz clic en **"Connect Account"**
5. Autoriza a EmailJS para enviar emails desde tu Gmail
6. **Copia el SERVICE_ID** que aparece (ej: `service_abc123`)

---

### 3️⃣ **Crear Template de Email**
1. Ve a: **"Email Templates"**
2. Haz clic en **"Create New Template"**
3. Configura así:

**Subject (Asunto):**
```
Nuevo mensaje de: {{from_name}}
```

**Content (Contenido):**
```
Has recibido un nuevo mensaje desde tu portafolio:

Nombre: {{from_name}}
Email: {{reply_to}}
Asunto: {{subject}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde tu portafolio web.
```

4. Guarda el template
5. **Copia el TEMPLATE_ID** (ej: `template_xyz789`)

---

### 4️⃣ **Obtener Public Key**
1. Ve a: **"Account"** → **"General"**
2. Encuentra tu **PUBLIC KEY** (antes llamado User ID)
3. **Cópialo** (ej: `abcXYZ123...`)

---

### 5️⃣ **Configurar en el Proyecto**

Crea el archivo `.env` en la raíz del proyecto:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcXYZ123...
```

**⚠️ IMPORTANTE:**
- Reemplaza los valores con los que copiaste
- NO compartas este archivo (ya está en .gitignore)
- Los nombres deben empezar con `VITE_` para que Vite los lea

---

## ✅ **VERIFICACIÓN**

Después de configurar:
1. Reinicia el servidor: `npm run dev`
2. Llena el formulario de contacto
3. Verifica tu Gmail - debería llegar el mensaje en 1-2 minutos

---

## 🔧 **LÍMITES DEL PLAN GRATUITO:**
- ✅ 200 emails al mes (suficiente para portafolio)
- ✅ Sin tarjeta de crédito requerida
- ✅ Template personalizable
- ✅ Funciona con Gmail, Outlook, etc.

---

## 🚨 **SOLUCIÓN DE PROBLEMAS:**

### "Email no llega"
1. Revisa spam/promociones en Gmail
2. Verifica que las IDs sean correctas
3. Comprueba que autorizaste Gmail en EmailJS

### "Error de envío"
1. Verifica que el archivo `.env` existe
2. Reinicia el servidor después de crear `.env`
3. Comprueba la consola del navegador

---

## 📧 **EMAIL DE PRUEBA:**

Una vez configurado, puedes enviar un email de prueba desde:
https://dashboard.emailjs.com/admin/integration/browser

---

**Cuando tengas tus 3 IDs, créame y te ayudo a actualizar el `.env`**
