import { Button, Code, ComponentPage } from 'components';
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
      <ComponentPage.Section subtitle="When to Use">
        When need to trigger actions or operations.
      </ComponentPage.Section>
      <ComponentPage.Section subtitle="Examples">
        <Button
          width={150}
          variant="primary"
          style={{ marginRight: '1rem', marginTop: '4px' }}
        >
          Button
        </Button>
        <Button
          width={150}
          variant="danger"
          style={{ marginRight: '1rem', marginTop: '4px' }}
        >
          Button
        </Button>
        <Button
          width={150}
          variant="warning"
          style={{ marginRight: '1rem', marginTop: '4px' }}
        >
          Button
        </Button>
        <Button
          width={150}
          variant="success"
          style={{ marginRight: '1rem', marginTop: '4px' }}
        >
          Button
        </Button>
        <Button
          disabled
          width={150}
          style={{ marginRight: '1rem', marginTop: '4px' }}
        >
          Disabled
        </Button>
        <Button loading width={150}>
          Button
        </Button>
      </ComponentPage.Section>
      <ComponentPage.Section subtitle="Usage">
        <Code>
          {
            '<Button loading={false} variant="success" onClick={handleClick}>Apply</Button>'
          }
        </Code>
      </ComponentPage.Section>
      <ComponentPage.TableProperties properties={properties} />
    </ComponentPage>
  );
};

export { ButtonPage, ButtonPage as default };
