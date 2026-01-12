import { ExternalLink, ShoppingCart, Briefcase, Utensils, Dumbbell, Camera, Heart } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Fashion Store',
      category: 'E-Commerce',
      icon: "./public/services/ecommerce.png",
      description: 'Modern online boutique with seamless checkout experience',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Corporate Business Site',
      category: 'Corporate',
      icon: "./public/services/corporate-website.png",
      description: 'Professional website for a consulting firm',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Restaurant & Cafe',
      category: 'Restaurant',
      icon: "./public/services/restaurant-website.png",
      description: 'Appetizing website with online reservation system',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Fitness Studio',
      category: 'Health & Fitness',
      icon: "./public/services/fitness-studio.png",
      description: 'Dynamic site with class booking and member portal',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Photography Portfolio',
      category: 'Portfolio',
      icon: "./public/services/photography-portfolio.png",
      description: 'Stunning gallery showcase for professional photographer',
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      title: 'Healthcare Clinic',
      category: 'Healthcare',
      icon: "./public/services/healthcare-website.png",
      description: 'Patient-friendly website with appointment booking',
      gradient: 'from-teal-500 to-cyan-500',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-950 dark:text-white mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore some of our recent projects across various industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="scroll-animate group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-800 dark:to-dark-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Project visual */}
              <div className={`h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <img src={project.icon} alt={project.title} className="w-100 object-cover h-100 text-white/90 z-10" />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <button className="bg-white text-primary-950 px-6 py-2 rounded-lg font-semibold flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Project info */}
              <div className="p-6">
                <div className="text-sm font-semibold text-accent-600 dark:text-accent-400 mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-primary-950 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 scroll-animate">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Want to see more of our work or discuss your project?
          </p>
          <a href="#contact" className="btn-primary inline-block">
            Let's Talk About Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
