import React from 'react';
import { useThemeProps } from '@mui/material';
import { VisuallyHiddenProps } from './VisuallyHidden.types';
import VisuallyHiddenStyled from './VisuallyHidden.styled';

const VisuallyHidden = (inProps: VisuallyHiddenProps) => {
  const props = useThemeProps({ props: inProps, name: 'VisuallyHidden' });

  return <VisuallyHiddenStyled {...props} />;
};

export default VisuallyHidden;
