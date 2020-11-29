import {
  ListSubheader as MaterialListSubHeader,
  ListSubheaderProps as MaterialListSubheaderProps
} from '@material-ui/core';

import React from 'react';

export interface ListSubheaderProps extends MaterialListSubheaderProps {}

export const ListSubheader: React.FC<ListSubheaderProps> = (props) => (
  <MaterialListSubHeader {...props} />
);
