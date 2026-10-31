import React from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Plug,
  Users,
  ShieldCheck,
  BarChart3,
  Languages,
} from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Trained on Your Business',
    description:
      'Your agent answers from your own documents, website, product data, and policies, so replies stay accurate and on-brand.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Plug,
    title: 'Takes Real Actions',
    description:
      'Beyond answering questions, it books appointments, creates CRM records, checks orders, and triggers workflows through your existing tools.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Users,
    title: 'Human Handoff Built In',
    description:
      'When a conversation needs a person, the agent passes it to your team with the full context, so customers never repeat themselves.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: ShieldCheck,
    title: 'Guardrails and Privacy',
    description:
      'Clear rules on what the agent can and cannot say or do, encrypted data handling, and access limited to the systems it needs.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: BarChart3,
    title: 'Reporting and Ongoing Tuning',
    description:
      'See conversation volumes, resolution rates, and leads captured. We review performance and keep improving your agent after launch.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Languages,
    title: 'Speaks Your Customers\u2019 Language',
    description:
      'Agents detect and reply in your customers\u2019 language across text and voice, so you can serve new markets without new hires.',
    color: 'from-teal-500 to-cyan-500',
  },
];

const Features: React.FC = () => {
  return (
    <section
      id="features"
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative"
      aria-labelledby="features-heading"
      data-testid="features-section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            id="features-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            data-testid="text-features-title"
          >
            What Every MediumReach Agent Includes
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed"
            data-testid="text-features-description"
          >
            We build production-ready agents, not demo bots. Each one is set up, connected, and looked after by our team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group bg-white rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent hover:-translate-y-1 relative overflow-hidden"
                data-testid={`feature-card-${index}`}
                aria-labelledby={`feature-title-${index}`}
              >
                <div
                  className={`bg-gradient-to-br ${feature.color} w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  aria-hidden="true"
                >
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <h3
                  id={`feature-title-${index}`}
                  className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300"
                  data-testid={`text-feature-title-${index}`}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm sm:text-base text-gray-600 leading-relaxed"
                  data-testid={`text-feature-description-${index}`}
                >
                  {feature.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
