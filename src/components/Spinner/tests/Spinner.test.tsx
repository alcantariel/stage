import { render } from '@testing-library/react';

import { Spinner } from '../Spinner';

describe('Spinner.test.tsx', () => {
  it('snapshot', () => {
    const { asFragment } = render(<Spinner />);
    expect(asFragment()).toMatchSnapshot();
  });
});
