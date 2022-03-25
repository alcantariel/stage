import { Button, Code, ComponentPage, NotificationType } from 'components';
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
      <ComponentPage.Section subtitle="When to Use">
        When need to trigger actions or operations.
      </ComponentPage.Section>
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
      <ComponentPage.Section subtitle="Usage">
        <div className="mb-4">
          <p className="mb-1">
            Inside your App component, add NotificationProvider at the top of
            hierarchy.
          </p>
          <Code>{'<NotificationProvider><App /></NotificationProvider>'}</Code>
        </div>
        <div className="mb-4">
          <p className="mb-1">
            Inside of any page, add useNotification hook to obtain the method
            that dispatch notification actions.
          </p>
          <Code>{'const showNotification = useNotification();'}</Code>
        </div>
        <div className="mb-4">
          <p className="mb-1">
            Dispatch notification when/where you want, they will appear at the
            top-right.
          </p>
          <Code>
            {
              '<Button onClick={() => showNotification({ type: "success": message: "Notification" })}>Click Me</Button>'
            }
          </Code>
        </div>
      </ComponentPage.Section>
      <ComponentPage.TableProperties properties={properties} />
    </ComponentPage>
  );
};

export default NotificationPage;
