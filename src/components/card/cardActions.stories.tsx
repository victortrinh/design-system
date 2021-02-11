import { CardActions, CardActionsProps } from './cardActions';
import { Meta, Story } from '@storybook/react/types-6-0';

import React from 'react';

export default {
  title: 'Components/Card/CardActions',
  component: CardActions
} as Meta;

const Template: Story<CardActionsProps> = (args) => <CardActions {...args} />;

export const Main = Template.bind({});
