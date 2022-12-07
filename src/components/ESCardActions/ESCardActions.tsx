import React, { ForwardedRef } from 'react';
import { useThemeProps } from '@mui/material';
import { ESCardActionsProps } from './ESCardActions.types';
import ESCardActionsStyled from './ESCardActions.styled';

const ESCardActions = React.forwardRef(
  (inProps: ESCardActionsProps, ref: ForwardedRef<HTMLDivElement>) => {
    const props = useThemeProps({ props: inProps, name: 'MuiCardActions' });

    return <ESCardActionsStyled ref={ref} {...props} />;
  },
);

export default ESCardActions;
