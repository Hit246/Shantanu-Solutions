import { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address', {
        duration: 4000,
        position: 'top-center',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Here you would integrate with your email service provider
      // Options: Mailchimp, ConvertKit, EmailJS, or custom backend
      
      // For now, we'll simulate a successful subscription
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Successfully subscribed! Check your email for confirmation.', {
        duration: 5000,
        position: 'top-center',
        icon: '🎉',
      });
      
      setEmail('');
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast.error('Failed to subscribe. Please try again later.', {
        duration: 4000,
        position: 'top-center',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center scroll-animate">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-500/20 rounded-full mb-6">
            <Mail className="w-8 h-8 text-accent-400" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with Web Development Tips
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get exclusive insights, industry trends, and special offers delivered straight to your inbox. 
            Join our community of forward-thinking business owners!
          </p>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-accent-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-white mb-1">Expert Tips</h3>
                <p className="text-sm text-gray-400">
                  Weekly web development and SEO insights
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-accent-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-white mb-1">Exclusive Offers</h3>
                <p className="text-sm text-gray-400">
                  Special discounts for subscribers only
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-accent-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-white mb-1">Latest Trends</h3>
                <p className="text-sm text-gray-400">
                  Stay ahead with industry updates
                </p>
              </div>
            </div>
          </div>

          {/* Subscription Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg border-2 border-transparent focus:border-accent-400 focus:ring-2 focus:ring-accent-400 outline-none transition-all text-gray-900"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg'
                }`}
              >
                <span>{isSubmitting ? 'Subscribing...' : 'Subscribe'}</span>
                <Send className={`w-5 h-5 ${isSubmitting ? 'animate-pulse' : ''}`} />
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              We respect your privacy. Unsubscribe anytime. Read our{' '}
              <a href="#privacy" className="text-accent-400 hover:text-accent-300 underline">
                Privacy Policy
              </a>.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
