import { Check, FileText, Zap, Headphones } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: 'Static Websites',
      price: '₹15,000 - ₹50,000',
      timeline: '2-3 Weeks',
      description: 'Perfect for businesses that need a professional online presence',
      features: [
        '5-10 responsive pages',
        'Modern, mobile-first design',
        'SEO basics included',
        'Contact forms',
        'Fast loading speeds',
        'Social media integration',
        '30 days of support',
      ],
      idealFor: 'Restaurants, portfolios, small businesses, landing pages',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Zap,
      title: 'Dynamic Websites',
      price: '₹50,000 - ₹2,50,000',
      timeline: '4-8 Weeks',
      description: 'Full-featured websites with custom functionality',
      features: [
        'Custom functionality',
        'Content Management System',
        'Database integration',
        'User authentication',
        'E-commerce capabilities',
        'Advanced SEO optimization',
        'Analytics integration',
        '90 days of support',
      ],
      idealFor: 'E-commerce stores, membership sites, web applications',
      color: 'from-accent-500 to-primary-600',
      featured: true,
    },
    {
      icon: Headphones,
      title: 'Maintenance & Support',
      price: 'From ₹5,000/month',
      timeline: 'Ongoing',
      description: 'Keep your website running smoothly and securely',
      features: [
        'Regular content updates',
        'Security monitoring',
        'Performance optimization',
        'Backup management',
        'Bug fixes & troubleshooting',
        'Priority support',
        'Monthly reports',
        'Software updates',
      ],
      idealFor: 'All website owners who want peace of mind',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-950 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the perfect package for your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`scroll-animate bg-white dark:bg-dark-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                service.featured ? 'ring-2 ring-accent-500 dark:ring-accent-400 transform md:scale-105' : ''
              }`}
            >
              {service.featured && (
                <div className="bg-gradient-to-r from-accent-500 to-primary-600 text-white text-center py-2 text-sm font-semibold">
                  MOST POPULAR
                </div>
              )}
              
              <div className="p-8">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} mb-4`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-primary-950 dark:text-white mb-2">
                  {service.title}
                </h3>
                
                <div className="mb-4">
                  <div className="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-1">
                    {service.price}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {service.timeline}
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-accent-500 dark:text-accent-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mb-6 p-4 bg-gray-50 dark:bg-dark-700 rounded-lg">
                  <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Ideal For:
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {service.idealFor}
                  </div>
                </div>
                
                <a
                  href="#contact"
                  className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    service.featured
                      ? 'bg-gradient-to-r from-accent-500 to-primary-600 text-white hover:shadow-lg hover:scale-105'
                      : 'bg-gray-100 dark:bg-dark-700 text-primary-900 dark:text-white hover:bg-gray-200 dark:hover:bg-dark-600'
                  }`}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
