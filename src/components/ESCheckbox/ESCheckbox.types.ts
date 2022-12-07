import { CheckboxProps } from '@mui/material';

export type ESCheckboxProps = Omit<CheckboxProps, 'onChange'> & {
  label?: string;
  onChange?: (value: boolean) => void;
  error?: boolean | string;
  helpText?: string;
};
