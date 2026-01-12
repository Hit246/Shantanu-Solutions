import { useEffect, useState } from 'react';
import { useScrollAnimation } from './utils/scrollAnimations';
import { initGA } from './utils/analytics';
import { initAccessibility } from './utils/accessibility';
import { organizationStructuredData } from './utils/structuredData';
import './index.css';

// Components - Import directly (no lazy loading to prevent blank sections)
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Portfolio from './components/Portfolio';
import About from './components/About';
import FAQ from './components/FAQ';
import PricingCalculator from './components/PricingCalculator';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import BookingSystem from './components/BookingSystem';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import DarkModeToggle from './components/DarkModeToggle';
import TawkToChat from './components/TawkToChat';
import CookieConsent from './components/CookieConsent';
import SEO from './components/SEO';


function App() {
  useScrollAnimation();
  const [currentView, setCurrentView] = useState('home');
  const [blogSlug, setBlogSlug] = useState('');

  // Initialize Google Analytics and Accessibility
  useEffect(() => {
    const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (gaId) {
      initGA(gaId);
    }
    
    // Initialize accessibility features
    initAccessibility();
  }, []);

  // Handle hash changes for blog routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#blog/')) {
        const slug = hash.replace('#blog/', '');
        setBlogSlug(slug);
        setCurrentView('blog-post');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentView('home');
      }
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="App bg-white dark:bg-dark-950 transition-colors duration-300">
      {/* SEO Component with structured data */}
      <SEO structuredData={organizationStructuredData} />
      
      <Navbar />
      
      {currentView === 'blog-post' ? (
        /* Blog Post View */
        <main id="main-content">
          <BlogPost slug={blogSlug} />
        </main>
      ) : (
        /* Home View */
        <main id="main-content">
          <Hero />
          <Services />
          <Process />
          <WhyChooseUs />
          <Testimonials />
          <Portfolio />
          <About />
          <PricingCalculator />
          <FAQ />
          <Blog />
          <BookingSystem />
          <Newsletter />
          <Contact />
        </main>
      )}
      
      <Footer />
      
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
