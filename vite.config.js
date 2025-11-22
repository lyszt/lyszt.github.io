import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => ({
  root: mode === 'production' ? '.' : './_site', // Build from root for production, serve from _site for dev
  publicDir: false,
  
  plugins: [
    react({
      fastRefresh: mode !== 'production'
    })
  ],
  
  server: {
    port: 5173,
    open: false,
    watch: {
      usePolling: true
    }
  },
  
  define: {
    'process.env': '{}',
    'process.env.NODE_ENV': JSON.stringify(mode),
    'process': '{}',
    'global': '{}'
  },
  
  build: {
    outDir: mode === 'production' ? 'assets/js' : '../_site/assets/js',
    emptyOutDir: false,
    minify: 'terser',
    lib: {
      entry: path.resolve(__dirname, 'assets/js/nav-init.jsx'),
      name: 'Navigation',
      fileName: 'navigation.bundle',
      formats: ['iife']
    },
    rollupOptions: {
      output: {
        assetFileNames: '[name].[ext]',
        inlineDynamicImports: true
      }
    }
  },
  
  optimizeDeps: {
    include: ['three', 'react', 'react-dom', '@mui/material', '@emotion/react', '@emotion/styled']
  }
}));
