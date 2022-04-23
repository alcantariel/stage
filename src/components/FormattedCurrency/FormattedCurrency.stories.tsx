import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FormattedCurrency } from './FormattedCurrency';

export default {
  title: 'FormattedCurrency',
  component: FormattedCurrency,
  argTypes: {},
  args: {
    value: 10
  }
} as ComponentMeta<typeof FormattedCurrency>;

export const Default: ComponentStory<typeof FormattedCurrency> = args => (
  <FormattedCurrency {...args} />
);
