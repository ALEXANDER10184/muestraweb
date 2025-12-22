# Configuración de GitHub Pages

## Pasos para habilitar GitHub Pages

### 1. Habilitar GitHub Pages en el repositorio

1. Ve a tu repositorio en GitHub: `https://github.com/Alexsoyyo/Muestraweb`
2. Haz clic en **Settings** (Configuración)
3. En el menú lateral, busca **Pages**
4. En la sección **Source**, selecciona **GitHub Actions** (NO selecciones "Deploy from a branch")
5. Guarda los cambios

### 2. Verificar que el workflow se ejecute

1. Ve a la pestaña **Actions** en tu repositorio
2. Deberías ver un workflow llamado "Deploy to GitHub Pages"
3. Si no se ha ejecutado, haz clic en el workflow y luego en **Run workflow**

### 3. Subir los cambios

Si aún no has subido los cambios con el `basePath` configurado, ejecuta:

```bash
git push origin main
```

### 4. URL de tu sitio

Una vez que el workflow se complete exitosamente, tu sitio estará disponible en:

**https://alexsoyyo.github.io/Muestraweb**

## Solución de problemas

### Si ves un 404:
- Verifica que GitHub Pages esté habilitado con **GitHub Actions** como fuente
- Verifica que el workflow se haya ejecutado correctamente en la pestaña Actions
- Espera unos minutos después de que el workflow termine (puede tardar en propagarse)

### Si el sitio no carga correctamente:
- Verifica que el `basePath` en `next.config.mjs` sea `/Muestraweb`
- Asegúrate de que todos los assets usen rutas relativas

