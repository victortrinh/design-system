import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from './button';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default {
  title: 'Components/Button',
  component: Button
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Main = Template.bind({});
export const WithStartIcon = Template.bind({});
export const WithEndIcon = Template.bind({});

Main.args = {
  children: 'Button'
};

Main.argTypes = {
  children: {
    control: { disable: true }
  },
  endIcon: {
    control: { disable: true }
  },
  focusVisibleClassName: {
    control: { disable: true }
  },
  href: {
    control: { disable: true }
  },
  tabIndex: {
    control: { disable: true }
  },
  TouchRippleProps: {
    control: { disable: true }
  },
  startIcon: {
    control: { disable: true }
  }
};

WithStartIcon.args = {
  children: 'Button',
  startIcon: <FavoriteIcon />
};

WithStartIcon.argTypes = {
  ...Main.argTypes
};

WithEndIcon.args = {
  children: 'Button',
  endIcon: <FavoriteIcon />
};

WithEndIcon.argTypes = {
  ...Main.argTypes
};
