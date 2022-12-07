import React from 'react';
import { SvgIcon, useThemeProps } from '@mui/material';
import { ESSvgIconProps } from './ESSvgIcon.types';

const ESSvgIcon = (inProps: ESSvgIconProps) => {
  const props = useThemeProps({ props: inProps, name: 'ESSvgIcon' });

  const { fontSize = 'small', viewBox = '0 0 20 20', ...rest } = props;

  return <SvgIcon {...rest} fontSize={fontSize} viewBox={viewBox} />;
};

export default ESSvgIcon;
