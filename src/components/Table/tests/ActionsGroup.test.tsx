import { render, screen } from '@testing-library/react';

import { ActionsGroup } from '../ActionsGroup';

describe('ActionsGroup.test.tsx', () => {
  it('should render correctly', () => {
    render(<ActionsGroup>Click Me!</ActionsGroup>);
    expect(screen.getByText('Click Me!')).toBeInTheDocument();
  });
});
