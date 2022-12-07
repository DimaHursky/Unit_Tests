import React, { ForwardedRef } from 'react';
import { useThemeProps } from '@mui/material';
import { PrimaryActionProps } from './PrimaryAction.types';
import PrimaryActionStyled from './PrimaryAction.styled';
import { ESButton } from '../ESButton';

const PrimaryAction = React.forwardRef(
  (inProps: PrimaryActionProps, ref: ForwardedRef<HTMLDivElement>) => {
    const props = useThemeProps({ props: inProps, name: 'ESPrimaryAction' });

    const { content, onAction, color, variant, ...other } = props;

    return (
      <PrimaryActionStyled ref={ref} data-testid="primary-action">
        <ESButton onClick={onAction} color={color || 'primary'} {...other}>
          {content}
        </ESButton>
      </PrimaryActionStyled>
    );
  },
);

export default PrimaryAction;
