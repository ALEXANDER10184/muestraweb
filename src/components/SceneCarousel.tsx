"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "@/config/site";
import { MockupDisplay } from "./MockupDisplay";

const SectorItem = ({ item }: { item: typeof siteConfig.sectorCarousel[0] }) => {
    return (
        <div className="relative h-[60vh] w-[80vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0 flex flex-col gap-6 p-6 md:p-10 rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-2xl mx-4">
            <div className="space-y-2">
                <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
                    {item.title}
                </h3>
                <p className="text-lg text-white/60">
                    {item.description}
                </p>
            </div>

            <div className="flex-1 flex items-center justify-start gap-4 overflow-hidden mask-fade-right">
                {/* Visual representation of multiple screens in a row */}
                <div className="flex gap-4 h-full py-2">
                    {item.screens.map((s) => (
                        <div key={s} className="h-full aspect-[9/16] rounded-xl border border-white/10 bg-black/40 overflow-hidden relative shadow-lg group">
                            {/* Visual Component */}
                            <div className="absolute inset-0">
                                <MockupDisplay
                                    type={s}
                                    className="w-full h-full max-w-none aspect-auto shadow-none !bg-transparent pointer-events-none transform scale-[1.05]"
                                />
                            </div>

                            {/* Label overlay on hover or always visible subtly */}
                            <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/80 to-transparent flex items-end p-3">
                                <span className="text-[10px] text-white/60 uppercase font-mono tracking-wider">{s.replace('_', ' ')}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const SceneCarousel = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Horizontal scroll calculation
    // We want to scroll a width proportional to the number of items
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        <section ref={targetRef} className="relative h-[400vh] bg-zinc-950/50">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />

                <motion.div style={{ x }} className="flex gap-8 px-[10vw]">
                    {siteConfig.sectorCarousel.map((item, i) => (
                        <SectorItem key={item.id} item={item} />
                    ))}
                    {/* Extra padding/slide at end */}
                    <div className="w-[10vw] flex-shrink-0" />
                </motion.div>

                <div className="absolute left-10 bottom-10 z-20 hidden md:block">
                    <span className="text-xs text-white/30 tracking-[0.2em] font-light">SECTORES</span>
                </div>
            </div>
        </section>
    );
};
