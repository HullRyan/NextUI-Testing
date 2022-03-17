import { useTheme as useNextTheme } from 'next-themes';
import { Button, Spacer } from '@nextui-org/react';
import { useState, useEffect, useRef } from 'react';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useNextTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => {
    setMounted(true);
    const themes = JSON.parse(window.localStorage.getItem(themes));
  }, []);

  if (!mounted || !themes) return null;

  return (
    <div>
      {console.log(themes)}
      {themes.map((e, i) => {
        return (
          <>
            <Button size="sm" bordered ghost onClick={() => setTheme(e)}>
              {e}
            </Button>
          </>
        );
      })}
    </div>
  );
}
