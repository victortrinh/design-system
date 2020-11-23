import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Drawer, DrawerProps } from './drawer';
import { Button } from '../button/button';
import SettingsIcon from '@material-ui/icons/Settings';
import MailIcon from '@material-ui/icons/Mail';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default {
  title: 'Components/Navigation/Drawer',
  component: Drawer
} as Meta;

const Template: Story<DrawerProps> = (args) => {
  const [open, setOpen] = React.useState(args.open);

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event?.type === 'keydown' &&
      (event?.key === 'Tab' || event?.key === 'Shift')
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
        <div style={{ width: '300px' }}>
          <Button
            color='default'
            variant='text'
            shape='square'
            fullWidth
            style={{ paddingLeft: '30px', justifyContent: 'start' }}
            startIcon={<MailIcon />}
          >
            Inbox
          </Button>
          <Button
            color='default'
            variant='text'
            shape='square'
            fullWidth
            style={{ paddingLeft: '30px', justifyContent: 'start' }}
            startIcon={<FavoriteIcon />}
          >
            Example
          </Button>
          <Button
            color='default'
            variant='text'
            shape='square'
            fullWidth
            style={{ paddingLeft: '30px', justifyContent: 'start' }}
            startIcon={<SettingsIcon />}
          >
            Settings
          </Button>
        </div>
      </Drawer>
    </>
  );
};

export const Main = Template.bind({});

Main.args = {
  open: false
};
