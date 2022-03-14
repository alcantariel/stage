import { NotificationProvider } from 'providers';
import { lazy, Suspense } from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import { defaultLocale, getLocale } from 'utils';

const HomePage = lazy(() => import('pages/Home/HomePage'));
const PaginationPage = lazy(() => import('pages/Pagination/PaginationPage'));

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
                  <Route path="/pagination" element={<PaginationPage />} />
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
