import {
  CssBaseline,
  Theme as MaterialTheme,
  MuiThemeProvider as MaterialThemeProvider
} from '@material-ui/core';
import { blackWhiteDarkTheme, blackWhiteTheme } from './blackWhite';
import { defaultDarkTheme, defaultTheme } from './default';
import { neuromancerDarkTheme, neuromancerTheme } from './neuromancer';
import { redDarkTheme, redTheme } from './redTheme';
import { underTheLakeDarkTheme, underTheLakeTheme } from './underTheLake';
import { veryBlueDarkTheme, veryBlueTheme } from './veryBlue';

import React from 'react';

export interface ThemeProps {
  theme:
    | 'blackWhite'
    | 'darkBlackWhite'
    | 'veryBlue'
    | 'darkVeryBlue'
    | 'neuromancer'
    | 'darkNeuromancer'
    | 'underTheLake'
    | 'darkUnderTheLake'
    | 'default'
    | 'darkDefault'
    | 'red'
    | 'redDark';
}

export const ThemeProvider: React.FC<ThemeProps> = ({ theme, children }) => {
  const getTheme = (theme: string): MaterialTheme => {
    switch (theme) {
      case 'blackWhite':
        return blackWhiteTheme;
      case 'darkBlackWhite':
        return blackWhiteDarkTheme;
      case 'veryBlue':
        return veryBlueTheme;
      case 'darkVeryBlue':
        return veryBlueDarkTheme;
      case 'underTheLake':
        return underTheLakeTheme;
      case 'darkUnderTheLake':
        return underTheLakeDarkTheme;
      case 'neuromancer':
        return neuromancerTheme;
      case 'default':
        return defaultTheme;
      case 'darkDefault':
        return defaultDarkTheme;
      case 'red':
        return redTheme;
      case 'redDark':
        return redDarkTheme;
      default:
        return neuromancerDarkTheme;
    }
  };

  const materialTheme: MaterialTheme = getTheme(theme);

  return (
    <MaterialThemeProvider theme={materialTheme}>
      <CssBaseline />
      {children}
    </MaterialThemeProvider>
  );
};

ThemeProvider.defaultProps = {
  theme: 'darkNeuromancer'
};
