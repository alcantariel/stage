import { screen } from '@testing-library/react';
import { render } from 'utils/testing';

import { Container } from './Container';

describe('Container.test.tsx', () => {
  it('should render correctly', () => {
    render(<Container>Container works!</Container>);
    expect(screen.getByText('Container works!')).toBeInTheDocument();
  });
});
