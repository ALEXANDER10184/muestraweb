"use client";
import { motion, useTransform, MotionValue } from "framer-motion";
import { StickyScene } from "./StickyScene";

const states = [
    { title: "Detecta", desc: "Detecta patrones en tus datos.", color: "bg-blue-500" },
    { title: "Recuerda", desc: "Recuerda lo que importa.", color: "bg-indigo-500" },
    { title: "Sugiere", desc: "Sugiere el siguiente paso.", color: "bg-purple-500" },
    { title: "Actúa", desc: "Actúa de forma automática.", color: "bg-cyan-500" },
];

const StateItem = ({
    state,
    index,
    total,
    progress
}: {
    state: typeof states[0];
    index: number;
    total: number;
    progress: MotionValue<number>;
}) => {
    const step = 1 / total;
    const start = index * step;
    const end = start + step;

    const opacity = useTransform(
        progress,
        [start, start + 0.05, end - 0.05, end],
        [0.2, 1, 1, 0.2]
    );

    const x = useTransform(
        progress,
        [start, start + 0.05],
        [20, 0]
    );

    const isActiveColor = useTransform(
        progress,
        [start, start + 0.05, end - 0.05, end],
        ["#555", "#fff", "#fff", "#555"]
    );

    return (
        <motion.div
            style={{ opacity, x }}
            className="flex flex-col gap-2"
        >
            <motion.h3
                className="text-3xl font-bold md:text-5xl"
                style={{ color: isActiveColor }}
            >
                {state.title}
            </motion.h3>
            <p className="text-lg text-white/50">{state.desc}</p>
        </motion.div>
    );
};

const Content = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
    const coreScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 1]);
    const gradientColor = useTransform(
        scrollYProgress,
        [0, 0.33, 0.66, 1],
        ["#3b82f6", "#6366f1", "#a855f7", "#06b6d4"]
    );

    return (
        <div className="flex flex-col md:flex-row h-full w-full max-w-6xl items-center justify-between px-6 md:px-20 gap-10">
            {/* Left: Visual Abstract */}
            <div className="relative flex aspect-square w-full max-w-md items-center justify-center shrink-0">
                <motion.div
                    className="absolute h-full w-full rounded-full border border-white/5"
                    style={{ rotate }}
                >
                    <div className="absolute top-0 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-white/20 blur-sm" />
                </motion.div>

                <motion.div
                    className="absolute inset-0 rounded-full opacity-30 blur-[80px]"
                    style={{ backgroundColor: gradientColor }}
                />

                <motion.div
                    className="relative z-10 h-32 w-32 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.1)]"
                    style={{ scale: coreScale }}
                />
            </div>

            {/* Right: Text Steps */}
            <div className="flex flex-col gap-12 w-full">
                {states.map((state, i) => (
                    <StateItem
                        key={state.title}
                        state={state}
                        index={i}
                        total={states.length}
                        progress={scrollYProgress}
                    />
                ))}
            </div>
        </div>
    );
};

export const SceneStates = () => {
    return (
        <StickyScene height="h-[240vh]" className="bg-black/20">
            {({ scrollYProgress }) => <Content scrollYProgress={scrollYProgress} />}
        </StickyScene>
    );
};
