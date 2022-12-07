import React from 'react';
import { useThemeProps } from '@mui/material';
import { ESTextFieldLabelProps } from './ESTextFieldLabel.types';
import ESTextFieldLabelStyled from './ESTextFieldLabel.styled';

const ESTextFieldLabel = (inProps: ESTextFieldLabelProps) => {
  const props = useThemeProps({ props: inProps, name: 'ESESTextFieldLabel' });

  const { children, classes } = props;

  return (
    <ESTextFieldLabelStyled className={classes}>
      {children}
    </ESTextFieldLabelStyled>
  );
};

export default ESTextFieldLabel;
