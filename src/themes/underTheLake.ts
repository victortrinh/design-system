import { createMuiTheme, lighten } from '@material-ui/core/styles';

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
    MuiTextField: {
      "root": {
        '& label.Mui-focused': {
          color: underTheLakeColors.secondary.main,
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: underTheLakeColors.secondary.main,
        },
        '& .MuiOutlinedInput-root': {
          '&.Mui-focused fieldset': {
            borderColor: underTheLakeColors.secondary.main,
          },
        },
      }
    },
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
          color: underTheLakeColors.primary.light && lighten(underTheLakeColors.primary.light, 0.25)
        }
      }
    }
  }
});
