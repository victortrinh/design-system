import { CardContent, CardContentProps } from './cardContent';
import { Meta, Story } from '@storybook/react/types-6-0';

import React from 'react';

export default {
  title: 'Components/Card/CardContent',
  component: CardContent
} as Meta;

const Template: Story<CardContentProps> = (args) => <CardContent {...args} />;

export const Main = Template.bind({});
