"use client";
import { Hero } from "@/components/Hero";
import { SceneConcepts } from "@/components/SceneConcepts";
import { SceneGrid } from "@/components/SceneGrid";
import { SceneCarousel } from "@/components/SceneCarousel";
import { SceneBridge } from "@/components/SceneBridge";
import { SceneWorkbench } from "@/components/SceneWorkbench";
import { SceneAuthority } from "@/components/SceneAuthority";
import { SceneCTA } from "@/components/SceneCTA";
import { AmbientLight } from "@/components/AmbientLight";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-x-hidden pt-0 scroll-smooth bg-background">
      {/* Visual noise overlay provided by globals.css */}
      <div className="noise" />

      {/* Ambient backgrounds */}
      <AmbientLight color="bg-blue-600" className="top-[-10%] left-[-20%] w-[80vw] h-[80vw] opacity-10" />
      <AmbientLight color="bg-cyan-900" className="top-[40%] right-[-20%] w-[60vw] h-[60vw] opacity-10" />
      <AmbientLight color="bg-indigo-900" className="bottom-[-10%] left-[-10%] w-[70vw] h-[70vw] opacity-10" />

      {/* SCENE 1: Authority Silent */}
      <Hero />

      {/* SCENE 2: Concepts */}
      <SceneConcepts />
      <ScrollIndicator />

      {/* SCENE 3: Grid of Mini Solutions (Interactive, concrete) */}
      <SceneGrid />
      <ScrollIndicator />

      {/* SCENE 4: Horizontal Sector Carousel (Specialization) */}
      <SceneCarousel />
      <ScrollIndicator />

      {/* SCENE 5: Mental Bridge */}
      <SceneBridge />
      <ScrollIndicator />

      {/* SCENE 6: Technical Ceiling (Workbench) */}
      <SceneWorkbench />
      <ScrollIndicator />

      {/* SCENE 7: Authority */}
      <SceneAuthority />
      <ScrollIndicator />

      {/* SCENE 8: Final CTA */}
      <SceneCTA />

      {/* Signature flotante sutil */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.5 }}
        className="fixed bottom-8 left-8 z-50 pointer-events-none hidden md:block"
      >
        <div className="flex flex-col gap-1 items-start">
          <div className="text-[11px] text-white/20 font-light tracking-[0.15em] uppercase">
            Alexander Acero
          </div>
          <div className="text-[9px] text-white/15 font-mono tracking-widest">
            Programador
          </div>
        </div>
      </motion.div>
    </main>
  );
}
