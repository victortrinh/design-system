import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Box, BoxProps } from './box';

export default {
  title: 'Components/Layout/Box',
  component: Box
} as Meta;

const Template: Story<BoxProps> = (args) => <Box {...args} />;

export const Main = Template.bind({});

Main.args = {
  children: 'Box'
};
