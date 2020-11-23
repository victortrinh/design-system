import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { NavigationBar, NavigationBarProps } from './navigationBar';
import { Toolbar } from './toolbar';
import { Button } from '../button/button';

export default {
  title: 'Components/Layout/NavigationBar',
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
