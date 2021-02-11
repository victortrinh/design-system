import {
  SwipeableDrawer as Material,
  SwipeableDrawerProps as MaterialProps
} from '@material-ui/core';

import React from 'react';

export interface SwipeableDrawerProps extends MaterialProps {}

export const SwipeableDrawer: React.FC<SwipeableDrawerProps> = ({
  ...props
}) => <Material {...props} />;
