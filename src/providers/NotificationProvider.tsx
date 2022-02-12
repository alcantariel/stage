import {
  Notification,
  NotificationValue,
  StyledNotificationsContainer
} from 'components';
import { ReactNode, createContext, useState } from 'react';

interface Props {
  children: ReactNode;
}

export interface NotificationContextProps {
  addNotification: (notification: NotificationValue) => void;
}

export const NotificationContext = createContext({
  addNotification: (notification: NotificationValue) => {}
});

export const NotificationProvider = ({ children }: Props) => {
  const [notifications, setNotifications] = useState<NotificationValue[]>([]);

  const addNotification = (notification: NotificationValue): void => {
    setNotifications(prevNotifications => [...prevNotifications, notification]);
  };

  const removeNotification = (index: number): void => {
    setNotifications(prevNotifications => [
      ...prevNotifications.slice(0, index),
      ...prevNotifications.slice(index + 1)
    ]);
  };

  return (
    <NotificationContext.Provider value={{ addNotification }}>
      <StyledNotificationsContainer>
        {notifications.map((notification: NotificationValue, index: number) => {
          return (
            <Notification
              key={`${notification.id}`}
              value={notification}
              onDestroy={() => removeNotification(index)}
            />
          );
        })}
      </StyledNotificationsContainer>
      {children}
    </NotificationContext.Provider>
  );
};
