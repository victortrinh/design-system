import { ListSubheader, ListSubheaderProps } from './listSubheader';
import { Meta, Story } from '@storybook/react/types-6-0';

import React from 'react';

export default {
  title: 'Components/List/ListSubheader',
  component: ListSubheader
} as Meta;

const Template: Story<ListSubheaderProps> = (args) => (
  <ListSubheader {...args} />
);

export const Main = Template.bind({});

Main.args = {
  children: 'List sub header'
};
