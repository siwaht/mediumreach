import React from 'react';
import { 
  MessageSquare,
  Cpu,
  Rocket,
  ArrowRight
} from 'lucide-react';

const steps = [
  {
    number: '1',
    icon: MessageSquare,
    title: 'Share Your Requirements',
    description: 'Tell us about your business, your customers, and how you want your AI to help. We\'ll handle all the technical details.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    number: '2',
    icon: Cpu,
    title: 'We Build & Train Your AI',
    description: 'Our team creates your custom AI assistant, trains it on your specific needs, and ensures it perfectly represents your brand.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    number: '3',
    icon: Rocket,
    title: 'Deploy Across All Channels',
    description: 'Your AI goes live on WhatsApp, Instagram, phone, and more - all working together seamlessly from day one.',
    color: 'from-orange-500 to-red-500'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section 
      id="how-it-works" 
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
            Get your AI assistant up and running in three simple steps
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative group"
                  data-testid={`step-${index}`}
                >
                  {/* Arrow for mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute left-1/2 -bottom-4 transform -translate-x-1/2 z-10">
                      <ArrowRight className="h-6 w-6 text-gray-400 rotate-90" />
                    </div>
                  )}
                  
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent relative z-10 h-full group-hover:-translate-y-2">
                    {/* Step number */}
                    <div className="flex justify-center mb-6">
                      <div className={`relative w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-3xl font-bold text-white">{step.number}</span>
                        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      </div>
                    </div>
                    
                    {/* Icon */}
                    <div className="flex justify-center mb-4">
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
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Ready to transform your customer experience?
          </p>
          <button 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-base sm:text-lg"
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            data-testid="button-get-started"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;