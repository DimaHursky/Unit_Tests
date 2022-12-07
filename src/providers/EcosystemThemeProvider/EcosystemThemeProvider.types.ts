import { ReactNode } from 'react';
import { ThemeOptions } from '@mui/material';

export interface EcosystemThemeProviderProps {
  children: ReactNode;
  theme: ThemeOptions;
}
