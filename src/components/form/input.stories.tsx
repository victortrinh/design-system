import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Input, InputProps } from './input';

export default {
  title: 'Components/Form/Input',
  component: Input
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Main = Template.bind({});

Main.args = {
  label: 'Outlined'
};
