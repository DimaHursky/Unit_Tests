import React, { ForwardedRef } from 'react';
import { useThemeProps } from '@mui/material';
import { ESButtonProps } from './ESButton.types';
import ESButtonStyled from './ESButton.styled';

const ESButton = React.forwardRef(
  (inProps: ESButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const props = useThemeProps({ props: inProps, name: 'ESButton' });

    const {
      children,
      color = 'info',
      variant = 'contained',
      size = 'medium',
      disableRipple = true,
      ...rest
    } = props;

    return (
      <ESButtonStyled
        ref={ref}
        color={color}
        variant={variant}
        size={size}
        disableRipple={disableRipple}
        {...rest}
      >
        {children}
      </ESButtonStyled>
    );
  },
);

export default ESButton;
