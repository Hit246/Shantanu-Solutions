import { Home, ArrowLeft, Search, Mail } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Animation */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[200px] font-bold text-white/10 leading-none">
            404
          </h1>
          <div className="relative -mt-20">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-accent-500/20 rounded-full animate-pulse">
              <Search className="w-12 h-12 text-accent-400" />
            </div>
          </div>
        </div>

        {/* Content */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for seems to have wandered off into the digital void.
        </p>

        {/* Suggestions */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-white mb-4">
            Here's what you can do:
          </h3>
          <ul className="text-left text-gray-300 space-y-2 max-w-md mx-auto">
            <li className="flex items-start gap-2">
              <span className="text-accent-400 mt-1">•</span>
              <span>Check the URL for typos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-400 mt-1">•</span>
              <span>Go back to the previous page</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-400 mt-1">•</span>
              <span>Visit our homepage</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-400 mt-1">•</span>
              <span>Contact us if you think this is an error</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
          >
            <Home className="w-5 h-5" />
            <span>Go to Homepage</span>
          </a>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold border-2 border-white/20 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold border-2 border-white/20 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            <span>Contact Us</span>
          </a>
        </div>

        {/* Popular Links */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-gray-400 mb-4">Popular Pages:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="#services" className="text-accent-400 hover:text-accent-300 transition-colors">
              Services
            </a>
            <span className="text-gray-600">•</span>
            <a href="#portfolio" className="text-accent-400 hover:text-accent-300 transition-colors">
              Portfolio
            </a>
            <span className="text-gray-600">•</span>
            <a href="#about" className="text-accent-400 hover:text-accent-300 transition-colors">
              About Us
            </a>
            <span className="text-gray-600">•</span>
            <a href="#faq" className="text-accent-400 hover:text-accent-300 transition-colors">
              FAQ
            </a>
            <span className="text-gray-600">•</span>
            <a href="#contact" className="text-accent-400 hover:text-accent-300 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
