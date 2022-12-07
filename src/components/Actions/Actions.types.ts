import { ItemsType } from '../ActionList';
import { ActionGroup } from '../ActionMenu/ActionMenu.types';

export interface ActionsProps {
  actions?: ItemsType[];
  groups?: ActionGroup[];
}

export interface MeasuredActions {
  showable: ItemsType[];
  rolledUp: (ItemsType | ActionGroup)[];
}
