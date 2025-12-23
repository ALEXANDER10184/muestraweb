"use client";
import { motion, useTransform, MotionValue } from "framer-motion";
import { StickyScene } from "./StickyScene";
import { GlassCard } from "./GlassCard";
import Image from "next/image";
import { Brain, Network, Zap, Target, Cpu } from "lucide-react";
import { LucideIcon } from "lucide-react";

const conceptIcons: Record<string, LucideIcon> = {
    "Memoria": Brain,
    "Contexto": Network,
    "Señales": Zap,
    "Criterio": Target,
    "Automatización": Cpu,
};

const ConceptCard = ({
    text,
    x,
    y,
    progress,
    speed,
    desc,
    icon: Icon
}: {
    text: string;
    x: number;
    y: number;
    progress: MotionValue<number>;
    speed: number;
    desc?: string;
    icon?: LucideIcon;
}) => {
    const translateY = useTransform(progress, [0, 1], [0, -100 * speed]);
    const opacity = useTransform(progress, [0, 0.05, 0.9, 1], [0, 1, 1, 0]);
    const scale = useTransform(progress, [0, 0.1, 0.85, 1], [0.8, 1, 1, 0.9]);
    const rotate = useTransform(progress, [0, 1], [0, 360 * speed * 0.1]);

    return (
        <motion.div
            style={{
                left: `${50 + x}%`,
                top: `${50 + y}%`,
                y: translateY,
                opacity,
                scale,
                position: 'absolute',
                translateX: '-50%',
                translateY: '-50%',
            }}
            className="z-10"
        >
            <GlassCard className="px-6 py-5 backdrop-blur-2xl flex flex-col items-center gap-3 min-w-[180px] group hover:border-white/20 transition-all duration-500">
                {Icon && (
                    <motion.div
                        style={{ rotate }}
                        className="relative"
                    >
                        <Icon className="w-8 h-8 text-cyan-400/80 group-hover:text-cyan-300 transition-colors" />
                        <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                )}
                <div className="flex flex-col items-center gap-1">
                    <span className="text-lg font-semibold tracking-wide text-white/95">{text}</span>
                    {desc && <span className="text-xs text-white/50 text-center max-w-[140px]">{desc}</span>}
                </div>
            </GlassCard>
        </motion.div>
    );
};

const ConnectionLine = ({
    x1, y1, x2, y2,
    progress
}: {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    progress: MotionValue<number>;
}) => {
    const dashOffset = useTransform(progress, [0.05, 0.3, 0.9], [20, 0, 0]);
    const opacity = useTransform(progress, [0.05, 0.15, 0.85, 0.95], [0, 0.3, 0.3, 0]);

    return (
        <motion.svg
            className="absolute inset-0 w-full h-full pointer-events-none z-5"
            style={{ opacity }}
        >
            <motion.line
                x1={`${50 + x1}%`}
                y1={`${50 + y1}%`}
                x2={`${50 + x2}%`}
                y2={`${50 + y2}%`}
                stroke="rgba(6, 182, 212, 0.2)"
                strokeWidth="1"
                strokeDasharray="4 4"
                style={{
                    strokeDashoffset: dashOffset,
                }}
            />
        </motion.svg>
    );
};

const Content = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
    const titleOpacity = useTransform(scrollYProgress, [0, 0.1, 0.85, 0.95], [0, 1, 1, 0]);
    const titleScale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
    const bgOpacity = useTransform(scrollYProgress, [0, 0.1, 0.85, 1], [0.3, 0.5, 0.5, 0.3]);
    const corePulse = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const coreRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

    return (
        <div className="relative h-full w-full max-w-7xl">
            {/* Background Image */}
            <motion.div
                style={{ opacity: bgOpacity }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80"
                    alt="Technology background"
                    fill
                    className="object-cover"
                    quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
            </motion.div>

            {/* Ambient glow */}
            <div className="absolute inset-0 flex items-center justify-center z-0">
                <motion.div 
                    className="h-[40vh] w-[40vh] rounded-full bg-cyan-900/10 blur-[100px]"
                    style={{ scale: corePulse }}
                />
            </div>

            {/* Connection lines */}
            <ConnectionLine x1={-25} y1={-20} x2={0} y2={0} progress={scrollYProgress} />
            <ConnectionLine x1={25} y1={-15} x2={0} y2={0} progress={scrollYProgress} />
            <ConnectionLine x1={-20} y1={20} x2={0} y2={0} progress={scrollYProgress} />
            <ConnectionLine x1={30} y1={15} x2={0} y2={0} progress={scrollYProgress} />
            <ConnectionLine x1={0} y1={35} x2={0} y2={0} progress={scrollYProgress} />

            {/* Central Core */}
            <motion.div
                className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 z-30"
                style={{
                    opacity: titleOpacity,
                    scale: titleScale,
                }}
            >
                <div className="relative flex items-center justify-center">
                    {/* Rotating rings */}
                    <motion.div
                        style={{ rotate: coreRotate }}
                        className="absolute w-32 h-32 md:w-40 md:h-40 border border-cyan-500/20 rounded-full"
                    />
                    <motion.div
                        style={{ rotate: useTransform(coreRotate, (v) => -v * 0.7) }}
                        className="absolute w-24 h-24 md:w-32 md:h-32 border border-cyan-400/15 rounded-full"
                    />
                    
                    {/* Central title */}
                    <div className="relative z-20">
                        <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)] text-center">
                            Sistemas<br />Cognitivos
                        </h2>
                    </div>

                    {/* Pulse effect */}
                    <motion.div
                        className="absolute inset-0 rounded-full bg-cyan-500/5"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </motion.div>

            {/* Concept Cards */}
            <ConceptCard text="Memoria" desc="Recordar cada interacción." x={-25} y={-20} progress={scrollYProgress} speed={1.2} icon={conceptIcons["Memoria"]} />
            <ConceptCard text="Contexto" desc="Entender el pasado." x={25} y={-15} progress={scrollYProgress} speed={0.9} icon={conceptIcons["Contexto"]} />
            <ConceptCard text="Señales" desc="Datos en tiempo real." x={-20} y={20} progress={scrollYProgress} speed={1.1} icon={conceptIcons["Señales"]} />
            <ConceptCard text="Criterio" desc="Decisiones informadas." x={35} y={18} progress={scrollYProgress} speed={1.3} icon={conceptIcons["Criterio"]} />
            <ConceptCard text="Automatización" desc="Sin fricción manual." x={0} y={35} progress={scrollYProgress} speed={0.8} icon={conceptIcons["Automatización"]} />
        </div>
    );
};

export const SceneConcepts = () => {
    return (
        <StickyScene height="h-[260vh]" className="relative">
            {({ scrollYProgress }) => <Content scrollYProgress={scrollYProgress} />}
        </StickyScene>
    );
};
