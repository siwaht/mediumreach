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
    solutions: ['Order tracking and returns', 'Product recommendations and upsells', 'Abandoned cart follow-ups'],
    color: 'bg-purple-500',
    lightColor: 'from-purple-100 to-pink-100'
  },
  {
    icon: Heart,
    title: 'Healthcare',
    solutions: ['Appointment booking and rescheduling', 'Patient FAQs and intake forms', 'Reminders that reduce no-shows'],
    color: 'bg-red-500',
    lightColor: 'from-red-100 to-pink-100'
  },
  {
    icon: Home,
    title: 'Real Estate',
    solutions: ['Instant lead qualification', 'Viewing bookings synced to your calendar', 'Property details any time of day'],
    color: 'bg-blue-500',
    lightColor: 'from-blue-100 to-cyan-100'
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurants & Hospitality',
    solutions: ['Reservations by chat or phone', 'Menu, allergen, and opening-hours questions', 'Takeaway and delivery orders'],
    color: 'bg-orange-500',
    lightColor: 'from-orange-100 to-yellow-100'
  },
  {
    icon: Dumbbell,
    title: 'Fitness & Gyms',
    solutions: ['Class and personal training bookings', 'Membership sign-ups and renewals', 'Win-back messages for inactive members'],
    color: 'bg-green-500',
    lightColor: 'from-green-100 to-emerald-100'
  },
  {
    icon: GraduationCap,
    title: 'Education',
    solutions: ['Admissions and enrolment questions', 'Course and fee details', 'Student support outside office hours'],
    color: 'bg-indigo-500',
    lightColor: 'from-indigo-100 to-purple-100'
  }
];

const IndustryUseCases: React.FC = () => {
  return (
    <section 
      id="use-cases"
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
            AI Agents Built for Your Industry
          </h2>
          <p 
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed"
            data-testid="text-industry-subtitle"
          >
            Common jobs our agents take off your team's plate, by industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <article
                key={industry.title}
                className="group bg-white rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent hover:bg-gradient-to-br hover:from-white hover:to-blue-50/30 relative overflow-hidden transform hover:-translate-y-1"
                data-testid={`card-industry-${index}`}
                aria-labelledby={`industry-title-${index}`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className={`bg-gradient-to-br ${industry.lightColor} rounded-2xl w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10 shadow-md`} aria-hidden="true">
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
                      key={solution}
                      className="flex items-start group/item"
                      data-testid={`text-solution-${index}-${sIndex}`}
                    >
                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-green-200 transition-colors" aria-hidden="true">
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
            Don't see your industry? <a href="#contact-form" className="text-blue-600 hover:text-blue-700 underline underline-offset-2 not-italic">Tell us your use case</a> and we'll scope a custom agent.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustryUseCases;