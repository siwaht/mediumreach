import React from 'react';
import { 
  Brain, 
  MessageSquareShare, 
  Database, 
  Sparkles, 
  UserSquare2
} from 'lucide-react';

const featuresList = [
  {
    icon: <MessageSquareShare className="h-6 w-6 text-blue-600" />,
    title: 'Agent Protocols (MCP)',
    description: 'It\'s like a universal adapter, allowing our AI agent to securely connect with and use third-party apps to get things done for you.'
  },
  {
    icon: <Brain className="h-6 w-6 text-blue-600" />,
    title: 'Long-Term Memory',
    description: 'Agent remembers your past conversations so you don\'t have to start over every time.'
  },
  {
    icon: <Sparkles className="h-6 w-6 text-blue-600" />,
    title: 'Advanced RAG Techniques',
    description: 'Agent answers customer questions by searching only within the specific company documents and data that you select.'
  },
  {
    icon: <UserSquare2 className="h-6 w-6 text-blue-600" />,
    title: 'Multi-Agent Systems',
    description: 'A coordinated team of specialized AI agents working together, either directed by a manager or collaborating like a swarm, to solve complex problems.'
  },
  {
    icon: <Database className="h-6 w-6 text-blue-600" />,
    title: 'Vector Databases',
    description: 'Similarity search to match the meaning of your query, not just the exact words.'
  },
];

const Features = () => {
  return (
    <section 
      id="features" 
      className="py-16 sm:py-20 md:py-24 bg-white"
      aria-labelledby="features-heading"
      data-testid="features-section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 
            id="features-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent"
            data-testid="text-features-title"
          >
            Advanced AI Technologies
          </h2>
          <p 
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0"
            data-testid="text-features-description"
          >
            Our AI agents leverage cutting-edge technologies to deliver exceptional customer experiences across multiple platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuresList.map((feature, index) => (
            <article 
              key={index}
              className="bg-gray-50 rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              data-testid={`feature-card-${index}`}
              aria-labelledby={`feature-title-${index}`}
            >
              <div 
                className="bg-blue-50 rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-4 sm:mb-6"
                aria-hidden="true"
              >
                {feature.icon}
              </div>
              <h3 
                id={`feature-title-${index}`}
                className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3"
                data-testid={`text-feature-title-${index}`}
              >
                {feature.title}
              </h3>
              <p 
                className="text-sm sm:text-base text-gray-600 leading-relaxed"
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
};

export default Features;