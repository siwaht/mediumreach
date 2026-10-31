import React, { lazy, Suspense } from 'react';
import { MotionConfig } from 'framer-motion';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Platforms from './components/Platforms';
import VoiceAI from './components/VoiceAI';
import IndustryUseCases from './components/IndustryUseCases';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { MAIN_CONTENT_ID } from './lib/constants';

// Sections are imported eagerly so the page renders in one pass and
// deep links such as /#contact-form can find their target on first load.
// Only the third-party voice widget is deferred.
const ElevenLabsWidget = lazy(() => import('./components/ElevenLabsWidget'));

function App() {
  return (
    <ErrorBoundary>
      <MotionConfig reducedMotion="user">
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
          <Header />
          <main
            id={MAIN_CONTENT_ID}
            tabIndex={-1}
            className="outline-none"
            data-testid="main-content"
          >
            <Hero />
            <Platforms />
            <Features />
            <HowItWorks />
            <VoiceAI />
            <IndustryUseCases />
            <FAQ />
            <ContactForm />
          </main>
          <Footer />
          <ErrorBoundary fallback={null}>
            <Suspense fallback={null}>
              <ElevenLabsWidget />
            </Suspense>
          </ErrorBoundary>
        </div>
      </MotionConfig>
    </ErrorBoundary>
  );
}

export default App;
