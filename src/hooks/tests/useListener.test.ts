import { renderHook } from '@testing-library/react-hooks';

import { EventName, EventListener, useListener } from '../useListener';

const mouseMoveEvent = { clientX: 100, clientY: 200 };

const mockWindow: any = {
  handler: null,
  addEventListener(name: EventName, listener: EventListener): void {
    this.handler = listener;
  },
  removeEventListener(): void {
    this.handler = null;
  },
  dispatchEvent(event: any): void {
    this.handler?.(event);
  }
};

describe('useListener.test.ts', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it('add event listener', () => {
    const onMouseMoveFn = jest.fn();
    const addEventListenerSpy = jest.spyOn(mockWindow, 'addEventListener');

    renderHook(() => useListener(mockWindow, 'mousemove', onMouseMoveFn));

    expect(addEventListenerSpy).toHaveBeenCalled();

    mockWindow.dispatchEvent(mouseMoveEvent);

    expect(onMouseMoveFn).toBeCalledWith(mouseMoveEvent);
  });

  it('remove event listener', async () => {
    const onMouseMoveFn = jest.fn();
    const addEventListenerSpy = jest.spyOn(mockWindow, 'addEventListener');
    const rmEventListenerSpy = jest.spyOn(mockWindow, 'removeEventListener');

    const { unmount } = renderHook(() =>
      useListener(mockWindow, 'mousemove', onMouseMoveFn)
    );

    expect(addEventListenerSpy).toHaveBeenCalled();

    mockWindow.dispatchEvent(mouseMoveEvent);

    expect(onMouseMoveFn).toBeCalledWith(mouseMoveEvent);

    unmount();

    expect(rmEventListenerSpy).toHaveBeenCalled();
  });
});
