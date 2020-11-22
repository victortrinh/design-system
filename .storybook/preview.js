import React from 'react';
import {
  ThemeProvider,
  CssBaseline,
  withStyles,
  Container
} from '@material-ui/core';
import {
  neuromancerTheme,
  neuromancerDarkTheme
} from '../src/themes/neuromancer';
import {
  underTheLakeTheme,
  underTheLakeDarkTheme
} from '../src/themes/underTheLake';
import { veryBlueTheme, veryBlueDarkTheme } from '../src/themes/veryBlue';
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
        'Dark Very blue'
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
