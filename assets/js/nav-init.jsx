import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navigation from './navigation.jsx';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#dc143c', // Crimson
    },
    secondary: {
      main: '#1a1a1a',
    },
    background: {
      default: '#0a0a0a',
      paper: '#1a1a1a',
    },
  },
  typography: {
    fontFamily: '"Inter", "Lexend", sans-serif',
  },
});

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  const navContainer = document.getElementById('mui-nav-root');
  if (navContainer) {
    const root = ReactDOM.createRoot(navContainer);
    root.render(
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navigation />
        </ThemeProvider>
      </React.StrictMode>
    );
  }
});
