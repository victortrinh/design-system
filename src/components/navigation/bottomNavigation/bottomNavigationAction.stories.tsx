import React from 'react';
import RestoreIcon from '@material-ui/icons/Restore';
import { Story, Meta } from '@storybook/react/types-6-0';
import {
  BottomNavigationAction,
  BottomNavigationActionProps
} from './bottomNavigationAction';

export default {
  title: 'Components/Navigation/BottomNavigation/BottomNavigationAction',
  component: BottomNavigationAction
} as Meta;

const Template: Story<BottomNavigationActionProps> = (args) => (
  <BottomNavigationAction {...args} />
);

export const Main = Template.bind({});

Main.args = {
  label: 'Recents',
  icon: <RestoreIcon />
};
