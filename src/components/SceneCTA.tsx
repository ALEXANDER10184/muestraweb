"use client";
import { motion } from "framer-motion";
import { CTAButton } from "./CTAButton";
import { siteConfig } from "@/config/site";
import Image from "next/image";

export const SceneCTA = () => {
    return (
        <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">

            {/* Background Glow */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                <div className="h-[500px] w-[500px] rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 blur-[150px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-3xl"
            >
                <h2 className="mb-8 text-4xl font-bold tracking-tight md:text-6xl text-white">
                    {siteConfig.ctaText.main}
                </h2>

                <div className="flex flex-col items-center gap-8">
                    {/* QR Code Container */}
                    <motion.div
                        className="p-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        <Image
                            src="/QRwhatsapp.png"
                            alt="WhatsApp QR"
                            width={140}
                            height={140}
                            className="rounded-xl opacity-90 transition-opacity hover:opacity-100"
                        />
                    </motion.div>

                    <div className="space-y-4">
                        <CTAButton href={siteConfig.whatsappUrl} text={siteConfig.ctaText.button} className="bg-white text-black hover:bg-cyan-50" />

                        <p className="text-sm text-white/40 font-light tracking-wide">
                            {siteConfig.ctaText.trust}
                        </p>
                    </div>
                </div>
            </motion.div>

            <footer className="absolute bottom-6 text-xs text-white/20">
                © {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.
            </footer>
        </section>
    );
};
