import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      business: 'Bloom Boutique',
      image: '👩‍💼',
      rating: 5,
      text: 'Shantanu Solutions transformed our online presence completely. Our new website is beautiful, fast, and has increased our online sales by 40%. Highly recommended!',
    },
    {
      name: 'Michael Chen',
      business: 'Tech Innovations Inc.',
      image: '👨‍💻',
      rating: 5,
      text: 'Professional, responsive, and incredibly talented. They delivered our complex web application on time and within budget. The support has been outstanding.',
    },
    {
      name: 'Emily Rodriguez',
      business: 'Sunset Cafe',
      image: '👩‍🍳',
      rating: 5,
      text: 'As a small business owner, I was worried about the cost and complexity. The team made everything easy and affordable. Our website looks amazing and customers love it!',
    },
    {
      name: 'David Thompson',
      business: 'Thompson Law Firm',
      image: '👨‍⚖️',
      rating: 5,
      text: 'Exceptional work! They understood our needs perfectly and created a professional website that reflects our brand. The SEO optimization has brought us many new clients.',
    },
    {
      name: 'Lisa Martinez',
      business: 'Fitness First Studio',
      image: '👩‍🏫',
      rating: 5,
      text: 'The mobile-first approach was perfect for our business. Most of our clients book classes on their phones, and the website works flawlessly. Great job!',
    },
    {
      name: 'James Wilson',
      business: 'Wilson Photography',
      image: '👨‍🎨',
      rating: 5,
      text: 'My portfolio website is stunning! It perfectly showcases my work and has helped me book more high-end clients. The attention to detail is impressive.',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-950 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="scroll-animate bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-accent-500/20" />
              
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{testimonial.image}</div>
                <div>
                  <h4 className="font-bold text-primary-950">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.business}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 scroll-animate">
          <p className="text-lg text-gray-600 mb-6">
            Ready to join our list of satisfied clients?
          </p>
          <a href="#contact" className="btn-primary inline-block">
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
