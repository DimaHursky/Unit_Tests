import { MenuListProps } from '@mui/material';
import React from 'react';

export interface IItem {
  title: string;
  subtitle?: string;
  caption?: string;
  // onAction?: () => void;
  type: string;
  icon?: React.ReactNode;
}

export interface ISearchResult {
  sectionTitle: string;
  items: IItem[];
}

export type SearchListProps = MenuListProps & {
  sections: ISearchResult[];
};
