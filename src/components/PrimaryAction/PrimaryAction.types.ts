import { ButtonProps } from '@mui/material/Button/Button';

export interface PrimaryActionProps {
  content?: string;
  onAction?: () => void;
  color?: ButtonProps['color'];
  disabled?: boolean;
  variant?: ButtonProps['variant'];
}
