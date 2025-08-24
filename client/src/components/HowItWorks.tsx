import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Settings, Rocket } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Share Your Requirements',
      description: 'Tell us about your business needs, customer base, and support goals. We\'ll analyze your requirements and propose the perfect AI solution.',
      icon: <MessageSquare className="h-6 w-6" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: '02',
      title: 'We Build & Train Your AI',
      description: 'Our experts create and train your custom AI agent using your brand voice, policies, and knowledge base. Full customization in 48 hours.',
      icon: <Settings className="h-6 w-6" />,
      color: 'from-purple-500 to-purple-600'
    },
    {
      number: '03',
      title: 'Deploy Across All Channels',
      description: 'Launch your AI agent instantly on WhatsApp, Instagram, Telegram, and Voice. Start handling customer inquiries 24/7 immediately.',
      icon: <Rocket className="h-6 w-6" />,
      color: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <section 
      id="how-it-works"
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-gray-50"
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
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            data-testid="text-how-it-works-description"
          >
            Get your AI agent up and running in three simple steps. No technical expertise required.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection Line - Hidden on mobile */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 -z-10 transform -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-3 gap-8 md:gap-4">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:scale-105">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Step {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} text-white mb-4 mt-2`}>
                      {step.icon}
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Timeline for mobile */}
          <div className="md:hidden mt-12 text-center">
            <p className="text-sm text-gray-500">Simple 3-step process to get started</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;