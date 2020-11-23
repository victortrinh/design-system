import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { GridList, GridListProps } from './gridList';

export default {
  title: 'Components/Layout/GridList',
  component: GridList
} as Meta;

const Template: Story<GridListProps> = (args) => <GridList {...args} />;

export const Main = Template.bind({});

Main.args = {
  children: 'GridList'
};
