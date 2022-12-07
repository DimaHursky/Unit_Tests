import { SectionsType } from '../ActionList';

export interface ProfileButtonProps {
  actions: SectionsType[];
  name: string;
  detail?: string;
  avatar?: string;
  initials?: string;
  open?: boolean;
  onToggle?: () => void;
}
