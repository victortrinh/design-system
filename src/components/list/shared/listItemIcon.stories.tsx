import { ListItemIcon, ListItemIconProps } from './listItemIcon';
import { Meta, Story } from '@storybook/react/types-6-0';

import React from 'react';
import WifiIcon from '@material-ui/icons/Wifi';

export default {
  title: 'Components/List/ListItemIcon',
  component: ListItemIcon
} as Meta;

const Template: Story<ListItemIconProps> = (args) => (
  <ListItemIcon {...args}>
    <WifiIcon />
  </ListItemIcon>
);

export const Main = Template.bind({});
