import './index.css';
import 'icons/IconsLibrary';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = (
  <StrictMode>
    <App />
  </StrictMode>
);

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
