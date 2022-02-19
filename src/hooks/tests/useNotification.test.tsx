import { act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { useNotification } from 'hooks';
import { NotificationProvider } from 'providers';
import { ReactNode } from 'react';

const wrapper = ({ children }: { children: ReactNode }) => (
  <NotificationProvider>{children}</NotificationProvider>
);

describe('useNotification.test.ts', () => {
  it('should show notification and return random uuid as notification id', () => {
    const { result } = renderHook(() => useNotification(), {
      wrapper
    });

    let notificationId;
    const showNotification = result.current;

    act(() => {
      notificationId = showNotification({
        type: 'success',
        message: 'useNotification test'
      });
    });

    expect(notificationId).not.toBeUndefined();
  });

  it('should show notification and return defined notification id', () => {
    const { result } = renderHook(() => useNotification(), {
      wrapper
    });

    let notificationId;
    const showNotification = result.current;

    act(() => {
      notificationId = showNotification({
        id: '1',
        type: 'success',
        message: 'useNotification test'
      });
    });

    expect(notificationId).toEqual('1');
  });
});
