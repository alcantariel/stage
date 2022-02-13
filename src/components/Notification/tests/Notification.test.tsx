import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from 'utils/testing';

import {
  Notification,
  NOTIFICATION_TIME_IN_MS,
  NotificationValue
} from '../Notification';

describe('Notification.test.tsx', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('should render success notification', () => {
    const onDestroyFn = jest.fn();
    const value: NotificationValue = {
      id: '1',
      type: 'success',
      message: 'Success notification'
    };

    render(<Notification onDestroy={onDestroyFn} value={value} />);

    expect(screen.getByTestId('success_icon')).toBeInTheDocument();
    expect(screen.getByTestId('1_notification_message')).toHaveTextContent(
      'Success notification'
    );
    expect(screen.getByTestId('1_close_notification_icon')).toBeInTheDocument();
    expect(onDestroyFn).not.toHaveBeenCalled();
  });

  it('should render error notification', () => {
    const onDestroyFn = jest.fn();
    const value: NotificationValue = {
      id: '1',
      type: 'error',
      message: 'Error notification'
    };

    render(<Notification onDestroy={onDestroyFn} value={value} />);

    expect(screen.getByTestId('error_icon')).toBeInTheDocument();
    expect(screen.getByTestId('1_notification_message')).toHaveTextContent(
      'Error notification'
    );
    expect(screen.getByTestId('1_close_notification_icon')).toBeInTheDocument();
    expect(onDestroyFn).not.toHaveBeenCalled();
  });

  it('should render info notification', () => {
    const onDestroyFn = jest.fn();
    const value: NotificationValue = {
      id: '1',
      type: 'info',
      message: 'Info notification'
    };

    render(<Notification onDestroy={onDestroyFn} value={value} />);

    expect(screen.getByTestId('info_icon')).toBeInTheDocument();
    expect(screen.getByTestId('1_notification_message')).toHaveTextContent(
      'Info notification'
    );
    expect(screen.getByTestId('1_close_notification_icon')).toBeInTheDocument();
    expect(onDestroyFn).not.toHaveBeenCalled();
  });

  it('should render warning notification', () => {
    const onDestroyFn = jest.fn();
    const value: NotificationValue = {
      id: '1',
      type: 'warning',
      message: 'Warning notification'
    };

    render(<Notification onDestroy={onDestroyFn} value={value} />);

    expect(screen.getByTestId('warning_icon')).toBeInTheDocument();
    expect(screen.getByTestId('1_notification_message')).toHaveTextContent(
      'Warning notification'
    );
    expect(screen.getByTestId('1_close_notification_icon')).toBeInTheDocument();
    expect(onDestroyFn).not.toHaveBeenCalled();
  });

  it('should render notification just for 3 seconds', () => {
    const onDestroyFn = jest.fn();
    const value: NotificationValue = {
      id: '1',
      type: 'success',
      message: 'Success notification'
    };

    render(<Notification onDestroy={onDestroyFn} value={value} />);

    const container = screen.queryByTestId('1_notification_container');

    expect(container).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(NOTIFICATION_TIME_IN_MS);
    });

    expect(container).not.toBeInTheDocument();
    expect(onDestroyFn).not.toHaveBeenCalled();
  });

  it('should keep notification rendered even if 3 seconds has passed because mouse is over notification', async () => {
    const onDestroyFn = jest.fn();
    const value: NotificationValue = {
      id: '1',
      type: 'success',
      message: 'Success notification'
    };

    render(<Notification onDestroy={onDestroyFn} value={value} />);

    const container = screen.getByTestId('1_notification_container');

    expect(container).toBeInTheDocument();

    userEvent.hover(container);

    act(() => {
      jest.advanceTimersByTime(NOTIFICATION_TIME_IN_MS);
    });

    expect(container).toBeInTheDocument();
    expect(onDestroyFn).toHaveBeenCalled();
  });

  it('should remove notification when 3 seconds has passed and mouse in and out', async () => {
    const onDestroyFn = jest.fn();
    const value: NotificationValue = {
      id: '1',
      type: 'success',
      message: 'Success notification'
    };

    render(<Notification onDestroy={onDestroyFn} value={value} />);

    const container = screen.getByTestId('1_notification_container');

    expect(container).toBeInTheDocument();

    userEvent.hover(container);

    expect(container).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(NOTIFICATION_TIME_IN_MS);
    });

    userEvent.unhover(container);

    expect(
      screen.queryByTestId('1_notification_container')
    ).not.toBeInTheDocument();
    expect(onDestroyFn).toHaveBeenCalled();
  });

  it('should close notification when click on close icon', async () => {
    const onDestroyFn = jest.fn();
    const value: NotificationValue = {
      id: '1',
      type: 'success',
      message: 'Success notification'
    };

    render(<Notification onDestroy={onDestroyFn} value={value} />);

    const container = screen.getByTestId('1_notification_container');

    expect(container).toBeInTheDocument();

    userEvent.click(screen.getByTestId('1_close_notification_icon'));

    expect(container).not.toBeInTheDocument();
    expect(onDestroyFn).toHaveBeenCalled();
  });
});
