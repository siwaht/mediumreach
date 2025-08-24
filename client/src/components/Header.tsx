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
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2 sm:py-3 border-b border-gray-100' 
          : 'bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm py-3 sm:py-5'
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
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 inline-block font-extrabold tracking-tight">
                  MediumReach
                </span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Desktop navigation">
            <a 
              href="#features" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 relative group"
              data-testid="nav-features-desktop"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#contact" 
              className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 active:from-blue-800 active:to-purple-800 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 overflow-hidden group"
              data-testid="nav-contact-desktop"
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 p-2 -mr-2 hover:bg-gray-100/80 rounded-xl transition-all duration-300 hover:shadow-md"
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
          className="md:hidden bg-white/95 backdrop-blur-md shadow-2xl absolute top-full left-0 w-full py-4 px-4 border-t border-gray-100 slide-up"
          role="navigation"
          aria-label="Mobile navigation"
          data-testid="mobile-menu"
        >
          <nav className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 py-2 px-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl"
              onClick={() => setIsOpen(false)}
              data-testid="nav-features-mobile"
            >
              Features
            </a>
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 active:from-blue-800 active:to-purple-800 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 inline-block text-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
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