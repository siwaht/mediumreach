import { useEffect, useState, useCallback } from 'react';

// Type definitions for ElevenLabs widget
interface ElevenLabsConvaiAttributes {
  'agent-id': string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & ElevenLabsConvaiAttributes,
        HTMLElement
      >;
    }
  }
  interface Window {
    __elevenLabsLoaded?: boolean;
  }
}

const SCRIPT_URL = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
const AGENT_ID = import.meta.env.VITE_ELEVENLABS_AGENT_ID || 'agent_9501k723dysjf4na4z5nya1tvqzj';
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000;
const CHECK_INTERVAL = 50;
const MAX_CHECK_ATTEMPTS = 100;

type WidgetStatus = 'loading' | 'ready' | 'error';

export default function ElevenLabsWidget() {
  const [status, setStatus] = useState<WidgetStatus>('loading');
  const [retryCount, setRetryCount] = useState(0);

  const loadScript = useCallback((): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (window.__elevenLabsLoaded && customElements.get('elevenlabs-convai')) {
        resolve();
        return;
      }

      const existingScript = document.querySelector(`script[src="${SCRIPT_URL}"]`);
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.src = SCRIPT_URL;
      script.type = 'text/javascript';
      script.async = true;

      let checkAttempts = 0;
      const checkElement = () => {
        if (customElements.get('elevenlabs-convai')) {
          window.__elevenLabsLoaded = true;
          resolve();
        } else if (checkAttempts < MAX_CHECK_ATTEMPTS) {
          checkAttempts++;
          setTimeout(checkElement, CHECK_INTERVAL);
        } else {
          reject(new Error('Widget element not registered'));
        }
      };

      script.onload = checkElement;
      script.onerror = () => reject(new Error('Failed to load script'));

      document.body.appendChild(script);
    });
  }, []);

  useEffect(() => {
    let mounted = true;

    const initWidget = async () => {
      try {
        await loadScript();
        if (mounted) {
          setStatus('ready');
        }
      } catch (error) {
        if (mounted) {
          if (retryCount < MAX_RETRIES) {
            setTimeout(() => {
              setRetryCount((prev: number) => prev + 1);
            }, RETRY_DELAY * (retryCount + 1));
          } else {
            console.warn('ElevenLabs widget failed to load after retries:', error);
            setStatus('error');
          }
        }
      }
    };

    initWidget();

    return () => {
      mounted = false;
    };
  }, [loadScript, retryCount]);

  if (status !== 'ready') {
    return null;
  }

  return <elevenlabs-convai agent-id={AGENT_ID} />;
}
