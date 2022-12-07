import { styled } from '@mui/material/styles';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import { Box } from '@mui/material';

export const ProfileButtonWrapperStyled = styled(Box, {
  name: 'ESProfileButton',
  slot: 'Root',
})(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  height: theme.shape.topBar.height,
}));

const ProfileButtonStyled = styled(ButtonUnstyled, {
  name: 'ESProfileButton',
  slot: 'Root',
})(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  minWidth: '10rem',
  justifyContent: 'flex-start',
  alignItems: 'center',
  margin: 0,
  marginRight: theme.space[2],
  padding: `${theme.space[1]} ${theme.space[2]}`,
  background: 'none',
  fontSize: theme.font.size[100],
  color: theme.palette.text.primary,
  border: 0,
  borderRadius: theme.shape.border.radius.base,
  cursor: 'pointer',
  transition: `background-color ${theme.transitions.duration[100]}`,
  [theme.breakpoints.down('md')]: {
    margin: 0,
    minWidth: '2.25rem',
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

export const ProfileDetailDataStyled = styled(Box, {
  name: 'ESProfileButton',
  slot: 'Root',
})(({ theme }) => ({
  marginLeft: theme.space[2],
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const ProfileNameStyled = styled('p', {
  name: 'ESProfileButton',
  slot: 'Root',
})(({ theme }) => ({
  margin: 0,
  lineHeight: theme.font.lineHeight[1],
  textAlign: 'left',
  whiteSpace: 'nowrap',
}));

export const ProfileNameDetail = styled('p', {
  name: 'ESProfileButton',
  slot: 'Root',
})(({ theme }) => ({
  margin: 0,
  fontSize: theme.font.size[75],
  lineHeight: theme.font.lineHeight[1],
  whiteSpace: 'nowrap',
  opacity: '0.7',
  textAlign: 'left',
}));

export default ProfileButtonStyled;
