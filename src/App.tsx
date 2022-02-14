import { useTheme } from 'hooks';
import { NotificationProvider } from 'providers';
import { lazy, Suspense } from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { defaultLocale, getLocale } from 'utils';

const Home = lazy(() => import('pages/Home/Home'));

const App = () => {
  const { theme } = useTheme();

  return (
    <IntlProvider locale={getLocale()} defaultLocale={defaultLocale}>
      <ThemeProvider theme={theme}>
        <NotificationProvider>
          <BrowserRouter>
            <Suspense fallback={<h1>Loading...</h1>}>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </NotificationProvider>
      </ThemeProvider>
    </IntlProvider>
  );
};

export default App;
