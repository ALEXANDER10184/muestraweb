export const siteConfig = {
    brandName: "MINIAPPS",
    whatsappUrl: process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/34642868261",
    headline: "Sistemas pequeños.\nDecisiones inteligentes.",
    subheadline: "Miniapps que convierten procesos en automatización.",
    seo: {
        title: "MINIAPPS · Sistemas pequeños, decisiones inteligentes",
        description: "Miniapps a medida que convierten tus procesos en automatización controlable, sin dashboards infinitos.",
    },

    // Scene 3: Grid of Mini Solutions
    gridItems: [
        { title: "Agenda Barbería", type: "grid_calendar" },
        { title: "Pedidos Bar", type: "grid_menu" },
        { title: "Citas Clínica", type: "grid_profile" },
        { title: "Control de Stock", type: "grid_stock" },
        { title: "Panel Ventas", type: "grid_chart" },
        { title: "Leads Inmobiliaria", type: "grid_list" },
        { title: "Reservas Pista", type: "grid_calendar_simple" },
        { title: "Ficha Tatuaje", type: "grid_tattoo" },
        { title: "Ticket Soporte", type: "grid_ticket" },
        { title: "Rutina Gym", type: "grid_fitness" },
        { title: "Check-in Hotel", type: "grid_checkin" },
        { title: "Estado Envio", type: "grid_shipping" },
    ],

    // Scene 4: Sector Carousel
    sectorCarousel: [
        {
            id: "restoration",
            title: "Restauración",
            description: "Reservas, sala y cocina sincronizadas.",
            screens: ["menu", "orders", "kitchen", "payment"]
        },
        {
            id: "beauty",
            title: "Belleza y Estética",
            description: "Citas, historiales y pagos ordenados.",
            screens: ["calendar", "client_profile", "treatments", "reminders"]
        },
        {
            id: "health",
            title: "Salud",
            description: "Pacientes, evolución y privacidad.",
            screens: ["patient_list", "metrics", "docs", "secure_chat"]
        },
        {
            id: "services",
            title: "Servicios Prof.",
            description: "Trabajos, estados y clientes en flujo.",
            screens: ["kanban", "invoice", "time_track", "client_portal"]
        },
        {
            id: "retail",
            title: "Retail y Comercio",
            description: "Stock, caja y clientes en tiempo real.",
            screens: ["stock_check", "pos_daily", "inventory_alert", "client_history"]
        },
        {
            id: "logistics",
            title: "Logística y Flotas",
            description: "Rutas, entregas y control de estado.",
            screens: ["fleet_map", "delivery_list", "incident_report", "fuel_track"]
        },
        {
            id: "fitness",
            title: "Fitness y Deporte",
            description: "Clases, progreso y gestión de socios.",
            screens: ["class_schedule", "member_checkin", "workout_plan", "payment_status"]
        },
        {
            id: "real_estate",
            title: "Inmobiliaria",
            description: "Captación, visitas y cierre de operaciones.",
            screens: ["property_list", "lead_kanban", "visit_calendar", "commission_calc"]
        }
    ],

    // Scene 6: Workbench Text
    workbench: {
        title: "El techo tecnológico",
        subtitles: [
            "Miniapps que crecen hasta sistemas internos completos.",
            "Automatización, datos y decisiones en un mismo entorno.",
            "Desde herramientas internas hasta bots de trading y sistemas inteligentes."
        ]
    },

    // Scene 7: Authority Phrases
    authorityPhrases: [
        {
            text: "No hago apps. Diseño sistemas.",
            visual: "diagram"
        },
        {
            text: "La tecnología es el medio, no el fin.",
            visual: "code"
        },
        {
            text: "La complejidad se construye con criterio.",
            visual: "chip"
        },
    ],

    ctaText: {
        main: "Sea simple o avanzado, empieza con una decisión correcta.",
        button: "Hablar del proyecto",
        trust: "Respondo en menos de 24 horas."
    }
};
