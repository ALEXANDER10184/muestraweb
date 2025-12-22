"use client";

interface AmbientLightProps {
    className?: string;
    color?: string;
}

export function AmbientLight({ className = "", color = "bg-blue-500" }: AmbientLightProps) {
    return (
        <div
            className={`fixed blur-[120px] opacity-20 pointer-events-none rounded-full ${color} ${className}`}
            aria-hidden="true"
        />
    );
}
