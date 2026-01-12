import { Rocket } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800">
      <div className="text-center">
        {/* Logo Animation */}
        <div className="mb-8 relative">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-accent-500 to-primary-600 rounded-full animate-bounce">
            <Rocket className="w-12 h-12 text-white" />
          </div>
          {/* Pulse rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-accent-500/30 rounded-full animate-ping"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center animation-delay-150">
            <div className="w-32 h-32 bg-accent-500/20 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="text-3xl font-bold text-white mb-4">
          Shantanu <span className="text-accent-400">Solutions</span>
        </h1>

        {/* Loading Text */}
        <p className="text-gray-300 mb-6 animate-pulse">
          Loading your experience...
        </p>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-gradient-to-r from-accent-500 to-primary-600 rounded-full animate-loading-bar"></div>
        </div>
      </div>

      <style>{`
        @keyframes loading-bar {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
        .animate-loading-bar {
          animation: loading-bar 2s ease-in-out infinite;
        }
        .animation-delay-150 {
          animation-delay: 150ms;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
