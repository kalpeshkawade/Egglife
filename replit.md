# EggLife Website - Replit Guide

## Overview

This is a full-stack web application for EggLife, a brand that specializes in egg white wraps and related food products. The application features a product catalog, recipe hub, and informational pages about the brand. It's built with a modern React frontend and Express.js backend, using PostgreSQL for data storage.

## Recent Changes (January 2025)

- **Migration Completed**: Successfully migrated from Replit Agent to standard Replit environment
- **Security Enhancements**: Fixed TypeScript storage layer issues and ensured proper type safety
- **Font Styling Update**: Updated Perfect Protein section font sizes to match original EggLife website exactly (xl:text-9xl for title, xl:text-4xl for description)
- **Enhanced Product Display**: Implemented single product animation display showing one product at a time with random transitions (similar to reference website)
- **Advanced Button Effects**: Added sophisticated hover effects to "Find where to buy" button with text sliding animations
- **Custom Animations**: Created comprehensive CSS animation library including fade-in, product-reveal, shimmer, and slide effects
- **Component Updates**: Replaced ProductCarousel with AnimatedProductDisplay for better visual impact
- **Newsletter Form Enhancement**: Updated newsletter signup with comprehensive form including first name, last name, email, country, zip code, and recipe preferences
- **Scroll-based Animations**: Added subtle scaling effects that respond to scroll position for enhanced user experience
- **ScrollAnimatedSection**: Restructured to match original EggLife website exactly - full-screen image that scales up as you scroll and covers the screen, with "Meet your goals one macro at a time" text overlaid on image, and nutrition stats positioned below in separate white section with large typography matching original font sizes
- **PerfectProteinSection**: Restructured to match original EggLife website exactly - single background egg image with "The perfect protein" title positioned at top left, description and "Why egg whites" button positioned at bottom right, maintaining authentic font sizes and styling from original site
- **FoodFreedomSection**: Implemented "We stand for food freedom" section with authentic images (hand holding wrap and dietary stickers), large heading typography matching original design, and wavy text animation on button hover with staggered letter effects
- **InfinitePossibilitiesSection**: Created "Six flavors. Infinite possibilities" section with continuous moving carousel exactly matching original website, featuring dual-row infinite scroll (one row left-to-right, one row right-to-left), authentic recipe images, dynamic border hover effects matching recipe image colors, and wavy text animation on "Get started" button hover
- **Footer Enhancement**: Updated footer to match original EggLife website exactly with two-column layout (JOIN OUR COMMUNITY on left, navigation links on right), authentic EggLife logo, social media icons, partner certification logos (Non-GMO Project, Keto Certified), and proper copyright formatting
- **Authentic Image Integration**: Added authentic images from original EggLife website for navigation menus - Appetizer image for Recipes section, Our Wraps and FAQs images for Learn section
- **Product Filtering**: Removed products without matching brand colors from displays, ensuring only products with proper color assignments appear in animations and product listings

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between client and server code:

- **Frontend**: React with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for schema management
- **UI Framework**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing

## Key Components

### Frontend Architecture
- **React SPA**: Single-page application using modern React patterns
- **Component Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Type Safety**: Full TypeScript implementation with shared types
- **Build Tool**: Vite with hot module replacement in development

### Backend Architecture
- **Express Server**: RESTful API with middleware for logging and error handling
- **Database Layer**: Drizzle ORM with PostgreSQL as the database
- **Storage Interface**: Abstracted storage layer with in-memory fallback for development
- **API Routes**: Organized route handlers for products, recipes, and newsletter subscriptions

### Database Schema
- **Products Table**: Stores product information including nutrition data, images, and categorization
- **Recipes Table**: Contains recipe details with ingredients, instructions, and meal categorization
- **Newsletters Table**: Simple email subscription tracking

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **Server Processing**: Express routes handle requests and interact with storage layer
3. **Database Operations**: Drizzle ORM manages database queries and schema migrations
4. **Response Handling**: JSON responses with proper error handling and logging

The application uses a clean separation between data access (storage layer), business logic (route handlers), and presentation (React components).

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity
- **drizzle-orm**: Database ORM and query builder
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight client-side routing
- **@radix-ui/***: Accessible UI component primitives
- **tailwindcss**: Utility-first CSS framework

### Development Tools
- **vite**: Fast build tool and development server
- **typescript**: Type checking and compilation
- **drizzle-kit**: Database migrations and schema management

## Deployment Strategy

### Development
- **Hot Reload**: Vite development server with HMR
- **Database**: Uses DATABASE_URL environment variable for connection
- **In-Memory Fallback**: MemStorage class provides development data without database

### Production
- **Build Process**: Vite builds the frontend, esbuild bundles the backend
- **Static Assets**: Frontend builds to `dist/public` directory
- **Server Bundle**: Backend compiles to `dist/index.js` with external dependencies
- **Database Migrations**: Drizzle migrations in `./migrations` directory

### Environment Configuration
- **NODE_ENV**: Controls development vs production behavior
- **DATABASE_URL**: PostgreSQL connection string (required for production)
- **Port Configuration**: Server listens on environment-specified port

The application is designed to be easily deployable to platforms like Replit, with automatic dependency installation and straightforward environment variable configuration.