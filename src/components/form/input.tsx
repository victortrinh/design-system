import React from 'react';
import { TextField, BaseTextFieldProps } from '@material-ui/core';

export interface InputProps extends BaseTextFieldProps {
  variant: 'outlined' | 'filled' | 'standard';
  label?: string;
}

export const Input: React.FC<InputProps> = ({ ...props }) => (
  <TextField {...props} />
);

Input.defaultProps = {
  variant: 'outlined'
};
