import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from './button';

export default {
  title: 'Components/Button',
  component: Button
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Main = Template.bind({});

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
