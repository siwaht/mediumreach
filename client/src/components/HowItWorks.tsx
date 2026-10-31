import React from 'react';
import { 
  MessageSquare,
  Cpu,
  Rocket,
  LineChart,
  ArrowRight
} from 'lucide-react';
import { CONTACT_SECTION_ID, HOW_IT_WORKS_ID } from '../lib/constants';

const steps = [
  {
    number: '1',
    icon: MessageSquare,
    title: 'Free Strategy Call',
    description: 'We learn how your business runs, where customers wait or drop off, and which tasks an agent should take over first.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    number: '2',
    icon: Cpu,
    title: 'We Build & Train Your Agent',
    description: 'We train the agent on your knowledge, connect it to your CRM, calendar, and other tools, and set its tone and guardrails.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    number: '3',
    icon: Rocket,
    title: 'Test & Go Live',
    description: 'You review real test conversations and approve them. Then the agent goes live on your chosen channels.',
    color: 'from-orange-500 to-red-500'
  },
  {
    number: '4',
    icon: LineChart,
    title: 'Monitor & Improve',
    description: 'We track results, review conversations, and keep refining the agent so it gets more useful every month.',
    color: 'from-green-500 to-emerald-500'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section 
      id={HOW_IT_WORKS_ID}
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden"
      aria-labelledby="how-it-works-heading"
      data-testid="how-it-works-section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 
            id="how-it-works-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            data-testid="text-how-it-works-title"
          >
            How It Works
          </h2>
          <p 
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed"
            data-testid="text-how-it-works-description"
          >
            From first call to a live, improving AI agent in four clear steps
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 -translate-y-1/2 z-0" aria-hidden="true"></div>
          
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.number}
                  className="relative group"
                  data-testid={`step-${index}`}
                >
                  {/* Arrow for single-column layout */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden absolute left-1/2 -bottom-4 transform -translate-x-1/2 z-20" aria-hidden="true">
                      <ArrowRight className="h-6 w-6 text-gray-400 rotate-90" />
                    </div>
                  )}
                  
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent relative z-10 h-full group-hover:-translate-y-2">
                    {/* Step number */}
                    <div className="flex justify-center mb-6">
                      <div className={`relative w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-3xl font-bold text-white"><span className="sr-only">Step </span>{step.number}</span>
                        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" aria-hidden="true"></div>
                      </div>
                    </div>
                    
                    {/* Icon */}
                    <div className="flex justify-center mb-4" aria-hidden="true">
                      <Icon className="h-8 w-8 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
                    </div>
                    
                    {/* Content */}
                    <h3 
                      className="text-lg sm:text-xl font-bold text-gray-800 mb-3 text-center group-hover:text-blue-600 transition-colors duration-300"
                      data-testid={`text-step-title-${index}`}
                    >
                      {step.title}
                    </h3>
                    <p 
                      className="text-sm sm:text-base text-gray-600 leading-relaxed text-center"
                      data-testid={`text-step-description-${index}`}
                    >
                      {step.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Call to action */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Most agents go live in about 5 working days.
          </p>
          <a 
            href={`#${CONTACT_SECTION_ID}`}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-base sm:text-lg"
            data-testid="button-start-project"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;