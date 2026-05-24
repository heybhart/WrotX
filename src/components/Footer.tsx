import React from 'react';
import { LucideIcon } from './LucideIcon';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020202] border-t border-white/5 relative z-10 pt-20 pb-8 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 pb-16 border-b border-white/5">
          
          {/* Brand block (Col span 5 on desktop) */}
          <div className="col-span-2 md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3.5 group">
              <div className="relative w-8 h-8 flex items-center justify-center rounded-lg bg-black border border-white/10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-purple-600/5 to-transparent" />
                <span className="font-mono font-black text-base text-white select-none">W</span>
              </div>
              <span className="font-sans font-extrabold text-[#ffffff] tracking-tight text-lg">
                Wrot<span className="brand-text-gradient">X</span>
              </span>
            </div>

            <p className="text-zinc-500 max-w-sm leading-relaxed text-[11.5px] font-normal font-sans pr-6">
              Elite engineering agency hand-crafting reliable digital products, high-throughput microservices, and human-like conversational voice agents for venture startups and enterprise organizations globally.
            </p>

            {/* Social icons */}
            <div className="flex items-center space-x-3 pt-2">
              {[
                { name: 'Github', href: 'https://github.com/wrotx' },
                { name: 'Linkedin', href: 'https://linkedin.com/company/wrotx' },
                { name: 'Phone', href: 'https://wa.me/919322208664' }
              ].map((soc) => (
                <a
                  key={soc.name}
                  href={soc.href}
                  target="_blank"
                  rel="noreferrer"
                  id={`footer_social_${soc.name.toLowerCase()}`}
                  className="w-8 h-8 rounded-lg border border-white/5 bg-white/3 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/12 transition-all"
                  aria-label={soc.name}
                >
                  <LucideIcon name={soc.name} size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Services specs (Col span 2) */}
          <div className="col-span-1 md:col-span-2.5 space-y-4">
            <h4 className="font-mono text-[9px] font-bold text-zinc-500 uppercase tracking-widest">
              Capabilities
            </h4>
            <ul className="space-y-2 text-zinc-400 font-sans">
              <li><a href="#services" className="hover:text-white transition-colors">Custom Web Apps</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Mobile Engineering</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">AI &amp; RAG Systems</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">SaaS Architectures</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">API &amp; Integrations</a></li>
            </ul>
          </div>

          {/* Column 3: Tech Ecosystem (Col span 2) */}
          <div className="col-span-1 md:col-span-2.5 space-y-4">
            <h4 className="font-mono text-[9px] font-bold text-zinc-500 uppercase tracking-widest">
              Tech Stack
            </h4>
            <ul className="space-y-2 text-zinc-400 font-sans">
              <li><a href="#tech-stack" className="hover:text-white transition-colors">Next.js Framework</a></li>
              <li><a href="#tech-stack" className="hover:text-white transition-colors">Node &amp; Express API</a></li>
              <li><a href="#tech-stack" className="hover:text-white transition-colors">PostgreSQL / Redis</a></li>
              <li><a href="#tech-stack" className="hover:text-white transition-colors">Gemini Live SDK</a></li>
              <li><a href="#tech-stack" className="hover:text-white transition-colors">Docker Containers</a></li>
            </ul>
          </div>

          {/* Column 4: Location Contact specs (Col span 2) */}
          <div className="col-span-2 md:col-span-2 space-y-4">
            <h4 className="font-mono text-[9px] font-bold text-zinc-500 uppercase tracking-widest">
              Contact Specs
            </h4>
            <ul className="space-y-2 text-zinc-400 font-sans leading-relaxed">
              <li className="flex items-center space-x-1.5">
                <LucideIcon name="Mail" size={11} className="text-zinc-600" />
                <span>wrotX@gmail.com</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <LucideIcon name="Phone" size={11} className="text-zinc-600" />
                <span>+91 9322208664</span>
              </li>
              <li className="text-[10px] text-zinc-500 pt-2 font-mono">
                INDIA RELAYS
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & legal disclaimers */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-600 text-[10px] font-mono uppercase tracking-wider">
          <div className="flex items-center space-x-2">
            <span>&copy; 2024 - {currentYear} WROTX SOLUTIONS. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-zinc-700">|</span>
            <span>TERMS OF ENGAGEMENT</span>
            <span className="text-zinc-700">|</span>
            <span>PRIVACY &amp; PROTECTION</span>
            <span className="text-zinc-700">|</span>
            <span className="text-blue-500/60 font-bold">WXT v2.8 PROD</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
