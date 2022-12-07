import React from 'react';
import { Box, useThemeProps } from '@mui/material';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import clsx from 'clsx';
import { ESCheckboxProps } from './ESCheckbox.types';
import ESCheckboxStyled, {
  CheckboxBackdrop,
  CheckboxControl,
  CheckboxDescription,
  CheckboxIcon,
  CheckboxInput,
  CheckboxStyled,
} from './ESCheckbox.styled';
import { IconWrapper } from '../ESTextField/ESTextField.styled';
import { ESTextFieldLabel } from '../ESTextFieldLabel';
import { ESTextFieldErrorLabel } from '../ESTextFieldErrorLabel';
import { ESTextFieldHelpText } from '../ESTextFieldHelpText';

const ESCheckbox = (inProps: ESCheckboxProps) => {
  const props = useThemeProps({ props: inProps, name: 'ESCheckbox' });

  const { label, onChange, helpText, error, ...other } = props;

  const labelClasses = clsx({ disabled: other.disabled });
  const checkboxClasses = clsx('backdrop', [{ error: Boolean(error) }]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof onChange === 'function') {
      onChange(e.target.checked);
    }
  };

  return (
    <Box>
      <ESCheckboxStyled>
        <CheckboxControl>
          <CheckboxStyled>
            <CheckboxInput {...other} onChange={handleChange} />
            <CheckboxBackdrop className={checkboxClasses} />
            <CheckboxIcon className="checkboxIcon">
              <IconWrapper>
                <CheckRoundedIcon />
              </IconWrapper>
            </CheckboxIcon>
          </CheckboxStyled>
        </CheckboxControl>
        <ESTextFieldLabel classes={labelClasses}>{label}</ESTextFieldLabel>
      </ESCheckboxStyled>
      {(typeof error === 'string' || helpText) && (
        <CheckboxDescription>
          {typeof error === 'string' && <ESTextFieldErrorLabel error={error} />}
          {helpText && (
            <ESTextFieldHelpText className="checkbox">
              {helpText}
            </ESTextFieldHelpText>
          )}
        </CheckboxDescription>
      )}
    </Box>
  );
};

export default ESCheckbox;
