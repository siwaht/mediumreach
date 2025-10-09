import { useEffect, useState } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': any;
    }
  }
  interface Window {
    __elevenLabsLoaded?: boolean;
  }
}

export default function ElevenLabsWidget() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (window.__elevenLabsLoaded) {
      const checkElement = () => {
        if (customElements.get('elevenlabs-convai')) {
          setIsReady(true);
        } else {
          setTimeout(checkElement, 50);
        }
      };
      checkElement();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
    script.type = 'text/javascript';
    script.async = true;

    const checkElement = () => {
      if (customElements.get('elevenlabs-convai')) {
        setIsReady(true);
        window.__elevenLabsLoaded = true;
      } else {
        setTimeout(checkElement, 50);
      }
    };

    script.onload = checkElement;
    script.onerror = () => {
      console.warn('Failed to load ElevenLabs widget');
    };
    
    document.body.appendChild(script);

    return () => {
      if (!window.__elevenLabsLoaded && script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);

  if (!isReady) {
    return null;
  }

  return <elevenlabs-convai agent-id="agent_01jxpqwnv9f6eapf77wejkeyqh"></elevenlabs-convai>;
}
