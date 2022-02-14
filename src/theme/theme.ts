import { Theme } from 'types';

export const commonTheme = {
  defaultBorderColor: '#979797',
  errorColor: '#ff5b5b',
  disabledColor: '#e6ebf4',
  disabledTextColor: '#666',
  boxShadowHoverColor: 'rgba(189, 192, 207, 0.5)',
  primary: '#151515',
  warningColor: '#ffc107',
  successColor: '#63cf80',
  infoColor: '#bbc'
} as const;

export const lightTheme: Theme = {
  ...commonTheme,
  themeId: 'light_theme',
  backgroundColor: '#fff',
  shadowColor: 'rgba(232, 232, 232, .5)',
  textColor: '#222331'
};

export const darkTheme: Theme = {
  ...commonTheme,
  ...lightTheme, // remove after define dark theme colors
  shadowColor: 'rgba(0, 0, 0, 0)',
  themeId: 'dark_theme'
};

// backgroundColor: '#010101'
// textColor: '#fff'
