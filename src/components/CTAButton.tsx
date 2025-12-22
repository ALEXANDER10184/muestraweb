"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
    href: string;
    text: string;
    className?: string;
}

export const CTAButton = ({ href, text, className }: CTAButtonProps) => {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                "group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-3.5 text-black font-semibold transition-all hover:scale-105 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black",
                className
            )}
            whileTap={{ scale: 0.98 }}
        >
            <span className="relative z-10">{text}</span>
            <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />

            {/* Glow effect on hover */}
            <div className="absolute inset-0 -z-10 translate-y-[100%] bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-20" />
        </motion.a>
    );
};
