import React, { useReducer, useCallback } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../lib/constants';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormState {
  data: FormData;
  status: 'idle' | 'submitting' | 'success' | 'error';
  error: string;
}

type FormAction =
  | { type: 'UPDATE_FIELD'; field: keyof FormData; value: string }
  | { type: 'SUBMIT_START' }
  | { type: 'SUBMIT_SUCCESS' }
  | { type: 'SUBMIT_ERROR'; error: string }
  | { type: 'RESET' };

const initialState: FormState = {
  data: { name: '', email: '', company: '', message: '' },
  status: 'idle',
  error: '',
};

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        data: { ...state.data, [action.field]: action.value },
        error: '',
      };
    case 'SUBMIT_START':
      return { ...state, status: 'submitting', error: '' };
    case 'SUBMIT_SUCCESS':
      return { ...initialState, status: 'success' };
    case 'SUBMIT_ERROR':
      return { ...state, status: 'error', error: action.error };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

const MAX_RETRIES = 2;
const RETRY_DELAY = 1000;

const ContactForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      dispatch({ type: 'UPDATE_FIELD', field: name as keyof FormData, value });
    },
    []
  );

  const submitForm = useCallback(async (): Promise<boolean> => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...state.data,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Failed to send message');
    }

    return true;
  }, [state.data]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message } = state.data;

    if (!name.trim() || !email.trim() || !message.trim()) {
      dispatch({ type: 'SUBMIT_ERROR', error: 'Please fill out all required fields' });
      return;
    }

    dispatch({ type: 'SUBMIT_START' });

    let attempts = 0;
    while (attempts <= MAX_RETRIES) {
      try {
        await submitForm();
        dispatch({ type: 'SUBMIT_SUCCESS' });
        return;
      } catch (error) {
        attempts++;
        if (attempts > MAX_RETRIES) {
          const errorMessage = error instanceof Error ? error.message : 'Failed to send message';
          dispatch({ type: 'SUBMIT_ERROR', error: `${errorMessage}. Please try again later.` });
        } else {
          await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY * attempts));
        }
      }
    }
  };

  const isSubmitting = state.status === 'submitting';
  const isSuccess = state.status === 'success';

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
                        href={SOCIAL_LINKS.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 hover:bg-white/30 active:bg-white/40 active:transform active:scale-[0.98] p-2 rounded-full transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center"
                        data-testid="social-linkedin"
                      >
                        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a
                        href={SOCIAL_LINKS.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 hover:bg-white/30 active:bg-white/40 active:transform active:scale-[0.98] p-2 rounded-full transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center"
                        data-testid="social-instagram"
                      >
                        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 md:p-10">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6" data-testid="text-form-title">Contact Us</h3>

                {isSuccess ? (
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
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" role="form">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={state.data.name}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed min-h-[44px] hover:border-gray-400"
                        required
                        data-testid="input-name"
                        aria-label="Your name"
                        aria-required="true"
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
                        value={state.data.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed min-h-[44px] hover:border-gray-400"
                        required
                        data-testid="input-email"
                        aria-label="Your email address"
                        aria-required="true"
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
                        value={state.data.company}
                        onChange={handleChange}
                        disabled={isSubmitting}
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
                        value={state.data.message}
                        onChange={handleChange}
                        rows={4}
                        maxLength={5000}
                        disabled={isSubmitting}
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 resize-none disabled:bg-gray-100 disabled:cursor-not-allowed hover:border-gray-400"
                        required
                        data-testid="input-message"
                        aria-label="Your message"
                        aria-required="true"
                      ></textarea>
                    </div>

                    {state.error && (
                      <div 
                        className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg"
                        role="alert"
                        aria-live="polite"
                      >
                        <AlertCircle className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                        <span>{state.error}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-6 py-3.5 rounded-full transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed disabled:transform-none min-h-[48px]"
                      data-testid="button-submit"
                      aria-label="Submit contact form"
                    >
                      {isSubmitting ? (
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