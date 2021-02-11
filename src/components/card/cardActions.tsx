import {
  CardActions as Material,
  CardActionsProps as MaterialProps
} from '@material-ui/core';

import React from 'react';

export interface CardActionsProps extends MaterialProps {}

export const CardActions: React.FC<CardActionsProps> = ({ ...props }) => (
  <Material {...props} />
);
