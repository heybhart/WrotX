import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { servicesData } from '../data';
import { LucideIcon } from './LucideIcon';

export const Services: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  // Helper colors for service cards glow borders and bento layouts
  const glowClasses: Record<string, string> = {
    'web-dev': 'bento-card bento-card-blue',
    'mobile-apps': 'bento-card bento-card-purple',
    'ai-automation': 'bento-card bento-card-indigo',
    'ai-voice': 'bento-card bento-card-purple',
    'custom-software': 'bento-card bento-card-blue',
    'saas-platforms': 'bento-card bento-card-indigo',
    'ui-ux': 'bento-card bento-card-emerald',
    'backend-systems': 'bento-card bento-card-emerald'
  };

  const selectedService = servicesData.find(s => s.id === selectedServiceId);

  return (
    <section 
      id="services" 
      className="relative py-28 bg-[#050505]"
    >
      {/* Background aesthetics */}
      <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-blue-500/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bento-highlight-badge text-zinc-400 font-mono text-[10px] tracking-widest uppercase"
          >
            <LucideIcon name="Sparkles" size={12} className="text-blue-400" />
            <span>Trusted Services Portfolio</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[45px] font-black tracking-tight text-white leading-tight"
          >
            High-Performance Capabilities <br />
            <span className="brand-text-gradient">Engineered to Scales</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto"
          >
            We deploy production-ready digital products, systems, and smart AI agents crafted under rigorous architectural standards. Click any sector card to verify technical specifications.
          </motion.p>
        </div>

        {/* Services Grid (Layout container adjusted to bento spacing) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {servicesData.map((service, index) => {
            const glowClass = glowClasses[service.id] || 'bento-card bento-card-blue';
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                id={`service_card_${service.id}`}
                onClick={() => setSelectedServiceId(service.id)}
                className={`${glowClass} cursor-pointer transition-all duration-300 flex flex-col justify-between h-[280px] group relative overflow-hidden`}
              >
                {/* Floating graphic element background */}
                <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-white/[0.012] group-hover:scale-110 transition-transform duration-300 pointer-events-none" />

                <div className="space-y-4">
                  {/* Service Accent Line */}
                  <div className="w-10 h-[2.5px] bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
                  
                  {/* Icon Frame */}
                  <div className="w-11 h-11 rounded-xl bg-white/4 border border-white/6 flex items-center justify-center text-zinc-300 group-hover:text-blue-400 transition-colors shadow-inner">
                    <LucideIcon name={service.iconName} size={20} />
                  </div>

                  {/* Title & brief */}
                  <div className="space-y-1.5">
                    <h3 className="font-sans font-bold text-lg text-white leading-tight group-hover:text-zinc-100 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zinc-500 text-[12.5px] leading-relaxed line-clamp-3 group-hover:text-zinc-400 transition-colors">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Interact Cue */}
                <div className="pt-4 flex items-center justify-between text-xs font-semibold text-zinc-500 group-hover:text-blue-400 transition-colors mt-auto">
                  <span className="font-mono text-[9px] tracking-widest uppercase">
                    {service.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <span>Spec Sheets</span>
                    <LucideIcon 
                      name="ArrowUpRight" 
                      size={12} 
                      className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" 
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Service Specifications Modal Drawer */}
        <AnimatePresence>
          {selectedServiceId && selectedService && (
            <div className="fixed inset-0 z-55 flex items-center justify-center p-4">
              {/* Backing Blur Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedServiceId(null)}
                className="absolute inset-0 bg-[#000000]/80 backdrop-blur-sm"
              />

              {/* Specification Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: 'spring', damping: 25, stiffness: 180 }}
                id="service_detail_modal"
                className="relative w-full max-w-2xl bg-[#09090c] border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6"
              >
                {/* Dismiss Button */}
                <button
                  id="service_dismiss_btn"
                  onClick={() => setSelectedServiceId(null)}
                  className="absolute top-5 right-5 p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/8 transition-colors cursor-pointer"
                >
                  <LucideIcon name="X" size={17} />
                </button>

                {/* Title Segment */}
                <div className="flex items-start space-x-4 pr-10">
                  <div className="w-12 h-12 rounded-xl bg-white/4 border border-white/8 flex items-center justify-center text-blue-400 shadow-lg">
                    <LucideIcon name={selectedService.iconName} size={22} />
                  </div>
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] tracking-widest text-indigo-400 uppercase font-semibold">
                      {selectedService.category} SPECIFICATION SHEET
                    </span>
                    <h3 className="font-sans font-black text-2xl text-white">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                {/* Core Narrative description */}
                <div className="p-4 rounded-xl bg-[#030303] border border-white/5">
                  <p className="text-zinc-300 text-sm leading-relaxed font-normal">
                    {selectedService.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Box 1: Key Commercial Benefits */}
                  <div className="space-y-3.5">
                    <h4 className="font-sans font-bold text-xs text-white uppercase tracking-wider flex items-center space-x-2">
                      <LucideIcon name="TrendingUp" className="text-emerald-400" size={14} />
                      <span>Commercial Benefits</span>
                    </h4>
                    <ul className="space-y-2">
                      {selectedService.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start space-x-2.5 text-xs text-zinc-400">
                          <LucideIcon name="Check" className="text-emerald-400 mt-0.5 flex-shrink-0" size={13} />
                          <span className="leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Box 2: Architectural Features */}
                  <div className="space-y-3.5">
                    <h4 className="font-sans font-bold text-xs text-white uppercase tracking-wider flex items-center space-x-2">
                      <LucideIcon name="Database" className="text-blue-400" size={14} />
                      <span>System Capabilities</span>
                    </h4>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-2.5 text-xs text-zinc-400">
                          <LucideIcon name="Check" className="text-blue-400 mt-0.5 flex-shrink-0" size={13} />
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Modal Footer quick contact redirect */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between flex-wrap gap-4 text-xs font-mono">
                  <span className="text-zinc-500">
                    SLA guarantees: 99.9% uptime reliability
                  </span>
                  <a
                    href="#contact"
                    id="service_modal_contact_btn"
                    onClick={() => setSelectedServiceId(null)}
                    className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 font-sans font-semibold text-[12.5px] text-white flex items-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <span>Request Proposal</span>
                    <LucideIcon name="ArrowRight" size={13} />
                  </a>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
