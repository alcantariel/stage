import { ComponentPage, Select } from 'components';
import { useEffect, useState } from 'react';
import { Property } from 'types';

const properties: Property[] = [
  {
    name: 'name',
    description: 'Select name',
    type: 'string',
    required: 'true',
    defaultValue: ''
  },
  {
    name: 'options',
    description: 'Select options',
    type: '(number | string | object)[]',
    required: 'true',
    defaultValue: '[]'
  },
  {
    name: 'getOptionLabel',
    description:
      'Function that return label from option when option is an object',
    type: '((option: T) => string)',
    required: 'only if options are objects',
    defaultValue: ''
  },
  {
    name: 'getOptionValue',
    description:
      'Function that return selected value from option when option is an object',
    type: '((option: T) => string)',
    required: 'only if options are objects',
    defaultValue: ''
  },
  {
    name: 'label',
    description: 'Label over select',
    type: 'string',
    required: 'false',
    defaultValue: ''
  },
  {
    name: 'defaultOptionLabel',
    description: 'Label of default value',
    type: 'string',
    required: 'false',
    defaultValue: 'Select'
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
    description: 'Disable select',
    defaultValue: 'false',
    required: 'false',
    type: 'boolean'
  }
];

const SelectPage = () => {
  const [quantity, setQuantity] = useState(0);
  const [errors, setErrors] = useState({ quantity: '' });

  useEffect(() => {
    setErrors({ quantity: quantity >= 0 ? '' : 'quantity is required' });
  }, [quantity]);

  return (
    <ComponentPage title="Select" description="Make your choice.">
      <ComponentPage.Section title="Examples">
        <Select
          name="name"
          label="Quantity"
          value={quantity}
          options={[0, 1, 2]}
          error={errors.quantity}
          onChange={event => setQuantity(Number(event.target.value))}
        />
      </ComponentPage.Section>
      <ComponentPage.TableProperties properties={properties} />
    </ComponentPage>
  );
};

export default SelectPage;
