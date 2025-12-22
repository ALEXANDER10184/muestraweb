"use client";
import { motion } from "framer-motion";

export const SceneBridge = () => {
    return (
        <section className="relative flex h-[30vh] w-full items-center justify-center overflow-hidden px-6 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-4xl space-y-2"
            >
                <h2 className="text-3xl font-light text-white/90 md:text-5xl">
                    Todas parten de lo mismo.
                </h2>
                <h2 className="text-3xl font-bold md:text-5xl bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">
                    No todas llegan igual de lejos.
                </h2>
            </motion.div>
        </section>
    );
};
