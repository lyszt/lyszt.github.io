# Vite + Jekyll Development Setup

This project combines Jekyll for static site generation with Vite for modern asset bundling and development.

## Setup

1. **Install Ruby dependencies:**
   ```bash
   bundle install
   ```

2. **Install Node dependencies:**
   ```bash
   npm install
   ```

## Development

Run both Jekyll and Vite dev servers concurrently:

```bash
npm run dev
```

This will:
- Start Jekyll server on `http://localhost:4000`
- Start Vite dev server on `http://localhost:3000` (with HMR)
- Vite proxies requests to Jekyll for page routing

Visit `http://localhost:3000` to see your site with hot module replacement.

## Building for Production

```bash
npm run build
```

This will:
1. Build Jekyll static site to `_site/`
2. Build optimized assets with Vite to `dist/`

## Project Structure

```
├── public/              # Static assets (copied by Vite)
│   └── assets/         # CSS, images, fonts
├── assets/             # Source assets
│   ├── js/            # JavaScript modules
│   ├── css/           # Stylesheets
│   └── img/           # Images
├── _layouts/          # Jekyll layouts
├── _includes/         # Jekyll includes (meta.html, etc.)
├── _posts/            # Blog posts
├── _site/             # Jekyll build output (gitignored)
├── dist/              # Vite build output (gitignored)
└── vite.config.js     # Vite configuration
```

## Scripts

- `npm run dev` - Start Jekyll + Vite dev servers
- `npm run jekyll` - Start Jekyll server only
- `npm run vite` - Start Vite dev server only
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Benefits

- ✅ Hot Module Replacement (HMR) for JavaScript
- ✅ Modern ES modules support
- ✅ Optimized builds with code splitting
- ✅ Jekyll's powerful templating and content management
- ✅ TypeScript support (if needed)
- ✅ CSS preprocessing and optimization
