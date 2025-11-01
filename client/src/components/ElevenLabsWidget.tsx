import { useEffect, useState } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { 'agent-id': string },
        HTMLElement
      >;
    }
  }
  interface Window {
    __elevenLabsLoaded?: boolean;
  }
}

const MAX_CHECK_ATTEMPTS = 100; // 5 seconds maximum (100 * 50ms)
const CHECK_INTERVAL = 50; // milliseconds

export default function ElevenLabsWidget() {
  const [isReady, setIsReady] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let checkAttempts = 0;
    let timeoutId: number | undefined;

    const checkElement = () => {
      if (customElements.get('elevenlabs-convai')) {
        setIsReady(true);
        window.__elevenLabsLoaded = true;
      } else if (checkAttempts < MAX_CHECK_ATTEMPTS) {
        checkAttempts++;
        timeoutId = window.setTimeout(checkElement, CHECK_INTERVAL);
      } else {
        // Max attempts reached, stop checking to prevent memory leak
        setHasError(true);
        if (process.env.NODE_ENV === 'development') {
          console.error('ElevenLabs widget failed to load after maximum attempts');
        }
      }
    };

    if (window.__elevenLabsLoaded) {
      checkElement();
      return () => {
        if (timeoutId !== undefined) {
          clearTimeout(timeoutId);
        }
      };
    }

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
    script.type = 'text/javascript';
    script.async = true;

    script.onload = checkElement;
    script.onerror = () => {
      setHasError(true);
      if (process.env.NODE_ENV === 'development') {
        console.error('Failed to load ElevenLabs widget script');
      }
    };

    document.body.appendChild(script);

    return () => {
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }
      if (!window.__elevenLabsLoaded && script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);

  if (hasError) {
    return null; // Silently fail in production, error logged in development
  }

  if (!isReady) {
    return null;
  }

  return <elevenlabs-convai agent-id="agent_9501k723dysjf4na4z5nya1tvqzj"></elevenlabs-convai>;
}
