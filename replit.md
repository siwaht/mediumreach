# MediumReach - Custom AI Agents Platform

## Overview

MediumReach is a modern web application that specializes in building custom AI agents for businesses across multiple messaging platforms and voice calls. The platform offers intelligent chatbots and voice assistants for WhatsApp, Instagram, Telegram, and phone systems, featuring advanced AI capabilities like long-term memory, RAG (Retrieval-Augmented Generation), and multi-agent coordination.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool for fast development and optimized production builds
- **Tailwind CSS** with custom theme configuration for responsive design
- **Framer Motion** for smooth animations and enhanced user experience
- **Lazy loading** implementation for performance optimization with React Suspense
- **shadcn/ui** component library integration for consistent UI patterns

### Backend Architecture
- **Express.js** server with TypeScript for API handling
- **ESM modules** throughout the codebase for modern JavaScript standards
- **Development/Production** environment configuration with different build processes
- **Hot Module Replacement (HMR)** via Vite integration for development workflow
- **Request logging middleware** for API monitoring and debugging

### Build System
- **Vite** for frontend bundling with React plugin support
- **esbuild** for server-side TypeScript compilation and bundling
- **TypeScript** configuration with path aliases for clean imports
- **PostCSS** with Tailwind CSS and Autoprefixer for CSS processing
- **Development server** with middleware mode integration between Vite and Express

### UI/UX Design System
- **Responsive design** with mobile-first approach
- **Accessibility features** including ARIA labels, semantic HTML, and screen reader support
- **SEO optimization** with comprehensive meta tags and Open Graph protocol
- **Performance optimization** with lazy loading and code splitting
- **Touch-friendly interface** with minimum 44px touch targets for mobile devices

### Development Tools
- **Replit integration** with cartographer plugin for cloud development
- **Runtime error overlay** for enhanced debugging experience
- **TypeScript strict mode** for enhanced code quality and type safety
- **Path resolution** with absolute imports using @ and @shared aliases

## External Dependencies

### Core Frameworks
- **React 18.3.1** - Frontend UI library
- **Express 4.21.2** - Backend web framework
- **TypeScript 5.6.3** - Type safety across the application

### Build Tools
- **Vite 5.4.14** - Frontend build tool and development server
- **esbuild 0.25.0** - Fast JavaScript bundler for production builds

### UI Libraries
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Framer Motion 11.13.1** - Animation library for React
- **Lucide React 0.453.0** - Icon library
- **shadcn/ui** - Component library with Tailwind integration

### Utilities
- **Zod 3.24.2** - Schema validation library
- **nanoid 5.1.5** - URL-safe unique ID generator

### Development Dependencies
- **@replit/vite-plugin-cartographer** - Replit cloud development integration
- **@tailwindcss/typography** - Typography plugin for rich text content
- **tsx 4.19.1** - TypeScript execution engine for development

### External Services
- **Make.com webhook** - Form submission handling at `https://hook.eu2.make.com/`
- **Google Fonts** - Inter font family for typography
- **Schema.org** - Structured data for SEO optimization

### Database Preparation
- **Drizzle** configuration present with `db:push` script for future database integration