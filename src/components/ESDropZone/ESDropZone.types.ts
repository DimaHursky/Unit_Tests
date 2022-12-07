import React, { ChangeEvent } from 'react';
import { LabelAction } from '../ESTextField';

export type TDropZoneEvent = DragEvent | ChangeEvent<HTMLInputElement>;
export type DropZoneFileType = 'file' | 'image' | 'video';

export enum SizeEnum {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
}

export type ESDropZoneProps = {
  label?: string;
  labelAction?: LabelAction;
  labelHidden?: boolean;
  id?: string;
  accept?: string;
  type?: DropZoneFileType;
  active?: boolean;
  error?: boolean;
  outline?: boolean;
  overlay?: boolean;
  overlayText?: string;
  errorOverlayText?: string;
  allowMultiple?: boolean;
  disabled?: boolean;
  children?: string | React.ReactNode;
  dropOnPage?: boolean;
  openFileDialog?: boolean;
  variableHeight?: boolean;

  customValidator?(file: File): boolean;
  customClick?(event: React.MouseEvent<HTMLElement>): void;
  customDrop?(
    files: File[],
    acceptedFiles: File[],
    rejectedFiles: File[],
  ): void;
  customDropAccepted?(acceptedFiles: File[]): void;
  customDropRejected?(rejectedFiles: File[]): void;
  customDragOver?(): void;
  customDragEnter?(): void;
  customDragLeave?(): void;
  customFileDialogClose?(): void;
};

export type DropZoneLabelProps = {
  label: string;
  labelAction?: LabelAction;
  classes?: string;
  labelHidden?: boolean;
};
