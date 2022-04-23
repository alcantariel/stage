import { library } from '@fortawesome/fontawesome-svg-core';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';

import * as icons from '../src/icons/Icons';
import { NotificationProvider } from '../src/providers';
import { theme } from '../src/theme';
import { defaultLocale } from '../src/utils';

library.add(icons);

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <IntlProvider locale={defaultLocale} defaultLocale={defaultLocale}>
        <NotificationProvider>
          <Story />
        </NotificationProvider>
      </IntlProvider>
    </ThemeProvider>
  )
];
