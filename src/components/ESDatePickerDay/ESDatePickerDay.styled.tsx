import { styled } from '@mui/material/styles';
import { ESButton, ESButtonProps } from '../ESButton';

const ESDatePickerDayStyled = styled('td', {
  name: 'ESDatePickerDay',
  slot: 'Root',
})(({ theme }) => ({
  width: '14.28571%',
  margin: 0,
  padding: 0,

  '&.dayCell': {
    background: 'transparent',
    borderRadius: theme.shape.border.radius[1],
  },
}));

export const DayStyled = styled(ESButton, {
  name: 'ESDatePickerDay',
  slot: 'Root',
})<ESButtonProps>(({ theme, ...rest }) => ({
  ...(rest.variant === 'text' && {
    display: 'block',
    width: '100%',
    height: '100%',
    margin: '0',
    padding: theme.space[2],
    fontSize: theme.font.size[75],
    color: theme.palette.text.primary,
    '&.inRange': {
      background: theme.palette.secondary[50],
    },
    '&.selected': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.secondary.main,
    },
    '&.firstInRange': {
      borderRadius: theme.shape.border.radius[1],
      '&.hoverRight, &.hasRange': {
        borderRadius: `${theme.shape.border.radius[6]} 0 0 ${theme.shape.border.radius[6]}`,
      },
    },

    ':hover': {
      textDecoration: 'none',
      color: theme.palette.common.white,
      backgroundColor: theme.palette.secondary.dark,
      borderRadius: theme.shape.border.radius[1],
    },
    ':focus': {
      outlineOffset: '0.1rem',
      outline: `0.15rem solid #458fff`,
      boxShadow: 'none',
    },
    '&:disabled': {
      backgroundColor: 'transparent',
      color: theme.palette.text.disabled,
    },
    '&.lastInRange': {
      borderRadius: `0 ${theme.shape.border.radius[6]} ${theme.shape.border.radius[6]} 0`,
    },
    '&.current': {
      fontWeight: theme.font.weight.bold,
    },
  }),
}));
export default ESDatePickerDayStyled;
