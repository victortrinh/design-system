import {
  ListItemText as MaterialListItemText,
  ListItemTextProps as MaterialListItemTextProps
} from '@material-ui/core';

import React from 'react';

export interface ListItemTextProps extends MaterialListItemTextProps {}

export const ListItemText: React.FC<ListItemTextProps> = (props) => (
  <MaterialListItemText {...props} />
);
