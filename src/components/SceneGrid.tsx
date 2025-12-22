"use client";
import { motion } from "framer-motion";
import { MockupDisplay } from "./MockupDisplay";
import { siteConfig } from "@/config/site";

const GridCard = ({ item }: { item: typeof siteConfig.gridItems[0] }) => {
    return (
        <motion.div
            className="group relative flex flex-col rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent p-1 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-white/10 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {/* Phone-like Container */}
            {/* Phone-like Container */}
            <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[2rem] bg-black ring-[6px] ring-zinc-800/80 shadow-[0_0_0_7px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(0,0,0,1)] group">

                {/* Reflective Screen Layer */}
                <div className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-50 rounded-[inherit]" />

                {/* Notch / Status Bar Area */}
                <div className="absolute top-0 inset-x-0 h-7 z-20 flex justify-center items-start pt-2 pointer-events-none">
                    <div className="w-20 h-5 bg-black rounded-b-xl flex items-center justify-center gap-2">
                        <div className="w-8 h-1 bg-zinc-800 rounded-full opacity-50" />
                        <div className="w-1 h-1 bg-blue-900/50 rounded-full" />
                    </div>
                </div>

                {/* Parallax Content Container */}
                <div className="w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                    <MockupDisplay type={item.type} className="w-full h-full shadow-none !bg-transparent" />
                </div>
            </div>

            <div className="px-3 py-3 text-center">
                <h3 className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                    {item.title}
                </h3>
            </div>
        </motion.div>
    );
};

export const SceneGrid = () => {
    return (
        <section className="relative z-10 w-full min-h-screen py-24 px-6 md:px-12 flex flex-col items-center justify-center bg-background/50">
            <div className="mb-16 text-center max-w-2xl mx-auto">
                <span className="text-sm font-mono text-cyan-400 uppercase tracking-widest mb-4 block">Soluciones Concretas</span>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Sistemas que funcionan
                </h2>
                <p className="text-lg text-white/50">
                    Desde gestión diaria hasta operaciones críticas.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 w-full max-w-7xl mx-auto">
                {siteConfig.gridItems.map((item, i) => (
                    <GridCard key={i} item={item} />
                ))}
            </div>
        </section>
    );
};
