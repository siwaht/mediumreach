import React, { useState, useCallback } from 'react';
import { ChevronDown, CircleHelp as HelpCircle } from 'lucide-react';
import { CONTACT_SECTION_ID } from '../lib/constants';

const faqs = [
  {
    question: "How long does setup take?",
    answer: "Most agents go live in about 5 working days. That covers a discovery call, building and training the agent on your business, connecting your tools, and a testing round where you approve real conversations before launch. Larger projects with several channels or custom integrations can take longer, and we'll give you a clear timeline up front."
  },
  {
    question: "What can an AI agent actually do for my business?",
    answer: "Beyond answering questions, our agents take actions: booking and rescheduling appointments, qualifying leads, checking order status, collecting customer details, creating and updating CRM records, sending reminders, and passing conversations to your team. We start with the tasks that save you the most time and add more as you grow."
  },
  {
    question: "Can it integrate with my CRM and other tools?",
    answer: "Yes. We connect agents to popular CRMs such as HubSpot, Salesforce, Zoho, and GoHighLevel, as well as calendars, helpdesks, e-commerce platforms, spreadsheets, and your own systems through APIs or automation tools. The agent can read customer data, update records, and create new entries automatically."
  },
  {
    question: "Which AI models do you use?",
    answer: "We pick the best model for each job from leading providers and test it against your real conversations. Because we aren't locked to one vendor, we can move your agent to newer, better-performing models as they come out."
  },
  {
    question: "How do you train the AI and keep it accurate?",
    answer: "We build a knowledge base from your documents, website, FAQs, product information, and past conversations where available. The agent answers from that source, follows rules on what it can and cannot say, and is tested before launch. After launch we review conversations and keep improving its answers."
  },
  {
    question: "What if the AI doesn't know an answer?",
    answer: "It won't guess. When a question falls outside what it knows, or a customer asks for a person, the agent hands the conversation to your team with the full history so nobody has to repeat themselves. We use those cases to fill gaps in its knowledge."
  },
  {
    question: "What languages are supported?",
    answer: "Our agents can understand and reply in most major languages, including English, Spanish, French, German, Portuguese, Arabic, Hindi, and Chinese, and they detect the customer's language automatically. Voice agents support a slightly smaller set of languages and accents, so let us know which markets you serve."
  },
  {
    question: "How much does it cost?",
    answer: "Pricing depends on the channels, integrations, and level of customisation your agent needs. After a free strategy call we send a clear quote covering setup and ongoing management, so you can see the expected return before you commit."
  },
  {
    question: "Is my customer data secure?",
    answer: "We encrypt data in transit and at rest, limit access to the people and systems that need it, and only connect the agent to the tools required for its job. We work in line with GDPR and CCPA requirements, and we use AI providers' business services that don't use your data to train public models. We're happy to sign an NDA or data processing agreement."
  },
  {
    question: "Can I customise the AI's personality?",
    answer: "Yes. You decide the tone of voice, greeting, phrases to use or avoid, and how formal or friendly it should be. For voice agents you can also choose the voice itself, so the agent sounds like part of your brand."
  },
  {
    question: "Do I need technical skills to manage it?",
    answer: "No. We handle the build, hosting, and maintenance. You can review conversations and results, and when something changes, such as new prices, opening hours, or products, just tell us and we'll update the agent."
  },
  {
    question: "What happens during high traffic periods?",
    answer: "AI agents handle many conversations at the same time, so customers get an instant reply whether 10 or 10,000 people message you at once. There's no queue and no extra staff needed for busy seasons or campaigns."
  },
  {
    question: "Is the voice calling agent available in my country?",
    answer: "Voice agents can usually go live straight away in the UK, US, and most regions. Some countries, including parts of the Middle East, need a dedicated local number, which can take up to 7 weeks to approve. Tell us your country and we'll confirm the exact timeframe."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = useCallback((index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  }, []);

  return (
    <section 
      id="faq"
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-gray-50/30 to-white relative"
      aria-labelledby="faq-heading"
      data-testid="section-faq"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex justify-center mb-6" aria-hidden="true">
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
            Everything you need to know about working with MediumReach
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-transparent overflow-hidden"
                data-testid={`faq-item-${index}`}
              >
                {/* Heading wraps the button: headings are not valid inside <button>. */}
                <h3 className="text-base sm:text-lg font-semibold">
                  <button
                    type="button"
                    id={`faq-question-${index}`}
                    className="w-full px-6 py-5 sm:px-8 sm:py-6 text-left flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-2xl text-gray-800 group-hover:text-blue-600 transition-colors"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    data-testid={`button-faq-${index}`}
                  >
                    <span className="pr-2">{faq.question}</span>
                    <ChevronDown 
                      className={`h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-all duration-300 flex-shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                
                {/* grid-rows transition animates to the content's real height, so long answers are never clipped */}
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                  aria-hidden={!isOpen}
                >
                  <div className="overflow-hidden">
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
              </div>
            );
          })}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-base sm:text-lg text-gray-600 mb-4">
            Still have questions?
          </p>
          <a 
            href={`#${CONTACT_SECTION_ID}`}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            data-testid="button-contact-us"
          >
            Talk to Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
