import {
  CardContent as Material,
  CardContentProps as MaterialProps
} from '@material-ui/core';

import React from 'react';

export interface CardContentProps extends MaterialProps {}

export const CardContent: React.FC<CardContentProps> = ({ ...props }) => (
  <Material {...props} />
);
