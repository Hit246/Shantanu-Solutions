import { useState } from 'react';
import { Calculator, Check, ArrowRight, Sparkles } from 'lucide-react';

const PricingCalculator = () => {
  const [selections, setSelections] = useState({
    websiteType: '',
    pages: '',
    features: [],
    timeline: '',
    support: '',
  });

  const [showQuote, setShowQuote] = useState(false);

  // Pricing logic
  const basePrice = {
    static: 15000,
    dynamic: 50000,
    ecommerce: 100000,
  };

  const pagesPricing = {
    '1-5': 0,
    '6-10': 10000,
    '11-20': 25000,
    '20+': 50000,
  };

  const featuresPricing = {
    cms: 15000,
    blog: 10000,
    booking: 20000,
    payment: 25000,
    analytics: 5000,
    seo: 10000,
    multilingual: 15000,
    api: 20000,
  };

  const timelinePricing = {
    urgent: 1.5, // 50% rush fee
    standard: 1,
    flexible: 0.9, // 10% discount
  };

  const supportPricing = {
    none: 0,
    basic: 5000,
    premium: 10000,
    enterprise: 20000,
  };

  const calculateTotal = () => {
    if (!selections.websiteType) return 0;

    let total = basePrice[selections.websiteType] || 0;
    total += pagesPricing[selections.pages] || 0;
    
    selections.features.forEach(feature => {
      total += featuresPricing[feature] || 0;
    });

    total *= timelinePricing[selections.timeline] || 1;
    total += supportPricing[selections.support] || 0;

    return Math.round(total);
  };

  const handleFeatureToggle = (feature) => {
    setSelections(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const handleGetQuote = () => {
    if (selections.websiteType && selections.pages && selections.timeline && selections.support) {
      setShowQuote(true);
    }
  };

  const total = calculateTotal();
  const isComplete = selections.websiteType && selections.pages && selections.timeline && selections.support;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 scroll-animate">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-accent-500 to-primary-600 rounded-full mb-4">
            <Calculator className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-950 mb-4">
            Pricing Calculator
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get an instant estimate for your project. Customize your requirements and see the pricing in real-time.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calculator Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Website Type */}
            <div className="bg-white rounded-2xl shadow-lg p-6 scroll-animate">
              <h3 className="text-xl font-bold text-primary-950 mb-4">
                1. What type of website do you need?
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { id: 'static', label: 'Static Website', desc: 'Simple, fast, informational' },
                  { id: 'dynamic', label: 'Dynamic Website', desc: 'CMS, interactive features' },
                  { id: 'ecommerce', label: 'E-commerce', desc: 'Online store, payments' },
                ].map(type => (
                  <button
                    key={type.id}
                    onClick={() => setSelections({ ...selections, websiteType: type.id })}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      selections.websiteType === type.id
                        ? 'border-accent-500 bg-accent-50'
                        : 'border-gray-200 hover:border-accent-300'
                    }`}
                  >
                    <div className="font-semibold text-primary-950">{type.label}</div>
                    <div className="text-sm text-gray-600 mt-1">{type.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Number of Pages */}
            <div className="bg-white rounded-2xl shadow-lg p-6 scroll-animate">
              <h3 className="text-xl font-bold text-primary-950 mb-4">
                2. How many pages do you need?
              </h3>
              <div className="grid md:grid-cols-4 gap-4">
                {['1-5', '6-10', '11-20', '20+'].map(range => (
                  <button
                    key={range}
                    onClick={() => setSelections({ ...selections, pages: range })}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      selections.pages === range
                        ? 'border-accent-500 bg-accent-50'
                        : 'border-gray-200 hover:border-accent-300'
                    }`}
                  >
                    <div className="font-semibold text-primary-950 text-center">{range} pages</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl shadow-lg p-6 scroll-animate">
              <h3 className="text-xl font-bold text-primary-950 mb-4">
                3. Select additional features (optional)
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { id: 'cms', label: 'Content Management System', price: '₹15,000' },
                  { id: 'blog', label: 'Blog System', price: '₹10,000' },
                  { id: 'booking', label: 'Booking/Appointment System', price: '₹20,000' },
                  { id: 'payment', label: 'Payment Gateway', price: '₹25,000' },
                  { id: 'analytics', label: 'Advanced Analytics', price: '₹5,000' },
                  { id: 'seo', label: 'Advanced SEO Package', price: '₹10,000' },
                  { id: 'multilingual', label: 'Multi-language Support', price: '₹15,000' },
                  { id: 'api', label: 'API Integration', price: '₹20,000' },
                ].map(feature => (
                  <button
                    key={feature.id}
                    onClick={() => handleFeatureToggle(feature.id)}
                    className={`p-3 rounded-lg border-2 transition-all text-left flex items-center gap-3 ${
                      selections.features.includes(feature.id)
                        ? 'border-accent-500 bg-accent-50'
                        : 'border-gray-200 hover:border-accent-300'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                      selections.features.includes(feature.id)
                        ? 'bg-accent-500 border-accent-500'
                        : 'border-gray-300'
                    }`}>
                      {selections.features.includes(feature.id) && (
                        <Check className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-primary-950 text-sm">{feature.label}</div>
                      <div className="text-xs text-gray-600">{feature.price}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-2xl shadow-lg p-6 scroll-animate">
              <h3 className="text-xl font-bold text-primary-950 mb-4">
                4. What's your timeline?
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { id: 'urgent', label: 'Urgent (1-2 weeks)', note: '+50% rush fee' },
                  { id: 'standard', label: 'Standard (3-4 weeks)', note: 'Standard pricing' },
                  { id: 'flexible', label: 'Flexible (5+ weeks)', note: '10% discount' },
                ].map(timeline => (
                  <button
                    key={timeline.id}
                    onClick={() => setSelections({ ...selections, timeline: timeline.id })}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      selections.timeline === timeline.id
                        ? 'border-accent-500 bg-accent-50'
                        : 'border-gray-200 hover:border-accent-300'
                    }`}
                  >
                    <div className="font-semibold text-primary-950">{timeline.label}</div>
                    <div className="text-sm text-gray-600 mt-1">{timeline.note}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Support */}
            <div className="bg-white rounded-2xl shadow-lg p-6 scroll-animate">
              <h3 className="text-xl font-bold text-primary-950 mb-4">
                5. Do you need ongoing support?
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { id: 'none', label: 'No Support', desc: 'One-time delivery', price: '₹0/month' },
                  { id: 'basic', label: 'Basic Support', desc: 'Bug fixes, minor updates', price: '₹5,000/month' },
                  { id: 'premium', label: 'Premium Support', desc: 'Priority support, updates', price: '₹10,000/month' },
                  { id: 'enterprise', label: 'Enterprise', desc: '24/7 support, dedicated team', price: '₹20,000/month' },
                ].map(support => (
                  <button
                    key={support.id}
                    onClick={() => setSelections({ ...selections, support: support.id })}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      selections.support === support.id
                        ? 'border-accent-500 bg-accent-50'
                        : 'border-gray-200 hover:border-accent-300'
                    }`}
                  >
                    <div className="font-semibold text-primary-950">{support.label}</div>
                    <div className="text-sm text-gray-600 mt-1">{support.desc}</div>
                    <div className="text-sm font-semibold text-accent-600 mt-2">{support.price}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Price Summary - Sticky */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-primary-950 to-primary-800 rounded-2xl shadow-2xl p-6 text-white sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-6 h-6 text-accent-400" />
                <h3 className="text-2xl font-bold">Your Estimate</h3>
              </div>

              {total > 0 ? (
                <>
                  <div className="mb-6">
                    <div className="text-sm text-gray-300 mb-2">Estimated Project Cost</div>
                    <div className="text-4xl font-bold text-accent-400">
                      ₹{total.toLocaleString('en-IN')}
                    </div>
                    {selections.support !== 'none' && (
                      <div className="text-sm text-gray-300 mt-2">
                        + {supportPricing[selections.support].toLocaleString('en-IN')}/month support
                      </div>
                    )}
                  </div>

                  <div className="space-y-3 mb-6 pb-6 border-b border-white/20">
                    {selections.websiteType && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Website Type</span>
                        <span className="font-semibold capitalize">{selections.websiteType}</span>
                      </div>
                    )}
                    {selections.pages && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Pages</span>
                        <span className="font-semibold">{selections.pages}</span>
                      </div>
                    )}
                    {selections.features.length > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Features</span>
                        <span className="font-semibold">{selections.features.length} selected</span>
                      </div>
                    )}
                    {selections.timeline && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Timeline</span>
                        <span className="font-semibold capitalize">{selections.timeline}</span>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={handleGetQuote}
                    disabled={!isComplete}
                    className={`w-full py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                      isComplete
                        ? 'bg-accent-500 hover:bg-accent-600 text-white'
                        : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <span>Get Detailed Quote</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <p className="text-xs text-gray-400 mt-4 text-center">
                    This is an estimate. Final pricing may vary based on specific requirements.
                  </p>
                </>
              ) : (
                <div className="text-center py-8">
                  <Calculator className="w-16 h-16 text-accent-400/50 mx-auto mb-4" />
                  <p className="text-gray-300">
                    Select your requirements to see the estimated cost
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quote Modal */}
        {showQuote && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-primary-950 mb-2">
                  Quote Ready!
                </h3>
                <p className="text-gray-600">
                  Your estimated project cost is
                </p>
                <div className="text-4xl font-bold text-accent-600 my-4">
                  ₹{total.toLocaleString('en-IN')}
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <a
                  href="#contact"
                  onClick={() => setShowQuote(false)}
                  className="btn-primary w-full text-center block"
                >
                  Request Detailed Proposal
                </a>
                <button
                  onClick={() => setShowQuote(false)}
                  className="w-full py-3 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Continue Exploring
                </button>
              </div>

              <p className="text-xs text-gray-500 text-center">
                We'll get back to you within 24 hours with a detailed proposal
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PricingCalculator;
