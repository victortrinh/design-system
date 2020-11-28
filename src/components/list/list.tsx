import {
  List as MaterialList,
  ListProps as MaterialListProps
} from '@material-ui/core';

import React from 'react';

export interface ListProps extends MaterialListProps {}

export const List: React.FC<ListProps> = (props) => <MaterialList {...props} />;
