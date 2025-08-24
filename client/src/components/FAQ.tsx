import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How long does setup take?',
      answer: 'Our standard setup takes just 72 hours from start to finish. This includes understanding your requirements, training the AI on your specific use case, and deploying it across your chosen channels. For complex implementations, we may need up to 5 days.'
    },
    {
      question: 'Can it integrate with my CRM?',
      answer: 'Yes! Our AI agents integrate seamlessly with all major CRM systems including Salesforce, HubSpot, Zendesk, Freshdesk, and more. We can also build custom integrations for proprietary systems using APIs. The integration ensures all customer interactions are logged and tracked.'
    },
    {
      question: 'What languages are supported?',
      answer: 'Our AI agents support over 100 languages out of the box, including all major languages like English, Spanish, Mandarin, Hindi, Arabic, French, German, Japanese, and more. The AI can automatically detect the customer\'s language and respond accordingly, ensuring global coverage for your business.'
    },
    {
      question: 'How do you train the AI?',
      answer: 'We train your AI using a combination of your existing knowledge base, FAQs, product documentation, and past customer interactions. Our experts work with you to define conversation flows, brand voice, and response guidelines. The AI continues to learn and improve from every interaction, with regular updates based on performance data.'
    },
    {
      question: 'What if the AI can\'t answer a question?',
      answer: 'When the AI encounters a question it can\'t confidently answer, it seamlessly escalates to a human agent with full conversation context. You can set custom escalation rules based on keywords, sentiment, or specific scenarios. This ensures customers always get the help they need.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use enterprise-grade encryption for all data in transit and at rest. Our systems are GDPR, CCPA, and SOC 2 compliant. Your data is never shared with third parties, and you maintain full ownership of all customer conversations and data.'
    },
    {
      question: 'Can I customize the AI\'s personality?',
      answer: 'Yes! We can fully customize your AI\'s personality to match your brand voice. Whether you want it to be professional, friendly, casual, or technical, we\'ll train it to communicate exactly how you want. You can even set different tones for different customer segments.'
    },
    {
      question: 'What\'s the pricing model?',
      answer: 'We offer flexible pricing based on conversation volume, starting from $299/month for small businesses. Our plans include setup, training, deployment, and ongoing support. Contact us for a custom quote based on your specific needs and expected volume.'
    }
  ];

  return (
    <section 
      id="faq"
      className="py-16 sm:py-20 md:py-24 bg-white"
      aria-labelledby="faq-heading"
      data-testid="faq-section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 
            id="faq-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            data-testid="text-faq-title"
          >
            Frequently Asked Questions
          </h2>
          <p 
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            data-testid="text-faq-description"
          >
            Everything you need to know about our AI agent solutions.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 sm:py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`h-5 w-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-0">
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <a 
              href="#contact"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
              data-testid="button-contact-faq"
            >
              Contact Our Team
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;