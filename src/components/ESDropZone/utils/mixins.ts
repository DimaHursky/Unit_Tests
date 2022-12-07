import { Theme } from '@mui/material/styles/createTheme';
// eslint-disable-next-line import/no-extraneous-dependencies
import { CSSObject } from '@emotion/serialize/dist/emotion-serialize.cjs';

export const resetAfter = (theme: Theme) =>
  ({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 1,
    transform: 'scale(1)',
    border: `${theme.shape.border.width[1]} dashed transparent`,
  } as CSSObject);

export const recolorIcon = (
  fillColor: string | null = null,
  secondaryColor: string | null = null,
  filterColor: string | null = null,
) =>
  ({
    svg: {
      fill: fillColor,
      color: secondaryColor,
    },

    img: {
      filter: filterColor,
    },
  } as CSSObject);

export const focusRing = (
  theme: Theme,
  style: 'base' | 'focused' = 'base',
  brdrWidth = 0,
  size = 'base',
) => {
  const stroke = '2px';
  const offset = brdrWidth ? `calc(${brdrWidth}px + 1px)` : '1px';
  const negativeOffset = `calc(-1 * ${offset})`;
  const borderRadius =
    size === 'wide'
      ? theme.shape.border.radius['2']
      : theme.shape.border.radius['1'];

  const baseStyles = {
    content: '""',
    position: 'absolute',
    zIndex: 1,
    top: negativeOffset,
    right: negativeOffset,
    bottom: negativeOffset,
    left: negativeOffset,
    display: 'block',
    pointerEvents: 'none',
    boxShadow: `0 0 0 ${negativeOffset} ${theme.palette.secondary.light}`,
    transition: `box-shadow ${theme.transitions.duration[100]} ${theme.transitions.easing.ease}`,
    borderRadius: `calc(${borderRadius} + 1px)`,
  };

  const focusStyle = {
    base: {
      position: 'relative',
      '&:after': baseStyles,
    },
    focused: {
      '&:after': {
        ...baseStyles,
        boxShadow: `0 0 0 ${stroke} ${theme.palette.secondary.light}`,
        outline: `${theme.shape.border.width[1]} solid transparent`,
      },
    },
  }[style];

  return {
    borderRadius,
    ...focusStyle,
  } as CSSObject;
};
