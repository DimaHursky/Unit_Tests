import React, { ForwardedRef, useCallback } from 'react';
import { Box, useThemeProps } from '@mui/material';
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import clsx from 'clsx';
import { ESTextFieldProps, LabelProps } from './ESTextField.types';
import ESTextFieldStyled, {
  CharacterCount,
  ClearButton,
  Connected,
  ConnectedItem,
  IconWrapper,
  Prefix,
  SpinnerIcon,
  Suffix,
  TextFieldBackdrop,
  TextFieldLabelWrapper,
  TextFieldSegment,
  TextFieldSpinner,
  TextFieldWrapper,
} from './ESTextField.styled';
import { ESButton } from '../ESButton';
import { ESTextFieldLabel } from '../ESTextFieldLabel';
import { ESTextFieldHelpText } from '../ESTextFieldHelpText';
import ESTextFieldErrorLabel from '../ESTextFieldErrorLabel/ESTextFieldErrorLabel';

const Spinner = ({ onChange }: { onChange: (step: number) => void }) => (
  <TextFieldSpinner>
    <TextFieldSegment role="button" onClick={() => onChange(1)}>
      <SpinnerIcon>
        <IconWrapper>
          <ArrowDropUpRoundedIcon />
        </IconWrapper>
      </SpinnerIcon>
    </TextFieldSegment>
    <TextFieldSegment role="button" onClick={() => onChange(-1)}>
      <SpinnerIcon>
        <IconWrapper>
          <ArrowDropDownRoundedIcon />
        </IconWrapper>
      </SpinnerIcon>
    </TextFieldSegment>
  </TextFieldSpinner>
);

const Label = ({ label, labelAction, classes }: LabelProps) => (
  <TextFieldLabelWrapper>
    <Box>
      <ESTextFieldLabel classes={classes}>{label}</ESTextFieldLabel>
    </Box>
    {labelAction && (
      <Box>
        <ESButton
          sx={{ paddingRight: '0' }}
          variant="text"
          href={labelAction.url}
          onClick={labelAction.onAction}
          onMouseEnter={labelAction.onMouseEnter}
          onTouchStart={labelAction.onTouchStart}
        >
          {labelAction.content}
        </ESButton>
      </Box>
    )}
  </TextFieldLabelWrapper>
);

const ESTextField = React.forwardRef(
  (inProps: ESTextFieldProps, ref: ForwardedRef<HTMLDivElement>) => {
    const props = useThemeProps({ props: inProps, name: 'ESESTextField' });

    const {
      label,
      type,
      value,
      placeholder,
      helpText,
      disabled,
      startAdornment,
      endAdornment,
      readOnly,
      autoFocus,
      autoComplete,
      multiline,
      rows,
      maxRows,
      minRows,
      error,
      onChange,
      required,
      labelAction,
      clearButton = false,
      onClearButtonClick,
      onFocus,
      onBlur,
      connectedRight,
      connectedLeft,
      id,
      name,
      showCharacterCount = false,
      spellCheck,
      pattern,
      min,
      max,
      step = 1,
      maxLength,
    } = props;

    const normalizedMax = max || Infinity;
    const normalizedMin = min || -Infinity;

    const textFieldClasses = clsx({ suffixed: !!endAdornment, multiline });
    const labelClasses = clsx({ required });

    const characterCount =
      showCharacterCount && typeof value === 'string' ? value.length : 0;

    const characterCountLabel = !maxLength
      ? characterCount
      : `${characterCount}/${maxLength}`;

    const handleNumberChange = useCallback(
      (steps: number) => {
        if (typeof onChange !== 'function') {
          return;
        }

        const numericValue = Number(value);

        if (Number.isNaN(numericValue)) {
          return;
        }

        const newValue = Math.min(
          Number(normalizedMax),
          Math.max(numericValue + steps * step, Number(normalizedMin)),
        );
        onChange(String(newValue));
      },
      [onChange, value, step, normalizedMax, normalizedMin],
    );

    const handleChange = (
      e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    ) => {
      if (typeof onChange === 'function') {
        onChange(e.target.value);
      }
    };

    const clearBtn = (
      <ClearButton variant="text" onClick={onClearButtonClick}>
        <CancelRoundedIcon fontSize="small" />
      </ClearButton>
    );

    const textFieldMarkup = (
      <TextFieldWrapper className={multiline ? 'multiline' : ''}>
        {startAdornment && <Prefix className="prefix">{startAdornment}</Prefix>}
        <ESTextFieldStyled
          className={textFieldClasses}
          type={type}
          value={value}
          error={Boolean(error)}
          onChange={handleChange}
          inputProps={{ pattern, min, max, maxLength }}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          autoFocus={autoFocus}
          autoComplete={autoComplete}
          multiline={multiline}
          rows={rows}
          maxRows={maxRows}
          minRows={minRows}
          required={required}
          onFocus={onFocus}
          onBlur={onBlur}
          id={id}
          name={name}
          spellCheck={spellCheck}
        />
        {endAdornment && <Suffix className="suffix">{endAdornment}</Suffix>}
        {showCharacterCount && (
          <CharacterCount className={multiline ? 'alignBottom' : ''}>
            {characterCountLabel}
          </CharacterCount>
        )}
        {clearButton && clearBtn}
        {type === 'number' && <Spinner onChange={handleNumberChange} />}
        <TextFieldBackdrop className="backdrop" />
      </TextFieldWrapper>
    );

    return (
      <Box ref={ref}>
        {label && (
          <Label
            label={label}
            labelAction={labelAction}
            classes={labelClasses}
          />
        )}

        <Connected>
          {connectedLeft && <ConnectedItem>{connectedLeft}</ConnectedItem>}
          <ConnectedItem className="primary">{textFieldMarkup}</ConnectedItem>
          {connectedRight && <ConnectedItem>{connectedRight}</ConnectedItem>}
        </Connected>

        {typeof error === 'string' && <ESTextFieldErrorLabel error={error} />}
        {helpText && (
          <ESTextFieldHelpText className="textField">
            {helpText}
          </ESTextFieldHelpText>
        )}
      </Box>
    );
  },
);

export default ESTextField;
