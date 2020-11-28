import { Meta, Story } from '@storybook/react/types-6-0';
import { Switch, SwitchProps } from './switch';

import React from 'react';

export default {
  title: 'Components/Switch',
  component: Switch
} as Meta;

const Template: Story<SwitchProps> = (args) => <Switch {...args} />;

export const Main = Template.bind({});
