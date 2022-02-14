import { fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { useWindowSize } from 'hooks';

describe('useWindowSize.test.ts', () => {
  it('should return window height and width', () => {
    const { result } = renderHook(() => useWindowSize());

    fireEvent.resize(window, new Event('resize'));

    expect(result.current.height).toEqual(800);
    expect(result.current.width).toEqual(600);
  });
});
