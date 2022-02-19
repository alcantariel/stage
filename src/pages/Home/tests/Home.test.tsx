import { render } from 'utils/testing';

import { Home } from '../Home';

describe('Home.test.tsx', () => {
  it('snapshot', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="sc-eCImPb fHxykI"
        />
        <h1>
          Home works!
        </h1>
      </DocumentFragment>
    `);
  });
});
