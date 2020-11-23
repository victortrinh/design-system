import React from 'react';
import {
  Box as MaterialBox,
  BoxProps as MaterialBoxProps
} from '@material-ui/core';

export interface BoxProps extends MaterialBoxProps {}

export const Box: React.FC<BoxProps> = ({ ...props }) => (
  <MaterialBox {...props} />
);
