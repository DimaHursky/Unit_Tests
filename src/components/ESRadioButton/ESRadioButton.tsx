import React from 'react';
import { Box, useThemeProps } from '@mui/material';
import clsx from 'clsx';
import { ESRadioButtonProps } from './ESRadioButton.types';
import ESRadioButtonStyled, {
  ChoiceBtnStyled,
  ChoiceControlStyled,
  ChoiceDescriptionStyled,
  ChoiceLabelStyled,
  ChoiceListTextStyled,
  RadioButtonBackdropStyled,
  RadioStyled,
} from './ESRadioButton.styled';
import { ESTextFieldHelpText } from '../ESTextFieldHelpText';

const ESRadioButton = (inProps: ESRadioButtonProps) => {
  const props = useThemeProps({ props: inProps, name: 'ESRadioButton' });

  const { label, checked, helpText, disabled, value, onChange, ...other } =
    props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof onChange === 'function') {
      onChange(e.target.checked);
    }
  };

  const radioBtnMarkup = (
    <ChoiceBtnStyled>
      <ChoiceControlStyled>
        <RadioStyled>
          <ESRadioButtonStyled
            value={value}
            disabled={disabled}
            onChange={handleChange}
            type="radio"
            className={clsx({
              'Mui-checked': checked,
            })}
            {...other}
            componentsProps={{ input: { checked } }}
          />
          <RadioButtonBackdropStyled className="backdrop" />
        </RadioStyled>
      </ChoiceControlStyled>
      <ChoiceLabelStyled className={clsx({ disabled })}>
        <ChoiceListTextStyled>{label}</ChoiceListTextStyled>
      </ChoiceLabelStyled>
    </ChoiceBtnStyled>
  );

  const descriptionMarkup = helpText ? (
    <ChoiceDescriptionStyled>
      <ESTextFieldHelpText className="checkbox">{helpText}</ESTextFieldHelpText>
    </ChoiceDescriptionStyled>
  ) : null;

  return descriptionMarkup ? (
    <Box>
      {radioBtnMarkup}
      {descriptionMarkup}
    </Box>
  ) : (
    radioBtnMarkup
  );
};

export default ESRadioButton;
