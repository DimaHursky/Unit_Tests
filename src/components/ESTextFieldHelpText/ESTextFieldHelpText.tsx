import React from 'react';
import { useThemeProps } from '@mui/material';
import { ESTextFieldHelpTextProps } from './ESTextFieldHelpText.types';
import ESTextFieldHelpTextStyled from './ESTextFieldHelpText.styled';

const ESTextFieldHelpText = (inProps: ESTextFieldHelpTextProps) => {
  const props = useThemeProps({
    props: inProps,
    name: 'ESESTextFieldHelpText',
  });

  const { className, children } = props;

  return (
    <ESTextFieldHelpTextStyled className={className}>
      {children}
    </ESTextFieldHelpTextStyled>
  );
};

export default ESTextFieldHelpText;
