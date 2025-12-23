"use client";
import { motion, useTransform, MotionValue } from "framer-motion";
import { StickyScene } from "./StickyScene";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { Cpu, Workflow } from "lucide-react";

const AuthorityVisual = ({ type }: { type: string }) => {
    switch (type) {
        case "diagram":
            return (
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 backdrop-blur-md">
                    <Workflow className="w-16 h-16 text-cyan-500 opacity-80" />
                </div>
            );
        case "code":
            return (
                <div className="w-48 h-32 md:w-64 md:h-40 rounded-xl bg-black/80 border border-white/10 p-4 mb-8 font-mono text-xs text-green-400 opacity-80 overflow-hidden">
                    <div>const system = new Core();</div>
                    <div className="pl-4">system.optimize();</div>
                    <div className="pl-4">return result;</div>
                    <div className="animate-pulse">_</div>
                </div>
            );
        case "chip":
            return (
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl bg-zinc-900 border-2 border-cyan-500/20 flex items-center justify-center mb-8 relative">
                    <Cpu className="w-16 h-16 text-cyan-400" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/10 animate-pulse rounded-xl" />
                </div>
            );
        default:
            return null;
    }
}

const Phrase = ({
    item,
    index,
    total,
    progress
}: {
    item: { text: string; visual: string };
    index: number;
    total: number;
    progress: MotionValue<number>;
}) => {
    const step = 1 / total;
    const start = index * step;
    const end = start + step;

    const opacity = useTransform(
        progress,
        [start, start + (step * 0.2), end - (step * 0.2), end],
        [0, 1, 1, 0]
    );

    const blur = useTransform(
        progress,
        [start, start + (step * 0.2), end - (step * 0.2), end],
        ["10px", "0px", "0px", "10px"]
    );

    const scale = useTransform(progress, [start, end], [0.9, 1.1]);

    return (
        <motion.div
            style={{ opacity, filter: `blur(${blur})`, scale }}
            className="absolute flex flex-col items-center justify-center max-w-4xl px-6 text-center"
        >
            <AuthorityVisual type={item.visual} />
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-6xl text-white drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]">
                {item.text}
            </h2>
        </motion.div>
    );
};

const AuthorityContent = ({ progress }: { progress: MotionValue<number> }) => {
    const bgOpacity = useTransform(progress, [0, 0.3, 0.7, 1], [0.3, 0.5, 0.5, 0.3]);
    const phrases = siteConfig.authorityPhrases;

    return (
        <div className="relative flex h-full w-full items-center justify-center">
            {/* Background Image */}
            <motion.div
                style={{ opacity: bgOpacity }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"
                    alt="Technology background"
                    fill
                    className="object-cover"
                    quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
            </motion.div>

            {phrases.map((phrase, i: number) => (
                <Phrase
                    key={i}
                    item={phrase}
                    index={i}
                    total={phrases.length}
                    progress={progress}
                />
            ))}
        </div>
    );
};

export const SceneAuthority = () => {
    return (
        <StickyScene height="h-[220vh]">
            {({ scrollYProgress }) => <AuthorityContent progress={scrollYProgress} />}
        </StickyScene>
    );
};
