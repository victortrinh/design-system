import {
  BottomNavigation as MaterialBottomNavigation,
  BottomNavigationProps as MaterialBottomNavigationProps
} from '@material-ui/core';
import React, { ChangeEvent, ElementType } from 'react';

export interface BottomNavigationProps
  extends Omit<MaterialBottomNavigationProps, 'onChange'> {
  onChange?: (event: ChangeEvent<{}>, newValue: any) => void;
  component?: ElementType;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  ...props
}) => <MaterialBottomNavigation {...props} />;
