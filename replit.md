# Overview

MediumReach is a modern full-stack web application that provides custom AI agent solutions for businesses. The platform specializes in building intelligent customer service agents that work across multiple messaging platforms (WhatsApp, Telegram, Instagram) and voice calls. The application features a marketing landing page with interactive components showcasing AI capabilities, contact forms, and platform integrations.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The frontend is built as a React Single Page Application (SPA) using modern web technologies:

- **React 18** with TypeScript for type safety and component-based architecture
- **Vite** as the build tool and development server for fast hot module replacement
- **Tailwind CSS** with shadcn/ui components for consistent, responsive design
- **Framer Motion** for smooth animations and micro-interactions
- **Lazy loading** implementation for performance optimization of non-critical components

The application follows a component-based architecture with clear separation of concerns. Components are organized by feature and use modern React patterns including hooks and functional components.

## Backend Architecture

The backend uses a minimalist Express.js server setup:

- **Express.js** as the web framework with middleware for JSON parsing and request logging
- **TypeScript** throughout the entire stack for type consistency
- **ESM modules** (ES6 imports/exports) for modern JavaScript standards
- **Development/Production** environment handling with different server configurations

The server is designed to be lightweight and primarily serves the React frontend while providing API capabilities for future expansion.

## Build and Development Setup

- **Vite** handles frontend bundling and development server
- **esbuild** for fast backend compilation and bundling
- **TypeScript compilation** with strict type checking
- **Development mode** includes Replit-specific plugins for cloud development environment
- **Production builds** generate optimized static assets and bundled server code

## Styling and UI Framework

- **Tailwind CSS** with custom configuration for design system
- **CSS Custom Properties** for theme variables and consistent spacing
- **shadcn/ui** component library with "new-york" style variant
- **Responsive design** with mobile-first approach
- **Dark mode support** through CSS class-based theming

# External Dependencies

## Core Framework Dependencies
- **React/React-DOM** - Frontend framework and DOM rendering
- **Express.js** - Backend web server framework
- **TypeScript** - Type safety across the entire application
- **Vite** - Frontend build tool and development server

## UI and Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React components
- **Lucide React** - Icon library for consistent iconography
- **shadcn/ui** - Pre-built component library

## Utilities and Tools
- **Zod** - Schema validation library
- **nanoid** - Unique ID generation
- **esbuild** - Fast JavaScript bundler for backend
- **tsx** - TypeScript execution for development

## Development Tools
- **@replit/vite-plugin-cartographer** - Replit-specific development tooling
- **@replit/vite-plugin-runtime-error-modal** - Enhanced error reporting in development
- **Autoprefixer** - CSS vendor prefix automation

## External Services
- **Make.com Webhook** - Form submission handling via webhook URL for contact form processing
- **Replit Development Banner** - Development environment identification
- **Static Asset Hosting** - Image assets served from attached_assets directory

The application is designed to be easily deployable on Replit with built-in development tools and can be extended with additional API endpoints and database integration as needed.