import React from 'react';
import {
  BottomNavigationAction as MaterialBottomNavigationAction,
  BottomNavigationActionProps as MaterialBottomNavigationActionProps,
  withStyles
} from '@material-ui/core';

export interface BottomNavigationActionProps
  extends MaterialBottomNavigationActionProps {}

export const BottomNavigationAction: React.FC<BottomNavigationActionProps> = ({
  ...props
}) => <StyledMaterialBottomNavigationAction {...props} />;

const StyledMaterialBottomNavigationAction = withStyles(({ palette }) => ({
  root: {
    '&$selected': {
      color:
        palette.type === 'dark'
          ? palette.secondary.light
          : palette.primary.main,
      borderTop: `2px solid ${
        palette.type === 'dark' ? palette.secondary.light : palette.primary.main
      }`
    }
  },
  selected: {
    color:
      palette.type === 'dark' ? palette.secondary.light : palette.primary.main
  }
}))(MaterialBottomNavigationAction);
