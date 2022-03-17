import { useTheme as useNextTheme } from 'next-themes';
import { useTheme } from '@nextui-org/react';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useNextTheme();
  const { themes } = useNextTheme();

  return (
    <div>
      {themes.map((e, i) => {
        return <div onClick={() => setTheme(e)}>{e}</div>;
      })}
    </div>
  );
}
