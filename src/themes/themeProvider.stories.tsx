import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ThemeProvider, ThemeProps } from './themeProvider';
import { Box, Container, withStyles } from '@material-ui/core';
import { Button } from '../components/button/button';

export default {
  title: 'Styling/ThemeProvider',
  component: ThemeProvider
} as Meta;

const Template: Story<ThemeProps> = (
  args: JSX.IntrinsicAttributes & ThemeProps & { children?: React.ReactNode }
) => (
  <ThemeProvider {...args}>
    <StyledContainer style={{ padding: '20px' }}>
      <Box style={{ marginBottom: '20px' }}>Text example</Box>
      <Box style={{ marginBottom: '20px' }}>
        <div style={{ marginBottom: '5px' }}>Primary</div>
        <Button color='primary'>Button</Button>
      </Box>
      <Box style={{ marginBottom: '20px' }}>
        <div style={{ marginBottom: '5px' }}>Secondary</div>
        <Button color='secondary'>Button</Button>
      </Box>
    </StyledContainer>
  </ThemeProvider>
);

const StyledContainer = withStyles(({ palette }) => ({
  root: {
    backgroundColor: palette.background.default
  }
}))(Container);

export const Main = Template.bind({});
