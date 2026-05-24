import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { statsData } from '../data';
import { LucideIcon } from './LucideIcon';

export const Stats: React.FC = () => {
  // Simple count-up effect simulator for professional visualization
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    const duration = 1200; // ms
    const frameRate = 1000 / 60; // 60 FPS
    const totalFrames = duration / frameRate;

    const startCounter = () => {
      let frame = 0;
      const interval = setInterval(() => {
        frame++;
        const newCounts = statsData.map((stat) => {
          const progress = frame / totalFrames;
          const currentVal = Math.round(stat.value * progress);
          return currentVal > stat.value ? stat.value : currentVal;
        });

        setCounts(newCounts);
        if (frame >= totalFrames) clearInterval(interval);
      }, frameRate);

      return () => clearInterval(interval);
    };

    // Simple delay intersection-trigger imitation or auto runtime
    const timeout = setTimeout(startCounter, 400);
    return () => clearTimeout(timeout);
  }, []);

  // Visual custom sparklines for stats widgets
  const renderSparkline = (index: number) => {
    const sparks = [
      'M 0,30 Q 30,12 60,32 T 120,8 T 180,24', // Completed
      'M 0,20 Q 40,32 80,10 T 140,24 T 180,8',  // Happy Clients
      'M 0,25 Q 30,8 Q 80,36 T 150,14 T 180,18', // Technologies
      'M 0,35 Q 25,10 T 75,34 T 135,15 T 180,5'   // AI Delivered
    ];
    const colors = [
      'rgba(59, 130, 246, 0.4)',  // Blue
      'rgba(16, 185, 129, 0.4)',  // Emerald
      'rgba(139, 92, 246, 0.4)', // Violet
      'rgba(244, 114, 182, 0.4)'  // Pink
    ];

    return (
      <svg className="h-10 w-full absolute bottom-0 left-0" viewBox="0 0 180 40">
        <path 
          d={sparks[index]} 
          fill="none" 
          stroke={colors[index]} 
          strokeWidth="2" 
          strokeLinecap="round"
        />
      </svg>
    );
  };

  return (
    <section 
      id="stats_dashboard" 
      className="relative py-20 bg-[#050505] border-y border-white/10 overflow-hidden"
    >
      {/* Background glow grids */}
      <div className="absolute inset-0 bg-radial-glow opacity-25 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, i) => {
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bento-card p-6 rounded-3xl relative overflow-hidden group select-none min-h-[160px] flex flex-col justify-between"
              >
                {/* Visual Top Bar Icon descriptor */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase font-black">
                    METRIC UNIT WXT.0{i+1}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white/4 border border-white/5 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                    <LucideIcon name={stat.iconName} size={15} />
                  </div>
                </div>

                {/* Big Metric Display */}
                <div>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-mono">
                      {counts[i]}
                    </span>
                    <span className="text-2xl font-black brand-text-gradient font-mono">
                      {stat.suffix}
                    </span>
                  </div>

                  <p className="text-zinc-400 text-xs mt-1.5 font-sans leading-normal pr-4">
                    {stat.label}
                  </p>
                </div>

                {/* Micro Sparkline details */}
                <div className="h-10 w-full relative -mx-6 mt-1 overflow-hidden opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  {renderSparkline(i)}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
