import {
  Snackbar as Material,
  SnackbarProps as MaterialProps
} from '@material-ui/core';

import React from 'react';

export interface SnackbarProps extends MaterialProps {}

export const Snackbar: React.FC<SnackbarProps> = (props) => (
  <Material {...props} />
);
