import { render } from '@testing-library/react';

import { Column } from '../Column';

describe('Column.test.tsx', () => {
  it('snapshot', () => {
    const { container } = render(<Column data={jest.fn()} />);
    expect(container.firstChild).toBeNull();
  });
});
