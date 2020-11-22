import { styled } from '@material-ui/core';
import MaterialButton, {
  ButtonProps as MaterialButtonProps
} from '@material-ui/core/Button/Button';
import React from 'react';

export interface ButtonProps extends MaterialButtonProps {
  /**
   * The shape of the button.
   */
  shape?: 'default' | 'pill' | 'square';

  /**
   * If `true`, the capitalization will be disabled.
   */
  disableCapitalization?: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => (
  <StyledButton {...props} />
);

const StyledButton = styled(MaterialButton)((props: ButtonProps) => ({
  borderRadius:
    props.shape === 'square'
      ? '0px'
      : props.shape === 'pill'
      ? '50px'
      : undefined,
  textTransform: props.disableCapitalization ? 'inherit' : undefined
}));

Button.defaultProps = {
  color: 'primary',
  shape: 'default',
  size: 'medium',
  variant: 'contained'
};
