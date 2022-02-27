export type ThemeOptions = 'dark_theme' | 'light_theme';

export interface ThemeColors {
  primary: string;
  textColor: string;
  backgroundColor: string;
  errorColor: string;
  shadowColor: string;
  defaultBorderColor: string;
  defaultSelectedBorderColor: string;
  boxShadowHoverColor: string;
  disabledColor: string;
  disabledTextColor: string;
  warningColor: string;
  successColor: string;
  infoColor: string;
}

export interface Theme extends ThemeColors {
  themeId: ThemeOptions;
}

declare module 'styled-components' {
  interface DefaultTheme extends ThemeColors {
    themeId: ThemeOptions;
  }
}
