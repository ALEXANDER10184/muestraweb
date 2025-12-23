"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const ScrollIndicator = () => {
    return (
        <div className="relative w-full flex items-center justify-center py-12 md:py-16 overflow-hidden">
            {/* Subtle connecting line */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-px h-32 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
            </div>

            {/* Animated dots */}
            <div className="relative flex items-center gap-2 z-10">
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-cyan-400/40"
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.4, 0.8, 0.4],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* Subtle chevron */}
            <motion.div
                className="absolute bottom-4 flex items-center justify-center"
                animate={{
                    y: [0, 8, 0],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <ChevronDown className="w-5 h-5 text-cyan-400/30" />
            </motion.div>
        </div>
    );
};

