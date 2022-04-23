import { NotificationProvider } from 'providers';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import { defaultLocale, getLocale } from 'utils';

import HomePage from 'pages/HomePage';

const App = () => {
  return (
    <IntlProvider locale={getLocale()} defaultLocale={defaultLocale}>
      <ThemeProvider theme={theme}>
        <NotificationProvider>
          <HomePage />
        </NotificationProvider>
      </ThemeProvider>
    </IntlProvider>
  );
};

export default App;
