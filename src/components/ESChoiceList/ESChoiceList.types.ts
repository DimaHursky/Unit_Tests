import React from 'react';

export interface ESChoiceListProps {
  title?: string;
  choices?: Choice[];
  selected?: string[];
  onChange?: (selected: string[]) => void;
  name?: string;
  allowMultiple?: boolean;
  error?: string;
  disabled?: boolean;
}

export interface Choice {
  value: string;
  label: string;
  id?: string;
  disabled?: boolean;
  helpText?: React.ReactNode;
  describedByError?: boolean;
  renderChildren?: (isSelected: boolean) => React.ReactNode | false;
}
