import React from 'react';
import {
  Grid as MaterialGrid,
  GridProps as MaterialGridProps
} from '@material-ui/core';

export interface GridProps extends MaterialGridProps {}

export const Grid: React.FC<GridProps> = ({ ...props }) => (
  <MaterialGrid {...props} />
);
