import React from 'react';
import { ItemsType } from '../ActionList';

export interface ResourceItemProps {
  id: string;
  media?: React.ReactElement;
  persistActions?: boolean;
  shortcutActions?: ItemsType[];
  url?: string;
  external?: boolean;
  onClick?: (id?: string) => void;
  children?: React.ReactNode;
  selectable?: boolean;
  isSelected?: boolean;
}
