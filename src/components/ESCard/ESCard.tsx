import React, { ForwardedRef } from 'react';
import { Card, useThemeProps } from '@mui/material';
import { ESCardProps } from './ESCard.types';

const ESCard = React.forwardRef(
  (inProps: ESCardProps, ref: ForwardedRef<HTMLDivElement>) => {
    const props = useThemeProps({ props: inProps, name: 'MuiCard' });

    return <Card ref={ref} {...props} />;
  },
);

export default ESCard;
