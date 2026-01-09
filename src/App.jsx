import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollAnimation } from './utils/scrollAnimations';
import './index.css';

function App() {
  useScrollAnimation();

  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <WhyChooseUs />
        <Testimonials />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
