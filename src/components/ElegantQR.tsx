"use client";
import { QRCodeSVG } from "qrcode.react";
import { motion } from "framer-motion";

interface ElegantQRProps {
    url: string;
    size?: number;
    className?: string;
}

export const ElegantQR = ({ url, size = 200, className = "" }: ElegantQRProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={`relative inline-block ${className}`}
        >
            {/* Outer glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent blur-xl -z-10" />
            
            {/* Main container with glass effect */}
            <div className="relative p-6 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-2xl shadow-2xl">
                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-cyan-400/30 rounded-tl-3xl" />
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-cyan-400/30 rounded-tr-3xl" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-cyan-400/30 rounded-bl-3xl" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-cyan-400/30 rounded-br-3xl" />
                
                {/* QR Code */}
                <div className="relative bg-white p-4 rounded-2xl shadow-inner">
                    <QRCodeSVG
                        value={url}
                        size={size}
                        level="H"
                        includeMargin={false}
                        fgColor="#000000"
                        bgColor="#ffffff"
                    />
                    {/* Center logo overlay */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg">
                        <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded flex items-center justify-center">
                            <span className="text-white text-xs font-bold">MA</span>
                        </div>
                    </div>
                </div>
                
                {/* Bottom text */}
                <div className="mt-4 text-center">
                    <p className="text-xs font-mono text-white/40 tracking-wider uppercase">
                        Escanea para abrir
                    </p>
                    <p className="text-[10px] font-light text-white/30 mt-1 truncate max-w-[200px]">
                        {url.replace("https://", "")}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

