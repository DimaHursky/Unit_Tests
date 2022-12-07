import React, { useEffect, useRef } from 'react';
import { useThemeProps } from '@mui/material';
import { SecondaryActionProps } from './SecondaryAction.types';
import { ESButton } from '../ESButton';

const SecondaryAction = (inProps: SecondaryActionProps) => {
  const props = useThemeProps({ props: inProps, name: 'ESSecondaryAction' });
  const secondaryActionsRef = useRef<HTMLButtonElement>(null);

  const { children, onAction, getOffsetWidth, ...rest } = props;

  useEffect(() => {
    if (!getOffsetWidth || !secondaryActionsRef.current) return;

    getOffsetWidth(secondaryActionsRef.current?.offsetWidth);
  }, [getOffsetWidth]);

  return (
    <ESButton
      variant="text"
      color="secondary"
      ref={secondaryActionsRef}
      onClick={onAction}
      {...rest}
    >
      {children}
    </ESButton>
  );
};

export default SecondaryAction;
