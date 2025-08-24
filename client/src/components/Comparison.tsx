import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const Comparison = () => {
  const comparisons = [
    {
      feature: 'Availability',
      traditional: '9-5 Business Hours',
      aiAgent: '24/7/365 Always On',
      aiWins: true
    },
    {
      feature: 'Response Time',
      traditional: '2-5 minutes average',
      aiAgent: 'Under 2 seconds',
      aiWins: true
    },
    {
      feature: 'Cost per Interaction',
      traditional: '$5-15 per ticket',
      aiAgent: '$0.10-0.50 per chat',
      aiWins: true
    },
    {
      feature: 'Language Support',
      traditional: '1-3 languages',
      aiAgent: '100+ languages',
      aiWins: true
    },
    {
      feature: 'Scalability',
      traditional: 'Limited by staff',
      aiAgent: 'Unlimited conversations',
      aiWins: true
    },
    {
      feature: 'Training Time',
      traditional: '2-4 weeks per agent',
      aiAgent: '48-72 hours setup',
      aiWins: true
    },
    {
      feature: 'Consistency',
      traditional: 'Varies by agent',
      aiAgent: '100% consistent',
      aiWins: true
    },
    {
      feature: 'Data & Analytics',
      traditional: 'Manual reporting',
      aiAgent: 'Real-time insights',
      aiWins: true
    }
  ];

  return (
    <section 
      id="comparison"
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white"
      aria-labelledby="comparison-heading"
      data-testid="comparison-section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 
            id="comparison-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            data-testid="text-comparison-title"
          >
            AI Agents vs Traditional Support
          </h2>
          <p 
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            data-testid="text-comparison-description"
          >
            See why leading businesses are switching to AI-powered customer support.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
              <div className="p-4 sm:p-6 font-bold text-sm sm:text-base">
                Feature
              </div>
              <div className="p-4 sm:p-6 text-center font-bold text-sm sm:text-base border-x border-gray-700">
                Traditional Support
              </div>
              <div className="p-4 sm:p-6 text-center font-bold text-sm sm:text-base">
                AI Agents ✨
              </div>
            </div>

            {/* Table Body */}
            {comparisons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-t border-gray-200`}
              >
                <div className="p-3 sm:p-4 font-semibold text-gray-800 text-xs sm:text-sm">
                  {item.feature}
                </div>
                <div className="p-3 sm:p-4 text-center text-gray-600 text-xs sm:text-sm border-x border-gray-200">
                  <div className="flex items-center justify-center gap-2">
                    <X className="h-4 w-4 text-red-500 flex-shrink-0" />
                    <span>{item.traditional}</span>
                  </div>
                </div>
                <div className="p-3 sm:p-4 text-center text-gray-800 font-medium text-xs sm:text-sm">
                  <div className="flex items-center justify-center gap-2">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-green-700">{item.aiAgent}</span>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Bottom CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-center">
              <p className="text-white font-semibold mb-3">
                Ready to upgrade your customer support?
              </p>
              <a 
                href="#contact"
                className="inline-block bg-white text-blue-600 hover:text-purple-600 font-bold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Get Started Today
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;