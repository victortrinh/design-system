import {
  Collapse as MaterialCollapse,
  CollapseProps as MaterialCollapseProps
} from '@material-ui/core';

import React from 'react';
import { TransitionProps } from '@material-ui/core/transitions/transition';

export interface CollapseProps extends MaterialCollapseProps {
  in?: boolean;
  timeout?: TransitionProps['timeout'] | 'auto';
}

export const Collapse: React.FC<CollapseProps> = (props) => (
  <MaterialCollapse {...props} />
);
