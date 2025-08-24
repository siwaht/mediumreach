import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "How long does setup take?",
    answer: "Setup typically takes 5 working days. We handle everything - from understanding your business to training the AI on your specific needs. You'll have a fully functional AI assistant ready to go in just 5 working days."
  },
  {
    question: "Can it integrate with my CRM?",
    answer: "Yes! Our AI seamlessly integrates with all major CRMs including Salesforce, HubSpot, Zoho, and more. It can access customer data, update records, and create new entries automatically."
  },
  {
    question: "What languages are supported?",
    answer: "Our AI agents support over 100 languages including English, Spanish, French, German, Portuguese, Arabic, Chinese, and more. The AI automatically detects and responds in your customer's preferred language."
  },
  {
    question: "How do you train the AI?",
    answer: "We train your AI using your business documents, FAQs, product information, and past customer conversations. The AI learns your specific tone, policies, and procedures to represent your brand perfectly."
  },
  {
    question: "What if the AI doesn't know an answer?",
    answer: "When the AI encounters a question it can't answer confidently, it seamlessly transfers the conversation to a human agent. It also learns from these interactions to improve over time."
  },
  {
    question: "How much does it cost?",
    answer: "Pricing starts at $299/month for small businesses. We offer flexible plans based on conversation volume and features needed. Most clients see ROI within the first month through reduced support costs."
  },
  {
    question: "Is my customer data secure?",
    answer: "Absolutely. We use enterprise-grade encryption and comply with GDPR, CCPA, and SOC 2 standards. Your data is never shared with third parties and remains completely under your control."
  },
  {
    question: "Can I customize the AI's personality?",
    answer: "Yes! You can customize everything - from the AI's tone of voice to specific phrases it uses. Make it professional, friendly, or match your brand's unique personality."
  },
  {
    question: "Do I need technical skills to manage it?",
    answer: "Not at all. Our platform is designed for non-technical users. You get a simple dashboard where you can monitor conversations, update responses, and make changes without any coding."
  },
  {
    question: "What happens during high traffic periods?",
    answer: "Our AI scales automatically to handle unlimited conversations simultaneously. Whether it's 10 or 10,000 customers, everyone gets instant responses without any delays or queues."
  },
  {
    question: "Is the voice calling agent available in my country?",
    answer: "Our service uses Voice over IP (VoIP) technology, which is restricted in certain regions, notably in the Middle East. Please contact our support team to confirm if voice calling is available in your country."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-gray-50/30 to-white relative"
      aria-labelledby="faq-heading"
      data-testid="section-faq"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-full p-3">
              <HelpCircle className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h2 
            id="faq-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            data-testid="text-faq-title"
          >
            Frequently Asked Questions
          </h2>
          <p 
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed"
            data-testid="text-faq-subtitle"
          >
            Everything you need to know about our AI agents
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-transparent overflow-hidden"
              data-testid={`faq-item-${index}`}
            >
              <button
                className="w-full px-6 py-5 sm:px-8 sm:py-6 text-left flex items-start justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-2xl"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                data-testid={`button-faq-${index}`}
              >
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors pr-2">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-all duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
              
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
                aria-hidden={openIndex !== index}
              >
                <div className="px-6 pb-5 sm:px-8 sm:pb-6">
                  <p 
                    className="text-sm sm:text-base text-gray-600 leading-relaxed"
                    data-testid={`text-faq-answer-${index}`}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-base sm:text-lg text-gray-600 mb-4">
            Still have questions?
          </p>
          <button 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            data-testid="button-contact-us"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;