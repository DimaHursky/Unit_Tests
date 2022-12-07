import { styled } from '@mui/material/styles';
import { Avatar } from '@mui/material';

const ESAvatarStyled = styled(Avatar, {
  name: 'ESAvatar',
  slot: 'Root',
})(({ theme }) => ({
  '&.style_one': {
    color: theme.palette.avatar.oneText,
    background: theme.palette.avatar.oneSurface,
  },
  '&.style_two': {
    color: theme.palette.avatar.twoText,
    background: theme.palette.avatar.twoSurface,
  },
  '&.style_three': {
    color: theme.palette.avatar.threeText,
    background: theme.palette.avatar.threeSurface,
  },
  '&.style_four': {
    color: theme.palette.avatar.fourText,
    background: theme.palette.avatar.fourSurface,
  },
  '&.style_five': {
    color: theme.palette.avatar.fiveText,
    background: theme.palette.avatar.fiveSurface,
  },
  '&.size_extraSmall': {
    width: theme.font.size[400],
    height: theme.font.size[400],
    fontSize: theme.font.size[100],
  },
  '&.size_small': {
    width: theme.font.size[600],
    height: theme.font.size[600],
    fontSize: theme.font.size[200],
  },
  '&.size_medium': {
    width: theme.font.size[700],
    height: theme.font.size[700],
    fontSize: theme.font.size[300],
  },
  '&.size_large': {
    width: '3.75rem',
    height: '3.75rem',
    fontSize: theme.font.size[600],
  },
}));

export default ESAvatarStyled;
