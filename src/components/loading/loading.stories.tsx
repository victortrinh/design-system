import { Loading, LoadingProps } from './loading';
import { Meta, Story } from '@storybook/react/types-6-0';

import { Button } from '@material-ui/core';
import React from 'react';

export default {
  title: 'Components/Loading',
  component: Loading
} as Meta;

const Template: Story<LoadingProps> = (args) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button variant='outlined' color='primary' onClick={handleToggle}>
        Show backdrop
      </Button>
      <Loading {...args} open={open} onClick={handleClose} />
    </div>
  );
};

export const Main = Template.bind({});

Main.argTypes = {
  open: {
    control: { disable: true }
  }
};
