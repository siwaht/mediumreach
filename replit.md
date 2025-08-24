# MediumReach - Custom AI Agents Platform

## Overview

MediumReach is a comprehensive AI agent platform that creates intelligent assistants for customer interactions across multiple communication channels. The platform specializes in building custom chatbots and voice assistants for WhatsApp, Instagram, Telegram, and phone calls, designed to automate customer support and boost engagement for businesses across various industries.

The application is built as a modern full-stack web platform with a React frontend showcasing the company's services and capabilities, backed by an Express.js server for handling API requests and form submissions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom configuration and shadcn/ui components for consistent design
- **Animations**: Framer Motion for smooth animations and interactive elements
- **Component Structure**: Modular component architecture with lazy loading for performance optimization
- **Responsive Design**: Mobile-first approach with comprehensive responsive breakpoints

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Build System**: ESBuild for fast server-side compilation
- **Development**: TSX for TypeScript execution during development
- **API Structure**: RESTful API design with Express routing
- **Error Handling**: Centralized error handling middleware

### Build and Development
- **Development Mode**: Vite dev server with Hot Module Replacement (HMR)
- **Production Build**: Vite for client build, ESBuild for server bundling
- **Path Aliases**: Configured for clean imports (@/, @shared/, @assets/)
- **TypeScript**: Strict mode enabled with comprehensive type checking

### Code Organization
- **Client Structure**: Organized in `/client` with components, styles, and assets
- **Server Structure**: Separate `/server` directory with routes and middleware
- **Shared Code**: `/shared` directory for common utilities and types
- **Component Architecture**: Feature-based component organization with reusable UI components

### Performance Optimizations
- **Lazy Loading**: Components are lazy-loaded to reduce initial bundle size
- **Code Splitting**: Automatic code splitting through Vite
- **Asset Optimization**: Optimized images and fonts for web performance
- **Caching**: Browser caching strategies for static assets

## External Dependencies

### Core Frontend Libraries
- **React Ecosystem**: React 18, React DOM for modern React features
- **UI Components**: Lucide React for icons, Framer Motion for animations
- **Styling**: Tailwind CSS with plugins for typography and animations
- **Utility Libraries**: Nanoid for unique ID generation, Zod for schema validation

### Development Tools
- **Build Tools**: Vite, ESBuild, TypeScript compiler
- **CSS Processing**: PostCSS with Autoprefixer for cross-browser compatibility
- **Replit Integration**: Specialized Vite plugins for Replit development environment

### Form Handling
- **Webhook Integration**: Make.com webhook for form submissions and lead processing
- **Validation**: Client-side form validation with TypeScript type checking

### Monitoring and Development
- **Error Handling**: Runtime error overlay for development
- **Logging**: Custom logging system for API requests and responses
- **Development Server**: Vite development server with middleware integration

### Potential Database Integration
- **ORM Ready**: Drizzle ORM scripts configured in package.json (db:push command available)
- **Database Agnostic**: Architecture supports future database integration without current dependency

The architecture is designed for scalability and maintainability, with clear separation of concerns between frontend presentation, backend API handling, and external service integrations. The system is optimized for modern web development practices and can easily accommodate future enhancements such as database integration, additional API endpoints, or expanded AI agent capabilities.