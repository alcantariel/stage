import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useNotification } from 'hooks';
import { render } from 'utils/testing';

const NotificationTestPage = () => {
  const showNotification = useNotification();

  const addSuccessNotification = () =>
    showNotification({
      id: '1',
      type: 'success',
      message: 'Success notification!'
    });

  return <button onClick={addSuccessNotification}>Add notification</button>;
};

describe('NotificationProvider.test.tsx', () => {
  it('should add success notification', () => {
    render(<NotificationTestPage />);

    expect(screen.queryByText('Success notification!')).not.toBeInTheDocument();

    userEvent.click(screen.getByText('Add notification'));

    expect(screen.getByText('Success notification!')).toBeInTheDocument();
  });

  it('should remove success notification', () => {
    render(<NotificationTestPage />);

    expect(screen.queryByText('Success notification!')).not.toBeInTheDocument();

    userEvent.click(screen.getByText('Add notification'));

    expect(screen.getByText('Success notification!')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('1_close_notification_icon'));

    expect(screen.queryByText('Success notification!')).not.toBeInTheDocument();
  });
});
