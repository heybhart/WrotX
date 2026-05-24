import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { TechStack } from './components/TechStack';
import { Process } from './components/Process';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const handleOpenConsultation = () => {
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  const handleViewProjects = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 flex flex-col font-sans selection:bg-blue-500/30 selection:text-white">
      {/* Dynamic Header */}
      <Header onOpenConsultation={handleOpenConsultation} />

      {/* Main Layout Sections */}
      <main className="flex-grow">
        {/* Hero Section with Live Estimator Widget */}
        <Hero 
          onOpenConsultation={handleOpenConsultation} 
          onViewProjects={handleViewProjects} 
        />

        {/* 8-Segment trusted services Grid panel */}
        <Services />

        {/* Portfolio Showcase embedded with active HTML mini-previews */}
        <Portfolio />

        {/* Dynamic technology stack filter lists */}
        <TechStack />

        {/* 6-Phase interactive workflow timeline */}
        <Process />

        {/* Animated Metrics Counter Telemetry section */}
        <Stats />

        {/* Executive about cards detailing mission, vision, and AI-First Ethos */}
        <About />

        {/* Interactive project planning RFQ form and copiers */}
        <Contact onOpenConsultation={handleOpenConsultation} />
      </main>

      {/* Compliant multi-column footer */}
      <Footer />

      {/* Interactive Calendly Appointment Booking Simulator Overlay */}
      <AnimatePresence>
        {isConsultationOpen && (
          <ConsultationModal 
            isOpen={isConsultationOpen} 
            onClose={handleCloseConsultation} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
