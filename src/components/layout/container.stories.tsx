import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Container, ContainerProps } from './container';

export default {
  title: 'Components/Layout/Container',
  component: Container
} as Meta;

const Template: Story<ContainerProps> = (args) => <Container {...args} />;

export const Main = Template.bind({});

Main.args = {
  children: 'Container'
};
