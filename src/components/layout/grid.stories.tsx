import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Grid, GridProps } from './grid';

export default {
  title: 'Components/Layout/Grid',
  component: Grid
} as Meta;

const Template: Story<GridProps> = (args) => <Grid {...args} />;

export const Main = Template.bind({});

Main.args = {
  children: 'Grid'
};
