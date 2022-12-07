import React, { ForwardedRef } from 'react';
import { useThemeProps } from '@mui/material';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import { ESTextFieldErrorLabelProps } from './ESTextFieldErrorLabel.types';
import ESTextFieldErrorLabelStyled, {
  ErrorIcon,
  Icon,
  TextFieldError,
} from './ESTextFieldErrorLabel.styled';

const ESTextFieldErrorLabel = React.forwardRef(
  (inProps: ESTextFieldErrorLabelProps, ref: ForwardedRef<HTMLDivElement>) => {
    const props = useThemeProps({
      props: inProps,
      name: 'ESESTextFieldErrorLabel',
    });

    const { error } = props;

    return (
      <ESTextFieldErrorLabelStyled ref={ref}>
        <TextFieldError>
          <ErrorIcon>
            <Icon>
              <ErrorRoundedIcon />
            </Icon>
          </ErrorIcon>
          {error}
        </TextFieldError>
      </ESTextFieldErrorLabelStyled>
    );
  },
);

export default ESTextFieldErrorLabel;
