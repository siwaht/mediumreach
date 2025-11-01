import React, { lazy, Suspense } from 'react';
import LoadingSpinner from './components/LoadingSpinner';

const Header = lazy(() => import('./components/Header'));
const Hero = lazy(() => import('./components/Hero'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));
const Platforms = lazy(() => import('./components/Platforms'));
const VoiceAI = lazy(() => import('./components/VoiceAI'));
const IndustryUseCases = lazy(() => import('./components/IndustryUseCases'));
const FAQ = lazy(() => import('./components/FAQ'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const Footer = lazy(() => import('./components/Footer'));
const ElevenLabsWidget = lazy(() => import('./components/ElevenLabsWidget'));

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Suspense fallback={<LoadingSpinner />}>
        <Header />
        <main
          role="main"
          aria-label="Main content"
          data-testid="main-content"
        >
          <Hero />
          <HowItWorks />
          <Platforms />
          <VoiceAI />
          <IndustryUseCases />
          <FAQ />
          <ContactForm />
          <Footer />
        </main>
        <ElevenLabsWidget />
      </Suspense>
    </div>
  );
}

export default App;