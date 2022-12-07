import { TextFieldProps } from '@mui/material/TextField/TextField';

export type SearchFieldProps = TextFieldProps & {
  onCancel(): void;
};
