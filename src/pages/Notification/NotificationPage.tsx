import { Button, ComponentPage, NotificationType } from 'components';
import { useNotification } from 'hooks';
import { Property } from 'types';

const properties: Property[] = [
  {
    name: 'type',
    description: 'Type which will change the notification color',
    type: 'success | error | warning | info',
    required: 'true',
    defaultValue: ''
  },
  {
    name: 'message',
    description: 'Content of notification',
    type: 'string',
    required: 'true',
    defaultValue: ''
  }
];

const NotificationPage = () => {
  const showNotification = useNotification();

  const handleNotification = (type: NotificationType): void => {
    showNotification({
      type,
      message: 'Notification message!'
    });
  };

  return (
    <ComponentPage title="Notification" description="Show me!">
      <ComponentPage.Section subtitle="Examples">
        <Button
          width={100}
          variant="success"
          className="mr-4 mt-2"
          onClick={() => handleNotification('success')}
        >
          Success
        </Button>
        <Button
          width={100}
          variant="danger"
          className="mr-4 mt-2"
          onClick={() => handleNotification('error')}
        >
          Error
        </Button>
        <Button
          width={100}
          variant="warning"
          className="mr-4 mt-2"
          onClick={() => handleNotification('warning')}
        >
          Warning
        </Button>
        <Button
          width={100}
          variant="primary"
          onClick={() => handleNotification('info')}
        >
          Info
        </Button>
      </ComponentPage.Section>
      <ComponentPage.TableProperties properties={properties} />
    </ComponentPage>
  );
};

export default NotificationPage;
