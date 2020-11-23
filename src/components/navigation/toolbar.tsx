import React from 'react';
import {
  Toolbar as Material,
  ToolbarProps as MaterialProps
} from '@material-ui/core';

export interface ToolbarProps extends MaterialProps {}

export const Toolbar: React.FC<ToolbarProps> = ({ ...props }) => (
  <Material {...props} />
);
