import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NotificationValue } from 'components';
import { useNotification } from 'hooks';
import { initialNotificationContext } from 'providers';
import { render } from 'utils/testing';

const successNotification: NotificationValue = {
  id: '1',
  type: 'success',
  message: 'Success notification!'
};

const NotificationTestPage = () => {
  const showNotification = useNotification();

  const addSuccessNotification = () => showNotification(successNotification);

  return <button onClick={addSuccessNotification}>Add notification</button>;
};

describe('NotificationProvider.test.tsx', () => {
  it('should execute initial notification context noop functions', () => {
    const noopAddNotificationResult =
      initialNotificationContext.addNotification(successNotification);

    expect(noopAddNotificationResult).toEqual(undefined);
  });

  it('should add success notification', async () => {
    render(<NotificationTestPage />);

    expect(screen.queryByText('Success notification!')).not.toBeInTheDocument();

    await waitFor(() => userEvent.click(screen.getByText('Add notification')));

    expect(screen.getByText('Success notification!')).toBeInTheDocument();
  });

  it('should remove success notification', async () => {
    render(<NotificationTestPage />);

    expect(screen.queryByText('Success notification!')).not.toBeInTheDocument();

    await waitFor(() => userEvent.click(screen.getByText('Add notification')));

    expect(screen.getByText('Success notification!')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('1_close_notification_icon'));

    expect(screen.queryByText('Success notification!')).not.toBeInTheDocument();
  });
});
