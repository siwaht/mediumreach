import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Home, Building, Plane, GraduationCap } from 'lucide-react';

const IndustryUseCases = () => {
  const industries = [
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: 'For E-commerce',
      features: [
        'Handle returns & exchanges instantly',
        'Track orders and shipping in real-time',
        'Intelligent product recommendations',
        'Abandoned cart recovery'
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'For Healthcare',
      features: [
        'Schedule appointments 24/7',
        'Answer patient FAQs instantly',
        'Triage inquiries effectively',
        'Send medication reminders'
      ],
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100'
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: 'For Real Estate',
      features: [
        'Qualify leads automatically',
        'Book property viewings',
        'Share property information',
        'Virtual tour scheduling'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100'
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: 'For Finance',
      features: [
        'Account balance inquiries',
        'Transaction history access',
        'Fraud alert notifications',
        'Payment processing support'
      ],
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'from-yellow-50 to-yellow-100'
    },
    {
      icon: <Plane className="h-6 w-6" />,
      title: 'For Travel',
      features: [
        'Booking assistance',
        'Flight status updates',
        'Itinerary management',
        'Travel recommendations'
      ],
      color: 'from-pink-500 to-pink-600',
      bgColor: 'from-pink-50 to-pink-100'
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: 'For Education',
      features: [
        'Course enrollment support',
        'Assignment deadline reminders',
        'Student query resolution',
        'Parent communication'
      ],
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'from-indigo-50 to-indigo-100'
    }
  ];

  return (
    <section 
      id="industry"
      className="py-16 sm:py-20 md:py-24 bg-white"
      aria-labelledby="industry-heading"
      data-testid="industry-section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 
            id="industry-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            data-testid="text-industry-title"
          >
            Industry-Specific Solutions
          </h2>
          <p 
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            data-testid="text-industry-description"
          >
            Tailored AI agents that understand your industry's unique needs and deliver exceptional results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {industries.map((industry, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              data-testid={`industry-card-${index}`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative p-6">
                {/* Icon and Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${industry.color} text-white shadow-lg`}>
                    {industry.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                    {industry.title}
                  </h3>
                </div>
                
                {/* Features List */}
                <ul className="space-y-2">
                  {industry.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600 group-hover:text-gray-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Don't see your industry?</p>
          <a 
            href="#contact"
            className="inline-flex items-center text-blue-600 hover:text-purple-600 font-semibold transition-colors duration-300"
          >
            Let's discuss your custom solution
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default IndustryUseCases;