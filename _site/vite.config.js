import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import viteCompression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(({ mode }) => ({
  root: mode === 'production' ? '.' : './_site',
  publicDir: false,
  
  plugins: [
    react({
      fastRefresh: mode !== 'production'
    }),
    mode === 'production' && viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      deleteOriginFile: false
    }),
    mode === 'production' && viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      deleteOriginFile: false
    }),
    mode === 'production' && visualizer({
      filename: './dist/stats.html',
      open: false,
      gzipSize: true,
      brotliSize: true
    })
  ].filter(Boolean),
  
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
    minify: 'esbuild',
    target: 'es2015',
    cssMinify: 'lightningcss',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.trace'],
        passes: 2
      },
      mangle: {
        safari10: true
      },
      format: {
        comments: false
      }
    },
    lib: {
      entry: path.resolve(__dirname, 'assets/js/nav-init.jsx'),
      name: 'Navigation',
      fileName: 'navigation.bundle',
      formats: ['iife']
    },
    rollupOptions: {
      output: {
        assetFileNames: '[name].[ext]',
        inlineDynamicImports: true,
        manualChunks: undefined
      },
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false
      }
    },
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500
  },
  
  optimizeDeps: {
    include: ['three', 'react', 'react-dom', '@mui/material', '@emotion/react', '@emotion/styled']
  }
}));
