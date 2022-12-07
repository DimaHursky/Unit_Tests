import React from 'react';

export interface ESRadioButtonProps {
  label: React.ReactNode;
  checked?: boolean;
  helpText?: React.ReactNode;
  disabled?: boolean;
  id?: string;
  name?: string;
  value?: string;
  onChange?(newValue: boolean): void;
  onFocus?(): void;
  onBlur?(): void;
}
