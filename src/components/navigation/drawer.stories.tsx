import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Drawer, DrawerProps } from './drawer';
import { Button } from '../button/button';

export default {
  title: 'Components/Navigation/Drawer',
  component: Drawer
} as Meta;

const Template: Story<DrawerProps> = (args) => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };

  return (
    <>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer
        {...args}
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div style={{ width: '300px' }}>Drawer</div>
      </Drawer>
    </>
  );
};

export const Main = Template.bind({});
