import React from 'react';
import {
  GridList as MaterialGridList,
  GridListProps as MaterialGridListProps
} from '@material-ui/core';

export interface GridListProps extends MaterialGridListProps {}

export const GridList: React.FC<GridListProps> = ({ ...props }) => (
  <MaterialGridList {...props} />
);
