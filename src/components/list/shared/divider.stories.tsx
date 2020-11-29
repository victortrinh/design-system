import { Divider, DividerProps } from './divider';
import { Meta, Story } from '@storybook/react/types-6-0';

import React from 'react';

export default {
  title: 'Components/List/Divider',
  component: Divider
} as Meta;

const Template: Story<DividerProps> = (args) => <Divider {...args} />;

export const Main = Template.bind({});
