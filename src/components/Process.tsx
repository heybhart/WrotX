import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { processSteps } from '../data';
import { LucideIcon } from './LucideIcon';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section 
      id="process" 
      className="relative py-28 bg-[#050505]"
    >
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-blue-600/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bento-highlight-badge text-[#cccccc] font-mono text-[10px] tracking-widest uppercase">
            <LucideIcon name="Rocket" size={12} className="text-blue-400" />
            <span>Development Workflow</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-black tracking-tight text-white leading-tight">
            How We Build <br />
            <span className="brand-text-gradient">Production Capital Assets</span>
          </h2>

          <p className="text-zinc-400 text-sm max-w-2xl mx-auto leading-relaxed">
            We follow strict operational protocols. From the initial architecture spec until global container deployment and proactive optimization protocols.
          </p>
        </div>

        {/* Timeline Interaction Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Block: Chronological visual steps rail */}
          <div className="lg:col-span-4 space-y-3.5">
            {processSteps.map((step) => {
              const fontActive = activeStep === step.stepNumber;
              return (
                <button
                  key={step.stepNumber}
                  id={`process_step_trigger_${step.stepNumber}`}
                  onClick={() => setActiveStep(step.stepNumber)}
                  className={`w-full text-left p-4 rounded-3xl border flex items-center space-x-4 transition-all duration-300 relative group cursor-pointer ${
                    fontActive 
                      ? 'bento-card border-white/20 bg-gradient-to-br from-indigo-950/20 to-black' 
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Progressive visual background filler */}
                  {fontActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-2/3 bg-blue-500 rounded-r-full" />
                  )}

                  {/* Step counter badge */}
                  <div className={`w-8 h-8 rounded-lg font-mono font-bold text-xs flex items-center justify-center border transition-colors ${
                    fontActive 
                      ? 'bg-blue-600/10 border-blue-500/30 text-white' 
                      : 'bg-[#09090c] border-white/5 text-zinc-500 group-hover:text-zinc-300 group-hover:border-white/10'
                  }`}>
                    0{step.stepNumber}
                  </div>

                  <div className="truncate">
                    <h4 className={`text-sm font-bold transition-colors ${fontActive ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`}>
                      {step.title}
                    </h4>
                    <span className="font-mono text-[9px] text-zinc-500 font-semibold tracking-wider uppercase block mt-0.5">
                      Target duration: {step.duration}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Block: Expanded Delivery Scope Showcase */}
          <div className="lg:col-span-8">
            <div className="bento-card p-6 sm:p-8 rounded-3xl border border-white/10 min-h-[420px] flex flex-col justify-between relative overflow-hidden">
              {/* Backing decorative glow */}
              <div className="absolute -bottom-12 -left-12 w-56 h-56 rounded-full bg-blue-500/2 blur-3xl pointer-events-none" />

              <AnimatePresence mode="wait">
                {processSteps.map((step) => {
                  if (activeStep !== step.stepNumber) return null;
                  return (
                    <motion.div
                      key={step.stepNumber}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -15 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6 flex-1 flex flex-col justify-between"
                    >
                      <div className="space-y-6">
                        {/* Step title & dynamic visual cue */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-5">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center">
                              <LucideIcon name={step.iconName} size={18} />
                            </div>
                            <div>
                              <span className="font-mono text-[9px] text-blue-400 font-black tracking-widest uppercase block">
                                Phase 0{step.stepNumber} / {step.duration}
                              </span>
                              <h3 className="font-sans font-bold text-xl text-white">
                                {step.title}
                              </h3>
                            </div>
                          </div>
                          
                          <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/15 rounded-full text-[10px] text-emerald-300 font-mono font-bold self-start sm:self-center uppercase tracking-widest">
                            {step.stepNumber === 6 ? 'Sustained Operational SLA' : 'Active Execution'}
                          </span>
                        </div>

                        {/* Complete verbal workflow description */}
                        <p className="text-zinc-400 text-sm leading-relaxed max-w-3xl">
                          {step.description}
                        </p>

                        {/* Step detailed deliverables list */}
                        <div className="space-y-3.5 pt-2">
                          <h4 className="font-mono text-[10.5px] font-bold text-zinc-400 uppercase tracking-widest flex items-center space-x-1.5">
                            <LucideIcon name="CheckCircle" className="text-blue-400" size={13} />
                            <span>PHASE DELIVERABLES &amp; COMMODITIES:</span>
                          </h4>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {step.deliverables.map((item, i) => (
                              <div 
                                key={i}
                                className="p-3 bg-[#0a0a0f] border border-white/5 rounded-xl flex items-center space-x-2.5 hover:border-white/9 transition-all"
                              >
                                <div className="w-4 h-4 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                                  <LucideIcon name="Check" className="text-blue-400" size={10} />
                                </div>
                                <span className="text-xs text-zinc-300 font-normal leading-normal">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Timeline bottom progress tracker */}
                      <div className="pt-6 border-t border-white/5 flex items-center justify-between flex-wrap gap-4 text-xs font-mono">
                        <div className="flex items-center space-x-1">
                          <span className="text-zinc-500">Pipeline Progression:</span>
                          <span className="text-white font-bold">{Math.round((step.stepNumber / 6) * 100)}% Complete</span>
                        </div>

                        <div className="flex space-x-1">
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <div 
                              key={num} 
                              className={`w-4 h-1.5 rounded-full transition-all duration-300 ${
                                num <= step.stepNumber ? 'bg-blue-500' : 'bg-white/5'
                              }`} 
                            />
                          ))}
                        </div>
                      </div>

                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
