import { useTheme } from 'hooks';
import { NotificationProvider } from 'providers';
import { lazy, Suspense } from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { defaultLocale, getLocale } from 'utils';

const HomePage = lazy(() => import('pages/Home/HomePage'));
const PaginationPage = lazy(() => import('pages/Pagination/PaginationPage'));

const App = () => {
  const { theme } = useTheme();

  return (
    <IntlProvider locale={getLocale()} defaultLocale={defaultLocale}>
      <ThemeProvider theme={theme}>
        <NotificationProvider>
          <BrowserRouter>
            <Suspense fallback={<h1>Loading...</h1>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/pagination" element={<PaginationPage />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </NotificationProvider>
      </ThemeProvider>
    </IntlProvider>
  );
};

export default App;
