import { createMuiTheme } from '@material-ui/core/styles';
import { neuromancerColors } from '../colors/neuromancerColors';

export const neuromancerTheme = createMuiTheme({
  palette: {
    primary: {
      main: neuromancerColors.primary.main,
      light: neuromancerColors.primary.light,
      dark: neuromancerColors.primary.dark
    },
    secondary: {
      main: neuromancerColors.secondary.main,
      light: neuromancerColors.secondary.light,
      dark: neuromancerColors.secondary.dark
    }
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        background: `linear-gradient(45deg, ${neuromancerColors.primary.main} 0%, ${neuromancerColors.primary.light} 100%)`
      },
      containedSecondary: {
        background: `linear-gradient(45deg, ${neuromancerColors.secondary.main} 0%, ${neuromancerColors.secondary.light} 100%)`
      }
    }
  }
});

export const neuromancerDarkTheme = createMuiTheme({
  palette: {
    primary: {
      main: neuromancerColors.primary.main,
      light: neuromancerColors.primary.light,
      dark: neuromancerColors.primary.dark
    },
    secondary: {
      main: neuromancerColors.secondary.main,
      light: neuromancerColors.secondary.light,
      dark: neuromancerColors.secondary.dark
    },
    type: 'dark'
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        background: `linear-gradient(45deg, ${neuromancerColors.primary.main} 0%, ${neuromancerColors.primary.light} 100%)`
      },
      containedSecondary: {
        background: `linear-gradient(45deg, ${neuromancerColors.secondary.main} 0%, ${neuromancerColors.secondary.light} 100%)`
      }
    },
    MuiBottomNavigationAction: {
      root: {
        '&$selected': {
          color: neuromancerColors.secondary.light
        }
      }
    }
  }
});
