"use client";

import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";

export default function ProductCardPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-8 overflow-hidden bg-[#08080a]">
      
      {/* --- Background Decorative Glows --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-600/20 blur-[120px]" 
        />
        <motion.div 
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-600/15 blur-[120px]" 
        />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-emerald-500/10 blur-[100px]" />
      </div>

      {/* --- Page Content --- */}
      <section className="relative z-10 w-full max-w-7xl flex flex-col items-center gap-12">
        <ProductCard />
        
        <a 
          href="/" 
          className="text-white/30 hover:text-white text-xs transition-all duration-300 underline underline-offset-8 decoration-white/10 hover:decoration-white/50"
        >
          Back to Home
        </a>
      </section>

      <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </main>
  );
}