import { ListItem, ListItemProps } from './listItem';
import { Meta, Story } from '@storybook/react/types-6-0';

import { ListItemIcon } from './listItemIcon';
import { ListItemText } from './listItemText';
import React from 'react';
import WifiIcon from '@material-ui/icons/Wifi';

export default {
  title: 'Components/List/ListItem',
  component: ListItem
} as Meta;

const Template: Story<ListItemProps> = (args) => (
  <ListItem {...args}>
    <ListItemIcon>
      <WifiIcon />
    </ListItemIcon>
    <ListItemText primary='Wi-Fi' />
  </ListItem>
);

export const Main = Template.bind({});
