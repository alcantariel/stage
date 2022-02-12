import { screen } from '@testing-library/react';
import { FormattedCurrency } from 'components';
import { render } from 'utils/testing';

describe('FormattedCurrency.test.tsx', () => {
  it('should render formatted value', () => {
    render(<FormattedCurrency value={10} />);

    expect(screen.getByText('R$ 10,00')).toBeInTheDocument();
  });
});
