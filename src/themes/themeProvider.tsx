import React from 'react';
import {
  CssBaseline,
  Theme as MaterialTheme,
  MuiThemeProvider as MaterialThemeProvider
} from '@material-ui/core';
import { neuromancerDarkTheme, neuromancerTheme } from './neuromancer';
import { veryBlueDarkTheme, veryBlueTheme } from './veryBlue';
import { underTheLakeDarkTheme, underTheLakeTheme } from './underTheLake';

export interface ThemeProps {
  theme:
    | 'veryBlue'
    | 'darkVeryBlue'
    | 'neuromancer'
    | 'darkNeuromancer'
    | 'underTheLake'
    | 'darkUnderTheLake';
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
