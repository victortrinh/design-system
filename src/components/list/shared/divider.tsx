import {
  Divider as MaterialDivider,
  DividerProps as MaterialDividerProps
} from '@material-ui/core';

import React from 'react';

export interface DividerProps extends MaterialDividerProps {}

export const Divider: React.FC<DividerProps> = (props) => (
  <MaterialDivider {...props} />
);
