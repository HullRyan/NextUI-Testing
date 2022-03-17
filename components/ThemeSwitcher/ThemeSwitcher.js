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
      {themes.map((e, i) => {
        return (
          <Button.Group>
            {theme == e.className ? (
              <Button
                key={i}
                onClick={() => setTheme(e.className)}
                css={{
                  //borderColor: e.colors.primary.value,
                  //color: e.colors.primary.value,
                  background: e.colors.primary.value,
                }}
              >
                {e.colors.name.value}
              </Button>
            ) : (
              <Button.Group>
                <Button
                  key={i}
                  ghost
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
              </Button.Group>
            )}
          </Button.Group>
        );
      })}
      <Button.Group>
        <Button>test</Button>
        <Button>test</Button>
        <Button>test</Button>
      </Button.Group>
    </div>
  );
}
