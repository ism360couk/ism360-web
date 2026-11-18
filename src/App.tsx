import {useState} from 'react';
import {AboutAndProofSection} from './components/AboutAndProofSection';
import {AccreditationSelector} from './components/AccreditationSelector';
import {ContactSection} from './components/ContactSection';
import {FaqSection} from './components/FaqSection';
import {Footer} from './components/Footer';
import {Header} from './components/Header';
import {HeroSection} from './components/HeroSection';
import {ServicesSection} from './components/ServicesSection';

export default function App() {
  const [selectedService, setSelectedService] = useState('Cyber Essentials & CE+');

  const scrollToContact = (serviceValue?: string) => {
    if (serviceValue) {
      setSelectedService(serviceValue);
    }
    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-[#0E3B6E] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>

      <Header onBookClick={() => scrollToContact()} />

      <main id="main-content">
        <HeroSection onPrimaryCta={() => scrollToContact()} />
        <ServicesSection onSelectService={(service) => scrollToContact(service)} />
        <AccreditationSelector onRequestProposal={(service) => scrollToContact(service)} />
        <AboutAndProofSection onBookClick={() => scrollToContact()} />
        <FaqSection />
        <ContactSection preselectedService={selectedService} />
      </main>

      <Footer />
    </div>
  );
}
