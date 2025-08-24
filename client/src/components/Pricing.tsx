import React from 'react';
import { Check, Zap, Building, Rocket, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$299',
    period: '/month',
    description: 'Perfect for small businesses getting started with AI',
    features: [
      'Up to 1,000 conversations/month',
      '2 platform integrations',
      'Basic AI training',
      'Email support',
      '5-day setup'
    ],
    icon: Zap,
    popular: false,
    buttonText: 'Get Started'
  },
  {
    name: 'Professional',
    price: 'Custom',
    period: 'pricing',
    description: 'For growing businesses with higher volume needs',
    features: [
      'Unlimited conversations',
      'All platform integrations',
      'Advanced AI customization',
      'Priority support',
      'Dedicated account manager',
      'Custom integrations'
    ],
    icon: Building,
    popular: true,
    buttonText: 'Contact Sales'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'Full-scale AI transformation for large organizations',
    features: [
      'Everything in Professional',
      'Multiple AI agents',
      'White-label options',
      'SLA guarantees',
      'On-premise deployment',
      'Custom training sessions'
    ],
    icon: Rocket,
    popular: false,
    buttonText: 'Contact Sales'
  }
];

const Pricing: React.FC = () => {
  return (
    <section 
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-gray-50/30 to-white relative"
      aria-labelledby="pricing-heading"
      data-testid="section-pricing"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 
            id="pricing-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            data-testid="text-pricing-title"
          >
            Simple, Transparent Pricing
          </h2>
          <p 
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed"
            data-testid="text-pricing-subtitle"
          >
            Start small and scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border ${
                  plan.popular 
                    ? 'border-blue-500 transform scale-105' 
                    : 'border-gray-100 hover:border-gray-200'
                }`}
                data-testid={`pricing-card-${index}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className="flex justify-center mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                    plan.popular 
                      ? 'bg-gradient-to-br from-blue-100 to-purple-100' 
                      : 'bg-gray-100'
                  }`}>
                    <Icon className={`h-8 w-8 ${
                      plan.popular ? 'text-blue-600' : 'text-gray-600'
                    }`} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                  {plan.name}
                </h3>
                
                <div className="text-center mb-4">
                  <span className="text-3xl sm:text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-1">
                    {plan.period}
                  </span>
                </div>

                <p className="text-sm text-gray-600 text-center mb-6">
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li 
                      key={fIndex}
                      className="flex items-start"
                      data-testid={`feature-${index}-${fIndex}`}
                    >
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-sm text-gray-600">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  data-testid={`button-select-${index}`}
                >
                  {plan.buttonText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex items-center justify-center space-x-8 flex-wrap gap-4">
            <div className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-gray-600">No setup fees</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-gray-600">Cancel anytime</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-gray-600">ROI in first month</span>
            </div>
          </div>
          
          <p className="text-sm text-gray-500 mt-6 max-w-2xl mx-auto">
            All plans include core AI features. Volume discounts available for high-usage customers.
            Contact us for custom requirements or annual pricing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;