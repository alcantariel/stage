import { theme } from 'theme';

export type Theme = typeof theme;

declare module 'styled-components' {
  interface DefaultTheme extends Theme {}
}
