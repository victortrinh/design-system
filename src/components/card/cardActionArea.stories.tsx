import { CardActionArea, CardActionAreaProps } from './cardActionArea';
import { Meta, Story } from '@storybook/react/types-6-0';

import React from 'react';

export default {
  title: 'Components/Card/CardActionArea',
  component: CardActionArea
} as Meta;

const Template: Story<CardActionAreaProps> = (args) => (
  <CardActionArea {...args} />
);

export const Main = Template.bind({});
