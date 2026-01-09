import { ExternalLink, ShoppingCart, Briefcase, Utensils, Dumbbell, Camera, Heart } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Fashion Store',
      category: 'E-Commerce',
      icon: ShoppingCart,
      description: 'Modern online boutique with seamless checkout experience',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Corporate Business Site',
      category: 'Corporate',
      icon: Briefcase,
      description: 'Professional website for a consulting firm',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Restaurant & Cafe',
      category: 'Restaurant',
      icon: Utensils,
      description: 'Appetizing website with online reservation system',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Fitness Studio',
      category: 'Health & Fitness',
      icon: Dumbbell,
      description: 'Dynamic site with class booking and member portal',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Photography Portfolio',
      category: 'Portfolio',
      icon: Camera,
      description: 'Stunning gallery showcase for professional photographer',
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      title: 'Healthcare Clinic',
      category: 'Healthcare',
      icon: Heart,
      description: 'Patient-friendly website with appointment booking',
      gradient: 'from-teal-500 to-cyan-500',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-950 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore some of our recent projects across various industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="scroll-animate group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Project visual */}
              <div className={`h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <project.icon className="w-24 h-24 text-white/90 z-10" />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary-950/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center p-6">
                    <ExternalLink className="w-12 h-12 text-accent-400 mx-auto mb-4" />
                    <p className="text-white text-sm">View Project Details</p>
                  </div>
                </div>
              </div>

              {/* Project info */}
              <div className="p-6">
                <div className="text-sm text-accent-600 font-semibold mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-primary-950 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 scroll-animate">
          <p className="text-lg text-gray-600 mb-6">
            Want to see your project here?
          </p>
          <a href="#contact" className="btn-primary inline-block">
            Let's Build Something Amazing
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
