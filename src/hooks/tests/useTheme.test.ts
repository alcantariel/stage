import { act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import { useTheme } from '../useTheme';

describe('useTheme.test.ts', () => {
  it('should toggle current theme', () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current.theme.themeId).toEqual('light_theme');

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme.themeId).toEqual('dark_theme');

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme.themeId).toEqual('light_theme');
  });
});
