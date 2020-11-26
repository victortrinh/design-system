import { Meta, Story } from '@storybook/react/types-6-0';
import { NavigationBar, NavigationBarProps } from './navigationBar';

import { Button } from '../button/button';
import React from 'react';
import { Toolbar } from './toolbar';

export default {
  title: 'Components/Navigation/NavigationBar',
  component: NavigationBar
} as Meta;

const Template: Story<NavigationBarProps> = (args) => (
  <NavigationBar {...args}>
    <Toolbar>
      <div style={{ flexGrow: 1, fontWeight: 900, fontSize: '30px' }}>Logo</div>
      <Button color='inherit' variant='text' shape='square'>
        Login
      </Button>
    </Toolbar>
  </NavigationBar>
);

export const Main = Template.bind({});

Main.args = {
  position: 'static',
  color: 'inherit'
};
