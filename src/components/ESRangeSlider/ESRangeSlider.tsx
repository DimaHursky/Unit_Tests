import React from 'react';
import { useThemeProps } from '@mui/material';
import clsx from 'clsx';
import { ESRangeSliderProps } from './ESRangeSlider.types';
import ESRangeSliderStyled, {
  LabelWrapper,
  RangeSliderPrefix,
  RangeSliderSuffix,
  RangeSliderWrapper,
  SliderStyled,
} from './ESRangeSlider.styled';
import { ESTextFieldLabel } from '../ESTextFieldLabel';
import { ESTextFieldErrorLabel } from '../ESTextFieldErrorLabel';

const ESRangeSlider = (inProps: ESRangeSliderProps) => {
  const props = useThemeProps({ props: inProps, name: 'ESESRangeSlider' });

  const {
    label,
    output = false,
    value,
    error,
    prefix,
    suffix,
    onChange,
    ...other
  } = props;

  const valueLabelDisplay = output ? 'on' : 'off';

  const handleChange = (e: Event, newValue: number | number[]) => {
    if (typeof onChange === 'function') {
      onChange(newValue);
    }
  };

  return (
    <ESRangeSliderStyled>
      {label && (
        <LabelWrapper>
          <ESTextFieldLabel>{label}</ESTextFieldLabel>
        </LabelWrapper>
      )}
      <RangeSliderWrapper>
        {prefix && <RangeSliderPrefix>{prefix}</RangeSliderPrefix>}
        <SliderStyled
          className={clsx({ error: Boolean(error) })}
          valueLabelDisplay={valueLabelDisplay}
          value={value}
          onChange={handleChange}
          {...other}
        />
        {suffix && <RangeSliderSuffix>{suffix}</RangeSliderSuffix>}
      </RangeSliderWrapper>

      {error && <ESTextFieldErrorLabel error={error} />}
    </ESRangeSliderStyled>
  );
};

export default ESRangeSlider;
