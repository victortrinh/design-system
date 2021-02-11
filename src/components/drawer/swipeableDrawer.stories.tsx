import { Meta, Story } from '@storybook/react/types-6-0';
import { SwipeableDrawer, SwipeableDrawerProps } from './swipeableDrawer';

import React from 'react';

export default {
  title: 'Components/Drawer/SwipeableDrawer',
  component: SwipeableDrawer
} as Meta;

const Template: Story<SwipeableDrawerProps> = (args) => (
  <SwipeableDrawer {...args} />
);

export const Main = Template.bind({});
