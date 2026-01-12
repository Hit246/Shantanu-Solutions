import { useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import LoadingScreen from './components/LoadingScreen';
import WhatsAppButton from './components/WhatsAppButton';
import DarkModeToggle from './components/DarkModeToggle';
import TawkToChat from './components/TawkToChat';
import CookieConsent from './components/CookieConsent';
import SEO from './components/SEO';
import { organizationStructuredData } from './utils/structuredData';
import { useScrollAnimation } from './utils/scrollAnimations';
import { initGA } from './utils/analytics';
import { initAccessibility } from './utils/accessibility';
import './index.css';

// Code splitting for better performance - lazy load heavy components
const Portfolio = lazy(() => import('./components/Portfolio'));
const About = lazy(() => import('./components/About'));
const FAQ = lazy(() => import('./components/FAQ'));
const PricingCalculator = lazy(() => import('./components/PricingCalculator'));
const Blog = lazy(() => import('./components/Blog'));
const BookingSystem = lazy(() => import('./components/BookingSystem'));
const Newsletter = lazy(() => import('./components/Newsletter'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  useScrollAnimation();

  // Initialize Google Analytics and Accessibility
  useEffect(() => {
    const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (gaId) {
      initGA(gaId);
    }
    
    // Initialize accessibility features
    initAccessibility();
  }, []);

  return (
    <div className="App bg-white dark:bg-dark-950 transition-colors duration-300">
      {/* SEO Component with structured data */}
      <SEO structuredData={organizationStructuredData} />
      
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <Process />
        <WhyChooseUs />
        <Testimonials />
        
        {/* Lazy loaded components with loading fallback */}
        <Suspense fallback={<LoadingScreen />}>
          <Portfolio />
          <About />
          <FAQ />
          <PricingCalculator />
          <BookingSystem />
          <Blog />
          <Newsletter />
          <Contact />
        </Suspense>
      </main>
      
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      
      {/* Floating Action Buttons */}
      <WhatsAppButton />
      <DarkModeToggle />
      
      {/* Live Chat Widget */}
      <TawkToChat />
      
      {/* Cookie Consent Banner */}
      <CookieConsent />
    </div>
  );
}

export default App;
