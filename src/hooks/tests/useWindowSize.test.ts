import { renderHook } from '@testing-library/react-hooks';
import { useWindowSize } from 'hooks';

describe('useWindowSize.test.ts', () => {
  it('should return window height and width', () => {
    const { result } = renderHook(() => useWindowSize());

    expect(result.current.height).toEqual(800);
    expect(result.current.width).toEqual(600);
  });
});
