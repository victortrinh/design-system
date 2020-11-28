import {
  ListItemSecondaryAction,
  ListItemSecondaryActionProps
} from './listItemSecondaryAction';
import { Meta, Story } from '@storybook/react/types-6-0';

import React from 'react';
import { Switch } from '../../switch/switch';

export default {
  title: 'Components/List/ListItemSecondaryAction',
  component: ListItemSecondaryAction
} as Meta;

const Template: Story<ListItemSecondaryActionProps> = (args) => {
  const [checked, setChecked] = React.useState(false);

  const handleToggle = () => {
    setChecked(!checked);
  };

  return (
    <ListItemSecondaryAction {...args}>
      <Switch
        edge='end'
        onChange={handleToggle}
        checked={checked}
        inputProps={{ 'aria-labelledby': 'switch-list-label-wifi' }}
      />
    </ListItemSecondaryAction>
  );
};

export const Main = Template.bind({});
