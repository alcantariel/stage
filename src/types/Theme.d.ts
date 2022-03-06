export interface Theme {
  backgroundColor: string;
  boxShadowColor: string;
  defaultBorderColor: string;
  defaultSelectedBorderColor: string;
  disabledColor: string;
  disabledTextColor: string;
  errorColor: string;
  infoColor: string;
  primary: string;
  shadowColor: string;
  successColor: string;
  textColor: string;
  warningColor: string;
  successColor: string;
  infoColor: string;
}

declare module 'styled-components' {
  interface DefaultTheme extends Theme {}
}
