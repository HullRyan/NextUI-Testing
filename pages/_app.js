import { createTheme, NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useEffect } from 'react';

import '../styles/globals.css';

const lightTheme = createTheme({
  type: 'light',
  className: 'light',
  theme: {
    colors: {
      name: 'Light',
      primary: '#0070f3',
      background: '#ffffff',
      gradient:
        'linear-gradient(310deg,hsl(240deg 100% 20%)0%,hsl(298deg 100% 21%) 24%,hsl(324deg 100% 32%) 35%,(336deg 100% 42%) 45%,hsl(0deg 93% 61%) 55%,hsl(24deg 100% 57%) 65%,hsl(42deg 100% 50%) 76%,hsl(55deg 10050%) 100%)',
    },
  },
});

const darkTheme = createTheme({
  type: 'dark',
  className: 'dark',
  theme: {
    colors: {
      name: 'Dark',
      primary: '#0070f3',
      gradient:
        'linear-gradient(130deg,hsl(240deg 100% 20%) 0%,hsl(298deg 100% 21%) 24%,hsl(324deg 100% 32%) 35%,hsl(336deg 100% 42%) 45%,hsl(0deg 93% 61%) 55%,hsl(24deg 100% 57%) 65%,hsl(42deg 100% 50%) 76%,hsl(55deg 100% 50%) 100%)',
    },
  },
});

const darkModernTheme = createTheme({
  type: 'dark',
  className: 'darkModern',
  theme: {
    colors: {
      name: 'Dark Modern',
      primary: '#7928CA',
      primaryLight: '#582A87',
      success: '#FF1CF7',
      gradient:
        'linear-gradient(325deg,hsl(270deg 67% 47%) 0%,hsl(275deg 68% 49%) 24%,hsl(281deg 70% 50%) 35%,hsl(285deg 75% 52%) 45%,hsl(290deg 80% 53%) 55%,hsl(294deg 84% 53%) 65%,hsl(298deg 89% 54%) 76%,hsl(302deg 100% 55%) 100%)',
    },
  },
});

const darkElegantTheme = createTheme({
  type: 'dark',
  className: 'darkElegant',
  theme: {
    colors: {
      name: 'Dark Elegant',
      primary: '#222222',
      primaryLight: '#222222',
      success: '#a2a2a2',
      gradient:
        'linear-gradient(315deg,hsl(0deg 0% 13%) 0%,hsl(344deg 0% 25%) 33%,hsl(344deg 0% 37%) 50%,hsl(344deg 0% 50%) 67%,hsl(0deg 0% 64%) 100%)',
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
      name: 'Dark Retro',
      primary: '#FFD34E',
      primaryLight: 'transparent',
      error: '#EE457E',
      gradient:
        'linear-gradient(225deg,hsl(45deg 100% 65%) 0%,hsl(29deg 100% 65%) 39%,hsl(5deg 100% 69%) 61%,hsl(340deg 83% 60%) 100%)',
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
