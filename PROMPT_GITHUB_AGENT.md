# Prompt para Agente de GitHub

Copia y pega este prompt completo en tu agente de GitHub (GitHub Copilot, GitHub Actions, o similar):

---

## PROMPT COMPLETO:

```
Necesito configurar GitHub Pages para mi repositorio Next.js. Por favor:

1. Verifica que el repositorio tenga el workflow de GitHub Actions en `.github/workflows/deploy.yml` configurado para desplegar a GitHub Pages usando las acciones oficiales (actions/configure-pages, actions/upload-pages-artifact, actions/deploy-pages).

2. Verifica que `next.config.mjs` tenga:
   - `output: 'export'` para exportación estática
   - `basePath: '/Muestraweb'` (el nombre del repositorio)
   - `trailingSlash: true`
   - `images: { unoptimized: true }`

3. Verifica que exista el archivo `.nojekyll` en la raíz del proyecto.

4. Habilita GitHub Pages en la configuración del repositorio:
   - Ve a Settings → Pages
   - Configura la fuente como "GitHub Actions" (no "Deploy from a branch")
   - Si no tienes permisos, proporciona instrucciones claras para hacerlo manualmente

5. Si el workflow no se ha ejecutado, ejecútalo manualmente o espera al próximo push a la rama main.

6. Verifica que el workflow tenga los permisos correctos:
   - contents: read
   - pages: write
   - id-token: write

7. Confirma que el path del artifact sea './out' (directorio de salida de Next.js export).

8. Una vez completado, proporciona la URL donde estará disponible el sitio: https://alexsoyyo.github.io/Muestraweb

Si encuentras algún error o problema, proporciona soluciones específicas y pasos para resolverlos.
```

---

## PROMPT ALTERNATIVO (Más directo):

```
Configura GitHub Pages para este repositorio Next.js llamado "Muestraweb". 

El repositorio es: https://github.com/Alexsoyyo/Muestraweb

Tareas:
1. Verifica y corrige la configuración de Next.js para exportación estática con basePath '/Muestraweb'
2. Verifica que el workflow de GitHub Actions esté correctamente configurado para desplegar a GitHub Pages
3. Habilita GitHub Pages usando GitHub Actions como fuente
4. Ejecuta el workflow si es necesario
5. Confirma que el sitio esté disponible en https://alexsoyyo.github.io/Muestraweb

Si no puedes realizar alguna acción por falta de permisos, proporciona instrucciones paso a paso para hacerlo manualmente.
```

---

## PROMPT PARA GITHUB COPILOT CHAT (Más conversacional):

```
Hola, necesito ayuda para configurar GitHub Pages en mi repositorio Next.js. 

Mi repositorio es: Alexsoyyo/Muestraweb

Actualmente veo un error 404 cuando intento acceder a la página. 

Por favor:
- Revisa la configuración actual del proyecto
- Verifica que el workflow de GitHub Actions esté correcto
- Asegúrate de que Next.js esté configurado para exportación estática con el basePath correcto
- Ayúdame a habilitar GitHub Pages correctamente
- Ejecuta el despliegue si es posible

El sitio debería estar disponible en: https://alexsoyyo.github.io/Muestraweb

¿Puedes revisar todo y decirme qué pasos necesito seguir o qué errores encuentras?
```

