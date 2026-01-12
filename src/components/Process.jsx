import { Search, Palette, Code, TestTube, Rocket } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: 'Discovery',
      description: 'We start by understanding your business, goals, target audience, and specific requirements.',
      details: ['Initial consultation', 'Requirements gathering', 'Competitor analysis', 'Project scope definition'],
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Our designers create beautiful mockups and prototypes that align with your brand identity.',
      details: ['Wireframing', 'Visual design', 'Client feedback', 'Design approval'],
    },
    {
      icon: Code,
      title: 'Development',
      description: 'We bring the designs to life with clean, efficient code and modern technologies.',
      details: ['Frontend development', 'Backend integration', 'Responsive implementation', 'Feature building'],
    },
    {
      icon: TestTube,
      title: 'Review',
      description: 'Thorough testing and refinements ensure everything works perfectly across all devices.',
      details: ['Quality assurance', 'Cross-browser testing', 'Performance optimization', 'Client review'],
    },
    {
      icon: Rocket,
      title: 'Launch',
      description: 'We deploy your website and provide training so you can manage it with confidence.',
      details: ['Domain setup', 'Hosting configuration', 'Final deployment', 'Training & handover'],
    },
  ];

  return (
    <section id="process" className="py-20 bg-white dark:bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-950 dark:text-white mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A proven 5-step approach to deliver exceptional results
          </p>
        </div>

        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-accent-500 to-primary-600"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`scroll-animate flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white dark:bg-dark-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <h3 className="text-2xl font-bold text-primary-950 dark:text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{step.description}</p>
                    <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 bg-accent-500 rounded-full ${index % 2 === 0 ? 'md:order-2' : ''}`}></span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Icon */}
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary-950 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {index + 1}
                  </div>
                </div>

                {/* Spacer for alignment */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
