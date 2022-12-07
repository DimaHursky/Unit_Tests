import { createTheme, ThemeOptions } from '@mui/material';

import componentsOverrides from './overrides';
import typography from './typography/typography';
import shape from './shape';
import space from './space';
import transitions from './transitions';
import { lightPalette } from './palette/lightPalette';
import { darkPalette } from './palette/darkPalette';
import breakpoints from './breakpoints';
import font from './font';
import shadows from './shadow';

const commonThemeProperties: ThemeOptions = {
  typography: {
    ...typography,
  },
  shape,
  space,
  shadows,
  font,
  transitions,
  breakpoints,
};

const LightTheme = createTheme({
  ...commonThemeProperties,
  palette: lightPalette,
  components: componentsOverrides,
});

const DarkTheme = createTheme({
  ...commonThemeProperties,
  palette: darkPalette,
  components: componentsOverrides,
});

export { LightTheme, DarkTheme };
