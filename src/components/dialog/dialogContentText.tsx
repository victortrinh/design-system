import {
  DialogContentText as Material,
  DialogContentTextProps as MaterialProps
} from '@material-ui/core';

import React from 'react';

export interface DialogContentTextProps extends MaterialProps {}

export const DialogContentText: React.FC<DialogContentTextProps> = ({
  ...props
}) => <Material {...props} />;
