import { BaseTextFieldProps, TextField } from '@material-ui/core';
import React, { ChangeEvent } from 'react';

export interface InputProps extends BaseTextFieldProps {
  variant?: 'outlined' | 'filled' | 'standard';
  label?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({ ...props }) => (
  <TextField {...props} />
);

Input.defaultProps = {
  variant: 'outlined'
};
