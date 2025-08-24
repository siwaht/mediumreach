import React from 'react';
import { 
  ShoppingCart, 
  Heart, 
  Home, 
  UtensilsCrossed, 
  Dumbbell, 
  GraduationCap 
} from 'lucide-react';

const industries = [
  {
    icon: ShoppingCart,
    title: 'E-commerce & Retail',
    solutions: ['Handle returns', 'Track orders', 'Smart upselling'],
    color: 'bg-purple-500',
    lightColor: 'from-purple-100 to-pink-100'
  },
  {
    icon: Heart,
    title: 'Healthcare',
    solutions: ['Schedule appointments', 'Answer FAQs', 'Send reminders'],
    color: 'bg-red-500',
    lightColor: 'from-red-100 to-pink-100'
  },
  {
    icon: Home,
    title: 'Real Estate',
    solutions: ['Qualify leads', 'Book viewings', 'Property info 24/7'],
    color: 'bg-blue-500',
    lightColor: 'from-blue-100 to-cyan-100'
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurants & Hospitality',
    solutions: ['Take reservations', 'Share menu info', 'Process orders'],
    color: 'bg-orange-500',
    lightColor: 'from-orange-100 to-yellow-100'
  },
  {
    icon: Dumbbell,
    title: 'Fitness & Gyms',
    solutions: ['Book classes', 'Manage memberships', 'Send reminders'],
    color: 'bg-green-500',
    lightColor: 'from-green-100 to-emerald-100'
  },
  {
    icon: GraduationCap,
    title: 'Education',
    solutions: ['Admissions info', 'Course details', 'Financial aid help'],
    color: 'bg-indigo-500',
    lightColor: 'from-indigo-100 to-purple-100'
  }
];

const IndustryUseCases: React.FC = () => {
  return (
    <section 
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-gray-50/30 to-white relative"
      aria-labelledby="industry-use-cases-heading"
      data-testid="section-industry-use-cases"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 
            id="industry-use-cases-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            data-testid="text-industry-title"
          >
            Industry-Specific Use Cases
          </h2>
          <p 
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed"
            data-testid="text-industry-subtitle"
          >
            Real solutions for real businesses. See how AI transforms your industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <article
                key={index}
                className="group bg-white rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent hover:bg-gradient-to-br hover:from-white hover:to-blue-50/30 relative overflow-hidden transform hover:-translate-y-1"
                data-testid={`card-industry-${index}`}
                aria-labelledby={`industry-title-${index}`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className={`bg-gradient-to-br ${industry.lightColor} rounded-2xl w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10 shadow-md`}>
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-gray-700" />
                </div>
                
                <h3 
                  id={`industry-title-${index}`}
                  className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors duration-300 relative z-10"
                  data-testid={`text-industry-name-${index}`}
                >
                  {industry.title}
                </h3>
                
                <ul className="space-y-2.5 relative z-10">
                  {industry.solutions.map((solution, sIndex) => (
                    <li 
                      key={sIndex}
                      className="flex items-start group/item"
                      data-testid={`text-solution-${index}-${sIndex}`}
                    >
                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-green-200 transition-colors">
                        <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover/item:text-gray-800 transition-colors">{solution}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <p 
            className="text-base sm:text-lg text-gray-500 italic"
            data-testid="text-industry-footer"
          >
            Don't see your industry? We customize AI for any business need.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustryUseCases;