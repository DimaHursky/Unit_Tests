import { Theme } from '@mui/material/styles/createTheme';
import { Components } from '@mui/material/styles/components';
import TypographyStyle from './components/Typography/Typography';
import MuiCssBaseline from './components/MuiCssBaseline';
import MuiPaper from './components/Paper';
import MuiAvatar from './components/Avatar';

const componentsOverrides: Components<Omit<Theme, 'components'>> = {
  MuiTypography: TypographyStyle,
  MuiCssBaseline,
  MuiPaper,
  MuiAvatar,
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
    },
  },
};

export default componentsOverrides;
