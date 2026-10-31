import React, { useState, useCallback, useEffect, memo } from 'react';
import { Menu, X } from 'lucide-react';
import { useThrottledScroll } from '../hooks/useThrottledScroll';
import { NAV_LINKS } from '../lib/constants';

const Header = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = useThrottledScroll({ threshold: 10, throttleMs: 100 });

  const handleLogoClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Close the mobile menu with Escape, and when the viewport grows to desktop.
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    const media = window.matchMedia('(min-width: 768px)');
    const handleMedia = (e: MediaQueryListEvent) => {
      if (e.matches) setIsOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    media.addEventListener('change', handleMedia);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      media.removeEventListener('change', handleMedia);
    };
  }, [isOpen]);

  const solidBackground = isScrolled || isOpen;

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        solidBackground 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2 sm:py-3 border-b border-gray-100' 
          : 'bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm py-3 sm:py-5'
      }`}
      data-testid="header-main"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button
              type="button"
              onClick={handleLogoClick}
              className="flex items-center cursor-pointer group"
              aria-label="MediumReach - Back to top"
              data-testid="logo-home"
            >
              <span className="text-2xl sm:text-3xl font-bold">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 inline-block font-extrabold tracking-tight">
                  MediumReach
                </span>
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 flex items-center"
                data-testid={`nav-link-${link.href.slice(1)}`}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#contact-form" 
              className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 active:from-blue-800 active:to-purple-800 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 overflow-hidden group flex items-center"
              data-testid="nav-contact-desktop"
            >
              <span className="relative z-10">Book a Free Call</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" aria-hidden="true"></span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu} 
              className="text-gray-700 p-2 -mr-2 hover:bg-gray-100/80 rounded-xl transition-all duration-300 hover:shadow-md"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              data-testid="mobile-menu-toggle"
            >
              {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav 
          id="mobile-menu"
          className="md:hidden bg-white/95 backdrop-blur-md shadow-2xl absolute top-full left-0 w-full py-4 px-4 border-t border-gray-100 slide-up"
          aria-label="Mobile navigation"
          data-testid="mobile-menu"
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-medium px-4 py-3 rounded-xl transition-colors duration-300"
                data-testid={`nav-link-mobile-${link.href.slice(1)}`}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#contact-form" 
              className="mt-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 active:from-blue-800 active:to-purple-800 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 inline-block text-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              onClick={closeMenu}
              data-testid="nav-contact-mobile"
            >
              Book a Free Call
            </a>
          </div>
        </nav>
      )}
    </header>
  );
});

Header.displayName = 'Header';
export default Header;
