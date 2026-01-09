import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="scroll-animate">
          <div className="inline-flex items-center space-x-2 bg-accent-500/10 border border-accent-500/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-accent-400" />
            <span className="text-accent-400 text-sm font-medium">Professional Web Development</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your Business with
            <span className="block mt-2 bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
              Professional Websites
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Fast delivery. Affordable pricing. SEO-optimized. We build stunning static and dynamic websites that help your business grow online.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="btn-primary inline-flex items-center space-x-2 group"
            >
              <span>Get Your Free Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold border-2 border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              View Our Work
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 scroll-animate">
          {[
            { number: '150+', label: 'Projects Completed' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '2-8', label: 'Weeks Delivery' },
            { number: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
