import React from 'react';
import { AppBar, AppBarProps } from '@material-ui/core';

export interface NavigationBarProps extends AppBarProps {
  color?: 'default' | 'inherit' | 'primary' | 'secondary' | 'transparent';
  position?: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky';
}

export const NavigationBar: React.FC<AppBarProps> = (props) => (
  <AppBar {...props} />
);

NavigationBar.defaultProps = {
  color: 'primary',
  position: 'fixed'
};
