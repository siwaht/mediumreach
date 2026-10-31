# Project Notes

## Project Structure

- **Frontend**: React + TypeScript + Vite + Tailwind (in `client/`)
- **Backend**: Express server (in `server/`), serves the API and the built client
- **Port**: 5000 by default (override with `PORT`)

## Scripts

- `npm run dev` - Express + Vite dev server with hot reload
- `npm run build` - build the client into `dist/`
- `npm run build:server` - bundle the server into `dist/index.js` (run after `npm run build`)
- `npm start` - run the production server
- `npm run check` - type-check

Netlify and Cloudflare Pages deploy the static `dist/` folder directly (see `netlify.toml`, `wrangler.json`).

## ElevenLabs Voice Widget

The widget (`client/src/components/ElevenLabsWidget.tsx`) is enabled and loads after the page becomes idle. It is wrapped in its own error boundary, so a script failure never breaks the page.

- Set `VITE_ELEVENLABS_AGENT_ID` to use a different agent.
- Set `VITE_ENABLE_CHAT_WIDGET=false` to turn it off.

## Contact Form

Submissions are posted as JSON to the Make.com webhook in `VITE_WEBHOOK_URL` (with a fallback in `client/src/lib/constants.ts`). Payload fields: `name`, `email`, `company`, `message`, `timestamp`.
