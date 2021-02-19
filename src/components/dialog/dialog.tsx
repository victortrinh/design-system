import {
  Dialog as Material,
  DialogProps as MaterialProps
} from '@material-ui/core';

import React from 'react';

export interface DialogProps extends MaterialProps {}

export const Dialog: React.FC<DialogProps> = ({ ...props }) => (
  <Material {...props} />
);
