import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LucideIcon } from './LucideIcon';

interface ContactProps {
  onOpenConsultation: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenConsultation }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'saas',
    urgency: 'medium',
    details: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('wrotX@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    // Simulate server side pipeline sync
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      className="relative py-28 bg-[#050505]"
    >
      {/* Background radial overlays */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bento-highlight-badge text-[#cccccc] font-mono text-[10px] tracking-widest uppercase">
            <LucideIcon name="Mail" size={12} className="text-blue-400" />
            <span>Interactive Contact &amp; RFP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-black tracking-tight text-white leading-tight">
            Initiate Your Next <br />
            <span className="brand-text-gradient">Proprietary Software Spec</span>
          </h2>

          <p className="text-zinc-400 text-sm max-w-xl mx-auto leading-relaxed">
            Ready to scale? Connect immediately via quick assets, book directly into our system, or structure a custom RFP specification below.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Column 1: Fast Channels & Direct Action Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* CTA Calendly Picker Frame */}
            <div className="bento-card p-6 rounded-3xl border border-white/10 hover:border-indigo-500/25 transition-all shadow-xl space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                  <LucideIcon name="Calendar" size={18} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-base text-white">
                    Simulated Appointment Scheduler
                  </h4>
                  <p className="text-zinc-500 text-[11px] leading-snug">
                    Schedule with real time-slot confirmation receipt outputs.
                  </p>
                </div>
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed font-normal">
                Want to bypass static fields? Choose an exact hour directly inside our virtual coordination calendar framework.
              </p>
              <button
                id="contact_calendly_trigger"
                onClick={onOpenConsultation}
                className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <LucideIcon name="Calendar" size={13} />
                <span>Interact Schedule Engine</span>
              </button>
            </div>

            {/* Direct Connect Hub list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* WhatsApp connect card */}
              <a
                href="https://wa.me/919322208664" 
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-3xl bento-card border border-white/10 hover:border-emerald-500/20 transition-all flex items-center space-x-3 group"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-black transition-all">
                  <LucideIcon name="Phone" size={16} />
                </div>
                <div className="button-label-container truncate">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block tracking-wider font-semibold">WHATSAPP CHAT</span>
                  <span className="text-zinc-300 text-xs font-bold leading-none block mt-0.5 group-hover:text-white transition-colors">+91 9322208664</span>
                </div>
              </a>

              {/* LinkedIn secure portal */}
              <a
                href="https://linkedin.com/company/wrotx" 
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-3xl bento-card border border-white/10 hover:border-blue-500/20 transition-all flex items-center space-x-3 group"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-black transition-all">
                  <LucideIcon name="Linkedin" size={16} />
                </div>
                <div className="truncate">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block tracking-wider font-semibold">LINKEDIN HUB</span>
                  <span className="text-zinc-300 text-xs font-bold leading-none block mt-0.5 group-hover:text-white transition-colors">WrotX Systems Enterprise</span>
                </div>
              </a>
            </div>

            {/* Quick Email copier block with visual confirmation */}
            <div className="p-4.5 rounded-3xl bento-card border border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-lg bg-white/4 border border-white/5 flex items-center justify-center text-zinc-400">
                  <LucideIcon name="Mail" size={15} />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-zinc-500 block uppercase tracking-wide">DIRECT CORPORATE CONTACT</span>
                  <span className="text-white text-xs font-bold block mt-0.5">wrotX@gmail.com</span>
                </div>
              </div>
              <button
                id="contact_email_copy_btn"
                onClick={handleCopyEmail}
                className="p-2 px-3 rounded-lg border border-white/6 text-[11px] font-bold tracking-wide hover:bg-white/4 transition-colors text-zinc-300 active:scale-95 cursor-pointer"
              >
                {copiedEmail ? (
                  <span className="text-emerald-400 flex items-center space-x-1 font-mono text-[10px]">
                    <LucideIcon name="Check" size={11} />
                    <span>Copied!</span>
                  </span>
                ) : (
                  <span>Copy Address</span>
                )}
              </button>
            </div>

          </div>

          {/* Column 2: Digital RFP Proposal RFP Architect */}
          <div className="lg:col-span-7">
            <div className="bento-card p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden min-h-[460px] flex flex-col justify-between">
              
              {/* Subtle top brand line */}
              <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600" />

              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form
                    key="rfp_form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    <div className="border-b border-white/5 pb-3">
                      <h4 className="font-sans font-extrabold text-lg text-white">
                        WrotX Project Proposal Inquiry
                      </h4>
                      <p className="text-zinc-500 text-xs leading-relaxed">
                        Specify your project scope below to initiate a strategic partnership roadmap inquiry.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="block text-zinc-400 font-bold tracking-wide">Full Name <strong className="text-red-500">*</strong></label>
                        <input
                          type="text"
                          name="name"
                          id="contact_input_name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Kenneth Choi"
                          className="w-full p-3 rounded-lg bg-zinc-950/80 border border-white/6 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-xs text-white transition-colors"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-zinc-400 font-bold tracking-wide">Work Email <strong className="text-red-500">*</strong></label>
                        <input
                          type="email"
                          name="email"
                          id="contact_input_email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="e.g. k.choi@auracall.com"
                          className="w-full p-3 rounded-lg bg-zinc-950/80 border border-white/6 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-xs text-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="block text-zinc-400 font-bold tracking-wide">Sought System Capability</label>
                        <select
                          name="service"
                          id="contact_select_service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full p-3 rounded-lg bg-zinc-950/80 border border-white/6 focus:border-blue-500 focus:outline-none text-xs text-white transition-colors cursor-pointer"
                        >
                          <option value="saas">SaaS Multi-tenant Deployment</option>
                          <option value="web">Tailored Web Systems &amp; SEO</option>
                          <option value="mobile">Native Mobile Application development</option>
                          <option value="ai">AI Autonomous &amp; voice agent automation</option>
                          <option value="custom">API Integration &amp; Enterprise Infrastructure</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="block text-zinc-400 font-bold tracking-wide">Target Implementation Urgency</label>
                        <select
                          name="urgency"
                          id="contact_select_urgency"
                          value={formData.urgency}
                          onChange={handleInputChange}
                          className="w-full p-3 rounded-lg bg-zinc-950/80 border border-white/6 focus:border-blue-500 focus:outline-none text-xs text-white transition-colors cursor-pointer"
                        >
                          <option value="high">Urprise Express SLA (&lt;30 days)</option>
                          <option value="medium">Standard Operational schedule (2-3 months)</option>
                          <option value="low">Flexible Sandbox exploration (discovery phase)</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-zinc-400 font-bold tracking-wide">Core bottleneck details</label>
                      <textarea
                        name="details"
                        id="contact_input_details"
                        rows={3}
                        value={formData.details}
                        onChange={handleInputChange}
                        placeholder="Share any structural milestones, active database scale configurations, or API specifications..."
                        className="w-full p-3 rounded-lg bg-zinc-950/80 border border-white/6 focus:border-blue-500 focus:outline-none text-xs text-white transition-colors resize-none font-normal"
                      />
                    </div>

                    <button
                      type="submit"
                      id="contact_rfp_submit"
                      disabled={isSubmitting}
                      className="w-full mt-2 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-xs hover:brightness-110 active:scale-99 transition-all flex items-center justify-center space-x-1.5 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin inline-block mr-1" />
                          <span>Generating Estimate Roadmap...</span>
                        </>
                      ) : (
                        <>
                          <LucideIcon name="Rocket" size={13} />
                          <span>Generate RFP Specs Proposal</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="rfp_success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6 space-y-6 flex flex-col items-center justify-center h-full"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 shadow-xl shadow-emerald-500/10">
                      <LucideIcon name="Check" size={24} className="stroke-[3.5px]" />
                    </div>

                    <div className="space-y-1.5">
                      <h4 className="font-sans font-black text-white text-xl">
                        RFP Proposal Receipt Synthesized!
                      </h4>
                      <p className="text-zinc-500 text-[10px] font-mono tracking-widest uppercase">
                        Reference Number: WXT-RFP-{Math.floor(1000 + Math.random() * 9000)}
                      </p>
                    </div>

                    {/* Highly aesthetic receipt specs grid */}
                    <div className="w-full max-w-sm p-4 rounded-2xl bg-[#030303] border border-white/5 space-y-3 text-left font-mono text-[10px] text-zinc-500">
                      <div className="flex justify-between border-b border-white/5 pb-1.5">
                        <span>ESTIMATED VELOCITY</span>
                        <span className="text-emerald-400 font-bold uppercase">
                          {formData.urgency === 'high' ? 'High Speed Expedited' : 'Standard Delivery'}
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-1.5">
                        <span>ESTIMATED ARCHITECTURE</span>
                        <span className="text-white uppercase font-bold">{formData.service} system Blueprint</span>
                      </div>
                      <p className="text-[9px] text-zinc-500 font-sans italic text-center pt-1 leading-normal">
                        Our engineering executive board is analyzing these parameters. A formal technical document has been queued for dispatch to <strong>{formData.email}</strong>.
                      </p>
                    </div>

                    <button
                      id="contact_reset_rfp_btn"
                      onClick={() => {
                        setSubmitSuccess(false);
                        setFormData({ name: '', email: '', service: 'saas', urgency: 'medium', details: '' });
                      }}
                      className="px-4 py-2 rounded-lg border border-white/5 text-[11px] font-semibold text-zinc-400 hover:text-white hover:bg-white/3 transition-all cursor-pointer"
                    >
                      Draft Another RFQ
                    </button>
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
