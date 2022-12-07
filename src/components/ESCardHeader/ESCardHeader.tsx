import React, { ForwardedRef } from 'react';
import { useThemeProps } from '@mui/material';
import { ESCardHeaderProps } from './ESCardHeader.types';
import ESCardHeaderStyled from './ESCardHeader.styled';

const ESCardHeader = React.forwardRef(
  (inProps: ESCardHeaderProps, ref: ForwardedRef<HTMLDivElement>) => {
    const props = useThemeProps({ props: inProps, name: 'MuiCardHeader' });

    return <ESCardHeaderStyled ref={ref} {...props} />;
  },
);

export default ESCardHeader;
