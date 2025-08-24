import React, { useState } from 'react';
import { X } from 'lucide-react';

const Footer = () => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  return (
    <footer 
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-8 sm:py-10 md:py-12 relative overflow-hidden"
      role="contentinfo"
      aria-label="Site footer"
      data-testid="footer-main"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 items-start">
          {/* Company Info */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center">
              <span 
                className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                data-testid="footer-logo"
              >
                MediumReach
              </span>
            </div>
            <p 
              className="text-sm sm:text-base text-gray-400 max-w-md"
              data-testid="text-footer-description"
            >
              Transforming customer interactions with intelligent AI agents across messaging platforms and voice calls.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-white mb-1">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#how-it-works" 
                    className="text-sm sm:text-base text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text transition-all duration-300 inline-block py-1"
                    data-testid="footer-link-features"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact-form" 
                    className="text-sm sm:text-base text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text transition-all duration-300 inline-block py-1"
                    data-testid="footer-link-contact"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <button 
                    onClick={() => setShowPrivacyPolicy(true)} 
                    className="text-sm sm:text-base text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text transition-all duration-300 py-1 text-left"
                    data-testid="button-privacy-policy"
                    aria-label="View privacy policy"
                  >
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          
          {/* Social Links */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-white mb-1">Connect With Us</h3>
            <div className="flex space-x-3 sm:space-x-4">
              <a 
                href="https://www.linkedin.com/company/mediumreach" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800/50 hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 p-2.5 sm:p-3 rounded-full transition-all duration-300 group min-w-[44px] min-h-[44px] flex items-center justify-center border border-gray-700 hover:border-transparent hover:shadow-lg hover:shadow-blue-600/30 hover:scale-110"
                data-testid="footer-social-linkedin"
                aria-label="Visit MediumReach LinkedIn page"
              >
                <svg className="h-4 sm:h-5 w-4 sm:w-5 fill-current text-gray-400 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/mediumreach/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800/50 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 p-2.5 sm:p-3 rounded-full transition-all duration-300 group min-w-[44px] min-h-[44px] flex items-center justify-center border border-gray-700 hover:border-transparent hover:shadow-lg hover:shadow-purple-600/30 hover:scale-110"
                data-testid="footer-social-instagram"
                aria-label="Visit MediumReach Instagram page"
              >
                <svg className="h-4 sm:h-5 w-4 sm:w-5 fill-current text-gray-400 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <hr className="my-6 sm:my-8 border-gray-700/50" />
        
        <div 
          className="text-center text-gray-400 text-xs sm:text-sm"
          data-testid="text-copyright"
        >
          &copy; {new Date().getFullYear()} MediumReach. All rights reserved.
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacyPolicy && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-policy-title"
          data-testid="modal-privacy-policy"
        >
          <div className="bg-white text-gray-800 rounded-xl max-w-3xl w-full max-h-[80vh] overflow-y-auto p-4 sm:p-6 relative">
            <button 
              onClick={() => setShowPrivacyPolicy(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 p-1 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close privacy policy"
              data-testid="button-close-privacy"
            >
              <X className="h-5 sm:h-6 w-5 sm:w-6" />
            </button>
            
            <h2 
              id="privacy-policy-title"
              className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6"
              data-testid="text-privacy-title"
            >
              Privacy Policy
            </h2>
            
            <div className="space-y-4 sm:space-y-6">
              <section>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">1. Data Collection</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-2">To operate and train your custom AI agents, we collect and process the following data related to your business and your customers' interactions:</p>
                <ul className="list-disc ml-5 sm:ml-6 mt-2 text-sm sm:text-base text-gray-600 space-y-2">
                  <li><strong>Interaction Data:</strong> Text messages, chat conversations, and voice recordings from calls with your AI agent.</li>
                  <li><strong>User Data:</strong> User preferences and interaction history to improve performance.</li>
                  <li><strong>Technical Data:</strong> Information necessary for service operation, such as logs and API call data.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">2. Use of AI Technology</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-2">Our custom AI agents are built using advanced technology to serve your business needs:</p>
                <ul className="list-disc ml-5 sm:ml-6 mt-2 text-sm sm:text-base text-gray-600 space-y-2">
                  <li><strong>Natural Language Processing (NLP):</strong> To understand and interpret text and chat inquiries.</li>
                  <li><strong>Voice Recognition & Synthesis:</strong> To manage voice-based interactions effectively.</li>
                  <li><strong>Machine Learning (ML):</strong> To train your agent for more accurate, personalized responses over time.</li>
                  <li><strong>Secure Infrastructure:</strong> All data is processed and stored using secure, proprietary methods.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">3. Data Protection</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-2">Mediumreach.com is committed to protecting your data with robust security measures:</p>
                <ul className="list-disc ml-5 sm:ml-6 mt-2 text-sm sm:text-base text-gray-600 space-y-2">
                  <li><strong>Encryption:</strong> End-to-end encryption for all communications between your customers and the AI agent.</li>
                  <li><strong>Secure Storage:</strong> Data is stored in secure cloud environments with regular, redundant backups.</li>
                  <li><strong>Access Control:</strong> Strict access controls and authentication protocols to prevent unauthorized access.</li>
                  <li><strong>Audits:</strong> Regular security audits and system updates to address emerging threats.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">4. Your Rights as a Client</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-2">As a client of Mediumreach.com, you have the right to:</p>
                <ul className="list-disc ml-5 sm:ml-6 mt-2 text-sm sm:text-base text-gray-600 space-y-2">
                  <li><strong>Access Your Data:</strong> Request access to the data associated with your account.</li>
                  <li><strong>Request Deletion:</strong> Request the deletion of your account data, subject to legal and operational requirements.</li>
                  <li><strong>Opt-Out:</strong> Opt-out of specific data collection processes where feasible.</li>
                  <li><strong>Export Your Data:</strong> Request an export of your primary account data.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">5. Data Retention</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-2">We retain data only for as long as it is necessary for the following purposes:</p>
                <ul className="list-disc ml-5 sm:ml-6 mt-2 text-sm sm:text-base text-gray-600 space-y-2">
                  <li><strong>Service Improvement:</strong> Enhancing the performance and accuracy of your AI agent.</li>
                  <li><strong>Legal & Compliance:</strong> Fulfilling our legal and contractual obligations.</li>
                  <li><strong>Quality Assurance & Support:</strong> Assisting with user support and maintaining service quality.</li>
                </ul>
              </section>

              <section className="border-t pt-4">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Changes to Services and Pricing</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 italic">This section would typically be part of your Terms of Service document.</p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold mb-2">1. Service Modifications</h4>
                    <p className="text-sm sm:text-base text-gray-600">We are constantly improving our services. We may add or remove functionalities or features, and we may suspend or stop a service altogether.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold mb-2">2. Pricing Adjustments</h4>
                    <p className="text-sm sm:text-base text-gray-600">Considering market changes and the evolution of our services, Mediumreach.com reserves the right to modify our pricing. We are committed to transparency and will provide all clients with a minimum of two (2) weeks' advance notice before any pricing changes take effect.</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;