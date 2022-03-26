import { screen } from '@testing-library/react';
import { render } from 'utils/testing';

import { Code } from './Code';

describe('Code.test.tsx', () => {
  it('render correctly', () => {
    render(<Code>{'<Component />'}</Code>);
    expect(screen.getByText('<Component />')).toBeInTheDocument();
  });
});
