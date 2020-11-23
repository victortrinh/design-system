import React, { ChangeEvent } from 'react';
import {
  BottomNavigation as MaterialBottomNavigation,
  BottomNavigationProps as MaterialBottomNavigationProps
} from '@material-ui/core';

export interface BottomNavigationProps
  extends Omit<MaterialBottomNavigationProps, 'onChange'> {
  onChange: (event: ChangeEvent<{}>, newValue: number) => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  ...props
}) => <MaterialBottomNavigation {...props} />;
