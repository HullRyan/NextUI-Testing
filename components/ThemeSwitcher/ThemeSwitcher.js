import { useTheme as useNextTheme } from 'next-themes';
import { Button, Spacer, css } from '@nextui-org/react';
import { useState, useEffect, useRef } from 'react';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useNextTheme();
  const [themes, setThemes] = useState();

  // When mounted on client, now we can show the UI
  useEffect(() => {
    setThemes(JSON.parse(localStorage.getItem('themes')));
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      {theme}
      {themes.map((e, i) => {
        return (
          <>
            {console.log(e.colors)}
            <Button
              size="sm"
              onClick={() => setTheme(e.className)}
              css={{
                background: e.colors.primary.value,
              }}
            >
              {e.className}
            </Button>
          </>
        );
      })}
    </div>
  );
}

//onClick={() => setTheme(e)}
