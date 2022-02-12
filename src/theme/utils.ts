import { darkTheme, lightTheme, Theme, ThemeOptions } from 'theme';

export const THEME_KEY = 'stage_theme_id';

export const getLocalStorageTheme = (): Theme => {
  const theme = window.localStorage.getItem(THEME_KEY);

  if (!theme) {
    changeLocalStorageTheme('light_theme');
  }

  if (!theme || theme === 'light_theme') {
    return lightTheme;
  }

  return darkTheme;
};

export const changeLocalStorageTheme = (themeId: ThemeOptions): void => {
  window.localStorage.setItem(THEME_KEY, themeId);
};
