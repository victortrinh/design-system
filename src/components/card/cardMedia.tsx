import {
  CardMedia as Material,
  CardMediaProps as MaterialProps
} from '@material-ui/core';

import React from 'react';

export interface CardMediaProps extends MaterialProps {}

export const CardMedia: React.FC<CardMediaProps> = ({ ...props }) => (
  <Material {...props} />
);
