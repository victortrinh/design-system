import {
  Card as Material,
  CardProps as MaterialProps
} from '@material-ui/core';

import React from 'react';

export interface CardProps extends MaterialProps {}

export const Card: React.FC<CardProps> = ({ ...props }) => (
  <Material {...props} />
);
