import { render } from 'utils/testing';

import { Home } from '../Home';

describe('Home.test.tsx', () => {
  it('snapshot', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="sc-jRQBWg fNxwSX"
        />
        <label
          class="sc-eCImPb dWbTAt"
          data-testid="label_select_name"
          for="name"
        >
          Name
        </label>
        <select
          class="sc-hKwDye fNAzLj"
          data-testid="select_name"
          id="name"
          name="name"
        >
          <option
            data-testid="option_default"
            value=""
          >
            Selecione
          </option>
          <option
            data-testid="option_0_1"
            value="1"
          >
            1
          </option>
          <option
            data-testid="option_1_2"
            value="2"
          >
            2
          </option>
        </select>
        <label
          class="sc-eCImPb dWbTAt"
          data-testid="label_Name"
        >
          Name
        </label>
        <input
          class="sc-dkPtRN dOORyL"
          data-testid="input_name"
          name="name"
        />
        <div
          class="sc-jrQzAO KTJNt"
        >
          <div
            class="sc-crHmcD bhHcQR"
          >
            <select
              class="sc-hKwDye fNAzLj sc-egiyK ebaeuZ"
              data-testid="pageselector_options"
              name="size"
            >
              <option
                data-testid="pageselection_option_10"
                value="10"
              >
                10
              </option>
              <option
                data-testid="pageselection_option_20"
                selected=""
                value="20"
              >
                20
              </option>
              <option
                data-testid="pageselection_option_30"
                value="30"
              >
                30
              </option>
              <option
                data-testid="pageselection_option_40"
                value="40"
              >
                40
              </option>
              <option
                data-testid="pageselection_option_50"
                value="50"
              >
                50
              </option>
              <option
                data-testid="pageselection_option_100"
                value="100"
              >
                100
              </option>
            </select>
            <span>
              itens
            </span>
          </div>
          <div
            class="sc-kDTinF fJVQxc"
            data-testid="angle_left"
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
            class="sc-dkPtRN dOORyL sc-iqseJM kdPAUf"
            data-testid="page_input"
            name="number"
            value="1"
          />
          <span>
            de 25
          </span>
          <div
            class="sc-kDTinF fJVQxc"
            data-testid="angle_right"
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
