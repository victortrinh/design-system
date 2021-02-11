import { createMuiTheme } from '@material-ui/core/styles';
import { redColors } from '../colors/redColors';

export const redTheme = createMuiTheme({
  palette: {
    primary: {
      main: redColors.primary.main,
      light: redColors.primary.light,
      dark: redColors.primary.dark
    },
    secondary: {
      main: redColors.secondary.main,
      light: redColors.secondary.light,
      dark: redColors.secondary.dark
    }
  }
});

export const redDarkTheme = createMuiTheme({
  palette: {
    primary: {
      main: redColors.primary.main,
      light: redColors.primary.light,
      dark: redColors.primary.dark
    },
    secondary: {
      main: redColors.secondary.main,
      light: redColors.secondary.light,
      dark: redColors.secondary.dark
    },
    type: 'dark'
  }
});
