import React from 'react';
import {
  Container as MaterialContainer,
  ContainerProps as MaterialContainerProps
} from '@material-ui/core';

export interface ContainerProps extends MaterialContainerProps {}

export const Container: React.FC<ContainerProps> = ({ children, ...props }) => (
  <MaterialContainer {...props}>{children}</MaterialContainer>
);
