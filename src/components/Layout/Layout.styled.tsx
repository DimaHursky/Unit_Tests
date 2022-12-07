import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { LayoutHeaderStyledProps, LayoutProps } from './Layout.types';
import { isTrue } from '../../utils/helpers';

const LayoutStyled = styled(Box, {
  name: 'ESLayout',
  slot: 'Root',
})<LayoutProps>(() => ({
  height: '100vh',
}));

export const LayoutAreaStyled = styled(Box, {
  name: 'ESLayout',
  slot: 'Area',
})(({ theme }) => ({
  background: theme.palette.background.default,
  display: 'flex',
  minHeight: '100vh',
  width: '100%',
}));

export const LayoutHeaderStyled = styled(Box, {
  name: 'ESLayout',
  slot: 'Header',
})(({ theme }) => ({
  height: '3.5rem',
  left: '0',
  position: 'fixed',
  top: '0',
  width: '100%',
  zIndex: theme.zIndex.appBar,
  '@media print': {
    display: 'none!important',
  },
}));

export const LayoutNavigationStyled = styled(Box, {
  name: 'ESLayout',
  slot: 'Navigation',
  shouldForwardProp: (propName: PropertyKey) => propName !== 'isSidebarOpen',
})<LayoutHeaderStyledProps>(({ theme, isSidebarOpen }) => ({
  alignItems: 'stretch',
  display: isTrue(isSidebarOpen) ? 'flex' : 'none',
  flex: '0 0 auto',
  height: '100%',
  left: 0,
  top: 0,
  outline: 'none',
  position: 'fixed',
  transform: 'translateX(0)',
  zIndex: theme.zIndex.modal,
  background: theme.palette.background.default,
  [theme.breakpoints.up('md')]: {
    height: `calc(100% - ${theme.shape.topBar.height})`,
    top: theme.shape.topBar.height,
    display: 'flex',
    left: 0,
    zIndex: 1,
    minWidth: theme.shape.navigation.width,
    width: theme.shape.navigation.width,
  },
  '@media print': {
    display: 'none!important',
  },
}));

export const LayoutNavigationBackdropStyled = styled(Box, {
  name: 'ESLayout',
  slot: 'Navigation',
})(({ theme }) => ({
  display: 'block',
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  willChange: 'opacity',
  zIndex: theme.zIndex.modal,
  backfaceVisibility: 'hidden',
  background: theme.palette.background.backdrop,
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

export const LayoutMainStyled = styled(Box, {
  name: 'ESLayout',
  slot: 'Main',
})(({ theme }) => ({
  alignItems: 'stretch',
  display: 'flex',
  flex: '1 1',
  maxWidth: '100%',
  minWidth: '0',
  paddingTop: theme.shape.topBar.height,
  [theme.breakpoints.up('md')]: {
    paddingLeft: theme.shape.navigation.width,
  },
}));

export default LayoutStyled;
