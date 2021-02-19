import {
  DialogActions as Material,
  DialogActionsProps as MaterialProps
} from '@material-ui/core';

import React from 'react';

export interface DialogActionsProps extends MaterialProps {}

export const DialogActions: React.FC<DialogActionsProps> = ({ ...props }) => (
  <Material {...props} />
);
