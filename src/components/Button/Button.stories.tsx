import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {},
  args: {
    children: 'Button'
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary'
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger'
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning'
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success'
};

export const Loading = Template.bind({});
Loading.args = {
  variant: 'primary',
  loading: true
};
