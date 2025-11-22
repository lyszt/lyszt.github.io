import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => ({
  root: './_site', // Serve Jekyll's built output
  publicDir: false, // No separate public dir needed
  
  plugins: [
    react({
      // Disable Fast Refresh for production builds
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
    mode: 'production',
    outDir: '../_site/assets/js',
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
        assetFileNames: '[name].[ext]'
      }
    }
  },
  
  optimizeDeps: {
    include: ['three', 'react', 'react-dom', '@mui/material', '@emotion/react', '@emotion/styled']
  }
}));
