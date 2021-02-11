import {
  Drawer as Material,
  DrawerProps as MaterialProps
} from '@material-ui/core';

import React from 'react';

export interface DrawerProps extends MaterialProps {}

export const Drawer: React.FC<DrawerProps> = ({ ...props }) => (
  <Material {...props} />
);
