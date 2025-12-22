"use client";
import { motion, useTransform, MotionValue } from "framer-motion";
import { StickyScene } from "./StickyScene";
import { GlassCard } from "./GlassCard";
import Image from "next/image";

const ConceptCard = ({
    text,
    x,
    y,
    progress,
    speed,
    desc
}: {
    text: string;
    x: number;
    y: number;
    progress: MotionValue<number>;
    speed: number;
    desc?: string;
}) => {
    const translateY = useTransform(progress, [0, 1], [0, -100 * speed]);
    const opacity = useTransform(progress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <motion.div
            style={{
                left: `${50 + x}%`,
                top: `${50 + y}%`,
                y: translateY,
                opacity,
                position: 'absolute',
                translateX: '-50%',
                translateY: '-50%',
            }}
            className="z-10"
        >
            <GlassCard className="px-8 py-4 backdrop-blur-2xl flex flex-col items-center gap-1">
                <span className="text-xl font-light tracking-wide text-white/90">{text}</span>
                {desc && <span className="text-xs text-white/50">{desc}</span>}
            </GlassCard>
        </motion.div>
    );
};

const Content = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
    const titleOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]);
    const titleScale = useTransform(scrollYProgress, [0.1, 0.5], [0.8, 1]);
    const bgOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 0.5, 0.5, 0.3]);

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

            <div className="absolute inset-0 flex items-center justify-center z-0">
                <div className="h-[40vh] w-[40vh] rounded-full bg-cyan-900/10 blur-[100px]" />
            </div>

            <ConceptCard text="Memoria" desc="Recordar cada interacción." x={-25} y={-20} progress={scrollYProgress} speed={1.2} />
            <ConceptCard text="Contexto" desc="Entender el pasado." x={25} y={-15} progress={scrollYProgress} speed={0.9} />

            <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                style={{
                    opacity: titleOpacity,
                    scale: titleScale
                }}
            >
                <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 text-center">
                    Sistemas<br />Cognitivos
                </h2>
            </motion.div>

            <ConceptCard text="Señales" desc="Datos en tiempo real." x={-20} y={20} progress={scrollYProgress} speed={1.1} />
            <ConceptCard text="Criterio" desc="Decisiones informadas." x={30} y={15} progress={scrollYProgress} speed={1.3} />
            <ConceptCard text="Automatización" desc="Sin fricción manual." x={0} y={35} progress={scrollYProgress} speed={0.8} />
        </div>
    );
};

export const SceneConcepts = () => {
    return (
        <StickyScene height="h-[350vh]" className="relative">
            {({ scrollYProgress }) => <Content scrollYProgress={scrollYProgress} />}
        </StickyScene>
    );
};
