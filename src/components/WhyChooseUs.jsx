import { Clock, Headphones, TrendingUp, Smartphone, Shield, LifeBuoy } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'We deliver projects on time, typically within 2-8 weeks depending on complexity.',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Our responsive support team is always available to help you with any questions or issues.',
    },
    {
      icon: TrendingUp,
      title: 'SEO Optimized',
      description: 'Every website we build is optimized for search engines from day one to help you rank higher.',
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'All our websites are designed mobile-first to ensure perfect experience on any device.',
    },
    {
      icon: Shield,
      title: 'Money-Back Guarantee',
      description: "If you're not satisfied with our work, we'll refund your money. No questions asked.",
    },
    {
      icon: LifeBuoy,
      title: 'Ongoing Support',
      description: 'We provide continued support and maintenance to keep your website running smoothly.',
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gray-50 dark:bg-gradient-to-br dark:from-primary-950 dark:to-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-950 dark:text-white mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're committed to delivering exceptional results and outstanding service
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="scroll-animate bg-white dark:bg-white/10 dark:backdrop-blur-sm border border-gray-200 dark:border-white/20 rounded-xl p-6 hover:bg-gray-50 dark:hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="bg-gradient-to-r from-accent-500 to-primary-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <reason.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary-950 dark:text-white mb-3">{reason.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 scroll-animate">
          <div className="bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-accent-600 dark:text-accent-400 mb-2">100%</div>
                <div className="text-gray-600 dark:text-gray-300">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent-600 dark:text-accent-400 mb-2">2+ Years</div>
                <div className="text-gray-600 dark:text-gray-300">Industry Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent-600 dark:text-accent-400 mb-2">5+</div>
                <div className="text-gray-600 dark:text-gray-300">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
