import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React, { useMemo } from 'react';
import { EcosystemThemeProviderProps } from './EcosystemThemeProvider.types';

const EcosystemThemeProvider = ({
  children,
  theme,
}: EcosystemThemeProviderProps) => {
  const themeValue = useMemo(() => {
    try {
      return createTheme(theme);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('Failed to reuse custom theme from store', e);
      return createTheme();
    }
  }, [theme]);

  return (
    <ThemeProvider theme={themeValue}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default EcosystemThemeProvider;
