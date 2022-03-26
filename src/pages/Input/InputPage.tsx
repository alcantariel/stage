import { ComponentPage, Input } from 'components';
import { useEffect, useState } from 'react';
import { Property } from 'types';

const properties: Property[] = [
  {
    name: 'name',
    description: 'Field name',
    type: 'string',
    required: 'true',
    defaultValue: ''
  },
  {
    name: 'label',
    description: 'Label over input',
    type: 'string',
    required: 'false',
    defaultValue: ''
  },
  {
    name: 'error',
    description: 'Error message',
    type: 'string',
    required: 'false',
    defaultValue: ''
  },
  {
    name: 'disabled',
    description: 'Disable input',
    defaultValue: 'false',
    required: 'false',
    type: 'boolean'
  }
];

const InputPage = () => {
  const [name, setName] = useState('');
  const [errors, setErrors] = useState({ name: '' });

  useEffect(() => {
    setErrors({ name: !name ? 'name is required' : '' });
  }, [name]);

  return (
    <ComponentPage title="Input" description="Wanna type?">
      <ComponentPage.Section subtitle="Examples">
        <Input
          name="name"
          label="Name"
          value={name}
          placeholder="Whats your name?"
          onChange={event => setName(event.target.value)}
          error={errors.name ? 'name is required' : ''}
        />
        <Input
          disabled
          name="name"
          label="Name"
          placeholder="Disabled"
          className="mt-4"
          error={errors.name ? 'name is required' : ''}
          onChange={event => setName(event.target.value)}
        />
      </ComponentPage.Section>
      <ComponentPage.TableProperties properties={properties} />
    </ComponentPage>
  );
};

export default InputPage;
