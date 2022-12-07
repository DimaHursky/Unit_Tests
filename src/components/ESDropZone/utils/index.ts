import React, { ChangeEvent } from 'react';
import { TDropZoneEvent } from '../ESDropZone.types';

const dragEvents = ['dragover', 'dragenter', 'drop'];
export const defaultAllowMultiple = true;

export const isServer =
  typeof window === 'undefined' || typeof document === 'undefined';

const accepts = (file: File, acceptedFiles: string | string[] | undefined) => {
  if (file && acceptedFiles) {
    const fileName = file.name || '';
    const mimeType = file.type || '';
    const baseMimeType = mimeType.replace(/\/.*$/, '');
    const acceptedFilesArray = Array.isArray(acceptedFiles)
      ? acceptedFiles
      : acceptedFiles.split(',');

    return acceptedFilesArray.some((type) => {
      const validType = type.trim();
      if (validType.startsWith('.')) {
        return fileName.toLowerCase().endsWith(validType.toLowerCase());
      }
      if (validType.endsWith('/*')) {
        return baseMimeType === validType.replace(/\/.*$/, '');
      }
      return mimeType === validType;
    });
  }
  return true;
};

export const fileAccepted = (file: File, accept: string | undefined): boolean =>
  file.type === 'application/x-moz-file' || accepts(file, accept);

const isDragEvent = (e: TDropZoneEvent): e is DragEvent =>
  dragEvents.indexOf(e.type) > 0;

const isChangeEvent = (e: TDropZoneEvent): e is ChangeEvent<HTMLInputElement> =>
  Object.prototype.hasOwnProperty.call(e, 'target');

export const getDataTransferFiles = (e: TDropZoneEvent) => {
  if (isDragEvent(e) && e.dataTransfer) {
    const dt = e.dataTransfer;

    if (dt.files && dt.files.length) {
      return Array.from(dt.files);
    }

    if (dt.items && dt.items.length) {
      return Array.from(dt.items);
    }
  }
  if (isChangeEvent(e) && e.target.files) {
    return Array.from(e.target.files);
  }
  return [];
};

export const variationName = (name: string, value: string) =>
  `${name}${value?.at(0)?.toUpperCase()}${value?.slice(1)}`;

export const createAllowMultipleKey = (allowMultiple: boolean) =>
  allowMultiple ? 'allowMultiple' : 'single';

export const stopEvent = (e: DragEvent | React.DragEvent) => {
  e.preventDefault();
  e.stopPropagation();
};
