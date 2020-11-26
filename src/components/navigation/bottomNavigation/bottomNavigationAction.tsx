import {
  BottomNavigationAction as MaterialBottomNavigationAction,
  BottomNavigationActionProps as MaterialBottomNavigationActionProps
} from '@material-ui/core';

import React from 'react';

export interface BottomNavigationActionProps
  extends MaterialBottomNavigationActionProps {}

export const BottomNavigationAction: React.FC<BottomNavigationActionProps> = ({
  ...props
}) => <MaterialBottomNavigationAction {...props} />;
