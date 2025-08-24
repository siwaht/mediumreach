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
    color: 'bg-purple-500'
  },
  {
    icon: Heart,
    title: 'Healthcare',
    solutions: ['Schedule appointments', 'Answer FAQs', 'Send reminders'],
    color: 'bg-red-500'
  },
  {
    icon: Home,
    title: 'Real Estate',
    solutions: ['Qualify leads', 'Book viewings', 'Property info 24/7'],
    color: 'bg-blue-500'
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurants & Hospitality',
    solutions: ['Take reservations', 'Share menu info', 'Process orders'],
    color: 'bg-orange-500'
  },
  {
    icon: Dumbbell,
    title: 'Fitness & Gyms',
    solutions: ['Book classes', 'Manage memberships', 'Send reminders'],
    color: 'bg-green-500'
  },
  {
    icon: GraduationCap,
    title: 'Education',
    solutions: ['Admissions info', 'Course details', 'Financial aid help'],
    color: 'bg-indigo-500'
  }
];

const IndustryUseCases: React.FC = () => {
  return (
    <section 
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white"
      aria-labelledby="industry-use-cases-heading"
      data-testid="section-industry-use-cases"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <h2 
            id="industry-use-cases-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3"
            data-testid="text-industry-title"
          >
            How Our AI Works For You
          </h2>
          <p 
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
            data-testid="text-industry-subtitle"
          >
            Real solutions for real businesses. See how AI transforms your industry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                data-testid={`card-industry-${index}`}
              >
                <div className={`${industry.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 
                  className="text-lg font-semibold text-gray-900 mb-3"
                  data-testid={`text-industry-name-${index}`}
                >
                  {industry.title}
                </h3>
                
                <ul className="space-y-2">
                  {industry.solutions.map((solution, sIndex) => (
                    <li 
                      key={sIndex}
                      className="flex items-start"
                      data-testid={`text-solution-${index}-${sIndex}`}
                    >
                      <span className="text-green-500 mr-2 mt-0.5">✓</span>
                      <span className="text-sm text-gray-600">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p 
            className="text-sm text-gray-500"
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