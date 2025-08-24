import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    submitted: false,
    error: '',
    isSubmitting: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formState.name || !formState.email || !formState.message) {
      setFormState(prev => ({ ...prev, error: 'Please fill out all required fields' }));
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setFormState(prev => ({ ...prev, error: 'Please enter a valid email address' }));
      return;
    }

    setFormState(prev => ({ ...prev, isSubmitting: true, error: '' }));

    try {
      const response = await fetch('https://hook.eu2.make.com/8b2a1le43ogn3jno1yhml5yaanz8yn6o', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          company: formState.company,
          message: formState.message,
          timestamp: new Date().toISOString()
        })
      });

      if (response.ok) {
        setFormState(prev => ({ 
          ...prev, 
          submitted: true, 
          error: '',
          name: '',
          email: '',
          company: '',
          message: '',
          isSubmitting: false
        }));
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setFormState(prev => ({ 
        ...prev, 
        error: 'Failed to send message. Please try again later.',
        isSubmitting: false
      }));
    }
  };

  return (
    <section 
      id="contact-form" 
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative"
      aria-labelledby="contact-heading"
      data-testid="contact-section"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid md:grid-cols-2">
              <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-6 sm:p-8 md:p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-2xl"></div>
                <h2 
                  id="contact-heading"
                  className="text-2xl sm:text-3xl font-extrabold mb-4 sm:mb-6 relative z-10"
                  data-testid="text-contact-title"
                >
                  Let's Get Your AI Assistant Started
                </h2>
                <p 
                  className="mb-6 sm:mb-8 opacity-95 leading-relaxed text-sm sm:text-base relative z-10"
                  data-testid="text-contact-description"
                >
                  Stop losing customers to slow responses. Tell us about your business and we'll show you how AI can help - usually within 24 hours.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Connect With Us</h3>
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <a 
                        href="https://www.linkedin.com/company/mediumreach" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white/20 hover:bg-white/30 active:bg-white/40 active:transform active:scale-[0.98] p-2 rounded-full transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center"
                        data-testid="social-linkedin"
                      >
                        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a 
                        href="https://www.instagram.com/mediumreach/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white/20 hover:bg-white/30 active:bg-white/40 active:transform active:scale-[0.98] p-2 rounded-full transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center"
                        data-testid="social-instagram"
                      >
                        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 sm:p-8 md:p-10">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6" data-testid="text-form-title">Contact Us</h3>
                
                {formState.submitted ? (
                  <div className="flex flex-col items-center text-center py-8">
                    <div className="bg-green-100 rounded-full p-3 mb-4">
                      <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 text-green-500" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Thank you for reaching out!</h4>
                    <p className="text-gray-600 max-w-sm">
                      We'll call or email you within 24 hours with ideas for your business.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        disabled={formState.isSubmitting}
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed min-h-[44px] hover:border-gray-400"
                        required
                        data-testid="input-name"
                        aria-label="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        disabled={formState.isSubmitting}
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed min-h-[44px] hover:border-gray-400"
                        required
                        data-testid="input-email"
                        aria-label="Your email address"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        disabled={formState.isSubmitting}
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed min-h-[44px] hover:border-gray-400"
                        data-testid="input-company"
                        aria-label="Your company name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={4}
                        disabled={formState.isSubmitting}
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 resize-none disabled:bg-gray-100 disabled:cursor-not-allowed hover:border-gray-400"
                        required
                        data-testid="input-message"
                        aria-label="Your message"
                      ></textarea>
                    </div>
                    
                    {formState.error && (
                      <div className="text-red-500 text-sm">{formState.error}</div>
                    )}
                    
                    <button
                      type="submit"
                      disabled={formState.isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-6 py-3.5 rounded-full transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed disabled:transform-none min-h-[48px]"
                      data-testid="button-submit"
                      aria-label="Submit contact form"
                    >
                      {formState.isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="h-4 w-4 ml-2" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;