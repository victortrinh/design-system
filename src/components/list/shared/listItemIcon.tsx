import {
  ListItemIcon as MaterialListItemIcon,
  ListItemIconProps as MaterialListItemIconProps
} from '@material-ui/core';

import React from 'react';

export interface ListItemIconProps extends MaterialListItemIconProps {}

export const ListItemIcon: React.FC<ListItemIconProps> = (props) => (
  <MaterialListItemIcon {...props} />
);
