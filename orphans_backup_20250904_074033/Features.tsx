import React, { memo } from 'react';
import { 
  Brain, 
  MessageSquareShare, 
  Database, 
  Sparkles, 
  Users,
  Shield,
  Zap,
  Globe,
  Bot
} from 'lucide-react';

const featuresList = [
  {
    Icon: MessageSquareShare,
    title: 'Universal Connections',
    description: 'Your AI assistant connects with all your business tools - CRM, calendar, inventory - to get real work done, not just chat.'
  },
  {
    Icon: Brain,
    title: 'Remembers Everything',
    description: 'Your customers never have to repeat themselves. The AI remembers their history, preferences, and past issues.'
  },
  {
    Icon: Sparkles,
    title: 'Smart Document Search',
    description: 'The AI instantly finds answers from your product manuals, FAQs, and policies - like having an expert who\'s read everything.'
  },
  {
    Icon: Users,
    title: 'Team of AI Helpers',
    description: 'Multiple AI assistants work together - one handles sales, another support, another scheduling - all coordinating seamlessly.'
  },
  {
    Icon: Database,
    title: 'Intelligent Search',
    description: 'Understands what customers really mean, even when they use different words or make typos.'
  },
];

const Features = memo(() => {
  return (
    <section 
      id="features" 
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-gray-50/50 to-white relative"
      aria-labelledby="features-heading"
      data-testid="features-section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 
            id="features-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            data-testid="text-features-title"
          >
            How Our AI Works
          </h2>
          <p 
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed"
            data-testid="text-features-description"
          >
            Simple, powerful features that make your AI assistant actually helpful - not just another chatbot.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuresList.map((feature, index) => (
            <article 
              key={index}
              className="group bg-white rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent hover:bg-gradient-to-br hover:from-white hover:to-blue-50/30 relative overflow-hidden"
              data-testid={`feature-card-${index}`}
              aria-labelledby={`feature-title-${index}`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div 
                className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10"
                aria-hidden="true"
              >
                <feature.Icon className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600" />
              </div>
              <h3 
                id={`feature-title-${index}`}
                className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300 relative z-10"
                data-testid={`text-feature-title-${index}`}
              >
                {feature.title}
              </h3>
              <p 
                className="text-sm sm:text-base text-gray-600 leading-relaxed relative z-10"
                data-testid={`text-feature-description-${index}`}
              >
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
});

Features.displayName = 'Features';
export default Features;