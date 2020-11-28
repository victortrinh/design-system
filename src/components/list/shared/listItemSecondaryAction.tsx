import {
  ListItemSecondaryAction as MaterialListItemSecondaryAction,
  ListItemSecondaryActionProps as MaterialListItemSecondaryActionProps
} from '@material-ui/core';

import React from 'react';

export interface ListItemSecondaryActionProps
  extends MaterialListItemSecondaryActionProps {}

export const ListItemSecondaryAction: React.FC<ListItemSecondaryActionProps> = (
  props
) => <MaterialListItemSecondaryAction {...props} />;
