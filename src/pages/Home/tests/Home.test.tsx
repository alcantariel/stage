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
        <div
          class="sc-pVTFL eOVrMc"
        >
          <select
            class="sc-iqseJM gehAfX"
          >
            <option
              value="10"
            >
              10
            </option>
            <option
              selected=""
              value="20"
            >
              20
            </option>
            <option
              value="30"
            >
              30
            </option>
            <option
              value="40"
            >
              40
            </option>
            <option
              value="50"
            >
              50
            </option>
            <option
              value="100"
            >
              100
            </option>
          </select>
          <p
            class="sc-crHmcD bAXGoH"
          >
            itens
          </p>
          <div
            class="sc-jrQzAO gitmJa"
          >
            <svg
              aria-hidden="true"
              class="svg-inline--fa fa-angle-left "
              data-icon="angle-left"
              data-prefix="fas"
              focusable="false"
              role="img"
              viewBox="0 0 256 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"
                fill="currentColor"
              />
            </svg>
          </div>
          <input
            class="sc-hKwDye sc-kDTinF cRqYRW iNnRzQ"
            name="value"
            title="1"
            value="1"
          />
          de 3
          <div
            class="sc-jrQzAO gitmJa"
          >
            <svg
              aria-hidden="true"
              class="svg-inline--fa fa-angle-right "
              data-icon="angle-right"
              data-prefix="fas"
              focusable="false"
              role="img"
              viewBox="0 0 256 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </DocumentFragment>
    `);
  });
});
