import { AppBar, AppBarProps } from '@material-ui/core';

import React from 'react';

export interface NavigationBarProps extends AppBarProps {
  color?: 'default' | 'inherit' | 'primary' | 'secondary' | 'transparent';
  position?: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky';
  hasGradient?: boolean;
}

export const NavigationBar: React.FC<NavigationBarProps> = (props) => (
  <AppBar {...props} />
);

NavigationBar.defaultProps = {
  color: 'primary',
  position: 'fixed'
};
