import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from './LucideIcon';

interface HeroProps {
  onOpenConsultation: () => void;
  onViewProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onViewProjects }) => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-32 pb-24 flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial-glow opacity-80" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Futuristic floating backlighting blobs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/10 w-[450px] h-[450px] rounded-full bg-purple-600/8 blur-3xl animate-pulse-slow lg:delay-1000" />
      <div className="absolute top-2/3 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-indigo-600/5 blur-3xl animate-pulse-slow lg:delay-2000" />

      {/* Main Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="space-y-8 max-w-4xl mx-auto">
          {/* Micro Leader */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bento-highlight-badge shadow-inner"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[11px] tracking-wider text-zinc-300 font-medium uppercase">
              Now Accepting Enterprise Contracts for Q3 2026
            </span>
          </motion.div>

          {/* High-Impact Hero Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-[76px] font-bold tracking-tighter leading-[1.05] bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent"
          >
            We Build Scalable <br />
            <span className="brand-text-gradient font-black">Digital Products</span> <br />
            &amp; AI Solutions.
          </motion.h1>

          {/* Engaging Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-base sm:text-xl text-white/50 leading-relaxed font-normal"
          >
            WrotX is a premium software agency for startups and enterprise leaders. We engineer resilient custom web platforms, native mobile systems, and high-throughput AI agent architectures.
          </motion.p>

          {/* Dynamic CTA cluster */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <button
              id="hero_cta_book_call"
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-8 py-4 bg-white text-black text-sm font-bold rounded-full hover:bg-white/90 transition-colors shadow-lg shadow-indigo-500/10 flex items-center justify-center space-x-2.5 active:scale-97 cursor-pointer"
            >
              <span>Book a Call</span>
              <LucideIcon 
                name="ArrowRight" 
                size={15} 
                className="group-hover:translate-x-1 transition-transform" 
              />
            </button>

            <button
              id="hero_cta_view_projects"
              onClick={onViewProjects}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white text-sm font-bold rounded-full hover:bg-white/10 border border-white/10 active:scale-97 transition-colors flex items-center justify-center space-x-2 cursor-pointer"
            >
              <LucideIcon name="Layers" size={15} className="text-zinc-500" />
              <span>View Real-world Projects</span>
            </button>
          </motion.div>

          {/* Elite Trust Metrics Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-12 border-t border-white/10 grid grid-cols-3 gap-6 max-w-2xl mx-auto font-sans"
          >
            <div>
              <p className="font-bold text-2xl sm:text-3xl text-white">99.9%</p>
              <p className="text-xs text-white/50">Service SLA Accel</p>
            </div>
            <div className="border-x border-white/10 px-4">
              <p className="font-bold text-2xl sm:text-3xl text-white">100%</p>
              <p className="text-xs text-white/50">IP Code Ownership</p>
            </div>
            <div>
              <p className="font-bold text-2xl sm:text-3xl text-white">&lt;600ms</p>
              <p className="text-xs text-white/50">AI Latency Targets</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
