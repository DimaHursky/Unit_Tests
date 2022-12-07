import { ButtonProps } from '@mui/material/Button/Button';
import { ItemsType, SectionsType } from '../ActionList';

export type MenuGroupProps = {
  title: string;
  actions?: ItemsType[];
  sections?: SectionsType[];
  startIcon?: ButtonProps['startIcon'];
  disabled?: boolean;
  getOffsetWidth?(width: number): void;
};
