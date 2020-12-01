import {
  Container,
  CssBaseline,
  ThemeProvider,
  withStyles
} from '@material-ui/core';
import {
  defaultDarkTheme,
  defaultTheme
} from '../src/themes/default';
import {
  neuromancerDarkTheme,
  neuromancerTheme
} from '../src/themes/neuromancer';
import {
  underTheLakeDarkTheme,
  underTheLakeTheme
} from '../src/themes/underTheLake';
import { veryBlueDarkTheme, veryBlueTheme } from '../src/themes/veryBlue';

import React from 'react';
import { themes } from '@storybook/theming';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
  viewMode: 'docs',
  docs: {
    theme: themes.dark
  }
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'Dark Neuromancer',
    toolbar: {
      icon: 'chevrondown',
      items: [
        'Neuromancer',
        'Dark Neuromancer',
        'Under the lake',
        'Dark Under the lake',
        'Very blue',
        'Dark Very blue',
        'Default',
        'Dark Default'
      ]
    }
  }
};

const withThemeProvider = (Story, context) => {
  const getTheme = (theme) => {
    switch (theme) {
      case 'Very blue':
        return veryBlueTheme;
      case 'Dark Very blue':
        return veryBlueDarkTheme;
      case 'Under the lake':
        return underTheLakeTheme;
      case 'Dark Under the lake':
        return underTheLakeDarkTheme;
      case 'Neuromancer':
        return neuromancerTheme;
      case 'Default':
        return defaultTheme;
      case 'Dark Default':
        return defaultDarkTheme;
      default:
        return neuromancerDarkTheme;
    }
  };

  const theme = getTheme(context.globals.theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledContainer style={{ padding: '20px' }}>
        <Story {...context} />
      </StyledContainer>
    </ThemeProvider>
  );
};

const StyledContainer = withStyles(({ palette }) => ({
  root: {
    backgroundColor: palette.background.default
  }
}))(Container);

export const decorators = [withThemeProvider];
