import {
  MenuItem as Material,
  MenuItemProps as MaterialProps
} from '@material-ui/core';

import React from 'react';

export interface MenuItemProps extends MaterialProps {}

export const MenuItem: React.FC<MenuItemProps> = ({ ...props }) => (
  // @ts-ignore
  <Material {...props} />
);
