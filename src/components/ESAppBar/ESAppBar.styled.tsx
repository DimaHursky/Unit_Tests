import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const ESAppBarStyled = styled(Box, {
  name: 'ESAppBar',
  slot: 'Root',
})(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  height: theme.shape.topBar.height,
  backgroundColor: theme.palette.common.white,
  boxShadow: theme.shadows[6],
  transition: `${theme.transitions.duration[200]} background-color ${theme.transitions.easing.easeInOut}`,
}));

export const OfficeSwitcherWrapperStyled = styled(Box, {
  name: 'ESAppBar',
  slot: 'Root',
})(({ theme }) => ({
  display: 'none',
  height: '100%',
  flex: `0 0 15rem`,
  alignItems: 'center',
  padding: `0 ${theme.space[2]} 0 ${theme.space[4]}`,
  paddingLeft: `calc(${theme.space[4]} + env(safe-area-inset-left))`,
  flexBasis: `calc(15rem + env(safe-area-inset-left))`,
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

export const AppBarContentsStyled = styled(Box, {
  name: 'ESAppBar',
  slot: 'Root',
})(() => ({
  display: 'flex',
  height: '100%',
  flex: '1 1 auto',
  alignItems: 'center',
  justifyContent: 'flex-end',
}));

export const SearchFieldStyled = styled(Box, {
  name: 'ESAppBar',
  slot: 'Root',
})(({ theme }) => ({
  position: 'relative',
  width: '100%',
  maxWidth: 'none',
  padding: 0,
  margin: 0,
  marginRight: `${theme.space[1]}`,
  [theme.breakpoints.up('sm')]: {
    padding: `0 ${theme.space[6]}`,
  },
}));

export const ToggleMenuStyled = styled('button', {
  name: 'ESAppBar',
  slot: 'ToggleMenuStyled',
})(({ theme }) => ({
  display: 'none',
  position: 'relative',
  alignSelf: 'center',
  margin: 0,
  marginLeft: `calc(${theme.space[2]} + ${theme.space['05']})`,
  marginRight: theme.space[2],
  padding: theme.space[2],
  background: 'none',
  cursor: 'pointer',
  border: 'none',
  borderRadius: theme.shape.border.radius.base,
  transition: `${theme.transitions.duration[150]} fill ${theme.transitions.easing.ease} ${theme.transitions.duration[50]}`,
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
  '& svg': {
    fill: theme.palette.info[900],
  },
}));

export default ESAppBarStyled;
