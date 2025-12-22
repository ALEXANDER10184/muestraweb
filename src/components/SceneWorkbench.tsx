"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/config/site";
import { MockupDisplay } from "./MockupDisplay";

export const SceneWorkbench = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);

    return (
        <section ref={containerRef} className="relative min-h-[150vh] flex items-center justify-center overflow-hidden py-24">
            {/* Background Tech Grid */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            </div>

            <div className="relative z-10 w-full max-w-7xl px-4 flex flex-col items-center">

                {/* Header Text */}
                <div className="text-center mb-16 space-y-6 max-w-3xl">
                    <motion.h2
                        style={{ opacity, y: useTransform(scrollYProgress, [0, 0.3], [50, 0]) }}
                        className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-white/50"
                    >
                        {siteConfig.workbench.title}
                    </motion.h2>
                    <motion.div
                        style={{ opacity: useTransform(scrollYProgress, [0.1, 0.4], [0, 1]) }}
                        className="flex flex-col gap-2 text-lg text-white/60"
                    >
                        {siteConfig.workbench.subtitles.map((t, i) => (
                            <span key={i}>{t}</span>
                        ))}
                    </motion.div>
                </div>

                {/* The Workbench Visual */}
                <motion.div
                    style={{ scale, opacity }}
                    className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-zinc-900/50 rounded-2xl border border-white/10 shadow-2xl overflow-hidden backdrop-blur-sm"
                >
                    {/* "Workbench" Content: A complex arrangement of nodes/screens */}
                    <div className="absolute inset-0 p-8 flex items-center justify-center">
                        {/* Central Core */}
                        <div className="relative z-20 w-32 h-32 md:w-48 md:h-48 rounded-full border border-cyan-500/30 bg-cyan-950/30 flex items-center justify-center shadow-[0_0_100px_rgba(6,182,212,0.2)]">
                            <div className="w-16 h-16 md:w-24 md:h-24 bg-cyan-500/20 rounded-full animate-pulse" />
                            <div className="absolute inset-0 rounded-full border-t border-cyan-500/50 animate-spin-slow" />
                        </div>

                        {/* Connecting Elements */}
                        {/* We place varying "Mockups" around - abstractly */}

                        {/* Top Left: Data Source */}
                        <div className="absolute top-[10%] left-[10%] w-48 h-32 bg-black/60 border border-white/10 rounded-xl p-3 flex flex-col gap-2">
                            <div className="text-[10px] text-cyan-400 font-mono">DATA_INGEST</div>
                            <div className="flex-1 flex items-end gap-1">
                                {[40, 60, 30, 80, 50].map((h, i) => (
                                    <div key={i} className="flex-1 bg-white/10 rounded-sm" style={{ height: `${h}%` }} />
                                ))}
                            </div>
                        </div>
                        <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-white/10" strokeWidth="1">
                            <path d="M 200 150 L 400 300" />
                        </svg>

                        {/* Bottom Right: Execution */}
                        <div className="absolute bottom-[15%] right-[10%] w-60 h-40 bg-black/60 border border-white/10 rounded-xl p-3">
                            <div className="flex justify-between mb-2">
                                <div className="text-[10px] text-green-400 font-mono">EXECUTION_NODE</div>
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            </div>
                            <div className="space-y-2 font-mono text-[9px] text-white/40">
                                <div>{'>'} init sequence_alpha</div>
                                <div>{'>'} verifying signals... OK</div>
                                <div className="text-white">{'>'} executing trade [BUY 0.5 BTC]</div>
                            </div>
                        </div>

                        {/* Floating Trading Chart (MockupDisplay type='trading' scaled down) */}
                        <div className="absolute top-[20%] right-[20%] w-[300px] opacity-80 scale-75 blur-[1px]">
                            <MockupDisplay type="trading" />
                        </div>

                        {/* Left Panel: System Health */}
                        <div className="absolute bottom-[20%] left-[15%] w-40 h-40 rounded-full border border-white/5 bg-white/5 flex items-center justify-center backdrop-blur-md">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">99.9%</div>
                                <div className="text-[10px] text-white/40 uppercase">Uptime</div>
                            </div>
                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
};
