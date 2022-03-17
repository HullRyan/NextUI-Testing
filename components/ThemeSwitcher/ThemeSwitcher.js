import { useTheme as useNextTheme } from 'next-themes';
import { Button, Spacer, css, useTheme } from '@nextui-org/react';
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
    <div className="flexGap">
      {themes.map((e, i) => {
        return (
          <>
            {theme == e.className ? (
              <Button
                key={i}
                size="sm"
                onClick={() => setTheme(e.className)}
                css={{
                  background: e.colors.primary.value,
                }}
              >
                {e.colors.name.value}
              </Button>
            ) : (
              <Button
                key={i}
                ghost
                size="sm"
                onClick={() => setTheme(e.className)}
                css={{
                  borderColor: e.colors.primary.value,
                  color: e.colors.primary.value,
                  '&:hover': {
                    background: e.colors.primary.value,
                  },
                }}
              >
                {e.colors.name.value}
              </Button>
            )}
          </>
        );
      })}
      <style jsx>
        {`
        .flexGap {
          background-color: var(--nextui-colors-accents1);
          display: flex;
          gap: .4rem;
          flex-direction: column;
          border-radius: var(--nextui-radii-md);
          padding: .8rem;
          border: solid 2px var(--nextui-colors-accents2);
        }
      `}
      </style>
    </div>
  );
}
