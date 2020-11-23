import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Toolbar, ToolbarProps } from './toolbar';

export default {
  title: 'Components/Layout/Toolbar',
  component: Toolbar
} as Meta;

const Template: Story<ToolbarProps> = (args) => <Toolbar {...args} />;

export const Main = Template.bind({});

Main.args = {
  children: 'Toolbar'
};
