#!/bin/bash

# Script para hacer push a GitHub
# Ejecuta este script después de crear el repositorio en GitHub

echo "🚀 Preparando push a GitHub..."

# Colores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Verificar que estamos en la carpeta correcta
if [ ! -f "package.json" ]; then
    echo "❌ Error: No estás en la carpeta del proyecto"
    exit 1
fi

# Verificar si git está inicializado
if [ ! -d ".git" ]; then
    echo "📦 Inicializando git..."
    git init
fi

# Verificar configuración de git
if [ -z "$(git config user.name)" ]; then
    echo -e "${YELLOW}⚠️  No hay nombre de usuario configurado${NC}"
    read -p "Ingresa tu nombre de usuario de Git: " git_name
    git config user.name "$git_name"
fi

if [ -z "$(git config user.email)" ]; then
    echo -e "${YELLOW}⚠️  No hay email configurado${NC}"
    read -p "Ingresa tu email de Git: " git_email
    git config user.email "$git_email"
fi

# Agregar archivos
echo "📝 Agregando archivos..."
git add .

# Crear commit
echo "💾 Creando commit..."
git commit -m "Initial commit: Financial Educator Website - Next.js 14, TypeScript, Tailwind CSS"

# Verificar si hay un remote
if [ -z "$(git remote -v)" ]; then
    echo -e "${YELLOW}📡 No hay remote configurado${NC}"
    echo "Por favor, crea un repositorio en GitHub primero:"
    echo "1. Ve a https://github.com/new"
    echo "2. Crea un nuevo repositorio"
    echo "3. Copia la URL del repositorio"
    echo ""
    read -p "Ingresa la URL del repositorio de GitHub: " repo_url
    
    if [ -n "$repo_url" ]; then
        git remote add origin "$repo_url"
        echo -e "${GREEN}✅ Remote agregado${NC}"
    else
        echo "❌ No se pudo agregar el remote"
        exit 1
    fi
fi

# Renombrar branch a main
git branch -M main

# Push a GitHub
echo "🚀 Haciendo push a GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ ¡Push completado exitosamente!${NC}"
    echo ""
    echo "🌐 Próximos pasos:"
    echo "1. Ve a https://vercel.com"
    echo "2. Inicia sesión con GitHub"
    echo "3. Importa el repositorio"
    echo "4. ¡Deploy automático!"
else
    echo "❌ Error al hacer push"
    echo "Verifica que:"
    echo "- El repositorio existe en GitHub"
    echo "- Tienes permisos para hacer push"
    echo "- La URL del remote es correcta"
fi

