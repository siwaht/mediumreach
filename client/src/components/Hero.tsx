import React from 'react';
import { motion } from 'framer-motion';

const messages = [
  { id: 1, type: 'user', text: 'Hi! I need help with my order.' },
  { id: 2, type: 'ai', text: 'Hello! I\'d be happy to help you with your order. Could you please provide your order number?' },
  { id: 3, type: 'user', text: 'Sure, it\'s #12345' },
  { id: 4, type: 'ai', text: 'I can see your order. It\'s currently being processed and will be shipped within 24 hours.' }
];

const Hero = () => {
  return (
    <section 
      className="pt-20 pb-16 sm:pt-28 sm:pb-24 md:pt-32 md:pb-32 overflow-hidden"
      id="main-content"
      aria-labelledby="hero-heading"
      data-testid="hero-section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0">
          <div className="md:w-1/2 md:pr-12 text-center md:text-left">
            <h1 
              id="hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent"
              data-testid="text-hero-title"
            >
              Custom AI Agents for Your Business
            </h1>
            <p 
              className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0"
              data-testid="text-hero-description"
            >
              Partner with MediumReach to build and launch custom AI agents. We'll help you automate support and boost engagement by connecting with your customers on their favorite platforms, including WhatsApp, Instagram, Telegram, Voice Calls etc.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 active:transform active:scale-[0.98] text-white font-medium px-6 sm:px-8 py-3 rounded-full text-center transition-all duration-200 shadow-lg hover:shadow-xl min-h-[48px] flex items-center justify-center"
                data-testid="button-get-started"
                aria-label="Get started with AI agents"
              >
                Get Started
              </a>
              <a 
                href="#features" 
                className="border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 text-gray-700 hover:text-blue-600 font-medium px-6 sm:px-8 py-3 rounded-full text-center transition-all duration-200 min-h-[48px] flex items-center justify-center"
                data-testid="button-learn-more"
                aria-label="Learn more about our features"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 sm:mt-12 md:mt-0" data-testid="hero-mockup">
            <div className="relative max-w-xs sm:max-w-sm mx-auto md:max-w-md">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-full"
              >
                {/* iPhone Frame */}
                <div className="bg-black rounded-[2rem] sm:rounded-[3rem] p-1 sm:p-2 shadow-2xl" role="img" aria-label="AI chat interface mockup">
                  <div className="bg-white rounded-[1.5rem] sm:rounded-[2.5rem] relative overflow-hidden">
                    {/* Dynamic Island */}
                    <div className="absolute top-1 sm:top-2 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-5 sm:h-6 bg-black rounded-full z-20 hidden sm:block"></div>
                    
                    {/* Screen Content */}
                    <div className="pt-6 sm:pt-8 pb-2 px-2">
                      {/* Chat Interface */}
                      <div className="bg-white rounded-xl h-[350px] sm:h-[450px] md:h-[500px] overflow-hidden">
                        <div className="flex items-center justify-between mb-3 sm:mb-4 px-3 sm:px-4 pt-3 sm:pt-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-blue-600"></div>
                            <span className="text-xs sm:text-sm font-medium text-gray-700">AI Assistant</span>
                          </div>
                          <span className="text-[10px] sm:text-xs text-gray-500">Online</span>
                        </div>
                        
                        <div className="space-y-3 sm:space-y-4 px-3 sm:px-4">
                          {messages.map((message, index) => (
                            <motion.div
                              key={message.id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.5, duration: 0.5 }}
                              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                              data-testid={`chat-message-${message.id}`}
                            >
                              <div
                                className={`max-w-[80%] p-2 sm:p-3 rounded-xl sm:rounded-2xl ${
                                  message.type === 'user'
                                    ? 'bg-blue-600 text-white rounded-br-none'
                                    : 'bg-gray-100 text-gray-800 rounded-bl-none'
                                }`}
                              >
                                <p className="text-xs sm:text-sm">{message.text}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* Input Area */}
                        <div className="absolute bottom-2 sm:bottom-4 left-3 right-3 sm:left-4 sm:right-4">
                          <div className="bg-gray-50 rounded-full p-2 sm:p-3 flex items-center shadow-sm border border-gray-100">
                            <input
                              type="text"
                              placeholder="Type a message..."
                              className="flex-1 bg-transparent outline-none text-xs sm:text-sm text-gray-600 placeholder-gray-400"
                              readOnly
                              aria-label="Message input (demonstration only)"
                            />
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="ml-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 active:transform active:scale-[0.98] text-white rounded-full p-1.5 sm:p-2 text-xs sm:text-sm transition-all duration-200"
                              aria-label="Send message (demonstration only)"
                            >
                              Send
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Background Effects */}
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-full h-[95%] bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl sm:rounded-3xl shadow-xl -z-10 transform -rotate-2 hidden sm:block"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-full blur-2xl sm:blur-3xl -z-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;