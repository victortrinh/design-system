import {
  BottomNavigation as MaterialBottomNavigation,
  BottomNavigationProps as MaterialBottomNavigationProps
} from '@material-ui/core';
import React, { ChangeEvent } from 'react';

export interface BottomNavigationProps
  extends Omit<MaterialBottomNavigationProps, 'onChange'> {
  onChange: (event: ChangeEvent<{}>, newValue: any) => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  ...props
}) => <MaterialBottomNavigation {...props} />;
