import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LucideIcon } from './LucideIcon';

interface HeaderProps {
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link tracker
      const sections = ['services', 'portfolio', 'tech-stack', 'process', 'about', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -200 && rect.top <= 400) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        id="app_header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-4 bg-[#050505]/85 backdrop-blur-md border-b border-white/8 shadow-2xl' 
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#home" 
              id="wrotx_logo"
              className="flex items-center space-x-3.5 group cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="relative w-9 h-9 flex items-center justify-center rounded-lg bg-black/80 border border-white/12 overflow-hidden shadow-lg shadow-blue-500/5">
                <div className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-tr from-blue-600/20 via-purple-600/10 to-transparent group-hover:opacity-100 transition-opacity duration-300" />
                {/* Visual geometric asset */}
                <div className="relative font-mono font-black text-xl text-white tracking-tighter select-none">
                  W
                </div>
                {/* Dynamic animated glow line */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 opacity-60 group-hover:opacity-100 transition-all duration-300 transform scale-x-75 group-hover:scale-x-100" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold tracking-tight text-[19px] text-white group-hover:text-blue-400 transition-colors duration-200">
                  Wrot<span className="brand-text-gradient">X</span>
                </span>
                <span className="font-mono text-[9px] text-zinc-500 tracking-widest uppercase">
                  Software Agency
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1.5 p-1 bg-white/3 border border-white/5 rounded-full backdrop-blur-sm self-center">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    id={`nav_link_${link.href.replace('#', '')}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                      isActive 
                        ? 'text-white font-semibold' 
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-white/7 rounded-full border border-white/10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>
                );
              })}
            </nav>

            {/* CTA Book a Call Button */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                id="header_book_call_btn"
                onClick={onOpenConsultation}
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xs font-semibold text-white rounded-full group bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 group-hover:from-blue-500 group-hover:via-indigo-500 group-hover:to-purple-600 hover:text-white focus:ring-2 focus:outline-none focus:ring-blue-800 transition duration-300 shadow-[0_4px_20px_rgba(99,102,241,0.15)] cursor-pointer"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#0a0a0d] rounded-full group-hover:bg-opacity-0">
                  Book a Discovery Call
                </span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex md:hidden">
              <button
                id="mobile_menu_toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/8 transition-all"
                aria-label="Toggle menu"
              >
                <LucideIcon name={isMobileMenuOpen ? 'X' : 'Menu'} size={21} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-[77px] z-45 md:hidden"
          >
            <div className="bento-card border-t-0 p-6 shadow-2xl flex flex-col space-y-4 max-h-[85vh] overflow-y-auto bg-gradient-to-b from-[#050505]/95 to-zinc-950">
              <div className="space-y-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <button
                      key={link.href}
                      id={`mobile_nav_link_${link.href.replace('#', '')}`}
                      onClick={() => handleLinkClick(link.href)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                        isActive 
                          ? 'bg-white/8 text-white border-l-2 border-blue-500 pl-3' 
                          : 'text-zinc-400 hover:bg-white/3 hover:text-white'
                      }`}
                    >
                      <span>{link.label}</span>
                      <LucideIcon name="ArrowRight" size={14} className="opacity-40" />
                    </button>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-white/8 space-y-3">
                <button
                  id="mobile_book_call_button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-medium text-sm flex items-center justify-center space-x-2 shadow-lg"
                >
                  <LucideIcon name="Calendar" size={16} />
                  <span>Book Free Discovery Call</span>
                </button>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-3.5 rounded-xl border border-white/8 text-zinc-300 font-medium text-sm text-center block hover:bg-white/3"
                >
                  Request a Digital Proposal
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
