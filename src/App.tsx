import { NotificationProvider } from 'providers';
import { lazy, Suspense } from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import { defaultLocale, getLocale } from 'utils';

const ButtonPage = lazy(() => import('pages/Button/ButtonPage'));
const FormattedCurrencyPage = lazy(
  () => import('pages/FormattedCurrency/FormattedCurrencyPage')
);
const HomePage = lazy(() => import('pages/Home/HomePage'));
const InputPage = lazy(() => import('pages/Input/InputPage'));
const NotificationPage = lazy(
  () => import('pages/Notification/NotificationPage')
);
const PaginationPage = lazy(() => import('pages/Pagination/PaginationPage'));
const SelectPage = lazy(() => import('pages/Select/SelectPage'));
const SpinnerPage = lazy(() => import('pages/Spinner/SpinnerPage'));

const Wrapper = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  font-size: 18px;
  min-height: 100vh;
  min-width: 100vw;
`;

const App = () => {
  return (
    <IntlProvider locale={getLocale()} defaultLocale={defaultLocale}>
      <ThemeProvider theme={theme}>
        <NotificationProvider>
          <BrowserRouter>
            <Suspense fallback={<h1>Loading...</h1>}>
              <Wrapper>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/button" element={<ButtonPage />} />
                  <Route
                    path="/formatted-currency"
                    element={<FormattedCurrencyPage />}
                  />
                  <Route path="/input" element={<InputPage />} />
                  <Route path="/notification" element={<NotificationPage />} />
                  <Route path="/pagination" element={<PaginationPage />} />
                  <Route path="/select" element={<SelectPage />} />
                  <Route path="/spinner" element={<SpinnerPage />} />
                </Routes>
              </Wrapper>
            </Suspense>
          </BrowserRouter>
        </NotificationProvider>
      </ThemeProvider>
    </IntlProvider>
  );
};

export default App;
