import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LucideIcon } from './LucideIcon';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1); // 1: Date & Time, 2: Info, 3: Success

  // Calendar states
  const [selectedDate, setSelectedDate] = useState<number>(25); // Default to tomorrow
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('10:00 AM');

  // Contact form details
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'saas',
    budgetRange: '$15,000 - $30,000',
    requirements: ''
  });

  const [loading, setLoading] = useState(false);

  // Hardcoded Time slots for mock scheduler
  const timeSlots = ['10:00 AM', '11:30 AM', '02:00 PM', '03:30 PM', '05:00 PM'];

  // Days list for standard mock monthly view (May 2026)
  const calendarDays = [
    { num: 24, label: 'Sun', disabled: true },
    { num: 25, label: 'Mon', disabled: false },
    { num: 26, label: 'Tue', disabled: false },
    { num: 27, label: 'Wed', disabled: false },
    { num: 28, label: 'Thu', disabled: false },
    { num: 29, label: 'Fri', disabled: false },
    { num: 30, label: 'Sat', disabled: true },
    { num: 31, label: 'Sun', disabled: true },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setLoading(true);
    // Simulate server side sync delay
    setTimeout(() => {
      setLoading(false);
      setStep(3);
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-55 flex items-center justify-center p-4">
      {/* Dark Blurred Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#000000]/85 backdrop-blur-md"
      />

      {/* Main Panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: 'spring', damping: 25, stiffness: 180 }}
        id="booking_consultation_modal"
        className="relative w-full max-w-2xl bg-[#09090c] border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6 max-h-[92vh] overflow-y-auto font-sans text-xs text-zinc-300"
      >
        {/* Dismiss trigger */}
        <button
          id="booking_close_button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/8 transition-colors cursor-pointer"
        >
          <LucideIcon name="X" size={17} />
        </button>

        {/* Modal Title and descriptive header */}
        <div className="space-y-1.5 pr-10 border-b border-white/5 pb-4">
          <span className="font-mono text-[9px] tracking-widest text-indigo-400 uppercase font-semibold block">
            WXT INTERACTIVE CALENDAR ENGINE
          </span>
          <h3 className="font-sans font-black text-2xl text-white">
            Schedule a Technology Alignment Call
          </h3>
          <p className="text-zinc-500 font-normal leading-normal text-xs pr-4">
            Meet 1-on-1 with an elite WrotX systems architect to outline your custom product roadmap, tech stack blueprints, and cost estimates.
          </p>
        </div>

        {/* STEP 1: Date & Time selector */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {/* Date Column */}
              <div className="space-y-3">
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest">
                  1. Choose Date (May 2026)
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {calendarDays.map((day) => {
                    const isSelected = selectedDate === day.num;
                    return (
                      <button
                        key={day.num}
                        id={`calendar_day_${day.num}`}
                        disabled={day.disabled}
                        onClick={() => setSelectedDate(day.num)}
                        className={`p-3 rounded-xl border flex flex-col items-center justify-center space-y-1 transition-all ${
                          day.disabled
                            ? 'bg-transparent border-white/2 text-zinc-700 cursor-not-allowed'
                            : isSelected
                              ? 'bg-blue-600/10 border-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.12)]'
                              : 'bg-zinc-950/40 border-white/5 text-zinc-400 hover:border-white/10 hover:text-white'
                        }`}
                      >
                        <span className="text-[10px] font-mono uppercase text-zinc-500 font-semibold">{day.label}</span>
                        <span className="text-sm font-bold font-mono">{day.num}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Column */}
              <div className="space-y-3">
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest">
                  2. Choose Preferred Hour (UTC)
                </label>
                <div className="space-y-2">
                  {timeSlots.map((slot) => {
                    const isSelected = selectedTimeSlot === slot;
                    return (
                      <button
                        key={slot}
                        id={`time_slot_${slot.replace(/[:\s]/g, '_')}`}
                        onClick={() => setSelectedTimeSlot(slot)}
                        className={`w-full p-2.5 rounded-xl border text-left font-bold transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-[#0c0c15] border-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.12)]'
                            : 'bg-zinc-950/40 border-white/5 text-zinc-400 hover:border-white/10 hover:text-white'
                        }`}
                      >
                        <span className="text-[12.5px] font-mono leading-none">{slot}</span>
                        {isSelected ? (
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        ) : (
                          <LucideIcon name="Clock" size={12} className="opacity-40" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Bottom Nav indicators */}
            <div className="flex justify-between items-center pt-4 border-t border-white/5">
              <span className="text-zinc-500 font-mono">
                Meeting Duration: 30 minutes via Secure Google Meet
              </span>
              <button
                id="booking_goto_step2"
                onClick={() => setStep(2)}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold flex items-center space-x-1.5 hover:brightness-110 active:scale-98 transition-all cursor-pointer"
              >
                <span>Continue</span>
                <LucideIcon name="ArrowRight" size={13} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Detail Discovery Form */}
        {step === 2 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-zinc-400 font-bold tracking-wide">Your Full Name <strong className="text-red-500">*</strong></label>
                <input
                  type="text"
                  name="name"
                  id="booking_input_name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Kenneth Thor"
                  className="w-full p-3 rounded-xl bg-zinc-950/80 border border-white/6 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-[12.5px] text-white transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-zinc-400 font-bold tracking-wide">Work Email <strong className="text-red-500">*</strong></label>
                <input
                  type="email"
                  name="email"
                  id="booking_input_email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g. k.thor@company.com"
                  className="w-full p-3 rounded-xl bg-zinc-950/80 border border-white/6 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-[12.5px] text-white transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-zinc-400 font-bold tracking-wide">Company Name</label>
                <input
                  type="text"
                  name="company"
                  id="booking_input_company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="e.g. HighGrid Biotech"
                  className="w-full p-3 rounded-xl bg-zinc-950/80 border border-white/6 focus:border-blue-500 focus:outline-none text-[12.5px] text-white transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-zinc-400 font-bold tracking-wide">Project Category</label>
                <select
                  name="projectType"
                  id="booking_select_type"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-xl bg-zinc-950/80 border border-white/6 focus:border-blue-500 focus:outline-none text-[12.5px] text-white transition-colors cursor-pointer"
                >
                  <option value="saas">SaaS Multi-tenant Platform</option>
                  <option value="web">Web Development & API Core</option>
                  <option value="mobile">Native Mobile Application (iOS/Android)</option>
                  <option value="ai">AI Automations & voice agents</option>
                  <option value="custom">Enterprise CRM / Custom Software</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-zinc-400 font-bold tracking-wide">Scope Target Budget Range</label>
              <select
                name="budgetRange"
                id="booking_select_budget"
                value={formData.budgetRange}
                onChange={handleInputChange}
                className="w-full p-3 rounded-xl bg-zinc-950/80 border border-white/6 focus:border-blue-500 focus:outline-none text-[12.5px] text-white transition-colors cursor-pointer"
              >
                <option value="<$10k">Bootstrap Sandbox (&lt;$10k)</option>
                <option value="$10k-$25k">Standard Growth ($10k - $25k)</option>
                <option value="$25k-$50k">Premium Mid-Scale ($25k - $50k)</option>
                <option value=">$50k">Enterprise Infrastructure (&gt;$50k)</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="block text-zinc-400 font-bold tracking-wide">Optional Brief Scope Summary (or bottlenecks)</label>
              <textarea
                name="requirements"
                id="booking_input_requirements"
                rows={3}
                value={formData.requirements}
                onChange={handleInputChange}
                placeholder="Share any key feature requirements, integrations, or deadline details..."
                className="w-full p-3 rounded-xl bg-zinc-950/80 border border-white/6 focus:border-blue-500 focus:outline-none text-[12.5px] text-white transition-colors resize-none"
              />
            </div>

            {/* Form actions navigation */}
            <div className="flex justify-between items-center pt-4 border-t border-white/5">
              <button
                type="button"
                id="booking_back_to_step1"
                onClick={() => setStep(1)}
                className="px-4 py-3 rounded-xl border border-white/5 text-zinc-400 hover:text-white hover:bg-white/3 transition-all cursor-pointer font-semibold"
              >
                Back
              </button>
              <button
                type="submit"
                id="booking_submit_confirmation"
                disabled={loading}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold flex items-center space-x-1.5 hover:brightness-110 active:scale-98 transition-all disabled:opacity-50 cursor-pointer"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin inline-block mr-1" />
                    <span>Configuring Pipeline...</span>
                  </>
                ) : (
                  <>
                    <span>Confirm Secured Booking</span>
                    <LucideIcon name="CheckCircle" size={14} />
                  </>
                )}
              </button>
            </div>

          </form>
        )}

        {/* STEP 3: Booking Success Screen */}
        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-6 space-y-6 flex flex-col items-center"
          >
            {/* Visual Animated Check circle glowing */}
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 shadow-xl shadow-emerald-500/10">
              <LucideIcon name="Check" size={28} className="stroke-[3.5px]" />
            </div>

            <div className="space-y-1.5">
              <h4 className="font-sans font-black text-white text-2xl tracking-tight">
                Appointment Secured!
              </h4>
              <p className="text-zinc-500 text-xs font-mono tracking-widest uppercase">
                Confirmation ID: WXT-{Math.floor(100000 + Math.random() * 900000)}
              </p>
            </div>

            {/* Invoice Spec Receipt */}
            <div className="w-full max-w-md p-4 rounded-2xl bg-[#030303] border border-white/5 space-y-3.5 text-left font-mono text-[11px] text-zinc-400">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-zinc-600">MEETING PARTNER</span>
                <span className="text-white font-sans font-bold">WrotX Solutions Architect</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-zinc-600">SCHEDULED DATE</span>
                <span className="text-white">May {selectedDate}, 2026</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-zinc-600">PREFERRED TIMEOVER</span>
                <span className="text-indigo-400 font-bold">{selectedTimeSlot} (UTC)</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-zinc-600">SECURE MEETING VENUE</span>
                <a href="https://meet.google.com" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline flex items-center space-x-1">
                  <span>g_meet_relay.wrotx</span>
                  <LucideIcon name="ExternalLink" size={10} />
                </a>
              </div>
              <p className="text-[10px] text-zinc-500 font-sans italic text-center pt-1 leading-relaxed">
                Confirmation details alongside secure Google Meet agenda coordinates have been dispatched to <strong>{formData.email}</strong>.
              </p>
            </div>

            {/* Direct primary close actions */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://meet.google.com"
                id="booking_success_meet_link"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-xl bg-zinc-900 border border-white/10 text-xs font-semibold text-white flex items-center space-x-1.5 hover:border-white/20 transition-all"
              >
                <LucideIcon name="Calendar" size={13} className="text-zinc-400" />
                <span>Add Workspace Event</span>
              </a>

              <button
                id="booking_success_dismiss"
                onClick={() => {
                  onClose();
                  // Reset wizard for later triggers
                  setTimeout(() => setStep(1), 300);
                }}
                className="px-5 py-3 rounded-xl bg-blue-600 text-xs font-bold text-white hover:bg-blue-500 transition-colors flex items-center space-x-1.5 cursor-pointer"
              >
                <span>Complete Booking</span>
                <LucideIcon name="ArrowRight" size={13} />
              </button>
            </div>
          </motion.div>
        )}

      </motion.div>
    </div>
  );
};
