import {
  render as renderTestingLibrary,
  RenderResult
} from '@testing-library/react';
import { NotificationProvider } from 'providers';
import { ReactNode } from 'react';
import { IntlProvider } from 'react-intl';
import { Route, Routes } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import { defaultLocale } from 'utils';

export const render = (
  children: ReactNode,
  { path }: { path: string } = { path: '/' }
): RenderResult => {
  return renderTestingLibrary(
    <ThemeProvider theme={theme}>
      <IntlProvider locale={defaultLocale} defaultLocale={defaultLocale}>
        <NotificationProvider>
          <Routes>
            <Route path={path}>{children}</Route>
          </Routes>
        </NotificationProvider>
      </IntlProvider>
    </ThemeProvider>
  );
};
