import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How much does a website cost?',
      answer: 'Our pricing varies based on your needs. Static websites start from ₹15,000, while dynamic websites with custom functionality range from ₹50,000 to ₹2,50,000. We also offer maintenance packages starting at ₹5,000/month. Contact us for a personalized quote based on your specific requirements.'
    },
    {
      question: 'How long does it take to build a website?',
      answer: 'Timeline depends on the project complexity. Static websites typically take 2-3 weeks, while dynamic websites with custom features take 4-8 weeks. We provide a detailed timeline during the initial consultation and keep you updated throughout the development process.'
    },
    {
      question: 'Do you provide hosting and domain services?',
      answer: 'Yes! We can help you with domain registration and hosting setup. We recommend reliable hosting providers based on your needs and budget. We also offer managed hosting as part of our maintenance packages for hassle-free website management.'
    },
    {
      question: 'Will my website be mobile-friendly?',
      answer: 'Absolutely! All our websites are built with a mobile-first approach, ensuring they look great and function perfectly on all devices - smartphones, tablets, and desktops. We test thoroughly across different screen sizes and browsers.'
    },
    {
      question: 'Can I update the website content myself?',
      answer: 'Yes! For dynamic websites, we integrate a user-friendly Content Management System (CMS) that allows you to easily update text, images, and other content without technical knowledge. We also provide training and documentation to help you manage your site.'
    },
    {
      question: 'Do you offer SEO services?',
      answer: 'Yes! Basic SEO optimization is included in all our packages. This includes meta tags, proper heading structure, fast loading speeds, and mobile optimization. For advanced SEO services like keyword research, content optimization, and link building, we offer separate SEO packages.'
    },
    {
      question: 'What if I need changes after the website is launched?',
      answer: 'We provide 30-90 days of free support (depending on your package) after launch for bug fixes and minor adjustments. For ongoing updates and maintenance, we offer monthly maintenance packages starting at ₹5,000/month that include regular updates, security monitoring, and priority support.'
    },
    {
      question: 'Do you provide e-commerce functionality?',
      answer: 'Yes! We build fully functional e-commerce websites with product catalogs, shopping carts, payment gateway integration (Razorpay, PayU, etc.), order management, and inventory tracking. E-commerce sites are part of our dynamic website offerings.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept bank transfers (NEFT/RTGS/IMPS), UPI payments, and online payment gateways. Typically, we follow a milestone-based payment structure: 50% advance, 40% after design approval, and 10% after final delivery and launch.'
    },
    {
      question: 'What happens if I\'m not satisfied with the design?',
      answer: 'We work closely with you throughout the design process and offer multiple revision rounds to ensure you\'re completely satisfied. We don\'t proceed to development until you approve the design. Your satisfaction is our priority, and we\'re committed to delivering a website you\'ll love.'
    },
    {
      question: 'Do you sign a contract or agreement?',
      answer: 'Yes, we provide a detailed project agreement that outlines the scope of work, timeline, payment terms, deliverables, and responsibilities of both parties. This ensures transparency and protects both your interests and ours.'
    },
    {
      question: 'Can you help with website content and copywriting?',
      answer: 'Yes! While we encourage clients to provide their own content (as they know their business best), we can assist with content structuring, copywriting, and professional content creation for an additional fee. We can also recommend professional copywriters if needed.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-accent-500 to-primary-600 rounded-full mb-4">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-950 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about our services.
          </p>
        </div>

        <div className="space-y-4 scroll-animate">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-accent-400 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-primary-950 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-accent-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-12 scroll-animate">
          <p className="text-lg text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="#contact"
            className="btn-primary inline-block"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
