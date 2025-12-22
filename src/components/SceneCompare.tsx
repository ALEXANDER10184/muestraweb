"use client";
import { motion, useTransform, MotionValue } from "framer-motion";
import { StickyScene } from "./StickyScene";
import { GlassCard } from "./GlassCard";

const Content = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
    const opacityRigid = useTransform(scrollYProgress, [0, 0.45, 0.5], [1, 1, 0]);
    const scaleRigid = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
    const blurRigid = useTransform(scrollYProgress, [0.4, 0.5], ["0px", "10px"]);

    const opacityAlive = useTransform(scrollYProgress, [0.45, 0.55, 1], [0, 1, 1]);
    const scaleAlive = useTransform(scrollYProgress, [0.45, 0.55], [1.1, 1]);
    const yAlive = useTransform(scrollYProgress, [0.45, 0.55], [50, 0]);

    return (
        <div className="relative flex h-full w-full items-center justify-center p-6">
            {/* Rigid State */}
            <motion.div
                style={{ opacity: opacityRigid, scale: scaleRigid, filter: `blur(${blurRigid})` }}
                className="absolute flex flex-col items-center gap-6 text-center"
            >
                <div className="h-64 w-64 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center grayscale opacity-50">
                    <div className="grid grid-cols-2 gap-2">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="h-12 w-12 rounded bg-white/10" />
                        ))}
                    </div>
                </div>
                <h3 className="text-3xl font-semibold text-white/50">Lo común reacciona.</h3>
                <p className="text-white/30">Hojas de cálculo. Dashboards estáticos.</p>
            </motion.div>

            {/* Alive State */}
            <motion.div
                style={{ opacity: opacityAlive, scale: scaleAlive, y: yAlive }}
                className="absolute flex flex-col items-center gap-6 text-center z-10"
            >
                <GlassCard className="h-64 w-64 flex items-center justify-center bg-gradient-to-tr from-cyan-900/20 to-blue-900/20">
                    <div className="relative h-24 w-24 rounded-full bg-cyan-500/20 blur-md animate-pulse">
                        <div className="absolute inset-0 rounded-full bg-cyan-400/40 blur-sm" />
                    </div>
                </GlassCard>
                <h3 className="text-4xl font-bold text-white shadow-cyan-500/50 drop-shadow-lg">Esto anticipa.</h3>
                <p className="text-cyan-100/70">Sistemas vivos que aprenden.</p>
            </motion.div>
        </div>
    );
};

export const SceneCompare = () => {
    return (
        <StickyScene height="h-[150vh]">
            {({ scrollYProgress }) => <Content scrollYProgress={scrollYProgress} />}
        </StickyScene>
    );
};
