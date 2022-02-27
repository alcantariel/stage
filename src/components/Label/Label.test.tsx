import { render, screen } from '@testing-library/react';

import { Label } from './Label';

describe('Label.test.tsx', () => {
  it('should render correctly', () => {
    render(<Label data-testid="label">Name</Label>);
    expect(screen.getByTestId('label')).toHaveTextContent('Name');
  });
});
