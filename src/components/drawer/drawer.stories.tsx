import { Drawer, DrawerProps } from './drawer';
import { Meta, Story } from '@storybook/react/types-6-0';

import React from 'react';

export default {
  title: 'Components/Drawer/Drawer',
  component: Drawer
} as Meta;

const Template: Story<DrawerProps> = (args) => <Drawer {...args} />;

export const Main = Template.bind({});
