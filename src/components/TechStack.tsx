import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { techStackData } from '../data';
import { LucideIcon } from './LucideIcon';

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'database' | 'cloud' | 'ai'>('all');
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Complete Ecosystem' },
    { id: 'frontend', label: 'Frontend Engine' },
    { id: 'backend', label: 'Backend API' },
    { id: 'database', label: 'Datastores' },
    { id: 'cloud', label: 'Cloud Infrastructure' },
    { id: 'ai', label: 'Artificial Intelligence' }
  ];

  const filteredTech = techStackData.filter(tech => {
    if (activeCategory === 'all') return true;
    return tech.category === activeCategory;
  });

  // Unique details about why we use these technologies
  const techDetails: Record<string, { purpose: string; stat: string }> = {
    'React': { purpose: 'Modular, fast state management for advanced interactive customer systems.', stat: 'V19 Standard' },
    'Next.js': { purpose: 'Server-side rendering, routing logic, and Edge-optimizations for perfect SEO.', stat: 'V15 App Router' },
    'Node.js': { purpose: 'Sustained event-loops and real-time socket processing with extreme performance.', stat: 'Core V22 Runtime' },
    'Express': { purpose: 'Sleek, time-tested API pathways, middleware management, and REST setups.', stat: 'Sub-1ms Latency' },
    'MongoDB': { purpose: 'Frictionless document layouts storing highly variable JSON records and metadata.', stat: 'Unstructured Data' },
    'PostgreSQL': { purpose: 'Acid compliant transactional database storage for complex business workflows.', stat: 'Perfect Relational Integrity' },
    'Firebase': { purpose: 'Rapid real-time synchronization, serverless execution pipelines, and security layers.', stat: 'Live Document Synced' },
    'Docker': { purpose: 'Immutably bundled runtime container assemblies ensuring consistent cross-node boots.', stat: 'Container Deployment Standard' },
    'AWS': { purpose: 'Infinite computational, serverless, and content-delivery pathways matching peak traffic.', stat: '99.999% Service SLA' },
    'Tailwind CSS': { purpose: 'Atomic utility styling ensuring lightning-fast loads with zero redundant CSS codes.', stat: 'V4 Engine Accel' },
    'TypeScript': { purpose: 'Strong compile-time checks, ensuring zero runtime null crashes.', stat: '100% Strict Safety Type' },
    'OpenAI APIs': { purpose: 'High level agent reasoning, detailed content structuring, and summarizations.', stat: 'GPT-4o Engine Integration' },
    'Gemini APIs': { purpose: 'Extremely cost-efficient, ultra high context lengths, and real-time live voice pipelines.', stat: 'Gemini 1.5 Pro & Pro-Flash' }
  };

  return (
    <section 
      id="tech-stack" 
      className="relative py-28 bg-[#050505]"
    >
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-blue-500/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bento-highlight-badge text-[#cccccc] font-mono text-[10px] tracking-widest uppercase">
            <LucideIcon name="Code" size={12} className="text-emerald-400" />
            <span>Tech Ecosystem</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-black tracking-tight text-white leading-tight">
            Premium Modern <br />
            <span className="brand-text-gradient">Production Technologies</span>
          </h2>

          <p className="text-zinc-400 text-sm max-w-xl mx-auto leading-relaxed">
            We avoid outdated frameworks. We commit exclusively to high-throughput, modern technologies backed by industry-standard developer networks.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-white/3 border border-white/5 rounded-2xl backdrop-blur-sm max-w-3xl mx-auto mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`tech_cat_${cat.id}`}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`relative px-4 py-2.5 text-xs font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id 
                  ? 'text-white' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="activeTechCat"
                  className="absolute inset-0 bg-white/7 rounded-xl border border-white/10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Tech Grid Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Main Ecosystem badging panel */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout font-sans text-xs">
              {filteredTech.map((tech) => {
                const isActive = hoveredTech === tech.name;
                return (
                  <motion.div
                    key={tech.name}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                    id={`tech_badge_${tech.name.replace(/\s+/g, '_')}`}
                    className={`bento-card p-4 rounded-3xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-24 cursor-pointer select-none ${
                      isActive 
                        ? 'border-zinc-100/15 shadow-xl bg-gradient-to-br from-indigo-950/35 to-black' 
                        : 'bg-white/5 border-white/10'
                    }`}
                    style={{
                      boxShadow: isActive ? `0 0 20px -5px ${tech.glowColor || 'rgba(255,255,255,0.1)'}` : 'none'
                    }}
                  >
                    {/* Glowing point of reference */}
                    {isActive && (
                      <div 
                        className="absolute -top-6 -right-6 w-12 h-12 rounded-full blur-xl pointer-events-none transition-opacity duration-300"
                        style={{ backgroundColor: tech.glowColor }}
                      />
                    )}

                    <div className="flex justify-between items-start">
                      <span className="px-2 py-0.5 rounded text-[8px] bg-white/4 border border-white/5 font-mono text-zinc-500 uppercase tracking-widest">
                        {tech.category}
                      </span>
                      <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-blue-400 transition-colors" />
                    </div>

                    <p className="font-sans font-black text-white text-base leading-tight">
                      {tech.name}
                    </p>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Dynamic contextual explanation panel */}
          <div className="lg:col-span-5">
            <div className="bento-card p-6 sm:p-8 rounded-3xl relative overflow-hidden h-[304px] flex flex-col justify-between">
              {/* Soft decorative background glow */}
              <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full bg-blue-600/5 blur-3xl pointer-events-none" />
              
              <AnimatePresence mode="wait">
                {hoveredTech && techDetails[hoveredTech] ? (
                  <motion.div
                    key={hoveredTech}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6 flex-1 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-white/5 pb-3">
                        <h4 className="font-sans font-black text-2xl text-white">
                          {hoveredTech}
                        </h4>
                        <span className="p-1.5 px-3 rounded text-[10px] bg-blue-500/10 border border-blue-500/15 text-blue-400 font-mono font-bold uppercase tracking-wider">
                          {techDetails[hoveredTech].stat}
                        </span>
                      </div>

                      <p className="text-zinc-300 text-sm leading-relaxed font-normal">
                        {techDetails[hoveredTech].purpose}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/5 text-[11px] font-mono text-zinc-500 flex justify-between items-center">
                      <span>WXT STRICT CODE QUALITY STANDARDS</span>
                      <span>SECURE PIPELINE APPROVED</span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="fallback"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center space-y-4 h-full py-6"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/4 border border-white/6 flex items-center justify-center text-zinc-500">
                      <LucideIcon name="Compass" size={20} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-sans font-bold text-white text-sm">
                        Hover Ecosystem Badges
                      </h4>
                      <p className="text-zinc-500 text-xs max-w-xs leading-normal">
                        Inspect custom operational use cases, version parameters, and diagnostic deployment metrics of our software suites.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
