import React from 'react';
import { useThemeProps } from '@mui/material';
import clsx from 'clsx';
import { ESAvatarProps } from './ESAvatar.types';
import ESAvatarStyled from './ESAvatar.styled';

function xorHash(str: string) {
  let hash = 0;

  str.split('').forEach((char: string) => {
    // eslint-disable-next-line no-bitwise
    hash ^= char.charCodeAt(0);
  });

  return hash;
}

function styleClass(name?: string) {
  const STYLE_CLASSES = ['one', 'two', 'three', 'four', 'five'];
  return name
    ? STYLE_CLASSES[xorHash(name) % STYLE_CLASSES.length]
    : STYLE_CLASSES[0];
}

const ESAvatar = (inProps: ESAvatarProps) => {
  const props = useThemeProps({ props: inProps, name: 'ESAvatar' });

  const { src, initials, name, size = 'small', ...other } = props;

  const nameString = name || initials;
  const avatarClasses = clsx({
    [`style_${styleClass(nameString)}`]: !src,
    [`size_${size}`]: size,
  });

  return (
    <ESAvatarStyled {...other} src={src} className={avatarClasses}>
      {initials}
    </ESAvatarStyled>
  );
};

export default ESAvatar;
