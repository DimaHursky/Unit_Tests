import { createContext } from 'react';
import { defaultAllowMultiple } from './utils';

interface IDropZoneContextType {
  disabled: boolean;
  focused: boolean;
  measuring: boolean;
  allowMultiple: boolean;
  size: string;
  type: string;
}

export const ESDropZoneContext = createContext<IDropZoneContextType>({
  disabled: false,
  focused: false,
  size: 'extraLarge',
  type: 'file',
  measuring: false,
  allowMultiple: defaultAllowMultiple,
});
