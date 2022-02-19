import { screen } from '@testing-library/react';
import { render } from 'utils/testing';

import { ErrorText } from '../ErrorText';

describe('ErrorText.test.tsx', () => {
  it('should render error text', () => {
    render(<ErrorText>name is required</ErrorText>);
    expect(screen.getByText('name is required')).toBeInTheDocument();
  });
});
