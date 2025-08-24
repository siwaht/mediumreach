import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Phone, CheckCircle } from 'lucide-react';

const VoiceAI = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 mb-4">
                <Mic className="h-4 w-4 text-blue-200 mr-2" />
                <span className="text-blue-100 text-sm font-medium">Voice AI Solutions</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                Conversations That{' '}
                <span className="text-blue-200">Actually Convert</span>
              </h2>
              
              <p className="text-blue-100 mb-6 leading-relaxed">
                Our AI Voice Agents engage in natural, intelligent conversations to solve problems, 
                book appointments, and drive sales, 24/7.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-blue-100">
                  <CheckCircle className="h-4 w-4 text-blue-300 mr-3 flex-shrink-0" />
                  <span className="text-sm">Inbound & Outbound Calls</span>
                </div>
                <div className="flex items-center text-blue-100">
                  <CheckCircle className="h-4 w-4 text-blue-300 mr-3 flex-shrink-0" />
                  <span className="text-sm">Advanced Conversation AI</span>
                </div>
                <div className="flex items-center text-blue-100">
                  <CheckCircle className="h-4 w-4 text-blue-300 mr-3 flex-shrink-0" />
                  <span className="text-sm">Real-time CRM Integration</span>
                </div>
              </div>

              <a 
                href="#contact" 
                className="inline-flex items-center bg-white hover:bg-blue-50 active:bg-blue-100 active:transform active:scale-[0.98] text-blue-600 font-medium px-6 py-2 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Phone className="h-4 w-4 mr-2" />
                Discuss Voice AI
              </a>
            </motion.div>

            {/* Visualization */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-white text-sm font-medium">Call Active</span>
                  </div>
                  <span className="text-blue-200 text-xs">Agent: EVA-01</span>
                </div>
                
                {/* Voice Visualizer */}
                <div className="flex items-end justify-center space-x-1 mb-4 h-16">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="bg-gradient-to-t from-blue-400 to-blue-200 rounded-full"
                      style={{ width: '4px' }}
                      animate={{
                        height: [8, Math.random() * 40 + 20, 8],
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>

                <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                  <p className="text-white text-sm italic">
                    "I can see you're a valued customer. Let me help you with your order inquiry right away..."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceAI;