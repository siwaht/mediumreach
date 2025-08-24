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
    <section className="pt-28 pb-24 md:pt-32 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              Custom AI Agents for Your Business
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Partner with MediumReach to build and launch custom AI agents. We'll help you automate support and boost engagement by connecting with your customers on their favorite platforms, including WhatsApp, Instagram, Telegram, Voice Calls etc.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 active:transform active:scale-[0.98] text-white font-medium px-8 py-3 rounded-full text-center transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started
              </a>
              <a 
                href="#features" 
                className="border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 text-gray-700 hover:text-blue-600 font-medium px-8 py-3 rounded-full text-center transition-all duration-200"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-sm mx-auto"
              >
                {/* iPhone Frame */}
                <div className="bg-black rounded-[3rem] p-2 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] relative overflow-hidden">
                    {/* Dynamic Island */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-full z-20"></div>
                    
                    {/* Screen Content */}
                    <div className="pt-8 pb-2 px-2">
                      {/* Chat Interface */}
                      <div className="bg-white rounded-xl h-[500px] overflow-hidden">
                        <div className="flex items-center justify-between mb-4 px-4 pt-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                            <span className="text-sm font-medium text-gray-700">AI Assistant</span>
                          </div>
                          <span className="text-xs text-gray-500">Online</span>
                        </div>
                        
                        <div className="space-y-4 px-4">
                          {messages.map((message, index) => (
                            <motion.div
                              key={message.id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.5, duration: 0.5 }}
                              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                              <div
                                className={`max-w-[80%] p-3 rounded-2xl ${
                                  message.type === 'user'
                                    ? 'bg-blue-600 text-white rounded-br-none'
                                    : 'bg-gray-100 text-gray-800 rounded-bl-none'
                                }`}
                              >
                                <p className="text-sm">{message.text}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* Input Area */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-gray-50 rounded-full p-3 flex items-center shadow-sm border border-gray-100">
                            <input
                              type="text"
                              placeholder="Type a message..."
                              className="flex-1 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
                              readOnly
                            />
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="ml-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 active:transform active:scale-[0.98] text-white rounded-full p-2 text-sm transition-all duration-200"
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
              <div className="absolute -bottom-4 -right-4 w-full h-[95%] bg-gradient-to-r from-blue-100 to-indigo-100 rounded-3xl shadow-xl -z-10 transform -rotate-2"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-full blur-3xl -z-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;