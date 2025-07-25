# EggLife Website

A full-stack web application for EggLife, featuring a product catalog, recipe hub, and informational pages about the brand.

## Quick Start

### Running on Replit
1. The project is already configured for Replit
2. Click the "Run" button to start the application
3. The database will be automatically provisioned

### Running Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Environment Setup (Optional):**
   - Copy `.env.example` to `.env`
   - The app works without a database using in-memory storage with sample data
   - To use a real database, set `DATABASE_URL` in your `.env` file

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Access the application:**
   - Open your browser to `http://localhost:5000`

## Features

- **Product Catalog**: Browse EggLife wraps and grab-and-go items
- **Recipe Hub**: Discover recipes using EggLife products
- **Newsletter Signup**: Subscribe to get updates and recipes
- **Contact Form**: Get in touch with the EggLife team
- **Responsive Design**: Works on desktop and mobile devices

## Technical Stack

- **Frontend**: React with TypeScript, Tailwind CSS, shadcn/ui components
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (optional, falls back to in-memory storage)
- **Build Tool**: Vite for fast development and building

## Project Structure

```
├── client/               # Frontend React application
├── server/              # Backend Express server
├── shared/              # Shared types and schemas
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - Type checking
- `npm run db:push` - Push database schema changes

## Database

The application automatically detects if a database is available:
- **With DATABASE_URL**: Uses PostgreSQL with persistent data
- **Without DATABASE_URL**: Uses in-memory storage with sample data

This makes it easy to run locally without requiring database setup.