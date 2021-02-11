import { createMuiTheme } from '@material-ui/core/styles';

import { blackWhiteColors } from '../colors/blackWhiteColors';

export const blackWhiteTheme = createMuiTheme({
  palette: {
    primary: {
      main: blackWhiteColors.primary.main,
      light: blackWhiteColors.primary.light,
      dark: blackWhiteColors.primary.dark
    },
    secondary: {
      main: blackWhiteColors.secondary.main,
      light: blackWhiteColors.secondary.light,
      dark: blackWhiteColors.secondary.dark
    }
  },
  overrides: {
    MuiBottomNavigationAction: {
      root: {
        '&$selected': {
          color: blackWhiteColors.secondary.light
        }
      }
    }
  }
});

export const blackWhiteDarkTheme = createMuiTheme({
  palette: {
    primary: {
      main: blackWhiteColors.primary.main,
      light: blackWhiteColors.primary.light,
      dark: blackWhiteColors.primary.dark
    },
    secondary: {
      main: blackWhiteColors.secondary.main,
      light: blackWhiteColors.secondary.light,
      dark: blackWhiteColors.secondary.dark
    },
    type: 'dark'
  }
});
