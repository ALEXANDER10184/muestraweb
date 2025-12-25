"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { siteConfig } from "@/config/site";
import { MockupDisplay } from "./MockupDisplay";

const SectorItem = ({ item }: { item: typeof siteConfig.sectorCarousel[0] }) => {
    return (
        <div className="relative h-[500px] w-[350px] md:w-[450px] flex-shrink-0 flex flex-col gap-6 p-6 rounded-3xl border border-white/5 bg-gradient-to-br from-zinc-900/50 to-black/50 backdrop-blur-md hover:border-white/10 transition-colors mx-4 group select-none">
            <div className="space-y-2 relative z-10">
                <span className="text-xs font-mono text-cyan-500/50 uppercase tracking-widest">{item.id}</span>
                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                    {item.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                    {item.description}
                </p>
            </div>

            <div className="flex-1 overflow-hidden relative rounded-xl border border-white/5 bg-black/20">
                {/* Visual representation of multiple screens in a row */}
                <div className="absolute inset-0 flex items-center gap-3 px-3 overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                    {item.screens.map((s, i) => (
                        <div key={s}
                            className="h-[70%] aspect-[9/16] rounded-lg border border-white/10 bg-zinc-900 overflow-hidden relative shadow-lg transform transition-transform duration-500 hover:scale-110 hover:z-10 hover:border-white/20"
                            style={{
                                transform: `translateY(${i % 2 === 0 ? '0' : '15%'}) rotate(${i % 2 === 0 ? '-2deg' : '2deg'})`,
                            }}
                        >
                            <div className="absolute inset-0 pointer-events-none">
                                <MockupDisplay
                                    type={s}
                                    className="w-full h-full shadow-none !bg-transparent scale-[1.2]"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent pointer-events-none" />
            </div>
        </div>
    );
};

export const SceneCarousel = () => {
    const [width, setWidth] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const controls = useAnimation();
    const x = useMotionValue(0);

    useEffect(() => {
        if (carouselRef.current) {
            setWidth(carouselRef.current.scrollWidth / 2); // Divide by 2 because we duplicate items
        }
    }, []);

    useEffect(() => {
        const startAnimation = async () => {
            if (width === 0) return;
            // Start from 0 and go to -width
            await controls.start({
                x: -width,
                transition: {
                    duration: 40, // Adjust speed here (seconds for full loop)
                    ease: "linear",
                    repeat: Infinity,
                }
            });
        };
        startAnimation();
    }, [width, controls]);

    // Duplicate items for infinite loop illusion
    const items = [...siteConfig.sectorCarousel, ...siteConfig.sectorCarousel];

    return (
        <section className="relative w-full py-24 overflow-hidden flex flex-col gap-10 bg-zinc-950/30 border-y border-white/5">
            <div className="px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-end gap-6">
                <div className="max-w-xl">
                    <span className="text-sm font-mono text-cyan-500 uppercase tracking-widest mb-4 block">Especialización</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Sectores Dominados
                    </h2>
                    <p className="text-lg text-white/50">
                        Adaptaciones específicas que entienden el lenguaje de tu negocio.
                        Desliza y encuentra tu industria.
                    </p>
                </div>
                {/* Optional: Navigation arrows could go here if it was a manual slider */}
            </div>

            <div
                className="w-full overflow-hidden"
                ref={carouselRef}
                onMouseEnter={() => controls.stop()}
                onMouseLeave={() => {
                    // We need to resume from current position to target, but simple 'start' resets.
                    // Ideally we use a more complex hook, but for now restarting the full animation logic is tricky with framer motion simple loop.
                    // A simpler approach for resume is just restarting the loop seamlessly or accepting the reset.
                    // For a perfect resume, we'd need useAnimationFrame. 
                    // Let's rely on CSS animation or a simpler Framer setup?
                    // Actually, let's keep it simple: Infinite slow scroll, pause on hover.
                    // If Framer Motion 'stop' halts it, 'start' might restart. 
                    // To avoid complexity of resume logic in this context, let's try a CSS marquee override or just accept the pause.

                    // Re-triggering the animation calculation:
                    const currentX = x.get(); // We aren't tracking x in state, controls handles it.
                    // Simple restart
                    controls.start({
                        x: -width,
                        transition: { duration: 40, ease: "linear", repeat: Infinity, from: 0 } // This will jump.
                    });
                    // Let's ignore pause functionality for now to avoid jumpiness/complexity, or just use CSS.
                    // Actually, marquee without pause is often annoying. 
                    // Let's use a simple CSS class approach for the marquee?
                }}
            >
                {/* We will use a CSS-based marquee because it handles pause-on-hover naturally and smoothly */}
                <div className="flex w-max animate-marquee hover:[animation-play-state:paused] hover:cursor-grab active:cursor-grabbing">
                    {items.map((item, index) => (
                        <SectorItem key={`${item.id}-${index}`} item={item} />
                    ))}
                </div>
            </div>

            <style jsx global>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 60s linear infinite;
                }
            `}</style>
        </section>
    );
};
