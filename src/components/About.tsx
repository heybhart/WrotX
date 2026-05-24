import React, { useState } from 'react';
import { motion } from 'motion/react';
import { companyDetails } from '../data';
import { LucideIcon } from './LucideIcon';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'experience' | 'ai-mindset'>('mission');

  const tabs = [
    { id: 'mission', label: 'Our Mission', icon: 'Rocket', text: companyDetails.mission },
    { id: 'vision', label: 'Our Vision', icon: 'Compass', text: companyDetails.vision },
    { id: 'experience', label: 'Ecosystem Experience', icon: 'Layers', text: companyDetails.experience },
    { id: 'ai-mindset', label: 'AI-First Ethos', icon: 'Cpu', text: companyDetails.mindset }
  ];

  const currentTab = tabs.find(t => t.id === activeTab);

  return (
    <section 
      id="about" 
      className="relative py-28 bg-[#050505]"
    >
      <div className="absolute top-1/2 left-10 w-92 h-92 rounded-full bg-blue-500/2 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Column 1: Core Description and Tab triggers */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bento-highlight-badge text-[#cccccc] font-mono text-[10px] tracking-widest uppercase">
                <LucideIcon name="Users" size={12} className="text-blue-400" />
                <span>Executive Positioning</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-black tracking-tight text-white leading-tight">
                An Elite Guild of <br />
                <span className="brand-text-gradient">Systems Architects</span>
              </h2>

              <p className="text-zinc-400 text-sm leading-relaxed max-w-xl">
                WrotX was formed in response to the massive over-engineering and downstream fragility plaguing modern web and automation products. We craft proprietary IP assets with absolute speed and rigorous precision.
              </p>
            </div>

            {/* Interactive Grid Tab Controllers */}
            <div className="grid grid-cols-2 gap-3 max-w-lg">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    id={`about_tab_${tab.id}`}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`p-4 rounded-3xl border text-left transition-all duration-300 flex flex-col justify-between h-24 relative overflow-hidden group cursor-pointer ${
                      isActive 
                        ? 'bento-card border-white/20 bg-gradient-to-br from-indigo-950/20 to-black' 
                        : 'bg-white/5 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-colors ${
                        isActive ? 'bg-blue-600/10 border-blue-500/30 text-white' : 'bg-[#09090c] border-white/5 text-zinc-500 group-hover:text-zinc-400'
                      }`}>
                        <LucideIcon name={tab.icon} size={15} />
                      </div>
                      <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                    </div>

                    <span className={`text-xs font-bold transition-colors block mt-2 ${isActive ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Column 2: Large Visual Display details card */}
          <div className="lg:col-span-6 w-full max-w-xl mx-auto lg:mx-0">
            <div className="bento-card p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden min-h-[340px] flex flex-col justify-between">
              
              {/* Top brand line highlight */}
              <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600" />
              
              {/* Large structural glow icon background */}
              <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-white/[0.005] border border-white/[0.01] pointer-events-none" />

              <div className="space-y-6">
                <div className="flex items-center space-x-3.5 border-b border-white/5 pb-4.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-blue-400 shadow-md">
                    <LucideIcon name={currentTab?.icon || 'Compass'} size={18} />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] tracking-widest text-zinc-500 uppercase font-black">
                      WXT COMPANY BLUEPRINT
                    </span>
                    <h3 className="font-sans font-black text-lg text-white">
                      {currentTab?.label}
                    </h3>
                  </div>
                </div>

                {/* Main Verbal narrative text */}
                <p className="text-zinc-300 text-sm sm:text-[14px] leading-relaxed font-normal">
                  {currentTab?.text}
                </p>
              </div>

              {/* Bottom engineering standards check */}
              <div className="pt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500 uppercase">
                <span>Verification index: 1.00</span>
                <span className="text-emerald-400 font-bold flex items-center space-x-1">
                  <span className="w-1 h-1 rounded-full bg-emerald-400 inline-block animate-pulse" />
                  <span>Verified IP Assets</span>
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
