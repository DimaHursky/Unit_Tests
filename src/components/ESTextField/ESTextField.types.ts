import { InputUnstyledProps } from '@mui/base';
import React from 'react';

export type ESTextFieldProps = Omit<
  InputUnstyledProps,
  'error' | 'onChange'
> & {
  label?: string;
  helpText?: string;
  focused?: boolean;
  min?: string | number;
  max?: string | number;
  error?: string | boolean;
  labelAction?: LabelAction;
  clearButton?: boolean;
  onClearButtonClick?: () => void;
  connectedRight?: React.ReactNode;
  connectedLeft?: React.ReactNode;
  showCharacterCount?: boolean;
  pattern?: string;
  step?: number;
  onChange?: (value: string) => void;
  maxLength?: number;
};

export type LabelAction = {
  id?: string;
  content?: string;
  accessibilityLabel?: string;
  url?: string;
  external?: boolean;
  onAction?: () => void;
  onMouseEnter?: () => void;
  onTouchStart?: () => void;
};

export type LabelProps = {
  label: string;
  labelAction?: LabelAction;
  classes?: string;
};
