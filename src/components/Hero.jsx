import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-primary-950 dark:via-dark-900 dark:to-dark-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/10 dark:bg-accent-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/10 dark:bg-primary-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="scroll-animate">
          <div className="inline-flex items-center space-x-2 bg-accent-500/10 dark:bg-accent-500/20 border border-accent-500/20 dark:border-accent-500/30 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-accent-600 dark:text-accent-400" />
            <span className="text-accent-700 dark:text-accent-400 text-sm font-medium">Professional Web Development</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-950 dark:text-white mb-6 leading-tight">
            Transform Your Business with
            <span className="block mt-2 bg-gradient-to-r from-primary-600 to-accent-500 dark:from-accent-400 dark:to-accent-600 bg-clip-text text-transparent">
              Professional Websites
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
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
              className="bg-white/80 dark:bg-white/10 backdrop-blur-sm text-primary-900 dark:text-white px-8 py-3 rounded-lg font-semibold border-2 border-primary-200 dark:border-white/20 hover:bg-white dark:hover:bg-white/20 transition-all duration-300"
            >
              View Our Work
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 scroll-animate">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-accent-400 mb-2">5+</div>
            <div className="text-gray-600 dark:text-gray-400">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-accent-400 mb-2">10+</div>
            <div className="text-gray-600 dark:text-gray-400">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-accent-400 mb-2">99%</div>
            <div className="text-gray-600 dark:text-gray-400">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-accent-400 mb-2">24/7</div>
            <div className="text-gray-600 dark:text-gray-400">Support Available</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-600 dark:border-accent-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-600 dark:bg-accent-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
