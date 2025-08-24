import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2 sm:py-3' : 'bg-transparent py-3 sm:py-5'
      }`}
      role="navigation"
      aria-label="Main navigation"
      data-testid="header-main"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div 
              onClick={handleLogoClick}
              className="flex items-center cursor-pointer group"
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && handleLogoClick()}
              aria-label="MediumReach - Go to top"
              data-testid="logo-home"
            >
              <span className="text-2xl sm:text-3xl font-bold">
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200 inline-block">
                  MediumReach
                </span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Desktop navigation">
            <a 
              href="#features" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              data-testid="nav-features-desktop"
            >
              Features
            </a>
            <a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 active:transform active:scale-[0.98] text-white px-6 py-2 rounded-full font-medium transition-all duration-200 shadow-md hover:shadow-lg"
              data-testid="nav-contact-desktop"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 p-2 -mr-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              data-testid="mobile-menu-toggle"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div 
          className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full py-4 px-4 border-t border-gray-200"
          role="navigation"
          aria-label="Mobile navigation"
          data-testid="mobile-menu"
        >
          <nav className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 px-3 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsOpen(false)}
              data-testid="nav-features-mobile"
            >
              Features
            </a>
            <a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 active:transform active:scale-[0.98] text-white px-6 py-3 rounded-full font-medium transition-all duration-200 inline-block text-center shadow-md hover:shadow-lg"
              onClick={() => setIsOpen(false)}
              data-testid="nav-contact-mobile"
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;