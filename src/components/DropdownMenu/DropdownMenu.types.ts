import { PopoverProps } from '@mui/material';
import { SectionsType } from '../ActionList';

export type DropdownMenuProps = PopoverProps & {
  sections: SectionsType[];
};
