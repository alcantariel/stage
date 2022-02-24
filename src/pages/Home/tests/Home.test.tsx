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
          class="sc-pVTFL kqXgau"
        >
          <div
            class="sc-jrQzAO duHokN"
          >
            <svg
              aria-hidden="true"
              class="svg-inline--fa fa-angles-left "
              data-icon="angles-left"
              data-prefix="fas"
              focusable="false"
              role="img"
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M77.25 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C175.6 444.9 183.8 448 192 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L77.25 256zM269.3 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C367.6 444.9 375.8 448 384 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L269.3 256z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div
            class="sc-jrQzAO duHokN"
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
          <div
            class="sc-jrQzAO XFYjP"
          >
            1
          </div>
          <div
            class="sc-jrQzAO duHokN"
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
          <div
            class="sc-jrQzAO duHokN"
          >
            <svg
              aria-hidden="true"
              class="svg-inline--fa fa-angles-right "
              data-icon="angles-right"
              data-prefix="fas"
              focusable="false"
              role="img"
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M246.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L178.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C47.63 444.9 55.81 448 64 448s16.38-3.125 22.62-9.375l160-160C259.1 266.1 259.1 245.9 246.6 233.4zM438.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L370.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C239.6 444.9 247.8 448 256 448s16.38-3.125 22.62-9.375l160-160C451.1 266.1 451.1 245.9 438.6 233.4z"
                fill="currentColor"
              />
            </svg>
          </div>
          <small
            class="sc-kDTinF cUglOt"
          >
            1 de 3
          </small>
        </div>
      </DocumentFragment>
    `);
  });
});
