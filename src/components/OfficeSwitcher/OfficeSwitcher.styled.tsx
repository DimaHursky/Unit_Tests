import { styled } from '@mui/material/styles';
import { ButtonUnstyled } from '@mui/base';
import { Avatar, Box } from '@mui/material';

const OfficeSwitcherStyled = styled('div', {
  name: 'ESOfficeSwitcher',
  slot: 'Root',
})(() => ({
  width: '100%',
  display: 'flex',
}));

export const OfficeSwitcherButtonStyled = styled(ButtonUnstyled, {
  name: 'ESProfileButton',
  slot: 'Root',
})(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  width: '100%',
  justifyContent: 'start',
  alignItems: 'center',
  margin: 0,
  padding: 0,
  background: 'none',
  color: theme.palette.text.primary,
  border: 0,
  borderRadius: theme.shape.border.radius.base,
  cursor: 'pointer',
  transition: `background-color ${theme.transitions.duration[100]}`,
  [theme.breakpoints.down('md')]: {
    margin: 0,
  },
  ':hover': {
    backgroundColor: theme.palette.background.default,
  },
  ':active, &[aria-expanded=true]': {
    backgroundColor: theme.palette.info.light,
  },
  ':pressed': {
    backgroundColor: theme.palette.info.light,
  },
}));

export const OfficeSwitcherLogoStyled = styled(Avatar, {
  name: 'ESProfileButton',
  slot: 'Logo',
})(() => ({
  width: '30px',
  height: '30px',
  '& img': {
    objectFit: 'contain',
  },
}));

export const OfficeSwitcherDetailDataStyled = styled(Box, {
  name: 'ESProfileButton',
  slot: 'Detail',
})(({ theme }) => ({
  maxWidth: '10rem',
  marginLeft: theme.space[2],
  fontFamily: "'Nunito', sans-serif",
  fontWeight: 800,
  fontSize: '1rem',
  letterSpacing: '0.1em',
}));

export default OfficeSwitcherStyled;
