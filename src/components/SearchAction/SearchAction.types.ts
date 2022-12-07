import { ReactNode } from 'react';

export type ISearchActionProps = {
  searchBtn: ReactNode;
  anchorEl: null | Element | ((element: Element) => Element);
  searchField: ReactNode;
  onClose(): void;
  children: ReactNode;
};
