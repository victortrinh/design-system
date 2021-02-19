import {
  DialogContent as Material,
  DialogContentProps as MaterialProps
} from '@material-ui/core';

import React from 'react';

export interface DialogContentProps extends MaterialProps {}

export const DialogContent: React.FC<DialogContentProps> = ({ ...props }) => (
  <Material {...props} />
);
