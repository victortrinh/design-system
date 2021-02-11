import {
  CardActionArea as Material,
  CardActionAreaProps as MaterialProps
} from '@material-ui/core';

import React from 'react';

export interface CardActionAreaProps extends MaterialProps {}

export const CardActionArea: React.FC<CardActionAreaProps> = ({ ...props }) => (
  <Material {...props} />
);
