import { useEffect, useState } from 'react';

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
}

const SCRIPT_URL = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
const ELEMENT_NAME = 'elevenlabs-convai';
const AGENT_ID = import.meta.env.VITE_ELEVENLABS_AGENT_ID || 'agent_9501k723dysjf4na4z5nya1tvqzj';
const WIDGET_ENABLED = import.meta.env.VITE_ENABLE_CHAT_WIDGET !== 'false';
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000;
const REGISTER_TIMEOUT = 5000;

type WidgetStatus = 'loading' | 'ready' | 'error';

/** Wait until the browser is idle so the third-party script doesn't compete with first paint. */
function whenIdle(): Promise<void> {
  return new Promise((resolve) => {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => resolve(), { timeout: 3000 });
    } else {
      setTimeout(resolve, 1500);
    }
  });
}

function loadScript(): Promise<void> {
  // Already registered (e.g. a previous attempt finished late): never inject twice,
  // because a second define() of the same custom element throws.
  if (customElements.get(ELEMENT_NAME)) return Promise.resolve();

  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_URL}"]`);
    // Only replace a script tag that failed; keep one that may still be loading.
    if (existing?.dataset.failed === 'true') existing.remove();

    if (!document.querySelector(`script[src="${SCRIPT_URL}"]`)) {
      const script = document.createElement('script');
      script.src = SCRIPT_URL;
      script.async = true;
      script.onerror = () => {
        script.dataset.failed = 'true';
        reject(new Error('Failed to load ElevenLabs script'));
      };
      document.body.appendChild(script);
    }

    const timeoutId = setTimeout(
      () => reject(new Error('ElevenLabs widget element was not registered in time')),
      REGISTER_TIMEOUT
    );
    customElements.whenDefined(ELEMENT_NAME).then(() => {
      clearTimeout(timeoutId);
      resolve();
    });
  });
}

export default function ElevenLabsWidget() {
  const [status, setStatus] = useState<WidgetStatus>('loading');

  useEffect(() => {
    if (!WIDGET_ENABLED) return;

    let cancelled = false;

    const init = async () => {
      await whenIdle();
      for (let attempt = 0; attempt <= MAX_RETRIES && !cancelled; attempt++) {
        try {
          await loadScript();
          if (!cancelled) setStatus('ready');
          return;
        } catch (error) {
          if (attempt === MAX_RETRIES) {
            console.warn('ElevenLabs widget failed to load after retries:', error);
            if (!cancelled) setStatus('error');
            return;
          }
          await new Promise((r) => setTimeout(r, RETRY_DELAY * (attempt + 1)));
        }
      }
    };

    init();

    return () => {
      cancelled = true;
    };
  }, []);

  if (!WIDGET_ENABLED || status !== 'ready') {
    return null;
  }

  return <elevenlabs-convai agent-id={AGENT_ID} />;
}
