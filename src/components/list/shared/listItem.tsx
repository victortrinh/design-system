import {
  ListItem as MaterialListItem,
  ListItemProps as MaterialListItemProps
} from '@material-ui/core';

import React from 'react';

export interface ListItemProps extends MaterialListItemProps {}

export const ListItem: React.FC<ListItemProps> = (props) => (
  // @ts-ignore
  <MaterialListItem {...props} />
);
