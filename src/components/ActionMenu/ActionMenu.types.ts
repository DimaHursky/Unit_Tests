import { ItemsType } from '../ActionList';

export type ActionMenuProps = {
  actions?: ItemsType[];
  groups?: ActionGroup[];
  rollupActive?: boolean;
};

export type ActionGroup = {
  title: string;
  actions: ItemsType[];
  disabled?: boolean;
};
