import React, { ForwardedRef } from 'react';
import { useThemeProps } from '@mui/material';
import { ESCardContentProps } from './ESCardContent.types';
import ESCardContentStyled from './ESCardContent.styled';

const ESCardContent = React.forwardRef(
  (inProps: ESCardContentProps, ref: ForwardedRef<HTMLDivElement>) => {
    const props = useThemeProps({ props: inProps, name: 'MuiCardContent' });

    return <ESCardContentStyled ref={ref} {...props} />;
  },
);

export default ESCardContent;
