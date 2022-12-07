import React from 'react';

export type SecondaryActionProps = {
  children?: React.ReactNode;
  onAction?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  getOffsetWidth?(width: number): void;
};
