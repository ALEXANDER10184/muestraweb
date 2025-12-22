"use client";
import { useScroll, MotionValue } from "framer-motion";
import { useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StickySceneProps {
    children: (props: { scrollYProgress: MotionValue<number> }) => ReactNode;
    className?: string;
    height?: string; // Default 'h-[200vh]' or similar to give scroll room
}

export const StickyScene = ({ children, className, height = "h-[200vh]" }: StickySceneProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <div ref={containerRef} className={cn("relative z-10 w-full", height, className)}>
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
                {children({ scrollYProgress })}
            </div>
        </div>
    );
};
