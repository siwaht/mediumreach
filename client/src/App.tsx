import React, { lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load components for better performance
const HowItWorks = lazy(() => import('./components/HowItWorks'));
const Platforms = lazy(() => import('./components/Platforms'));
const VoiceAI = lazy(() => import('./components/VoiceAI'));
const IndustryUseCases = lazy(() => import('./components/IndustryUseCases'));
const FAQ = lazy(() => import('./components/FAQ'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <main 
        role="main"
        aria-label="Main content"
        data-testid="main-content"
      >
        <Hero />
        <Suspense fallback={<LoadingSpinner />}>
          <HowItWorks />
          <Platforms />
          <VoiceAI />
          <IndustryUseCases />
          <FAQ />
          <ContactForm />
          <Footer />
        </Suspense>
      </main>
      {/* ElevenLabs Voice AI Widget */}
      {/* @ts-ignore - Custom element from external library */}
      <elevenlabs-convai agent-id="agent_01jxpqwnv9f6eapf77wejkeyqh"></elevenlabs-convai>
    </div>
  );
}

export default App;