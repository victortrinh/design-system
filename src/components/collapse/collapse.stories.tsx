import { Collapse, CollapseProps } from './collapse';
import { Meta, Story } from '@storybook/react/types-6-0';

import React from 'react';

export default {
  title: 'Components/Collapse',
  component: Collapse
} as Meta;

const Template: Story<CollapseProps> = (args) => (
  <Collapse {...args}>Item</Collapse>
);

export const Main = Template.bind({});
