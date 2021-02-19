import {
  DialogTitle as Material,
  DialogTitleProps as MaterialProps
} from '@material-ui/core';

import React from 'react';

export interface DialogTitleProps extends MaterialProps {}

export const DialogTitle: React.FC<DialogTitleProps> = ({ ...props }) => (
  <Material {...props} />
);
