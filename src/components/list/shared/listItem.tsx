import {
  ListItem as MaterialListItem,
  ListItemProps as MaterialListItemProps
} from '@material-ui/core';

import React from 'react';

export interface ListItemProps extends Omit<MaterialListItemProps, 'button'> {}

export const ListItem: React.FC<ListItemProps> = (props) => (
  <MaterialListItem {...props} />
);
