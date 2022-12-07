import React from 'react';
import { DropZoneFileType } from '../ESDropZone/ESDropZone.types';

export type ESDropZoneInputProps = {
  id: string;
  accept?: string;
  disabled: boolean;
  type: DropZoneFileType;
  multiple: boolean;
  openFileDialog?: boolean;

  onChange(e: DragEvent | React.ChangeEvent<HTMLInputElement>): void;
  onFocus(): void;
  onBlur(): void;
  onFileDialogClose?(): void;
};
