import { createMuiTheme } from '@material-ui/core/styles';
import { underTheLakeColors } from '../colors/underTheLakeColors';

export const underTheLakeTheme = createMuiTheme({
  palette: {
    primary: {
      main: underTheLakeColors.primary.main,
      light: underTheLakeColors.primary.light,
      dark: underTheLakeColors.primary.dark
    },
    secondary: {
      main: underTheLakeColors.secondary.main,
      light: underTheLakeColors.secondary.light,
      dark: underTheLakeColors.secondary.dark
    }
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        background: `linear-gradient(45deg, ${underTheLakeColors.primary.main} 0%, ${underTheLakeColors.primary.light} 100%)`
      },
      containedSecondary: {
        background: `linear-gradient(45deg, ${underTheLakeColors.secondary.main} 0%, ${underTheLakeColors.secondary.light} 100%)`
      }
    }
  }
});

export const underTheLakeDarkTheme = createMuiTheme({
  palette: {
    primary: {
      main: underTheLakeColors.primary.main,
      light: underTheLakeColors.primary.light,
      dark: underTheLakeColors.primary.dark
    },
    secondary: {
      main: underTheLakeColors.secondary.main,
      light: underTheLakeColors.secondary.light,
      dark: underTheLakeColors.secondary.dark
    },
    type: 'dark'
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        background: `linear-gradient(45deg, ${underTheLakeColors.primary.main} 0%, ${underTheLakeColors.primary.light} 100%)`
      },
      containedSecondary: {
        background: `linear-gradient(45deg, ${underTheLakeColors.secondary.main} 0%, ${underTheLakeColors.secondary.light} 100%)`
      }
    },
    MuiBottomNavigationAction: {
      root: {
        '&$selected': {
          color: underTheLakeColors.secondary.light
        }
      }
    }
  }
});
