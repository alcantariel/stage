// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// fontawesome icons
import './icons/IconsLibrary';

// window size (height and size)
Object.defineProperty(window, 'innerHeight', {
  writable: true,
  configurable: true,
  value: 800
});

Object.defineProperty(window, 'innerWidth', {
  writable: true,
  configurable: true,
  value: 600
});
