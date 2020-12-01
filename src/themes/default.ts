import { createMuiTheme, lighten } from '@material-ui/core/styles';

import { defaultColors } from '../colors/defaultColors';

export const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: defaultColors.primary.main,
      light: defaultColors.primary.light,
      dark: defaultColors.primary.dark
    },
    secondary: {
      main: defaultColors.secondary.main,
      light: defaultColors.secondary.light,
      dark: defaultColors.secondary.dark
    }
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        background: `linear-gradient(45deg, ${defaultColors.primary.main} 0%, ${defaultColors.primary.light} 100%)`
      },
      containedSecondary: {
        background: `linear-gradient(45deg, ${defaultColors.secondary.main} 0%, ${defaultColors.secondary.light} 100%)`
      }
    }
  }
});

export const defaultDarkTheme = createMuiTheme({
  palette: {
    primary: {
      main: defaultColors.primary.main,
      light: defaultColors.primary.light,
      dark: defaultColors.primary.dark
    },
    secondary: {
      main: defaultColors.secondary.main,
      light: defaultColors.secondary.light,
      dark: defaultColors.secondary.dark
    },
    type: 'dark'
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        background: `linear-gradient(45deg, ${defaultColors.primary.main} 0%, ${defaultColors.primary.light} 100%)`
      },
      containedSecondary: {
        background: `linear-gradient(45deg, ${defaultColors.secondary.main} 0%, ${defaultColors.secondary.light} 100%)`
      }
    },
    MuiBottomNavigationAction: {
      root: {
        '&$selected': {
          color: defaultColors.primary.light && lighten(defaultColors.primary.light, 0.25)
        }
      }
    }
  }
});
