# Comandos para Ejecutar el Proyecto Localmente

## Pasos para ejecutar el proyecto en tu máquina local:

### 1. Navegar al directorio del proyecto
```bash
cd /Users/jesusvalencia/financial-educator-website
```

### 2. Instalar las dependencias (solo la primera vez)
```bash
npm install
```

### 3. Ejecutar el servidor de desarrollo
```bash
npm run dev
```

### 4. Abrir en el navegador
Una vez que el servidor esté corriendo, verás un mensaje como:
```
✓ Ready in Xs
○ Local:        http://localhost:3000
```

Abre tu navegador y ve a: **http://localhost:3000**

---

## Comandos Útiles Adicionales

### Ver el proyecto en producción (build)
```bash
npm run build
npm start
```

### Ejecutar las pruebas
```bash
npm test
```

### Verificar errores de código
```bash
npm run lint
```

---

## Si tienes problemas:

### Puerto 3000 ocupado
```bash
npm run dev -- -p 3001
```
Luego abre: http://localhost:3001

### Limpiar y reinstalar
```bash
rm -rf node_modules .next
npm install
npm run dev
```

---

## Nota Importante:
- El servidor se ejecutará en modo desarrollo
- Los cambios en el código se reflejarán automáticamente (hot reload)
- Para detener el servidor, presiona `Ctrl + C` en la terminal

