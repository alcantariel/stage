import { renderHook } from '@testing-library/react-hooks';

import { useIsMounted } from '../useIsMounted';

describe('useIsMounted.test.ts', () => {
  it('simulate did mount', () => {
    const { result, rerender } = renderHook(() => useIsMounted());

    expect(result.current).toBeFalsy();

    rerender();

    expect(result.current).toBeTruthy();
  });
});
