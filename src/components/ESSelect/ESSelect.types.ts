import { SelectProps } from '@mui/material';
import { ReactNode } from 'react';
import { LabelAction } from '../ESTextField';

export interface IStrictOption {
  value: string;
  label: string;
  disabled?: boolean;
  prefix?: ReactNode;
}

export interface IHideableStrictOption extends IStrictOption {
  hidden?: boolean;
}

export interface IStrictGroup {
  title: string;
  options: IStrictOption[];
}

export type ISelectOption = string | IStrictOption;

export interface ISelectGroup {
  title: string;
  options: ISelectOption[];
}

export type ESSelectProps = Omit<SelectProps, 'error' | 'label' | 'value'> & {
  options?: (ISelectOption | ISelectGroup)[];
  placeholder?: string;
  label: string;
  labelAction?: LabelAction;
  error?: string | boolean;
  helpText?: string;
  labelHidden?: boolean;
  labelInline?: boolean;
  value?: string;
};

export type SelectLabelProps = {
  label: string;
  labelAction?: LabelAction;
  classes?: string;
  labelHidden?: boolean;
};
