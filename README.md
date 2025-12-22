# MINIAPPS - Landing Page

Proyecto web futurista y minimalista para captación de clientes de miniapps.
Desarrollado con Next.js 14, TailwindCSS, Framer Motion y TypeScript.

## Características

- **Diseño Premium**: Estética oscura, glassmorphism real, noise overlay.
- **Scroll Storytelling**: Narrativa controlada por scroll con efectos parallax y sticky scenes.
- **Performance**: Optimizado para Core Web Vitals.
- **Accesibilidad**: Respeto por preferencias de movimiento reducido y contraste.

## Configuración

La configuración global del sitio (textos, URL de WhatsApp, SEO) se encuentra en:
`src/config/site.ts`

Para cambiar el número de WhatsApp, edita `whatsappUrl` en ese archivo o usa la variable de entorno:
`NEXT_PUBLIC_WHATSAPP_URL`

## Comandos

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar producción
npm start

# Linting
npm run lint
```

## Despliegue

Este proyecto está listo para desplegarse en **Vercel**:

1. Importa el repositorio en Vercel.
2. Next.js se detectará automáticamente.
3. Despliega.

---

## Estructura

- `/src/app`: Rutas y Layout principal.
- `/src/components`: Componentes UI y Escenas.
- `/src/config`: Configuración de textos y constantes.
- `/src/lib`: Utilidades y variantes de animación.
