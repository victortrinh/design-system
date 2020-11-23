import React from 'react';
import {
  Hidden as Material,
  HiddenProps as MaterialProps
} from '@material-ui/core';

export interface HiddenProps extends MaterialProps {
  lgDown?: boolean;
  lgUp?: boolean;
  mdDown?: boolean;
  mdUp?: boolean;
  only?:
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | Array<'xs' | 'sm' | 'md' | 'lg' | 'xl'>;
  smDown?: boolean;
  smUp?: boolean;
  xlDown?: boolean;
  xlUp?: boolean;
  xsDown?: boolean;
  xsUp?: boolean;
}

export const Hidden: React.FC<HiddenProps> = ({ ...props }) => (
  <Material {...props} />
);
