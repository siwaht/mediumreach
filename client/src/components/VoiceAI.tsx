import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Phone, CheckCircle } from 'lucide-react';

// Fixed peak heights (px) so the visualizer doesn't change on every re-render.
const BAR_PEAKS = [28, 44, 36, 56, 32, 48, 60, 38, 52, 30, 46, 34];

const voiceFeatures = [
  { id: 'inbound-outbound', text: 'Answers inbound calls and makes outbound calls' },
  { id: 'ai-conversation', text: 'Natural, low-latency conversation that handles interruptions' },
  { id: 'crm-integration', text: 'Books into your calendar and updates your CRM during the call' },
  { id: 'human-transfer', text: 'Transfers to your team with a call summary when needed' },
];

const VoiceAI = () => {
  return (
    <section 
      id="voice-ai"
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden"
      aria-labelledby="voiceai-heading"
      data-testid="voiceai-section"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" aria-hidden="true"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl -ml-48 -mt-48" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl -mr-48 -mb-48" aria-hidden="true"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center bg-white/20 backdrop-blur-md rounded-full px-3 sm:px-4 py-1.5 mb-3 sm:mb-4 border border-white/20">
                <Mic className="h-3 sm:h-4 w-3 sm:w-4 text-white mr-2 animate-pulse" aria-hidden="true" />
                <span className="text-white text-xs sm:text-sm font-semibold">Voice AI Agents</span>
              </div>
              
              <h2 
                id="voiceai-heading"
                className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-3 leading-tight"
                data-testid="text-voiceai-title"
              >
                Never Miss a Call.{' '}
                <span className="text-yellow-300">Never Miss a Sale.</span>
              </h2>
              
              <p 
                className="text-blue-100 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base"
                data-testid="text-voiceai-description"
              >
                Your voice agent picks up every call, day or night. It answers questions,
                qualifies callers, books appointments, and follows up on leads in a natural voice
                that fits your brand.
              </p>

              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                {voiceFeatures.map((feature) => (
                  <li
                    key={feature.id}
                    className="flex items-center text-white/90 hover:text-white transition-colors duration-300"
                    data-testid={`feature-${feature.id}`}
                  >
                    <CheckCircle className="h-3 sm:h-4 w-3 sm:w-4 text-green-400 mr-2 sm:mr-3 flex-shrink-0" aria-hidden="true" />
                    <span className="text-xs sm:text-sm font-medium">{feature.text}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact-form" 
                className="inline-flex items-center bg-white hover:bg-gradient-to-r hover:from-white hover:to-yellow-50 text-purple-600 hover:text-purple-700 font-bold px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 text-sm sm:text-base min-h-[44px]"
                data-testid="button-discuss-voiceai"
              >
                <Phone className="h-3 sm:h-4 w-3 sm:w-4 mr-2" aria-hidden="true" />
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
              <div
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300"
                role="img"
                aria-label="Example of a live AI voice call"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse shadow-lg shadow-green-400/50"></div>
                    <span className="text-white text-sm font-bold">Call Active</span>
                  </div>
                  <span className="text-yellow-300 text-xs font-medium">Agent: EVA-01</span>
                </div>
                
                {/* Voice Visualizer */}
                <div className="flex items-end justify-center space-x-1 mb-4 h-16">
                  {BAR_PEAKS.map((peak, i) => (
                    <motion.div
                      key={i}
                      className="bg-gradient-to-t from-purple-400 via-pink-400 to-yellow-400 rounded-full"
                      style={{ width: '4px', height: 8 }}
                      animate={{
                        height: [8, peak, 8],
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

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                  <p className="text-white text-sm italic font-medium">
                    "Thanks for calling! I can get you booked in today. Would 2 PM or 4:30 PM work better for you?"
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