import { useTheme as useNextTheme } from 'next-themes';
import { useTheme } from '@nextui-org/react';
import { useState, useEffect } from 'react';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useNextTheme();
  const { themes } = useNextTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div>
      {themes.map((e, i) => {
        return <div onClick={() => setTheme(e)}>{e}</div>;
      })}
    </div>
  );
}
