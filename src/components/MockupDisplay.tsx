"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MockupDisplayProps {
    type: string;
    className?: string;
}

// --- Shared Elements ---

const PhoneFrame = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={cn("relative overflow-hidden rounded-[2rem] border-[6px] border-zinc-800 bg-zinc-950 shadow-2xl", className)}>
        <div className="absolute top-0 inset-x-0 h-6 bg-zinc-950 z-20 flex justify-center">
            <div className="h-4 w-24 bg-black rounded-b-xl" />
        </div>
        <div className="relative z-10 h-full w-full bg-zinc-900/50 flex flex-col">
            {children}
        </div>
    </div>
);

// FloatingCard reservado para futuros usos

const HeaderMock = () => (
    <div className="flex items-center justify-between border-b border-white/5 p-4 mt-6">
        <div className="h-2 w-20 rounded-full bg-white/20" />
        <div className="h-8 w-8 rounded-full bg-white/10" />
    </div>
);

// --- Specific Business Views ---

// --- New Triadic Views for Scene 3 ---

const TriadicComposition = ({ type }: { type: string }) => {
    // Determine colors/style based on type
    const colors: Record<string, string> = {
        barber_triad: "bg-orange-500",
        tattoo_triad: "bg-zinc-100",
        restaurant_triad: "bg-red-500",
        clinic_triad: "bg-cyan-500",
        service_triad: "bg-blue-600",
    };
    const colorClass = colors[type] || "bg-white";

    return (
        <div className="relative h-full w-full flex items-center justify-center p-2 md:p-4 perspective-[2000px]">
            {/* 1. Metrics/Admin View (Back/Center) */}
            <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[90%] md:w-[600px] h-[300px] md:h-[400px] bg-zinc-900 rounded-2xl border border-white/10 shadow-2xl z-0 transform -rotate-2 opacity-80 scale-95 flex flex-col overflow-hidden">
                <div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-black/40">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
                    </div>
                </div>
                <div className="flex-1 p-4 grid grid-cols-3 gap-4">
                    <div className="col-span-2 space-y-3">
                        <div className="h-32 bg-white/5 rounded-xl border border-white/5 relative overflow-hidden">
                            <div className={`absolute bottom-0 left-0 w-full h-full opacity-20 ${colorClass} mix-blend-overlay`}
                                style={{ clipPath: "polygon(0 100%, 20% 80%, 40% 90%, 60% 70%, 80% 85%, 100% 60%, 100% 100%)" }} />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="h-20 bg-white/5 rounded-xl" />
                            <div className="h-20 bg-white/5 rounded-xl" />
                        </div>
                    </div>
                    <div className="space-y-3">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="h-12 bg-white/5 rounded-lg w-full flex items-center px-3 gap-2">
                                <div className={`w-2 h-2 rounded-full ${colorClass} opacity-50`} />
                                <div className="h-2 bg-white/10 rounded w-16" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 2. List View (Left Phone) */}
            <PhoneFrame className="absolute left-[5%] md:left-[15%] top-[15%] h-[350px] md:h-[450px] w-[200px] md:w-[260px] z-10 -rotate-3 hover:translate-y-[-10px] transition-transform duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <HeaderMock />
                <div className="p-4 space-y-4">
                    <div className="h-8 w-32 bg-white/10 rounded mb-4" />
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/5 flex gap-3">
                            <div className={`w-10 h-10 rounded-lg ${colorClass} opacity-20`} />
                            <div className="space-y-2 flex-1">
                                <div className="h-2 w-20 bg-white/20 rounded" />
                                <div className="h-2 w-12 bg-white/10 rounded" />
                            </div>
                        </div>
                    ))}
                </div>
            </PhoneFrame>

            {/* 3. Detail/Action View (Right Phone) */}
            <PhoneFrame className="absolute right-[5%] md:right-[15%] top-[25%] h-[350px] md:h-[450px] w-[200px] md:w-[260px] z-20 rotate-6 hover:translate-y-[-10px] transition-transform duration-500 shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
                <div className="h-40 bg-zinc-900 relative">
                    <div className={`absolute inset-0 opacity-20 ${colorClass}`} />
                    <div className="absolute bottom-4 left-4">
                        <div className="h-16 w-16 rounded-full bg-zinc-900 border-4 border-zinc-900" />
                    </div>
                </div>
                <div className="p-4 pt-2 space-y-4">
                    <div className="h-4 w-32 bg-white/20 rounded ml-16" />
                    <div className="flex gap-4 mt-8">
                        <div className="h-12 flex-1 bg-white/10 rounded-xl" />
                        <div className={`h-12 w-12 rounded-xl ${colorClass} flex items-center justify-center`}>
                            <div className="w-6 h-6 bg-white/20 rounded-full" />
                        </div>
                    </div>
                    <div className="space-y-2 pt-4">
                        <div className="h-2 w-full bg-white/5 rounded" />
                        <div className="h-2 w-full bg-white/5 rounded" />
                        <div className="h-2 w-2/3 bg-white/5 rounded" />
                    </div>
                </div>
            </PhoneFrame>
        </div>
    );
};

// --- Micro Cases Views (Scene 4) ---

const MicroCaseComposition = ({ }: { type?: string }) => {
    return (
        <div className="relative h-full w-full flex items-center justify-center gap-4 md:gap-8">
            <PhoneFrame className="h-[280px] w-[160px] md:h-[400px] md:w-[240px] -rotate-2">
                <HeaderMock />
                <div className="p-3 grid grid-cols-1 gap-2">
                    {[1, 2, 3].map(i => <div key={i} className="h-16 bg-white/5 rounded-lg" />)}
                </div>
            </PhoneFrame>
            <PhoneFrame className="h-[280px] w-[160px] md:h-[400px] md:w-[240px] rotate-2">
                <div className="p-4 flex flex-col h-full justify-between">
                    <div className="space-y-2">
                        <div className="h-8 w-8 bg-cyan-500/20 rounded-full mb-4" />
                        <div className="h-2 w-full bg-white/10 rounded" />
                        <div className="h-2 w-2/3 bg-white/10 rounded" />
                    </div>
                    <div className="h-10 bg-cyan-500/20 rounded-lg w-full" />
                </div>
            </PhoneFrame>
        </div>
    );
};

// --- Scalability Views ---

const SimpleScalability = () => ( // Level 1
    <div className="flex items-center justify-center h-full gap-4 relative">
        <PhoneFrame className="h-[300px] w-[160px]">
            <div className="p-3 mt-4 space-y-2">
                <div className="h-24 bg-white/5 rounded-lg mb-4" />
                <div className="h-2 w-full bg-white/10 rounded" />
                <div className="h-2 w-2/3 bg-white/10 rounded" />
            </div>
        </PhoneFrame>
        <div className="h-[200px] w-[120px] rounded-xl bg-white/5 border border-white/10 p-3 flex flex-col gap-2 backdrop-blur-sm -rotate-3">
            <div className="h-2 w-10 bg-white/20 rounded" />
            <div className="flex-1 bg-white/5 rounded-lg" />
            <div className="h-6 w-full bg-cyan-500/20 rounded border border-cyan-500/30" />
        </div>
    </div>
);

const NativeScalability = () => ( // Level 2
    <div className="flex items-center justify-center h-full gap-[-20px] relative">
        <PhoneFrame className="h-[320px] w-[170px] z-10 -rotate-6 shadow-2xl">
            <div className="h-full w-full bg-gradient-to-b from-zinc-900 to-black p-2 mt-6">
                <div className="grid grid-cols-2 gap-2 h-full content-start">
                    {[...Array(6)].map((_, i) => <div key={i} className="aspect-square bg-white/10 rounded-lg" />)}
                </div>
            </div>
        </PhoneFrame>
        <div className="h-[350px] w-[240px] rounded-[1.5rem] border-[6px] border-zinc-800 bg-zinc-900 z-0 rotate-3 shadow-xl ml-[-40px] flex flex-col overflow-hidden">
            <div className="h-full w-full bg-zinc-900 flex">
                <div className="w-16 border-r border-white/5 h-full bg-black/40" />
                <div className="flex-1 p-2 space-y-2">
                    <div className="h-8 bg-white/10 rounded w-full" />
                    <div className="h-full bg-white/5 rounded" />
                </div>
            </div>
        </div>
        <PhoneFrame className="h-[300px] w-[160px] z-20 scale-90 translate-x-[-150px] translate-y-[50px]">
            <div className="p-2 space-y-2 mt-8">
                <div className="h-2 w-12 bg-white/20 rounded" />
                <div className="h-32 bg-white/5 rounded" />
            </div>
        </PhoneFrame>
    </div>
);

const SystemScalability = () => ( // Level 3
    <div className="relative h-full w-full flex items-center justify-center p-8 overflow-hidden">
        {/* Background Network */}
        <div className="absolute inset-0">
            <svg className="w-full h-full opacity-20">
                <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
        </div>

        {/* Central Hub */}
        <div className="relative z-10 w-32 h-32 rounded-full border border-cyan-500/30 bg-cyan-900/10 backdrop-blur-md flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.2)]">
            <div className="h-16 w-16 rounded-full bg-cyan-400/20 animate-pulse" />
        </div>

        {/* Floating Modules */}
        {[...Array(6)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute p-3 rounded-xl border border-white/10 bg-black/60 backdrop-blur-md w-32"
                style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${10 + (i * 15)}%`,
                }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="h-1.5 w-12 bg-white/30 rounded mb-2" />
                <div className="h-1 w-full bg-white/10 rounded" />
            </motion.div>
        ))}
    </div>
);

const TradingScalability = () => ( // Level 4
    <div className="relative h-full w-full bg-zinc-950 border border-white/10 rounded-xl overflow-hidden flex flex-col p-1">
        {/* Header */}
        <div className="h-8 border-b border-white/5 flex items-center px-3 gap-2 bg-zinc-900/50">
            <div className="h-2 w-2 rounded-full bg-red-500" />
            <div className="h-2 w-2 rounded-full bg-yellow-500" />
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <div className="ml-4 h-3 w-32 bg-white/5 rounded" />
        </div>

        <div className="flex-1 flex gap-1 pt-1">
            {/* Left Panel: Chart */}
            <div className="flex-1 bg-zinc-900/30 rounded border border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 flex items-end justify-between px-1 pb-1 gap-[1px]">
                    {[...Array(60)].map((_, i) => {
                        const h = 20 + Math.random() * 60;
                        const color = Math.random() > 0.4 ? 'bg-green-500/30' : 'bg-red-500/30';
                        return <div key={i} className={`w-full ${color}`} style={{ height: `${h}%` }} />
                    })}
                </div>
                {/* Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50">
                    <path d="M 0 150 C 100 120, 200 180, 300 100 T 500 80" stroke="#22d3ee" strokeWidth="2" fill="none" />
                </svg>
            </div>

            {/* Right Panel: Data Nodes */}
            <div className="w-1/4 flex flex-col gap-1">
                <div className="h-1/3 bg-zinc-900/30 rounded border border-white/5 p-2">
                    <div className="w-full aspect-square rounded-full border border-white/10 flex items-center justify-center">
                        <span className="text-[8px] text-cyan-400 font-mono">98%</span>
                    </div>
                </div>
                <div className="flex-1 bg-zinc-900/30 rounded border border-white/5 p-2 space-y-1">
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className="h-1 w-full bg-white/10 rounded" />
                    ))}
                </div>
            </div>
        </div>
    </div>
);


// --- Grid Card Visuals (simplified for dense grid) ---

// --- Grid Card Visuals (Realistic Examples) ---

const GridCalendar = () => (
    // Agenda Barbería: Weekly view with slots (Modern)
    <div className="w-full h-full bg-gradient-to-b from-zinc-900 to-black flex flex-col font-sans p-3">
        <div className="flex justify-between items-end border-b border-white/5 pb-2 mb-2">
            <span className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Octubre</span>
            <span className="text-xs font-bold text-white">Semana 42</span>
        </div>
        <div className="flex-1 grid grid-cols-3 gap-2">
            {/* Column 1 */}
            <div className="flex flex-col gap-1.5">
                <div className="text-[8px] text-zinc-500 font-medium tracking-wide">LUN</div>
                <div className="relative overflow-hidden group">
                    <div className="absolute inset-0 bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-40 transition-opacity" />
                    <div className="relative h-10 bg-zinc-800/50 border border-white/5 hover:border-cyan-500/30 rounded-lg p-1.5 transition-colors">
                        <div className="w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-1.5 shadow-[0_0_10px_rgba(34,211,238,0.3)]" />
                        <div className="text-[7px] text-cyan-100 font-medium leading-none">Corte Fade</div>
                    </div>
                </div>
                <div className="h-6 bg-zinc-900/50 border border-white/5 rounded-lg" />
                <div className="h-8 bg-zinc-900/50 border border-white/5 rounded-lg" />
            </div>
            {/* Column 2 */}
            <div className="flex flex-col gap-1.5">
                <div className="text-[8px] text-zinc-500 font-medium tracking-wide">MAR</div>
                <div className="h-6 bg-zinc-900/50 border border-white/5 rounded-lg" />
                <div className="relative h-10 bg-zinc-800/80 border-t border-white/10 rounded-lg p-1.5 shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                    <div className="w-8 h-1 bg-orange-500 rounded-full mb-1.5" />
                    <div className="text-[7px] text-white font-medium leading-none">Alex M.</div>
                </div>
                <div className="h-8 bg-zinc-900/50 border border-white/5 rounded-lg" />
            </div>
            {/* Column 3 */}
            <div className="flex flex-col gap-1.5">
                <div className="text-[8px] text-zinc-500 font-medium tracking-wide">MIE</div>
                <div className="h-12 bg-zinc-900/50 border border-white/5 rounded-lg" />
                <div className="relative h-7 bg-zinc-800/50 border border-purple-500/20 rounded-lg p-1.5">
                    <div className="text-[7px] text-purple-200 leading-none">Javi</div>
                </div>
            </div>
        </div>
    </div>
);

const GridMenu = () => (
    // Pedidos Bar: Ticket list (Modern)
    <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-black p-3 flex flex-col gap-3 font-mono">
        <div className="flex justify-between items-center text-[8px] text-white/30 uppercase tracking-widest border-b border-white/5 pb-2">
            <span>Sala</span>
            <span>Estado</span>
        </div>
        <div className="space-y-2">
            <div className="group relative overflow-hidden rounded-xl bg-zinc-800/30 border border-white/5 hover:border-yellow-500/30 transition-colors p-2.5">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.4)]" />
                <div className="flex justify-between items-start pl-2">
                    <div className="flex flex-col gap-0.5">
                        <span className="text-[11px] text-white font-bold tracking-tight">Mesa 04</span>
                        <span className="text-[8px] text-white/50">2x Cañas, Bravas</span>
                    </div>
                    <span className="text-[8px] font-bold text-zinc-950 bg-yellow-500 px-1.5 py-0.5 rounded shadow-sm">PREP</span>
                </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-zinc-800/30 border border-white/5 hover:border-emerald-500/30 transition-colors p-2.5">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]" />
                <div className="flex justify-between items-start pl-2">
                    <div className="flex flex-col gap-0.5">
                        <span className="text-[11px] text-white font-bold tracking-tight">Mesa 01</span>
                        <span className="text-[8px] text-white/50">Cuenta pedida</span>
                    </div>
                    <span className="text-[8px] font-bold text-white bg-emerald-500/20 px-1.5 py-0.5 rounded border border-emerald-500/20">LISTO</span>
                </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-zinc-800/10 border border-white/5 p-2.5 opacity-60 hover:opacity-100 transition-opacity">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-red-500" />
                <div className="flex justify-between items-start pl-2">
                    <div className="flex flex-col gap-0.5">
                        <span className="text-[11px] text-white font-bold tracking-tight">Mesa 07</span>
                    </div>
                    <span className="text-[8px] text-red-400 font-medium">ESPERA</span>
                </div>
            </div>
        </div>
    </div>
);

const GridProfile = () => (
    // Citas Clínica: Patient list (Modern)
    <div className="w-full h-full bg-gradient-to-b from-zinc-900 to-black flex flex-col pt-3">
        <div className="px-3 pb-2 border-b border-white/5 flex justify-between items-center">
            <div className="text-[9px] text-white/40 font-medium tracking-wide uppercase">Hoy</div>
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
        </div>
        <div className="flex-1 p-2 space-y-2">
            {[
                { name: "Lucía R.", time: "10:00", type: "Revisión", color: "bg-blue-500", ring: "ring-blue-500/30" },
                { name: "Marcos T.", time: "10:30", type: "Consulta", color: "bg-emerald-500", ring: "ring-emerald-500/30" },
                { name: "Ana G.", time: "11:15", type: "Urgencia", color: "bg-rose-500", ring: "ring-rose-500/30" }
            ].map((p, i) => (
                <div key={i} className="group flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors cursor-default">
                    <div className={`h-8 w-8 rounded-full ${p.color} bg-opacity-20 flex items-center justify-center text-[10px] text-white font-semibold ring-2 ${p.ring} ring-offset-1 ring-offset-zinc-950`}>
                        {p.name[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center mb-0.5">
                            <span className="text-[10px] text-white font-medium truncate group-hover:text-cyan-200 transition-colors">{p.name}</span>
                            <span className="text-[9px] font-mono text-white/50">{p.time}</span>
                        </div>
                        <div className="text-[8px] text-white/30 truncate flex items-center gap-1">
                            <div className={`w-1 h-1 rounded-full ${p.color}`} />
                            {p.type}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const GridChart = () => (
    // Panel Ventas: Metrics (Modern)
    <div className="w-full h-full bg-gradient-to-br from-zinc-900 via-zinc-900 to-black p-4 flex flex-col justify-between relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[50px] pointer-events-none" />

        <div className="relative z-10">
            <div className="flex justify-between items-start mb-1">
                <div className="text-[9px] text-white/40 font-medium uppercase tracking-widest">Total Hoy</div>
                <div className="flex items-center gap-1 bg-emerald-500/10 px-1.5 py-0.5 rounded-full border border-emerald-500/20">
                    <div className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-b-[4px] border-b-emerald-400" />
                    <span className="text-[8px] font-bold text-emerald-400">12%</span>
                </div>
            </div>
            <div className="text-2xl text-white font-bold tracking-tighter tabular-nums drop-shadow-sm">1.240<span className="text-white/40 text-lg align-top ml-0.5">€</span></div>
        </div>

        <div className="h-16 flex items-end gap-1.5 pb-1">
            {[30, 45, 35, 60, 50, 75, 65, 90].map((h, i) => (
                <div key={i} className="group relative flex-1 h-full flex items-end">
                    <div
                        className="w-full bg-emerald-500/20 hover:bg-emerald-400 transition-all duration-300 rounded-t-sm shadow-[0_0_10px_rgba(16,185,129,0.1)]"
                        style={{ height: `${h}%` }}
                    />
                </div>
            ))}
        </div>
    </div>
);

const GridStock = () => (
    // Control Stock: Products w/ alerts (Modern)
    <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-black p-3 flex flex-col gap-3">
        <div className="flex justify-between items-center pb-2 border-b border-white/5">
            <span className="text-[9px] text-white/40 uppercase tracking-widest font-bold">Bodega</span>
            <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                <span className="text-[8px] text-rose-400 font-medium">1 Alerta</span>
            </div>
        </div>
        <div className="space-y-2">
            <div className="relative overflow-hidden rounded-xl bg-zinc-800/20 border border-rose-500/30 p-2.5">
                <div className="flex justify-between items-start mb-1.5">
                    <span className="text-[10px] text-white font-medium">Café Grano</span>
                    <span className="text-[8px] font-bold text-rose-400 bg-rose-950/30 px-1.5 py-0.5 rounded border border-rose-500/20">LOW</span>
                </div>
                <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full w-[15%] bg-rose-500 rounded-full shadow-[0_0_8px_rgba(244,63,94,0.5)]" />
                </div>
                <div className="flex justify-between mt-1 text-[7px] text-white/30">
                    <span>2kg</span>
                    <span>Min: 5kg</span>
                </div>
            </div>

            <div className="rounded-xl bg-zinc-900/40 border border-white/5 p-2.5 opacity-80 hover:opacity-100 transition-opacity">
                <div className="flex justify-between items-start mb-1.5">
                    <span className="text-[10px] text-white font-medium">Leche Entera</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                </div>
                <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-emerald-500/40 rounded-full" />
                </div>
            </div>
        </div>
    </div>
);

const GridList = () => (
    // Lead Tracking
    <div className="w-full h-full bg-zinc-950 p-2 flex flex-col gap-2">
        <div className="flex gap-2 mb-1">
            <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-white/10 text-white/60">Nuevos</span>
            <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/20">Activos</span>
        </div>
        <div className="space-y-1.5">
            <div className="p-2 rounded bg-zinc-900 border-l-2 border-blue-500">
                <div className="text-[9px] text-white font-medium">Reunión Cliente A</div>
                <div className="text-[8px] text-white/40 mt-0.5">Pendiente confirmación</div>
            </div>
            <div className="p-2 rounded bg-zinc-900 border-l-2 border-zinc-700 opacity-60">
                <div className="text-[9px] text-white font-medium">Llamada Lead B</div>
                <div className="text-[8px] text-white/40 mt-0.5">Mañana, 10:00</div>
            </div>
        </div>
    </div>
);


const GridMap = () => (
    <div className="w-full h-full bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:8px_8px]" />

        {/* Map Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 opacity-30">
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-white w-full h-full">
                <path d="M20 80 L40 60 L60 70 L80 40" strokeWidth="0.5" />
                <path d="M30 30 L50 20 L70 30" strokeWidth="0.5" />
            </svg>
        </div>

        {/* Location Markers */}
        <div className="absolute top-1/4 left-1/3">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-ping absolute" />
            <div className="w-2 h-2 bg-red-500 rounded-full relative z-10" />
            <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-zinc-900 border border-white/10 px-1 py-0.5 rounded text-[6px] text-white whitespace-nowrap">
                Vehículo 04
            </div>
        </div>

        <div className="absolute bottom-1/3 right-1/4">
            <div className="w-1.5 h-1.5 bg-white/30 rounded-full" />
        </div>
    </div>
);

const GridShippingStatus = () => (
    // Estado Envio: Detailed Tracking
    <div className="w-full h-full bg-zinc-950 flex flex-col font-sans relative overflow-hidden">
        {/* Map Background (Subtle) */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-zinc-950 to-transparent z-0" />

        {/* Header Status */}
        <div className="relative z-10 p-4 border-b border-white/5 bg-zinc-950/50 backdrop-blur-sm">
            <div className="flex justify-between items-start mb-2">
                <div>
                    <div className="text-[10px] text-white/50 font-medium uppercase tracking-widest">Tracking</div>
                    <div className="text-sm font-bold text-white tracking-tight">#ES-8942</div>
                </div>
                <div className="px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-[9px] text-emerald-400 font-bold uppercase">
                    En Reparto
                </div>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] text-zinc-300">Llegada: <span className="text-white font-medium">14:30 - 15:00</span></span>
            </div>
        </div>

        {/* Timeline / Progress */}
        <div className="relative z-10 flex-1 p-4 flex flex-col gap-4">
            {/* Dynamic Progress Line */}
            <div className="relative pl-3 flex-1 space-y-5">
                {/* Line */}
                <div className="absolute left-[5px] top-2 bottom-2 w-[2px] bg-zinc-800">
                    <div className="h-[60%] w-full bg-gradient-to-b from-emerald-500 to-emerald-500/0" />
                </div>

                {/* Step 1: Current */}
                <div className="relative flex gap-3">
                    <div className="absolute left-[-4px] mt-1 w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)] ring-4 ring-zinc-950" />
                    <div>
                        <div className="text-[10px] font-bold text-white">En Reparto</div>
                        <div className="text-[9px] text-white/40">Madrid Norte • 10:45 AM</div>
                    </div>
                </div>

                {/* Step 2: Previous */}
                <div className="relative flex gap-3 opacity-60">
                    <div className="absolute left-[-3px] mt-1 w-2 h-2 rounded-full bg-zinc-700 ring-4 ring-zinc-950" />
                    <div>
                        <div className="text-[10px] font-medium text-white">Salida Almacén</div>
                        <div className="text-[9px] text-white/40">Coslada Hub • 08:30 AM</div>
                    </div>
                </div>

                {/* Step 3: Origin */}
                <div className="relative flex gap-3 opacity-40">
                    <div className="absolute left-[-3px] mt-1 w-2 h-2 rounded-full bg-zinc-800 ring-4 ring-zinc-950" />
                    <div>
                        <div className="text-[10px] font-medium text-white">Pedido Confirmado</div>
                        <div className="text-[9px] text-white/40">Ayer • 18:20 PM</div>
                    </div>
                </div>
            </div>
        </div>

        {/* Live Update Toast */}
        <div className="absolute bottom-3 left-3 right-3 p-2 rounded-lg bg-zinc-900/90 border border-white/10 backdrop-blur-md flex items-center gap-2 shadow-xl z-20">
            <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
                <div className="w-3 h-3 text-white/50">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
            </div>
            <div className="flex-1 min-w-0">
                <div className="text-[9px] text-white font-medium">Repartidor a 3 paradas</div>
                <div className="text-[8px] text-white/40 truncate">Vehículo eléctrico - Entrega sostenible</div>
            </div>
        </div>
    </div>
);

const GridTicket = () => (
    // Tareas internas / Checklist
    <div className="w-full h-full bg-zinc-950 p-3 flex flex-col">
        <div className="text-[9px] text-white/40 mb-2 uppercase tracking-wider">Checklist Cierre</div>
        <div className="space-y-2">
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-[3px] bg-green-500 flex items-center justify-center">
                    <svg className="w-2 h-2 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <span className="text-[9px] text-white/40 line-through">Caja cerrada</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-[3px] bg-green-500 flex items-center justify-center">
                    <svg className="w-2 h-2 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <span className="text-[9px] text-white/40 line-through">Limpieza barra</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-[3px] border border-white/20" />
                <span className="text-[9px] text-white">Apagar luces</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-[3px] border border-white/20" />
                <span className="text-[9px] text-white">Alarma</span>
            </div>
        </div>
    </div>
);

const GridFitness = () => (
    // Rutina Gym: Workout Tracker (High Energy)
    <div className="w-full h-full bg-zinc-950 p-3 flex flex-col font-sans">
        <div className="flex justify-between items-center mb-3 pb-2 border-b border-white/5">
            <div>
                <div className="text-[8px] text-zinc-500 uppercase font-bold tracking-widest">Rutina</div>
                <div className="text-[10px] text-white font-bold uppercase italic">Push Day</div>
            </div>
            <div className="text-[12px] font-bold text-lime-400">45:00</div>
        </div>
        <div className="space-y-2">
            {[
                { name: "Bench Press", sets: "4x8", weight: "80kg", done: true },
                { name: "Incline DB", sets: "3x10", weight: "32kg", done: true },
                { name: "Lat Raise", sets: "3x15", weight: "12kg", done: false },
                { name: "Triceps Ext", sets: "3x12", weight: "25kg", done: false },
            ].map((ex, i) => (
                <div key={i} className={`p-2 rounded-lg border ${ex.done ? 'bg-lime-500/10 border-lime-500/20' : 'bg-zinc-900 border-white/5'} flex justify-between items-center`}>
                    <div>
                        <div className={`text-[9px] font-bold ${ex.done ? 'text-white' : 'text-zinc-400'}`}>{ex.name}</div>
                        <div className="text-[8px] text-zinc-600 font-mono">{ex.sets} • {ex.weight}</div>
                    </div>
                    {ex.done && <div className="w-3 h-3 rounded-full bg-lime-500 flex items-center justify-center text-black text-[8px] font-bold">✓</div>}
                </div>
            ))}
        </div>
        <div className="mt-auto pt-2">
            <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full w-[50%] bg-lime-500" />
            </div>
        </div>
    </div>
);

const GridHotel = () => (
    // Hotel: Room Management (Elegant)
    <div className="w-full h-full bg-[#1c1c1e] p-0 flex flex-col font-sans relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#bfa094]/10 to-transparent" />
        <div className="p-4 z-10">
            <div className="text-[8px] text-[#bfa094] uppercase tracking-[0.2em] mb-1">Guest</div>
            <div className="text-xl font-serif text-white italic tracking-wide">Mr. Wick</div>
        </div>
        <div className="flex-1 bg-zinc-950/50 backdrop-blur-sm m-2 mt-0 rounded-xl border border-white/5 p-3 flex flex-col gap-3">
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <span className="text-[8px] text-zinc-500 uppercase">Room</span>
                    <span className="text-2xl font-light text-white">804</span>
                </div>
                <div className="px-2 py-1 bg-[#bfa094]/20 border border-[#bfa094]/30 rounded text-[8px] text-[#bfa094] uppercase tracking-wider">
                    Occupied
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="p-2 bg-white/5 rounded-lg text-center">
                    <div className="text-[8px] text-zinc-500 uppercase">Check In</div>
                    <div className="text-[10px] text-zinc-300 font-mono">14:00</div>
                </div>
                <div className="p-2 bg-white/5 rounded-lg text-center">
                    <div className="text-[8px] text-zinc-500 uppercase">Check Out</div>
                    <div className="text-[10px] text-zinc-300 font-mono">12:00</div>
                </div>
            </div>
        </div>
        <div className="p-4 pt-0">
            <div className="flex items-center gap-2 p-2 rounded-lg bg-green-900/10 border border-green-500/10">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="text-[8px] text-green-300 uppercase tracking-wider">Room Cleaned</span>
            </div>
        </div>
    </div>
);

const GridTattoo = () => (
    // Tattoo: Session Info (Dark/Ink)
    <div className="w-full h-full bg-black p-3 flex flex-col font-sans border-l-4 border-zinc-800">
        <div className="flex justify-between items-start mb-4">
            <div>
                <div className="text-[8px] text-zinc-500 uppercase tracking-widest">Client</div>
                <div className="text-[11px] font-bold text-white">Roberto G.</div>
            </div>
            <div className="text-[10px] text-zinc-400 font-mono">15:30</div>
        </div>
        <div className="flex-1 bg-zinc-900 rounded-lg p-2 border border-zinc-800 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-20 transition-opacity" />
            <div className="relative z-10 h-full flex flex-col justify-end">
                <span className="text-[8px] text-white/60 bg-black/50 px-1 rounded w-fit backdrop-blur-sm">Ref. Dragon Sleeve</span>
            </div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
            <div>
                <div className="text-[7px] text-zinc-600 uppercase">Session</div>
                <div className="text-[9px] text-zinc-300">2 of 5</div>
            </div>
            <div>
                <div className="text-[7px] text-zinc-600 uppercase">Payment</div>
                <div className="text-[9px] text-yellow-500 font-mono">Pending</div>
            </div>
        </div>
    </div>
);

const SimpleCalendar = () => (
    // Pistas/Reservas: Simple Grid
    <div className="w-full h-full bg-zinc-950 p-2 flex flex-col">
        <div className="flex justify-between items-center mb-2 px-1">
            <span className="text-[9px] text-white/50 uppercase">Pista 1</span>
            <span className="text-[8px] px-1.5 py-0.5 bg-blue-500/20 text-blue-300 rounded border border-blue-500/20">Padel</span>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-1.5">
            {[
                { t: "09:00", s: "occupied" }, { t: "10:30", s: "occupied" },
                { t: "12:00", s: "free" }, { t: "13:30", s: "occupied" },
                { t: "17:00", s: "free" }, { t: "18:30", s: "free" },
                { t: "20:00", s: "occupied" }, { t: "21:30", s: "occupied" },
            ].map((slot, i) => (
                <div key={i} className={`rounded flex flex-col items-center justify-center border ${slot.s === 'free' ? 'bg-zinc-900 border-white/5 hover:bg-emerald-500/10 hover:border-emerald-500/30 cursor-pointer' : 'bg-zinc-800/50 border-white/5 opacity-50'}`}>
                    <span className={`text-[9px] font-mono ${slot.s === 'free' ? 'text-white' : 'text-white/30'}`}>{slot.t}</span>
                    {slot.s === 'free' && <span className="text-[7px] text-emerald-400">LIBRE</span>}
                </div>
            ))}
        </div>
    </div>
);

const InventoryRealism = () => (
    <div className="relative h-full w-full flex items-center justify-center p-2 md:p-4 perspective-[2000px]">
        {/* 1. Main Dashboard (Back/Center) */}
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[90%] md:w-[600px] h-[300px] md:h-[400px] bg-zinc-900 rounded-2xl border border-white/10 shadow-2xl z-0 transform -rotate-1 opacity-90 scale-95 flex flex-col overflow-hidden">
            {/* Header */}
            <div className="h-10 border-b border-white/5 flex items-center justify-between px-4 bg-black/40">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
                </div>
                <div className="text-[10px] text-white/40 font-mono">STOCK MANAGEMENT V2.4</div>
            </div>
            {/* Body */}
            <div className="flex-1 p-4 grid grid-cols-4 gap-4">
                {/* Sidebar */}
                <div className="col-span-1 space-y-2 border-r border-white/5 pr-2">
                    <div className="h-6 bg-emerald-500/20 border border-emerald-500/30 rounded flex items-center px-2 text-[9px] text-emerald-400 font-bold">INVENTORY</div>
                    <div className="h-6 hover:bg-white/5 rounded flex items-center px-2 text-[9px] text-white/40">ORDERS</div>
                    <div className="h-6 hover:bg-white/5 rounded flex items-center px-2 text-[9px] text-white/40">SUPPLIERS</div>
                </div>
                {/* Table */}
                <div className="col-span-3 space-y-2">
                    <div className="grid grid-cols-4 gap-2 text-[8px] text-white/30 uppercase tracking-widest pb-1 border-b border-white/5">
                        <span className="col-span-2">Product</span>
                        <span className="text-right">Stock</span>
                        <span className="text-right">Status</span>
                    </div>
                    {[
                        { name: "Pro Keratin Shampoo 500ml", stock: "124", status: "OK", color: "text-emerald-400" },
                        { name: "Matte Clay Pomade", stock: "12", status: "LOW", color: "text-orange-400" },
                        { name: "Beard Oil Sandalwood", stock: "45", status: "OK", color: "text-emerald-400" },
                        { name: "Razor Blades Pro (100x)", stock: "0", status: "OUT", color: "text-red-400" },
                        { name: "Aftershave Cooling Gel", stock: "32", status: "OK", color: "text-emerald-400" },
                    ].map((item, i) => (
                        <div key={i} className="grid grid-cols-4 gap-2 items-center p-1 hover:bg-white/5 rounded transition-colors group">
                            <div className="col-span-2 flex items-center gap-2">
                                <div className="w-4 h-4 rounded bg-white/10" />
                                <span className="text-[9px] text-white font-medium truncate">{item.name}</span>
                            </div>
                            <span className="text-[9px] text-white/60 text-right font-mono">{item.stock}</span>
                            <span className={`text-[8px] font-bold text-right ${item.color}`}>{item.status}</span>
                        </div>
                    ))}
                    {/* Graph */}
                    <div className="mt-4 h-24 bg-zinc-900/50 rounded border border-white/5 relative overflow-hidden flex items-end justify-between px-2 pb-2">
                        {[40, 65, 45, 80, 55, 90, 70, 60, 50, 75].map((h, i) => (
                            <div key={i} className="w-[8%] bg-indigo-500/20 hover:bg-indigo-500/40 transition-colors rounded-t-sm" style={{ height: `${h}%` }} />
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* 2. Mobile Scanner (Left) */}
        <PhoneFrame className="absolute left-[5%] md:left-[10%] top-[20%] h-[300px] md:h-[400px] w-[180px] md:w-[240px] z-10 -rotate-3 hover:scale-105 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-black">
            <div className="relative h-full w-full flex flex-col">
                {/* Camera View Finder UI */}
                <div className="absolute inset-0 z-0 opacity-50 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-6">
                    <div className="w-48 h-32 border-2 border-white/40 rounded-lg relative">
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-emerald-500" />
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-emerald-500" />
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-emerald-500" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-emerald-500" />
                        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-red-500/50 animate-pulse" />
                    </div>
                    <div className="mt-4 px-3 py-1 bg-black/60 backdrop-blur rounded-full border border-white/10 text-[9px] text-white">
                        Scanning Product...
                    </div>
                </div>
                {/* Bottom Sheet */}
                <div className="bg-zinc-900 border-t border-white/10 p-4 rounded-t-2xl z-20">
                    <div className="flex gap-3 mb-3">
                        <div className="w-10 h-10 rounded bg-white/10" />
                        <div className="flex-1">
                            <div className="text-[10px] text-white font-bold">Matte Clay Pomade</div>
                            <div className="text-[9px] text-white/50">ID: #89212 • Aisle 4</div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="text-[14px] font-bold text-white">12 <span className="text-[9px] text-zinc-400 font-normal">in stock</span></div>
                        <div className="px-2 py-1 bg-emerald-500 text-black text-[9px] font-bold rounded">+ Add Stock</div>
                    </div>
                </div>
            </div>
        </PhoneFrame>

        {/* 3. Notification/Alert (Right) */}
        <div className="absolute right-[5%] md:right-[15%] top-[15%] w-[160px] md:w-[200px] z-20 rotate-6 hover:translate-y-[-5px] transition-transform duration-500">
            <div className="bg-zinc-900/90 backdrop-blur-xl border border-white/10 p-3 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-2 mb-2">
                    <div className="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/30">
                        <svg className="w-3 h-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    </div>
                    <span className="text-[10px] font-bold text-white">Stock Alert</span>
                </div>
                <div className="space-y-2">
                    <div className="p-2 bg-red-500/10 border border-red-500/10 rounded-lg">
                        <div className="text-[9px] font-semibold text-white">Razor Blades Pro</div>
                        <div className="text-[8px] text-red-300 mt-0.5">Stock reached 0 units</div>
                    </div>
                    <div className="p-2 bg-orange-500/10 border border-orange-500/10 rounded-lg opacity-60">
                        <div className="text-[9px] font-semibold text-white">Matte Clay Pomade</div>
                        <div className="text-[8px] text-orange-300 mt-0.5">Below threshold (15)</div>
                    </div>
                    <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden mt-1">
                        <div className="w-[85%] h-full bg-red-500" />
                    </div>
                </div>
            </div>
            {/* Additional context card behind */}
            <div className="absolute -z-10 -bottom-4 right-2 w-full h-full bg-zinc-800/50 rounded-2xl border border-white/5 blur-[1px] -rotate-3" />
        </div>
    </div>
);

const CRMRealism = () => (
    <div className="relative h-full w-full flex items-center justify-center p-2 md:p-4 perspective-[2000px]">
        {/* 1. Main CRM Database (Back/Center) */}
        <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[90%] md:w-[600px] h-[320px] md:h-[420px] bg-[#0c0c10] rounded-2xl border border-white/10 shadow-2xl z-0 transform rotate-1 opacity-90 scale-95 flex flex-col overflow-hidden">
            {/* CRM Header */}
            <div className="h-12 border-b border-white/5 flex items-center justify-between px-4 bg-[#111116]">
                <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-blue-500/20 rounded-lg">
                        <div className="w-3 h-3 bg-blue-500 rounded-full" />
                    </div>
                    <div>
                        <div className="text-[10px] font-bold text-white">CUSTOMER DATABASE</div>
                        <div className="text-[8px] text-zinc-500">1,204 Active Clients</div>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="w-6 h-6 rounded bg-white/5" />
                    <div className="w-16 h-6 rounded bg-blue-600/20 border border-blue-600/30 flex items-center justify-center text-[8px] text-blue-400 font-bold">+ NEW</div>
                </div>
            </div>
            {/* Table */}
            <div className="p-4 overflow-hidden">
                <div className="flex flex-col gap-2">
                    {[
                        { name: "Sofia Rodriguez", role: "Design Agency", status: "VIP", value: "$4,200", last: "2h ago", avatar: "bg-purple-500" },
                        { name: "Marco Verratti", role: "Freelance", status: "Active", value: "$850", last: "1d ago", avatar: "bg-orange-500" },
                        { name: "Elena K.", role: "Tech Startups", status: "New", value: "$0", last: "5m ago", avatar: "bg-blue-500" },
                        { name: "John Doe", role: "Consultant", status: "Churned", value: "$120", last: "30d ago", avatar: "bg-zinc-500" },
                    ].map((client, i) => (
                        <div key={i} className="flex items-center justify-between p-2 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                            <div className="flex items-center gap-3 min-w-[30%]">
                                <div className={`w-6 h-6 rounded-full ${client.avatar} flex items-center justify-center text-[8px] font-bold text-white`}>{client.name[0]}</div>
                                <div>
                                    <div className="text-[9px] font-bold text-white">{client.name}</div>
                                    <div className="text-[8px] text-zinc-500">{client.role}</div>
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <span className={`text-[7px] px-1.5 py-0.5 rounded border ${client.status === 'VIP' ? 'bg-purple-500/10 border-purple-500/30 text-purple-300' :
                                    client.status === 'New' ? 'bg-blue-500/10 border-blue-500/30 text-blue-300' :
                                        client.status === 'Churned' ? 'bg-red-500/10 border-red-500/30 text-red-300' :
                                            'bg-green-500/10 border-green-500/30 text-green-300'
                                    }`}>{client.status}</span>
                            </div>
                            <div className="text-[9px] font-mono text-zinc-300">{client.value}</div>
                            <div className="text-[8px] text-zinc-600">{client.last}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* 2. Mobile Profile (Left) */}
        <PhoneFrame className="absolute left-[5%] md:left-[12%] top-[15%] h-[320px] md:h-[420px] w-[180px] md:w-[240px] z-20 -rotate-6 hover:rotate-0 transition-transform duration-500 shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
            <div className="relative h-full flex flex-col bg-zinc-950">
                {/* Profile Header */}
                <div className="h-24 bg-gradient-to-b from-blue-900/40 to-black p-4 flex flex-col justify-end">
                    <div className="flex items-end gap-3 translate-y-4">
                        <div className="w-14 h-14 rounded-full bg-zinc-900 border-4 border-black flex items-center justify-center">
                            <div className="w-full h-full rounded-full bg-purple-500 flex items-center justify-center text-lg font-bold text-white">S</div>
                        </div>
                        <div className="pb-1">
                            <div className="text-white text-[12px] font-bold">Sofia Rodriguez</div>
                            <div className="text-blue-400 text-[9px]">VIP Client</div>
                        </div>
                    </div>
                </div>
                {/* Actions */}
                <div className="mt-6 px-4 grid grid-cols-2 gap-2">
                    <div className="h-8 bg-white/5 rounded-lg flex items-center justify-center gap-1.5 hover:bg-white/10 transition-colors">
                        <div className="w-3 h-3 bg-green-500/20 rounded-full flex items-center justify-center"><div className="w-1.5 h-1.5 bg-green-500 rounded-full" /></div>
                        <span className="text-[9px] text-white">Call</span>
                    </div>
                    <div className="h-8 bg-blue-600 rounded-lg flex items-center justify-center gap-1.5 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20">
                        <span className="text-[9px] text-white font-bold">Message</span>
                    </div>
                </div>
                {/* Stats */}
                <div className="mt-4 px-4 space-y-3">
                    <div className="p-3 bg-zinc-900/50 border border-white/5 rounded-xl">
                        <div className="text-[8px] text-zinc-500 uppercase tracking-widest mb-1">Lifetime Value</div>
                        <div className="text-xl font-bold text-white tracking-tight">$4,200.50</div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between text-[9px] text-zinc-400">
                            <span>Last Visit</span>
                            <span className="text-white">Yesterday</span>
                        </div>
                        <div className="flex justify-between text-[9px] text-zinc-400">
                            <span>Services</span>
                            <span className="text-white">14 Completed</span>
                        </div>
                    </div>
                </div>
            </div>
        </PhoneFrame>

        {/* 3. Chat Interaction (Right) */}
        <div className="absolute right-[2%] md:right-[15%] bottom-[15%] w-[160px] md:w-[200px] bg-black border border-white/10 rounded-2xl p-2 z-30 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="flex items-center gap-2 border-b border-white/5 pb-2 mb-2 px-1">
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
                <span className="text-[9px] font-mono text-white/50">LIVE CHAT</span>
            </div>
            <div className="space-y-2">
                <div className="self-start bg-zinc-800 rounded-tr-xl rounded-b-xl p-2 max-w-[90%]">
                    <p className="text-[8px] text-zinc-300 leading-tight">Hola Sofia, confirmamos tu cita para el Viernes a las 10:00? 📅</p>
                </div>
                <div className="ml-auto bg-blue-600 rounded-tl-xl rounded-b-xl p-2 max-w-[90%] shadow-lg shadow-blue-900/30">
                    <p className="text-[8px] text-white leading-tight">¡Sí perfecto! Allí estaré. Gracias 😊</p>
                </div>
            </div>
            <div className="mt-2 text-[8px] text-zinc-600 text-center font-mono">Read 10:42 AM</div>
        </div>
    </div>
);

// --- Updated Content Renderer ---

const ContentRenderer = ({ type }: { type: string }) => {
    // Grid Visuals (& Aliases for Carousel/Config)
    if (type === 'grid_calendar' || type === 'calendar' || type === 'time_track' || type === 'class_schedule' || type === 'visit_calendar') return <GridCalendar />;
    if (type === 'grid_menu' || type === 'menu' || type === 'pos_daily') return <GridMenu />;
    if (type === 'grid_profile' || type === 'client_profile' || type === 'patient_list' || type === 'client_portal' || type === 'client_history') return <GridProfile />;
    if (type === 'grid_chart' || type === 'metrics' || type === 'payment' || type === 'payment_status' || type === 'commission_calc') return <GridChart />;
    if (type === 'grid_stock' || type === 'stock_check' || type === 'inventory_alert') return <GridStock />;
    if (type === 'grid_list' || type === 'treatments' || type === 'docs' || type === 'secure_chat' || type === 'kanban' || type === 'delivery_list' || type === 'property_list' || type === 'lead_kanban') return <GridList />;
    if (type === 'grid_map' || type === 'fleet_map' || type === 'fuel_track') return <GridMap />;
    if (type === 'grid_shipping' || type === 'shipping_status') return <GridShippingStatus />;
    if (type === 'grid_ticket' || type === 'orders' || type === 'kitchen' || type === 'reminders' || type === 'invoice' || type === 'incident_report') return <GridTicket />;

    // New specific mappings
    if (type === 'grid_fitness' || type === 'workout_plan') return <GridFitness />;
    if (type === 'grid_checkin' || type === 'member_checkin') return <GridHotel />;
    if (type === 'grid_tattoo') return <GridTattoo />;
    if (type === 'grid_calendar_simple' || type === 'reservations') return <SimpleCalendar />;

    // Realistic Triadic Overrides
    if (type === 'inventory_triad' || type === 'stock_realism' || type === 'inventory_deep') return <InventoryRealism />;
    if (type === 'crm_triad' || type === 'client_realism' || type === 'crm_deep') return <CRMRealism />;

    // Fallback for any other grid_ or generic text
    if (type.startsWith('grid_')) return <GridList />;

    if (type.endsWith('_triad')) return <TriadicComposition type={type} />;
    if (type.startsWith('micro_')) return <MicroCaseComposition />;


    switch (type) {
        // Scalability
        case 'simple': return <SimpleScalability />;
        case 'native': return <NativeScalability />;
        case 'system': return <SystemScalability />;
        case 'trading': return <TradingScalability />;
        default: return null;
    }
};

export const MockupDisplay = ({ type, className }: MockupDisplayProps) => {
    // Determine container aspect ratio based on type
    const isWide = ['trading', 'system', 'native', 'simple', 'map', 'menu', 'stock_realism', 'client_realism', 'inventory_triad', 'crm_triad', 'inventory_deep', 'crm_deep'].includes(type);

    return (
        <div className={cn(
            "relative w-full mx-auto",
            isWide ? "aspect-video max-w-2xl" : "aspect-[4/5] max-w-sm",
            className
        )}>
            {/* Content */}
            <div className="relative z-10 h-full w-full">
                <ContentRenderer type={type} />
            </div>
        </div>
    );
};
