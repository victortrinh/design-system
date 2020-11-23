import { createMuiTheme } from '@material-ui/core/styles';
import { veryBlueColors } from '../colors/veryBlueColors';

export const veryBlueTheme = createMuiTheme({
  palette: {
    primary: {
      main: veryBlueColors.primary.main,
      light: veryBlueColors.primary.light,
      dark: veryBlueColors.primary.dark
    },
    secondary: {
      main: veryBlueColors.secondary.main,
      light: veryBlueColors.secondary.light,
      dark: veryBlueColors.secondary.dark
    }
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        background: `linear-gradient(45deg, ${veryBlueColors.primary.main} 0%, ${veryBlueColors.primary.light} 100%)`
      },
      containedSecondary: {
        background: `linear-gradient(45deg, ${veryBlueColors.secondary.main} 0%, ${veryBlueColors.secondary.light} 100%)`
      }
    }
  }
});

export const veryBlueDarkTheme = createMuiTheme({
  palette: {
    primary: {
      main: veryBlueColors.primary.main,
      light: veryBlueColors.primary.light,
      dark: veryBlueColors.primary.dark
    },
    secondary: {
      main: veryBlueColors.secondary.main,
      light: veryBlueColors.secondary.light,
      dark: veryBlueColors.secondary.dark
    },
    type: 'dark'
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        background: `linear-gradient(45deg, ${veryBlueColors.primary.main} 0%, ${veryBlueColors.primary.light} 100%)`
      },
      containedSecondary: {
        background: `linear-gradient(45deg, ${veryBlueColors.secondary.main} 0%, ${veryBlueColors.secondary.light} 100%)`
      }
    },
    MuiBottomNavigationAction: {
      root: {
        '&$selected': {
          color: veryBlueColors.secondary.light
        }
      }
    }
  }
});
