import {
  Select as Material,
  SelectProps as MaterialProps
} from '@material-ui/core';

import React from 'react';

export interface SelectProps extends MaterialProps {}

export const Select: React.FC<SelectProps> = ({ ...props }) => (
  <Material {...props} />
);
