import React from 'react';
import { useThemeProps } from '@mui/material';
import { Choice, ESChoiceListProps } from './ESChoiceList.types';
import ESChoiceListStyled, {
  ChoiceChildren,
  ChoiceItemStyled,
  ChoiceListError,
  ChoiceListTextStyled,
  ChoiceListTitleStyled,
  ChoicesStyled,
} from './ESChoiceList.styled';
import { ESRadioButton } from '../ESRadioButton';
import { ESTextFieldErrorLabel } from '../ESTextFieldErrorLabel';
import { ESCheckbox } from '../ESCheckbox';

const updateSelectedChoices = (
  { value }: Choice,
  checked: boolean,
  selected: string[],
  allowMultiple: boolean,
) => {
  if (checked) {
    return allowMultiple ? [...selected, value] : [value];
  }

  return selected.filter((selectedChoice: string) => selectedChoice !== value);
};

const isChecked = (item: string, selectedItems: string[]) =>
  selectedItems.includes(item);

const ESChoiceList = (inProps: ESChoiceListProps) => {
  const props = useThemeProps({ props: inProps, name: 'ESChoiceList' });

  const {
    title,
    choices = [],
    selected = [],
    onChange,
    disabled,
    error,
    name,
    allowMultiple = false,
  } = props;

  const ControlComponent: any = allowMultiple ? ESCheckbox : ESRadioButton;

  const choiceMarkup = choices.map((choice: Choice) => {
    const isSelected = isChecked(choice.value, selected);

    const renderedChildren = choice.renderChildren
      ? choice.renderChildren(isSelected)
      : null;

    const children = renderedChildren ? (
      <ChoiceChildren>{renderedChildren}</ChoiceChildren>
    ) : null;

    const handleChange = (checked: boolean) => {
      if (typeof onChange === 'function') {
        onChange(
          updateSelectedChoices(choice, checked, selected, allowMultiple),
        );
      }
    };

    return (
      <ChoiceItemStyled key={choice.value}>
        <ControlComponent
          disabled={disabled}
          name={name}
          {...choice}
          onChange={handleChange}
          checked={isChecked(choice.value, selected)}
        />
        {children}
      </ChoiceItemStyled>
    );
  });

  return (
    <ESChoiceListStyled>
      {title && (
        <ChoiceListTitleStyled>
          <ChoiceListTextStyled>{title}</ChoiceListTextStyled>
        </ChoiceListTitleStyled>
      )}
      <ChoicesStyled>{choiceMarkup}</ChoicesStyled>
      {error && (
        <ChoiceListError>
          <ESTextFieldErrorLabel error={error} />
        </ChoiceListError>
      )}
    </ESChoiceListStyled>
  );
};

export default ESChoiceList;
