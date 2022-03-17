import { createTheme, NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useEffect } from 'react';

import '../styles/globals.css';

const lightTheme = createTheme({
  type: 'light',
  className: 'light',
  theme: {
    colors: {
      primary: '#0070f3',
      background: '#ffffff',
    },
  },
});

const darkTheme = createTheme({
  type: 'dark',
  className: 'dark',
  theme: {
    colors: {
      primary: '#0070f3',
    },
  },
});

const darkModernTheme = createTheme({
  type: 'dark',
  className: 'darkModern',
  theme: {
    colors: {
      primary: '#7928CA',
      primaryLight: '#582A87',
      success: '#FF1CF7',
    },
  },
});

const darkElegantTheme = createTheme({
  type: 'dark',
  className: 'darkElegant',
  theme: {
    colors: {
      primary: '#ffffff',
      primaryLight: '#222222',
      success: '#a2a2a2',
    },
    radii: {
      md: '4px',
    },
  },
});

const darkRetroTheme = createTheme({
  type: 'dark',
  className: 'darkRetro',
  theme: {
    colors: {
      primary: '#FFD34E',
      primaryLight: 'transparent',
      error: '#EE457E',
    },
  },
});

const themes = [
  lightTheme,
  darkTheme,
  darkElegantTheme,
  darkModernTheme,
  darkRetroTheme,
];

function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    window.localStorage.setItem('themes', JSON.stringify(themes));
  }, []);

  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      themes={['light', 'dark', 'darkModern', 'darkElegant', 'darkRetro']}
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
        darkModern: darkModernTheme.className,
        darkElegant: darkElegantTheme.className,
        darkRetro: darkRetroTheme.className,
      }}
    >
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;
