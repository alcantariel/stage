import { screen } from '@testing-library/react';
import { render } from 'utils/testing';

import { FormattedCurrency } from './FormattedCurrency';

const languageGetter = jest.spyOn(window.navigator, 'language', 'get');

describe('FormattedCurrency.test.tsx', () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should render formatted value', () => {
    languageGetter.mockReturnValue('');

    render(<FormattedCurrency value={10} />);

    expect(screen.getByText('R$ 10,00')).toBeInTheDocument();
  });
});
