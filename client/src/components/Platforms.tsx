import React from 'react';
import { Phone, Instagram, Zap, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const platforms = [
  {
    name: 'WhatsApp AI Agents',
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    ),
    description: 'Reply instantly to customer messages on WhatsApp, just like they\'re texting a friend',
    color: 'bg-green-500',
    textColor: 'text-green-500'
  },
  {
    name: 'Telegram AI Agents',
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
    description: 'Instant replies in Telegram groups and private chats, handling thousands of conversations at once',
    color: 'bg-blue-500',
    textColor: 'text-blue-500'
  },
  {
    name: 'Instagram AI Agents',
    icon: <Instagram className="h-8 w-8" />,
    description: 'Automatically respond to Instagram messages and comments, turning followers into customers',
    color: 'bg-purple-500',
    textColor: 'text-purple-500'
  },
  {
    name: 'Voice AI Agents',
    icon: <Phone className="h-8 w-8" />,
    description: 'Answers your business phone, schedules appointments, takes orders - sounds just like your best employee.',
    color: 'bg-indigo-500',
    textColor: 'text-indigo-500'
  },
  {
    name: 'Ambient AI Agents',
    icon: <Zap className="h-8 w-8" />,
    description: 'AI that works quietly behind the scenes - updating records, sending reminders, following up automatically.',
    color: 'bg-orange-500',
    textColor: 'text-orange-500'
  },
  {
    name: 'Custom AI Agents',
    icon: <Settings className="h-8 w-8" />,
    description: 'AI built specifically for your business needs - whatever unique challenge you have, we can solve it.',
    color: 'bg-teal-500',
    textColor: 'text-teal-500'
  }
];

const Platforms = () => {
  return (
    <section 
      id="platforms"
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-gray-50/30 to-white relative"
      aria-labelledby="platforms-heading"
      data-testid="platforms-section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 
            id="platforms-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            data-testid="text-platforms-title"
          >
            Works Everywhere Your Customers Are
          </h2>
          <p 
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0"
            data-testid="text-platforms-description"
          >
            One AI assistant that works on all platforms - no more juggling different tools for different channels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {platforms.map((platform, index) => (
            <motion.article
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-5 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent hover:-translate-y-1 relative overflow-hidden"
              data-testid={`platform-card-${index}`}
              aria-labelledby={`platform-title-${index}`}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
              <div 
                className={`${platform.color} w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10`}
                aria-hidden="true"
              >
                {platform.icon}
              </div>
              <h3 
                id={`platform-title-${index}`}
                className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 ${platform.textColor} group-hover:scale-105 transition-transform duration-300 origin-left relative z-10`}
                data-testid={`text-platform-title-${index}`}
              >
                {platform.name}
              </h3>
              <p 
                className="text-sm sm:text-base text-gray-600 leading-relaxed relative z-10"
                data-testid={`text-platform-description-${index}`}
              >
                {platform.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Platforms;