"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const ScrollIndicator = () => {
    return (
        <div className="relative w-full flex items-center justify-center py-12 md:py-16 overflow-hidden">
            {/* Connecting line - mejorado pero sutil */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-px h-32 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent" />
            </div>

            {/* Animated dots - ligeramente más visibles */}
            <div className="relative flex items-center gap-2 z-10">
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-cyan-400/60"
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 0.9, 0.5],
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

            {/* Chevron mejorado pero manteniendo sutileza */}
            <motion.div
                className="absolute bottom-4 flex items-center justify-center"
                animate={{
                    y: [0, 8, 0],
                    opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <ChevronDown className="w-6 h-6 text-cyan-400/50" />
            </motion.div>
        </div>
    );
};


