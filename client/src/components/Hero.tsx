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
      className="pt-20 pb-16 sm:pt-28 sm:pb-24 md:pt-32 md:pb-32 overflow-hidden relative"
      id="main-content"
      aria-labelledby="hero-heading"
      data-testid="hero-section"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 -z-10"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0">
          <div className="md:w-1/2 md:pr-12 text-center md:text-left">
            <h1 
              id="hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient bg-300% slide-up"
              data-testid="text-hero-title"
            >
              AI That Talks to Your Customers
            </h1>
            <p 
              className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0 slide-up"
              data-testid="text-hero-description"
              style={{ animationDelay: '0.1s' }}
            >
              Let MediumReach create smart AI assistants that answer customer questions instantly on WhatsApp, Instagram, phone calls, and more. Available 24/7, never tired, always helpful.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <a 
                href="#contact-form" 
                className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 sm:px-8 py-3.5 rounded-full text-center transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 min-h-[48px] flex items-center justify-center overflow-hidden group slide-up"
                data-testid="button-get-started"
                aria-label="Get started with AI agents"
                style={{ animationDelay: '0.2s' }}
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
              </a>
              <a 
                href="#how-it-works" 
                className="relative border-2 border-gray-300 hover:border-transparent bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 text-gray-700 hover:text-blue-600 font-semibold px-6 sm:px-8 py-3.5 rounded-full text-center transition-all duration-300 min-h-[48px] flex items-center justify-center shadow-md hover:shadow-xl hover:scale-105 active:scale-95 group slide-up"
                data-testid="button-learn-more"
                aria-label="Learn more about our features"
                style={{ animationDelay: '0.3s' }}
              >
                Learn More
                <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 sm:mt-12 md:mt-0" data-testid="hero-mockup">
            <div className="relative max-w-xs sm:max-w-sm mx-auto md:max-w-md">
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="relative z-10 w-full"
              >
                {/* iPhone Frame */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2rem] sm:rounded-[3rem] p-1 sm:p-2 shadow-2xl hover:shadow-3xl transition-shadow duration-500" role="img" aria-label="AI chat interface mockup">
                  <div className="bg-gradient-to-b from-white to-gray-50 rounded-[1.5rem] sm:rounded-[2.5rem] relative overflow-hidden">
                    {/* Dynamic Island */}
                    <div className="absolute top-1 sm:top-2 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-5 sm:h-6 bg-black rounded-full z-20 hidden sm:block"></div>
                    
                    {/* Screen Content */}
                    <div className="pt-6 sm:pt-8 pb-2 px-2">
                      {/* Chat Interface */}
                      <div className="bg-white/95 backdrop-blur-sm rounded-xl h-[350px] sm:h-[450px] md:h-[500px] overflow-hidden shadow-inner">
                        <div className="flex items-center justify-between mb-3 sm:mb-4 px-3 sm:px-4 pt-3 sm:pt-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-xs sm:text-sm font-semibold text-gray-700">AI Assistant</span>
                          </div>
                          <span className="text-[10px] sm:text-xs text-green-600 font-medium">● Online</span>
                        </div>
                        
                        <div className="space-y-3 sm:space-y-4 px-3 sm:px-4">
                          {messages.map((message, index) => (
                            <motion.div
                              key={message.id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.8 + index * 0.3, duration: 0.5, ease: "easeOut" }}
                              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                              data-testid={`chat-message-${message.id}`}
                            >
                              <div
                                className={`max-w-[80%] p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-md ${
                                  message.type === 'user'
                                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-br-none'
                                    : 'bg-gradient-to-r from-gray-100 to-gray-50 text-gray-800 rounded-bl-none border border-gray-200'
                                }`}
                              >
                                <p className="text-xs sm:text-sm">{message.text}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* Input Area */}
                        <div className="absolute bottom-2 sm:bottom-4 left-3 right-3 sm:left-4 sm:right-4">
                          <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3 flex items-center shadow-lg border border-gray-200">
                            <input
                              type="text"
                              placeholder="Type a message..."
                              className="flex-1 bg-transparent outline-none text-xs sm:text-sm text-gray-600 placeholder-gray-400"
                              readOnly
                              aria-label="Message input (demonstration only)"
                            />
                            <motion.button
                              whileHover={{ scale: 1.05, rotate: -5 }}
                              whileTap={{ scale: 0.95 }}
                              className="ml-2 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white rounded-full p-2 sm:p-2.5 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
                              aria-label="Send message (demonstration only)"
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                              <svg className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                              </svg>
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Background Effects */}
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-full h-[95%] bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-2xl sm:rounded-3xl shadow-2xl -z-10 transform -rotate-3 hidden sm:block"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-3xl -z-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;