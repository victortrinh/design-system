import {
  CssBaseline,
  Theme as MaterialTheme,
  MuiThemeProvider as MaterialThemeProvider
} from '@material-ui/core';
import { defaultDarkTheme, defaultTheme } from './default';
import { neuromancerDarkTheme, neuromancerTheme } from './neuromancer';
import { underTheLakeDarkTheme, underTheLakeTheme } from './underTheLake';
import { veryBlueDarkTheme, veryBlueTheme } from './veryBlue';

import React from 'react';

export interface ThemeProps {
  theme:
    | 'veryBlue'
    | 'darkVeryBlue'
    | 'neuromancer'
    | 'darkNeuromancer'
    | 'underTheLake'
    | 'darkUnderTheLake'
    | 'default'
    | 'darkDefault';
}

export const ThemeProvider: React.FC<ThemeProps> = ({ theme, children }) => {
  const getTheme = (theme: string): MaterialTheme => {
    switch (theme) {
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
