"use client";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    className?: string;
    noBlur?: boolean;
}

export const GlassCard = ({ children, className, noBlur = false, ...props }: GlassCardProps) => {
    return (
        <motion.div
            className={cn(
                "relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-xl",
                !noBlur && "backdrop-blur-xl saturate-150",
                className
            )}
            {...props}
        >
            {/* Subtle shine on top border */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />

            {children}
        </motion.div>
    );
};
