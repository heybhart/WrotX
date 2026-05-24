import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projectsData } from '../data';
import { LucideIcon } from './LucideIcon';

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'web' | 'mobile' | 'ai' | 'saas'>('all');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // Filter project lists
  const filteredProjects = projectsData.filter(p => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  const selectedProject = projectsData.find(p => p.id === selectedProjectId);

  // Interactive Live Product Simulator render core
  const renderProductSimulator = (projectId: string) => {
    switch (projectId) {
      case 'big-broker':
        return (
          <div className="w-full h-44 bg-[#07070a] border border-white/5 rounded-xl p-3.5 flex flex-col justify-between overflow-hidden relative font-mono text-[10px] text-zinc-400">
            {/* Simulation Header */}
            <div className="flex justify-between items-center mb-1.5 pb-1.5 border-b border-white/5">
              <span className="text-white font-semibold flex items-center space-x-1">
                <span className="w-2 h-2 rounded-full bg-violet-500 animate-ping inline-block" />
                <span>BigBroker Engine v2.4</span>
              </span>
              <span className="text-[9px] text-zinc-500">LIVE DATA RECEPTOR</span>
            </div>
            {/* Visual Micro Stats UI */}
            <div className="flex-1 space-y-2 py-1">
              <div className="grid grid-cols-2 gap-2">
                <div className="px-2 py-1 bg-zinc-950 rounded border border-white/5">
                  <span className="text-zinc-500 text-[8px] block">REALTY INQUIRIES</span>
                  <span className="text-violet-400 font-bold text-[11px]">+42% This Month</span>
                </div>
                <div className="px-2 py-1 bg-zinc-950 rounded border border-white/5">
                  <span className="text-zinc-500 text-[8px] block">SERVER RESPONSIVENESS</span>
                  <span className="text-emerald-400 font-bold text-[11px]">350ms (AVG)</span>
                </div>
              </div>
              <div className="p-1 px-2 rounded bg-zinc-950 border border-white/5 flex items-center justify-between text-[9px]">
                <span className="text-zinc-400 font-sans">Active Land Registry Pipeline</span>
                <span className="text-emerald-400 animate-pulse font-normal">● STABLE</span>
              </div>
            </div>
            <div className="flex justify-between text-[9px] pt-1.5 border-t border-white/5 font-sans">
              <span>Database Sync: <strong className="text-white">100% Secure</strong></span>
              <span className="text-violet-400">Vercel Edge Ready</span>
            </div>
          </div>
        );
      case 'meena-properties':
        return (
          <div className="w-full h-44 bg-[#07070a] border border-white/5 rounded-xl p-3.5 flex flex-col justify-between overflow-hidden relative text-[10px] text-zinc-400 font-sans">
            <div className="flex justify-between items-center mb-1 pb-1.5 border-b border-white/5">
              <span className="text-white font-semibold flex items-center space-x-1">
                <LucideIcon name="Globe" size={12} className="text-cyan-400" />
                <span>Meena Properties Showroom</span>
              </span>
              <span className="bg-cyan-500/10 border border-cyan-500/15 text-cyan-300 rounded px-1.5 text-[8px]">GITHUB PAGES</span>
            </div>
            {/* List Selection filter simulation */}
            <div className="flex-1 py-1.5 space-y-2 font-mono">
              <div className="text-[9.5px] text-zinc-400 flex justify-between">
                <span>ACTIVE CATEGORIES:</span>
                <span className="text-zinc-500">[VILLAS, APARTMENTS]</span>
              </div>
              <div className="p-2 rounded bg-zinc-950 border border-white/5 relative group cursor-pointer hover:border-cyan-500/20 transition-all text-left">
                <div className="flex justify-between items-baseline mb-0.5">
                  <span className="font-bold text-white text-[10px]">Premium Luxury Villa #12</span>
                  <span className="text-cyan-400 font-sans font-medium text-[8.5px]">Available</span>
                </div>
                <p className="text-[8.5px] text-zinc-500 leading-none">Responsive Image Grid &amp; Map Location Loaded</p>
              </div>
            </div>
            <div className="flex justify-between items-center text-[9px] font-mono text-zinc-500">
              <span>Asset Speed: <strong>Sub-1s</strong></span>
              <span className="text-cyan-400 text-[8px]">● STATIC SERV FAST</span>
            </div>
          </div>
        );
      case 'food-delivery':
        return (
          <div className="w-full h-44 bg-[#07070a] border border-white/5 rounded-xl p-3.5 flex flex-col justify-between overflow-hidden relative font-mono text-[10px] text-zinc-400">
            {/* Simulation Header */}
            <div className="flex justify-between items-center mb-1.5 pb-1.5 border-b border-white/5">
              <span className="text-white font-semibold flex items-center space-x-1">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping inline-block" />
                <span>SavorSwift GPS Relay</span>
              </span>
              <span className="text-[9px] text-zinc-500">ACTIVE DISPATCH ROUTE #S729</span>
            </div>
            {/* Visual Mini Map UI */}
            <div className="flex-1 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-zinc-950/40 rounded border border-white/5 flex flex-col items-center justify-center p-2">
                {/* Visual coordinate node connections */}
                <div className="absolute top-4 left-6 px-1.5 py-0.5 rounded bg-zinc-900 border border-white/10 text-[8px] text-zinc-400">Rest. #22 (Kitchen)</div>
                <div className="absolute bottom-4 right-6 px-1.5 py-0.5 rounded bg-orange-600/15 border border-orange-500/20 text-[8px] text-orange-400">Destination (You)</div>
                {/* Animated connector vector */}
                <svg className="w-full h-full absolute inset-0 opacity-50" strokeDasharray="3,3">
                  <path d="M40,25 Q120,40 240,65" fill="none" stroke="rgba(249,115,22,0.6)" strokeWidth="2" className="animate-[dash_4s_linear_infinite]" />
                </svg>
                {/* Driver pointer */}
                <motion.div 
                  animate={{ x: [-80, 110], y: [-20, 15] }} 
                  transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                  className="absolute p-1 bg-white text-black font-black rounded-full shadow-lg flex items-center space-x-1"
                >
                  <LucideIcon name="Smartphone" size={8} className="text-orange-500" />
                  <span className="text-[7px]">Courier Live</span>
                </motion.div>
              </div>
            </div>
            <div className="flex justify-between text-[9px] pt-1 pt-1.5 border-t border-white/5 font-sans">
              <span>Time Remaining: <strong className="text-white">6m 12s</strong></span>
              <span>Speed: <strong>32mph</strong></span>
            </div>
          </div>
        );
      case 'recipe-platform':
        return (
          <div className="w-full h-44 bg-[#07070a] border border-white/5 rounded-xl p-3.5 flex flex-col justify-between overflow-hidden relative text-[10px] text-zinc-400 font-sans">
            <div className="flex justify-between items-center mb-1 pb-1.5 border-b border-white/5">
              <span className="text-white font-semibold flex items-center space-x-1">
                <LucideIcon name="Cpu" size={12} className="text-emerald-400" />
                <span>ChefMind Recommendation Matrix</span>
              </span>
              <span className="bg-emerald-500/10 border border-emerald-500/15 text-emerald-300 rounded px-1.5 text-[8px]">RAG OPTIMIZED</span>
            </div>
            <div className="flex-1 py-1.5 space-y-2">
              <div className="text-[9px] font-mono text-zinc-500 leading-tight">INVENTORY DETECTED: [Oats, Strawberries, Honey, Whey]</div>
              <div className="p-2 rounded bg-zinc-950 border border-white/5 relative group cursor-pointer hover:border-emerald-500/20 transition-all">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="font-bold text-white text-[11px]">Berry Protein Oats Bowl</span>
                  <span className="text-emerald-400 font-mono font-bold">98% Match</span>
                </div>
                <p className="text-[9.5px] text-zinc-400 line-clamp-1 font-normal">Est: 5 mins | Low-Glycemic Index, 28g protein</p>
              </div>
            </div>
            <div className="flex justify-between items-center text-[9px] font-mono text-zinc-500">
              <span>Embedding Vectors: 1,536</span>
              <span className="text-emerald-400 text-[8px]">● GENERATION STREAMING</span>
            </div>
          </div>
        );
      case 'gym-management':
        return (
          <div className="w-full h-44 bg-[#07070a] border border-white/5 rounded-xl p-3.5 flex flex-col justify-between overflow-hidden relative font-sans text-[10px] text-zinc-400">
            <div className="flex justify-between items-center mb-1 pb-1.5 border-b border-white/5 font-mono">
              <span className="text-white font-bold flex items-center space-x-1">
                <LucideIcon name="Layers" size={11} className="text-blue-400" />
                <span>FlexCore - Active Bookings</span>
              </span>
              <span className="text-[9px] text-emerald-400 flex items-center space-x-1">
                <span>Stripe Auto Charge: Up</span>
              </span>
            </div>
            <div className="flex-1 py-1.5 space-y-2">
              <div className="flex items-center justify-between p-2 rounded bg-zinc-950 border border-white/5 hover:border-blue-500/20 transition-all">
                <div>
                  <h4 className="font-bold text-[11px] text-white">HIIT Extreme Circuit</h4>
                  <p className="text-[9px] text-zinc-500">Trainer: Coach Arnold | 6:00 PM</p>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/15 text-emerald-300 font-mono text-[8px]">14 / 15 Booked</span>
              </div>
            </div>
            <div className="flex justify-between items-center text-[9px] font-mono text-zinc-500 pt-1.5 border-t border-white/5">
              <span>SaaS Subscriptions Status: 98.4% Active</span>
              <span className="text-blue-400">Billing Auto</span>
            </div>
          </div>
        );
      case 'voice-support':
        return (
          <div className="w-full h-44 bg-[#07070a] border border-white/5 rounded-xl p-3.5 flex flex-col justify-between overflow-hidden relative text-[10px] text-zinc-400 font-mono">
            <div className="flex justify-between items-center mb-1 pb-1.5 border-b border-white/5">
              <span className="text-white font-bold flex items-center space-x-1">
                <LucideIcon name="Mic" size={11} className="text-fuchsia-400" />
                <span>AuraCall AI Voice Processor</span>
              </span>
              <span className="text-[9px] text-zinc-500">VOIP SESSION SECURE</span>
            </div>
            {/* Live oscillating audio wave simulation */}
            <div className="flex-1 flex items-center justify-center space-x-1.5 py-3">
              {[8, 22, 12, 32, 48, 14, 28, 44, 18, 30, 8].map((height, i) => (
                <motion.div
                  key={i}
                  animate={{ height: [height / 2, height, height / 2] }}
                  transition={{ repeat: Infinity, duration: 1.2 + (i % 3) * 0.2, ease: 'easeInOut' }}
                  className="w-[3px] bg-gradient-to-t from-fuchsia-600 via-pink-500 to-purple-400 rounded-full"
                  style={{ height: `${height}px` }}
                />
              ))}
            </div>
            <div className="flex justify-between items-center text-[9px] pt-1.5 border-t border-white/5 uppercase">
              <span className="text-fuchsia-400">● AUDIO INTERRUPT ENHANCED</span>
              <span className="font-sans text-zinc-500">Latency: <strong>480ms</strong></span>
            </div>
          </div>
        );
      case 'ecommerce-platform':
        return (
          <div className="w-full h-44 bg-[#07070a] border border-white/5 rounded-xl p-3.5 flex flex-col justify-between overflow-hidden relative font-sans text-[10px] text-zinc-400">
            <div className="flex justify-between items-center mb-1 pb-1.5 border-b border-white/5 font-mono">
              <span className="text-white font-bold">VeloCart UI Sandbox</span>
              <span className="text-cyan-400">EDGE WORKER RELAYS</span>
            </div>
            <div className="flex-1 py-1.5 grid grid-cols-2 gap-2">
              <div className="p-1.5 rounded bg-zinc-950 border border-white/5 hover:border-cyan-500/20 transition-all flex flex-col justify-between">
                <span className="text-[8.5px] text-zinc-400 line-clamp-1">Carbon Performance Bike</span>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="text-white font-bold text-[10.5px]">$8,450</span>
                  <span className="text-[8px] text-cyan-400">1 unit</span>
                </div>
              </div>
              <div className="p-1.5 rounded bg-zinc-950 border border-white/5 hover:border-cyan-500/20 transition-all flex flex-col justify-between">
                <span className="text-[8.5px] text-zinc-400 line-clamp-1">Titanium Aero Hub</span>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="text-white font-bold text-[10.5px]">$1,200</span>
                  <span className="text-[8px] text-amber-500">Out of Stock</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center text-[9px] font-mono text-zinc-500">
              <span>Checkout response: 110ms</span>
              <span className="text-cyan-400">CDN ACTIVE</span>
            </div>
          </div>
        );
      case 'crm-dashboard':
        return (
          <div className="w-full h-44 bg-[#07070a] border border-white/5 rounded-xl p-3.5 flex flex-col justify-between overflow-hidden relative font-mono text-[10px] text-zinc-400">
            <div className="flex justify-between items-center mb-1 pb-1.5 border-b border-white/5">
              <span className="text-white font-bold flex items-center space-x-1">
                <LucideIcon name="Calculator" size={11} className="text-violet-400" />
                <span>ApexPulse Deal Velocity</span>
              </span>
              <span className="text-[9px] text-zinc-500">D3 INTEGRATION ENGINE</span>
            </div>
            {/* Beautiful SVG graph simulating micro sales channels */}
            <div className="flex-1 py-2 flex items-end justify-between px-2 relative">
              {[40, 75, 45, 95, 60, 110, 85].map((height, i) => (
                <div key={i} className="flex flex-col items-center flex-1 space-y-1">
                  <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height * 0.7}px` }}
                    viewport={{ once: true }}
                    className="w-4 bg-gradient-to-t from-violet-600 to-indigo-400 rounded-t-sm" 
                  />
                  <span className="text-[7.5px] text-zinc-600 scale-90">M0{i+1}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center text-[9px] pt-1.5 border-t border-white/5">
              <span>ARR: <strong>$1.48M</strong></span>
              <span className="text-violet-400 font-sans font-bold">CAGR: +24.8%</span>
            </div>
          </div>
        );
      case 'inventory-system':
        return (
          <div className="w-full h-44 bg-[#07070a] border border-white/5 rounded-xl p-3.5 flex flex-col justify-between overflow-hidden relative font-sans text-[10px] text-zinc-400">
            <div className="flex justify-between items-center mb-1 pb-1.5 border-b border-white/5 font-mono">
              <span className="text-white font-bold flex items-center space-x-1">
                <LucideIcon name="Compass" size={11} className="text-rose-400" />
                <span>OptimaFlow IoT Storage</span>
              </span>
              <span className="text-rose-400">WAREHOUSE WH-04</span>
            </div>
            {/* Visual Storage level indicators */}
            <div className="flex-1 py-2 grid grid-cols-3 gap-2">
              {[
                { title: 'Aisle A (Retail)', val: '84%', color: 'from-blue-600 to-blue-400' },
                { title: 'Aisle B (Heavy)', val: '22%', color: 'from-amber-600 to-yellow-500' },
                { title: 'Aisle C (Cold)', val: '98%', color: 'from-red-600 to-orange-500' }
              ].map((aisle, i) => (
                <div key={i} className="p-1 px-2 rounded bg-zinc-950 border border-white/5 flex flex-col justify-between">
                  <span className="text-[8.5px] text-zinc-500 leading-tight block">{aisle.title}</span>
                  <div className="text-right">
                    <span className="font-bold text-white text-xs">{aisle.val}</span>
                    <div className="w-full bg-white/5 h-[3px] rounded-full mt-1.5 overflow-hidden">
                      <div className={`h-full bg-gradient-to-r ${aisle.color}`} style={{ width: aisle.val }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center text-[9px] font-mono text-zinc-500">
              <span>Automatic supply orders: ON</span>
              <span className="text-rose-400">REALTIME</span>
            </div>
          </div>
        );
      default:
        return (
          <div className="w-full h-44 bg-zinc-950 rounded-xl border border-white/5 flex items-center justify-center font-mono text-[10px] text-zinc-500">
            SECURE REPOSITORY PREVIEW
          </div>
        );
    }
  };

  return (
    <section 
      id="portfolio" 
      className="relative py-28 bg-[#050505]"
    >
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-blue-600/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bento-highlight-badge text-zinc-400 font-mono text-[10px] tracking-widest uppercase">
              <LucideIcon name="Layers" size={12} className="text-indigo-400" />
              <span>Proven Results</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-black tracking-tight text-white leading-tight">
              Case Studies &amp; <br />
              <span className="brand-text-gradient">Core Architectures</span>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              We do not larp. Here are genuine engineering systems designed, configured, and maintained by our group. Select categories below to filter operations.
            </p>
          </div>

          {/* Filtering Tab Bar */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white/3 border border-white/5 rounded-2xl backdrop-blur-sm self-start md:self-end">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'web', label: 'Web Custom' },
              { id: 'mobile', label: 'Mobile Apps' },
              { id: 'ai', label: 'AI Solutions' },
              { id: 'saas', label: 'SaaS Platforms' }
            ].map((tab) => (
              <button
                key={tab.id}
                id={`portfolio_tab_${tab.id}`}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`relative px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
                  activeCategory === tab.id 
                    ? 'text-white' 
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {activeCategory === tab.id && (
                  <motion.div
                    layoutId="activePortfolioTab"
                    className="absolute inset-0 bg-white/7 rounded-xl border border-white/10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                id={`project_card_${project.id}`}
                className="bento-card flex flex-col justify-between bg-gradient-to-br from-indigo-950/20 to-black/50 border border-white/10 rounded-3xl overflow-hidden relative group cursor-pointer max-w-full"
              >
                {/* Embedded HTML Interactive Simulator instead of static placeholders */}
                <div className="p-4 bg-[#0a0a0f] border-b border-white/5 relative group-hover:bg-[#0c0c11] transition-colors overflow-hidden">
                  {/* Decorative glowing gradient circle */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.imageMockupColor} opacity-70 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
                  {renderProductSimulator(project.id)}
                </div>

                {/* Info Block */}
                <div className="p-6 space-y-4">
                  {/* Category Tag & Technologies list */}
                  <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 uppercase">
                    <span className="font-bold text-zinc-400">{project.category} Core</span>
                    <span>WXT SECURE</span>
                  </div>

                  <h3 className="font-sans font-extrabold text-lg text-white leading-tight group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Problem Narrative snippet */}
                  <p className="text-zinc-400 text-xs leading-relaxed line-clamp-3">
                    <strong className="text-zinc-300">The Problem:</strong> {project.problemSolved}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1 pt-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-0.5 rounded text-[9.5px] bg-white/4 border border-white/5 text-zinc-300 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-0.5 rounded text-[9.5px] bg-white/4 border border-white/5 text-zinc-300 font-mono">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Core Result Achieved */}
                  <div className="p-3 bg-emerald-500/5 rounded-xl border border-emerald-500/10 flex items-start space-x-2">
                    <LucideIcon name="CheckCircle" className="text-emerald-400 mt-0.5 flex-shrink-0" size={13} />
                    <span className="text-[11.5px] font-medium text-emerald-300 leading-normal">
                      {project.results[0]}
                    </span>
                  </div>

                  {/* CTA Buttons */}
                  <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                    <button
                      id={`project_spec_btn_${project.id}`}
                      onClick={() => setSelectedProjectId(project.id)}
                      className="text-xs font-semibold text-zinc-400 hover:text-white transition-colors flex items-center space-x-1 cursor-pointer"
                    >
                      <span>Investigate Case Study</span>
                      <LucideIcon name="ArrowRight" size={12} />
                    </button>

                    <div className="flex items-center space-x-2">
                      <a
                        href={project.demoUrl}
                        id={`project_demo_btn_${project.id}`}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1 px-2 rounded-lg bg-zinc-900 border border-white/5 text-[10.5px] hover:border-white/10 hover:text-white transition-all flex items-center space-x-1 text-zinc-400"
                      >
                        <LucideIcon name="ExternalLink" size={11} />
                        <span>Live Preview</span>
                      </a>
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Project Case study Specs Overlay Modal */}
        <AnimatePresence>
          {selectedProjectId && selectedProject && (
            <div className="fixed inset-0 z-55 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProjectId(null)}
                className="absolute inset-0 bg-[#000000]/85 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: 'spring', damping: 25, stiffness: 180 }}
                id="project_detail_modal_pane"
                className="relative w-full max-w-3xl bg-[#09090c] border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6 max-h-[92vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  id="project_dismiss_btn"
                  onClick={() => setSelectedProjectId(null)}
                  className="absolute top-5 right-5 p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/8 transition-colors cursor-pointer"
                >
                  <LucideIcon name="X" size={17} />
                </button>

                {/* Title */}
                <div className="space-y-1.5 pr-10">
                  <span className="font-mono text-[9px] tracking-widest text-indigo-400 uppercase font-semibold block">
                    {selectedProject.category} CORE ARCHITECTURE SPECIFICATIONS
                  </span>
                  <h3 className="font-sans font-black text-2xl sm:text-3xl text-white">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Problem & Solution block */}
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-red-500/3 border border-red-500/10 space-y-1.5">
                    <h4 className="text-xs font-bold font-mono text-red-400 uppercase tracking-wider flex items-center space-x-1.5">
                      <LucideIcon name="ShieldAlert" size={13} />
                      <span>THE BOTTLENECK CHALLENGE</span>
                    </h4>
                    <p className="text-zinc-300 text-xs sm:text-[13px] leading-relaxed">
                      {selectedProject.problemSolved}
                    </p>
                  </div>

                  {/* Core Features / Delivery Capabilities */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider font-sans">
                      SYSTEM CAPABILITIES DEVELOPED
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-3 text-xs text-zinc-400 p-3 rounded bg-zinc-900/40 border border-white/5 hover:border-white/8 transition-colors">
                          <span className="w-5 h-5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                            {i+1}
                          </span>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Operational Results list */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider font-mono">
                      MEASURABLE KEY RESULTS REACHED
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {selectedProject.results.map((result, i) => (
                        <div key={i} className="p-3.5 bg-emerald-500/4 border border-emerald-500/10 rounded-xl space-y-1">
                          <LucideIcon name="CheckCircle" className="text-emerald-400" size={14} />
                          <p className="text-[12.5px] font-bold text-white leading-snug">
                            {result.split(' - ')[0] || result}
                          </p>
                          <p className="text-[10px] text-zinc-400 leading-normal">
                            Verified pipeline metrics.
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technical Architecture Specs Info */}
                  <div className="pt-4 border-t border-white/5 space-y-2">
                    <h4 className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
                      SYSTEM DEVELOPMENT STACK:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.techStack.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-[#0c0c11] border border-white/10 text-zinc-300 font-mono text-[11px]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer buttons */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between flex-wrap gap-4 text-xs font-mono">
                  <span className="text-zinc-500">
                    Source code SLA protected.
                  </span>
                  <div className="flex items-center space-x-2">
                    <button
                      id="project_modal_dismiss"
                      onClick={() => setSelectedProjectId(null)}
                      className="px-4 py-2 rounded-lg border border-white/5 hover:bg-white/3 font-sans font-semibold text-[12px] text-zinc-300 transition-colors cursor-pointer"
                    >
                      Dismiss Specs
                    </button>
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 font-sans font-medium text-[12px] text-white flex items-center space-x-1.5 transition-colors cursor-pointer"
                    >
                      <span>Interactive Preview</span>
                      <LucideIcon name="ExternalLink" size={12} />
                    </a>
                  </div>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
