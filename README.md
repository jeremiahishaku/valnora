# Razorbill by Valnora

Official responsive website and platform for Razorbill by Valnora.

## About

Razorbill is a comprehensive platform built for consumers, businesses, and professionals. Our modern, clean interface provides seamless navigation and powerful features tailored to your needs.

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm or Bun package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jeremiahishaku/valnora.git
   cd valnora
   ```

2. Install dependencies:
   ```bash
   npm install
   # or with Bun
   bun install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory:
   ```
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or with Bun
   bun run dev
   ```

   The app will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` — Start the development server with hot module reloading
- `npm run build` — Build the app for production
- `npm run preview` — Preview the production build locally
- `npm run lint` — Run ESLint (if configured)

## Project Structure

```
src/
├── components/       # Reusable React components
│   └── layout/       # Layout components (MainLayout, etc.)
├── pages/            # Page components for routes
├── router/           # Custom routing configuration
├── assets/           # Static assets (images, icons, etc.)
├── types/            # TypeScript type definitions
├── config/           # App configuration
├── App.tsx           # Root application component
├── main.tsx          # Application entry point
└── index.css         # Global styles

public/              # Static files (favicon, logos, etc.)
index.html           # HTML entry point
vite.config.ts       # Vite configuration
tsconfig.json        # TypeScript configuration
package.json         # Project dependencies
```

## Routes

- `/` — Home page
- `/our-app` — App overview
- `/for-businesses` — Business tier features
- `/for-professionals` — Professional tier features
- `/about` — About Razorbill
- `/blog` — Blog and news
- `/contact` — Contact page
- `/login` — User login
- `/get-started` — Getting started guide
- `/signup/consumer` — Consumer signup
- `/signup/business` — Business signup
- `/signup/professional` — Professional signup

## Tech Stack

- **Framework**: React 18+
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Plus Jakarta Sans (Google Fonts)
- **API**: Google Gemini AI (optional)

## Development

This project uses:
- **React Hooks** for component state management
- **Custom Router** for client-side routing
- **Tailwind CSS** for responsive design
- **TypeScript** for type safety

## Building for Production

```bash
npm run build
```

The optimized build will be created in the `dist/` directory.

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_GEMINI_API_KEY` | Google Gemini API key for AI features | No |
| `DISABLE_HMR` | Disable Hot Module Reloading (for AI Studio) | No |

## License

All rights reserved. © 2026 Valnora.

## Support

For issues, feature requests, or questions, please open an issue on GitHub.

---

**Built with ❤️ by Valnora**
