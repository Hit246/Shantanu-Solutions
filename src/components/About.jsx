import { Users, Target, Award, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Your success is our success. We prioritize your needs and goals in every decision.',
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable results that help your business grow.',
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'We never compromise on quality. Every project gets our full attention and expertise.',
    },
    {
      icon: Heart,
      title: 'Passionate',
      description: 'We love what we do, and it shows in the quality of our work and dedication to clients.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-950 mb-6">
              About Shantanu Solutions
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We're a team of passionate web developers and designers dedicated to helping small businesses, 
              startups, and professionals establish a powerful online presence.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              With over 5 years of experience and 150+ successful projects, we understand what it takes to 
              create websites that not only look great but also drive real business results.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our approach is simple: we listen to your needs, understand your goals, and deliver a website 
              that exceeds your expectations. We believe in transparent communication, fair pricing, and 
              building long-term relationships with our clients.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-accent-600 mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-accent-600 mb-2">150+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-accent-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-accent-600 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right side - Values */}
          <div className="scroll-animate">
            <div className="bg-gradient-to-br from-primary-950 to-primary-900 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-8">Our Values</h3>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-accent-500 to-primary-600 p-3 rounded-lg flex-shrink-0">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{value.title}</h4>
                      <p className="text-gray-300">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
