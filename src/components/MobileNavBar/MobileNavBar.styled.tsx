import { styled } from '@mui/material/styles';
import { Paper, IconButton } from '@mui/material';

export const MobileNavBarRootStyled = styled(Paper, {
  name: 'ESMobileNavBar',
  slot: 'Root',
})(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  height: theme.shape.topBar.height,
  backgroundColor: theme.palette.common.white,
  boxShadow: theme.shadows[6],
  transition: `${theme.transitions.duration[200]} background-color ${theme.transitions.easing.easeInOut}`,
  borderRadius: 0,
  marginBottom: theme.space['4'],
  padding: `0 ${theme.space[2]} 0 ${theme.space[4]}`,
  paddingLeft: `calc(${theme.space[4]} + env(safe-area-inset-left))`,
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

export const MobileNavBarCloseHolder = styled(IconButton, {
  name: 'ESMobileNavBar',
  slot: 'Close',
})(({ theme }) => ({
  position: 'absolute',
  left: '100%',
  top: 0,
  height: '2rem',
  width: '2rem',
  margin: theme.space['4'],
  padding: 0,
  color: theme.palette.surface.default,

  '&:hover': {
    backgroundColor: theme.palette.background.overlay,
  },
}));
