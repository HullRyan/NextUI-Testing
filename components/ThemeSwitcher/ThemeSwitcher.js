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
          <>
            {console.log(e)}
            <Button size="sm" bordered ghost css={{}}>
              {e.className}
            </Button>
          </>
        );
      })}
    </div>
  );
}

//onClick={() => setTheme(e)}
