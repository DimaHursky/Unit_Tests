import { AvatarProps } from '@mui/material';

export type ESAvatarProps = AvatarProps & {
  initials?: string;
  name?: string;
  size?: 'extraSmall' | 'small' | 'medium' | 'large';
};
