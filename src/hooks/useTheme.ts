import { useState } from 'react';
import {
  changeLocalStorageTheme,
  darkTheme,
  getLocalStorageTheme,
  lightTheme
} from 'theme';
import { Theme } from 'types';

interface UseThemeReturn {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = (): UseThemeReturn => {
  const [theme, setTheme] = useState(getLocalStorageTheme());

  const toggleTheme = (): void => {
    setTheme(prev => {
      const newTheme = prev.themeId === 'dark_theme' ? lightTheme : darkTheme;
      changeLocalStorageTheme(newTheme.themeId);

      return newTheme;
    });
  };

  return {
    theme,
    toggleTheme
  };
};
