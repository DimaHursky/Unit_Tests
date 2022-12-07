import React from 'react';

export interface ActionListProps {
  items?: ItemsType[];
  sections?: SectionsType[];
}

export interface ItemsType {
  id?: string;
  content?: string;
  onAction?: () => void;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
  accessibilityLabel?: string;
  url?: string;
  external?: boolean;
}

export interface SectionsType {
  title?: string;
  items?: ItemsType[];
}

export type IconItemProps = {
  type: string;
};
