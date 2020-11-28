import {
  Switch as MaterialSwitch,
  SwitchProps as MaterialSwitchProps
} from '@material-ui/core';

import React from 'react';

export interface SwitchProps extends MaterialSwitchProps {}

export const Switch: React.FC<SwitchProps> = (props) => (
  <MaterialSwitch {...props} />
);
