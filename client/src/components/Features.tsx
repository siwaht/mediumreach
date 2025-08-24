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
            Advanced AI Technologies
          </h2>
          <p 
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed"
            data-testid="text-features-description"
          >
            Our AI agents leverage cutting-edge technologies to deliver exceptional customer experiences across multiple platforms.
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
                {React.cloneElement(feature.icon, { 
                  className: "h-6 w-6 text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text" 
                })}
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
};

export default Features;