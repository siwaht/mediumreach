/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEBHOOK_URL?: string;
  readonly VITE_ELEVENLABS_AGENT_ID?: string;
  readonly VITE_ENABLE_CHAT_WIDGET?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
