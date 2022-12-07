import React, { ForwardedRef, ReactNode, useMemo } from 'react';
import { Box, useThemeProps } from '@mui/material';
import {
  ESSelectProps,
  IHideableStrictOption,
  IStrictGroup,
  SelectLabelProps,
} from './ESSelect.types';
import ESSelectStyled, {
  InlineLabelStyled,
  LabelTypographyStyled,
  LabelWrapperStyled,
  ListSubheaderStyled,
  MenuItemStyled,
  PrefixStyled,
  SelectIconStyled,
  SelectInputStyled,
} from './ESSelect.styled';
import { getSelectedOption, isGroup, normalizeOption } from './helpers';
import ESTextFieldLabel from '../ESTextFieldLabel/ESTextFieldLabel';
import { ESButton } from '../ESButton';
import { ESTextFieldHelpText } from '../ESTextFieldHelpText';
import { ESTextFieldErrorLabel } from '../ESTextFieldErrorLabel';
import { VisuallyHidden } from '../VisuallyHidden';
import { SelectMinorIcon } from '../../icons';

const PLACEHOLDER_VALUE = '';

const renderSingleOption = (option: IHideableStrictOption): ReactNode => {
  const { value, label, prefix, ...rest } = option;
  return (
    <MenuItemStyled
      data-testid={`options-item-${value}`}
      value={value}
      key={value}
      {...rest}
    >
      {label}
    </MenuItemStyled>
  );
};

const renderOptions = (
  optionOrGroup: IHideableStrictOption | IStrictGroup,
): ReactNode => {
  if (isGroup(optionOrGroup)) {
    const { title, options } = optionOrGroup;

    return [
      <ListSubheaderStyled data-testid={`options-title-${title}`} key={title}>
        {title}
      </ListSubheaderStyled>,
      options.map(renderSingleOption),
    ];
  }
  return renderSingleOption(optionOrGroup);
};

const SelectLabel = ({
  label,
  labelAction,
  classes,
  labelHidden,
}: SelectLabelProps) => {
  const actionMarkup = labelAction && (
    <Box sx={{ flex: '0 0 auto' }}>
      <ESButton
        sx={{ paddingRight: '0.5rem' }}
        variant="text"
        href={labelAction.url}
        onClick={labelAction.onAction}
        onMouseEnter={labelAction.onMouseEnter}
        onTouchStart={labelAction.onTouchStart}
        data-testid="action-btn"
      >
        {labelAction.content}
      </ESButton>
    </Box>
  );

  const labelMarkup = label && (
    <LabelWrapperStyled>
      <ESTextFieldLabel classes={classes}>{label}</ESTextFieldLabel>
      {actionMarkup}
    </LabelWrapperStyled>
  );

  return labelHidden ? (
    <VisuallyHidden>{labelMarkup}</VisuallyHidden>
  ) : (
    <Box>{labelMarkup}</Box>
  );
};

const IconComponent = () => (
  <SelectIconStyled>
    <SelectMinorIcon />
  </SelectIconStyled>
);

const ESSelect = React.forwardRef(
  (inProps: ESSelectProps, ref: ForwardedRef<HTMLSelectElement>) => {
    const props = useThemeProps({ props: inProps, name: 'MuiSelect' });

    const {
      value = PLACEHOLDER_VALUE,
      onChange,
      label,
      displayEmpty,
      options: optionsProp,
      placeholder,
      labelAction,
      error,
      helpText,
      labelHidden: labelHiddenProp,
      labelInline,
      disabled,
      ...other
    } = props;

    const isLabelHidden = labelInline ? true : labelHiddenProp;

    const options = optionsProp || [];
    let normalizedOptions = options.map(normalizeOption);

    if (placeholder) {
      normalizedOptions = [
        {
          label: placeholder,
          value: '',
          disabled: true,
        },
        ...normalizedOptions,
      ];
    }

    const inlineLabelMarkup = useMemo(
      () =>
        labelInline && (
          <InlineLabelStyled data-testid="inline-label">
            <LabelTypographyStyled>{label}</LabelTypographyStyled>
          </InlineLabelStyled>
        ),
      [label, labelInline],
    );

    const selectedOption = useMemo(
      () => getSelectedOption(normalizedOptions, value),
      [normalizedOptions, value],
    );

    const prefixMarkup = useMemo(
      () =>
        selectedOption.prefix && (
          <PrefixStyled data-testid="prefix">
            {selectedOption.prefix}
          </PrefixStyled>
        ),
      [selectedOption.prefix],
    );

    const renderItem = useMemo(
      () => (
        <MenuItemStyled
          value={selectedOption.value}
          key={selectedOption.value}
          aria-hidden
          aria-disabled={disabled}
          data-testid="selected-item"
        >
          {inlineLabelMarkup}
          {prefixMarkup}
          {selectedOption.label}
        </MenuItemStyled>
      ),
      [
        disabled,
        inlineLabelMarkup,
        prefixMarkup,
        selectedOption.label,
        selectedOption.value,
      ],
    );

    const optionsMarkup = normalizedOptions.map(renderOptions);

    return (
      <>
        <SelectLabel
          label={label}
          labelAction={labelAction}
          labelHidden={isLabelHidden}
        />
        <ESSelectStyled
          {...other}
          disabled={disabled}
          ref={ref}
          value={value}
          onChange={onChange}
          IconComponent={IconComponent}
          displayEmpty={!value}
          renderValue={() => renderItem}
          error={!!error}
          input={<SelectInputStyled />}
          data-testid="select"
        >
          {optionsMarkup}
        </ESSelectStyled>

        {typeof error === 'string' && <ESTextFieldErrorLabel error={error} />}
        {helpText && (
          <ESTextFieldHelpText className="textField">
            {helpText}
          </ESTextFieldHelpText>
        )}
      </>
    );
  },
);

export default ESSelect;
