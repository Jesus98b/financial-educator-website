# 🚀 Guía para Push a GitHub y Deploy en Vercel

## Paso 1: Crear Repositorio en GitHub

1. Ve a https://github.com
2. Haz clic en "New repository" (botón verde)
3. Nombre del repositorio: `financial-educator-website` (o el que prefieras)
4. Descripción: "Financial Educator & Advisor Website - Next.js 14"
5. **NO** marques "Initialize with README" (ya tenemos archivos)
6. Haz clic en "Create repository"

## Paso 2: Obtener la URL del Repositorio

Una vez creado, GitHub te mostrará la URL. Será algo como:
- `https://github.com/tu-usuario/financial-educator-website.git`
- O: `git@github.com:tu-usuario/financial-educator-website.git`

## Paso 3: Ejecutar los Comandos

Después de tener la URL, ejecuta estos comandos en la terminal:

```bash
cd /Users/jesusvalencia/financial-educator-website

# Inicializar git (si no está inicializado)
git init

# Agregar todos los archivos
git add .

# Crear commit inicial
git commit -m "Initial commit: Financial Educator Website"

# Agregar remote (reemplaza con tu URL)
git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git

# Renombrar branch a main (si es necesario)
git branch -M main

# Push a GitHub
git push -u origin main
```

## Paso 4: Deploy en Vercel

1. Ve a https://vercel.com
2. Inicia sesión con GitHub
3. Haz clic en "Add New Project"
4. Importa el repositorio `financial-educator-website`
5. Vercel detectará automáticamente Next.js
6. Haz clic en "Deploy"
7. ¡Listo! Tu sitio estará en línea en minutos

## 📝 Notas Importantes

- **NO** subas archivos `.env` con información sensible
- El `.gitignore` ya está configurado para excluir archivos innecesarios
- Vercel usará las variables de entorno que configures en su dashboard

## 🔧 Configuración en Vercel

### Variables de Entorno (Opcional)
Si necesitas variables de entorno:
1. Ve a Project Settings → Environment Variables
2. Agrega las variables necesarias
3. Ejemplo: `NEXT_PUBLIC_SITE_URL=https://tu-dominio.vercel.app`

### Dominio Personalizado
1. Ve a Project Settings → Domains
2. Agrega tu dominio personalizado
3. Sigue las instrucciones de DNS

---

**¿Necesitas ayuda?** Revisa la documentación en `DEPLOYMENT.md`

