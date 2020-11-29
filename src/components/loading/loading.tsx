import { Backdrop, BackdropProps, CircularProgress } from '@material-ui/core';

import React from 'react';

export interface LoadingProps extends BackdropProps {
  open: boolean;
}

export const Loading: React.FC<LoadingProps> = (props) => (
  <Backdrop {...props} style={{ zIndex: 9999 }}>
    <CircularProgress color='inherit' />
  </Backdrop>
);
