import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'

export default function ThemeSwitcher () {
  const { theme, setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    
  );
}