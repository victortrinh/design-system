import { ListItemText, ListItemTextProps } from './listItemText';
import { Meta, Story } from '@storybook/react/types-6-0';

import React from 'react';

export default {
  title: 'Components/List/ListItemText',
  component: ListItemText
} as Meta;

const Template: Story<ListItemTextProps> = (args) => <ListItemText {...args} />;

export const Main = Template.bind({});

Main.args = {
  primary: 'Wi-Fi'
};
