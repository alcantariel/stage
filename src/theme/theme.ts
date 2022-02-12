import { Theme } from 'theme';

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

export const darkTheme: Theme = {
  ...commonTheme,
  themeId: 'dark_theme',
  backgroundColor: '#010101',
  shadowColor: 'rgba(0, 0, 0, 0)',
  textColor: '#fff'
};

export const lightTheme: Theme = {
  ...commonTheme,
  themeId: 'light_theme',
  backgroundColor: '#fff',
  shadowColor: 'rgba(232, 232, 232, .5)',
  textColor: '#222331'
};
