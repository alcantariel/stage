import { Button, ComponentPage } from 'components';
import { Property } from 'types';

const properties: Property[] = [
  {
    name: 'disabled',
    description: 'Disable button and actions',
    defaultValue: 'false',
    required: 'false',
    type: 'boolean'
  },
  {
    name: 'loading',
    description: 'Display spinner inside button when is loading',
    defaultValue: 'false',
    required: 'false',
    type: 'boolean'
  },
  {
    name: 'onClick',
    description: 'Click handler',
    defaultValue: '',
    required: 'false',
    type: '(event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void'
  },
  {
    name: 'variant',
    description: 'Button color',
    defaultValue: 'primary',
    required: 'false',
    type: 'primary | danger | warning | success'
  },
  {
    name: 'width',
    description: 'Button width',
    defaultValue: '',
    required: 'false',
    type: 'number'
  }
];

const ButtonPage = () => {
  return (
    <ComponentPage title="Button" description="Click me!">
      <ComponentPage.Section subtitle="Examples">
        <Button width={150} variant="primary" className="mr-4 mt-2">
          Button
        </Button>
        <Button width={150} variant="danger" className="mr-4 mt-2">
          Button
        </Button>
        <Button width={150} variant="warning" className="mr-4 mt-2">
          Button
        </Button>
        <Button width={150} variant="success" className="mr-4 mt-2">
          Button
        </Button>
        <Button disabled width={150} className="mr-4 mt-2">
          Disabled
        </Button>
        <Button loading width={150}>
          Button
        </Button>
      </ComponentPage.Section>
      <ComponentPage.TableProperties properties={properties} />
    </ComponentPage>
  );
};

export default ButtonPage;
