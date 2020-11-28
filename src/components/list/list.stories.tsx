import { List, ListProps } from './list';
import { Meta, Story } from '@storybook/react/types-6-0';

import { ListItem } from './shared/listItem';
import { ListItemIcon } from './shared/listItemIcon';
import { ListItemText } from './shared/listItemText';
import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import WifiIcon from '@material-ui/icons/Wifi';

export default {
  title: 'Components/List',
  component: List
} as Meta;

const Template: Story<ListProps> = (args) => (
  <List {...args}>
    <ListItem>
      <ListItemIcon>
        <WifiIcon />
      </ListItemIcon>
      <ListItemText primary='Wi-Fi' />
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary='Settings' />
    </ListItem>
  </List>
);

export const Main = Template.bind({});
