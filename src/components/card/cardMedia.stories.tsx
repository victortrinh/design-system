import { CardMedia, CardMediaProps } from './cardMedia';
import { Meta, Story } from '@storybook/react/types-6-0';

import React from 'react';

export default {
  title: 'Components/Card/CardMedia',
  component: CardMedia
} as Meta;

const Template: Story<CardMediaProps> = (args) => <CardMedia {...args} />;

export const Main = Template.bind({});
