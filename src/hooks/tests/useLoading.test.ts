import { act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { delay } from 'utils';

import { useLoading } from '../useLoading';

const REQUEST_TIME = 1000;

describe('useLoading.test.ts', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('should render initial loading false', () => {
    const { result } = renderHook(() => useLoading());

    expect(result.current[0]).toBeFalsy();
  });

  it('should set loading to true when fetch and set loading to false when finally gets called', async () => {
    const { result, rerender, waitForValueToChange } = renderHook(() =>
      useLoading()
    );

    rerender();

    expect(result.current[0]).toBeFalsy();

    act(() => {
      result.current[1](delay(REQUEST_TIME));
    });

    expect(result.current[0]).toBeTruthy();

    jest.advanceTimersByTime(REQUEST_TIME);

    await act(async () => {
      await waitForValueToChange;
    });

    expect(result.current[0]).toBeFalsy();
  });

  it('loading should stay true when is not mounted', async () => {
    const { result, waitForValueToChange } = renderHook(() => useLoading());

    expect(result.current[0]).toBeFalsy();

    act(() => {
      result.current[1](delay(REQUEST_TIME));
    });

    expect(result.current[0]).toBeTruthy();

    jest.advanceTimersByTime(REQUEST_TIME);

    await act(async () => {
      await waitForValueToChange;
    });

    expect(result.current[0]).toBeTruthy();
  });
});
