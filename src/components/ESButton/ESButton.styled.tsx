import { ButtonBase as MuiButton, styled } from '@mui/material';
import { ButtonProps } from '@mui/material/Button/Button';

const ESButtonStyled = styled(MuiButton, {
  name: 'ESButton',
  slot: 'Root',
})<ButtonProps>(({ theme, ...rest }) => ({
  minWidth: theme.font.size['650'],
  minHeight: theme.font.size['650'],
  lineHeight: theme.font.lineHeight['1'],
  borderRadius: theme.shape.border.radius['1'],
  fontSize: theme.font.size['94'],
  ':focus-visible': {
    outlineOffset: '0.1rem',
    outline: ['0.15rem solid', theme.palette.secondary.light].join(' '),
    boxShadow: 'none',
  },
  '& svg': {
    color: theme.palette.info[900],
  },

  ...(rest.variant === 'contained' &&
    rest.color === 'info' && {
      border: `1px solid ${theme.palette.info.dark}`,
      boxShadow: theme.shadows['5'], // --p-shadow-button
      backgroundColor: theme.palette.common.white,
      color: theme.palette.text.primary,
      ':hover': {
        backgroundColor: theme.palette.background.default,
      },
      ':active': {
        backgroundColor: theme.palette.info.light,
      },
      ':disabled': {
        color: theme.palette.text.disabled,
        borderColor: theme.palette.info[400],
        backgroundColor: theme.palette.info[300],
      },
    }),

  ...(rest.variant === 'contained' &&
    rest.color === 'primary' && {
      background: theme.palette.primary.main,
      boxShadow: [
        theme.shadows['5'], // --p-shadow-button
        theme.shadows['11'], // --p-shadows-inset-button
      ].join(','),
      color: theme.palette.primary.contrastText,
      ':hover': {
        background: theme.palette.primary.dark,
      },
      ':active': {
        background: theme.palette.primary.A100,
      },
      ':disabled': {
        background: theme.palette.info[50],
        color: theme.palette.text.disabled,
        boxShadow: 'none',
      },
    }),

  ...(rest.variant === 'contained' &&
    rest.color === 'error' && {
      background: theme.palette.error.main,
      boxShadow: [
        theme.shadows['5'], // --p-shadow-button
        theme.shadows['11'], // --p-shadows-inset-button
      ].join(','),
      color: theme.palette.primary.contrastText,
      ':hover': {
        background: theme.palette.error.dark,
        boxShadow: [
          theme.shadows['5'], // --p-shadow-button
          theme.shadows['11'], // --p-shadows-inset-button
        ].join(','),
      },
      ':active': {
        background: theme.palette.error.A200,
      },
      ':disabled': {
        background: theme.palette.info[50],
        color: theme.palette.text.disabled,
        boxShadow: 'none',
      },
    }),

  ...(rest.variant === 'outlined' && {
    border: `1px solid ${theme.palette.text.disabled}`,
    color: theme.palette.text.primary,
    boxShadow: 'none',
    ':hover': {
      borderColor: theme.palette.text.disabled,
      backgroundColor: theme.palette.background.default,
    },
    ':active': {
      borderColor: theme.palette.text.disabled,
      backgroundColor: theme.palette.info.light,
    },
    ':disabled': {
      borderColor: theme.palette.info[400],
      color: theme.palette.text.disabled,
    },
  }),

  ...(rest.variant === 'text' && {
    margin: `calc(calc((2.25rem - ${theme.font.lineHeight['2']} - ${theme.space['05']})/2)*-1) calc(${theme.space['2']}*-1)`,
    padding: `0 ${theme.space['2']}`,
    border: 0,
    color: theme.palette.secondary.main,
    ':hover': {
      textDecoration: 'underline',
      color: theme.palette.secondary.dark,
      backgroundColor: 'transparent',
    },
    ':active': {
      color: theme.palette.secondary.A100,
    },
    ':disabled': {
      color: theme.palette.text.disabled,
    },
  }),

  ...(rest.variant === 'text' &&
    rest.color === 'error' && {
      color: theme.palette.error.main,
      ':hover': {
        textDecoration: 'underline',
        color: theme.palette.error[900],
        backgroundColor: 'transparent',
      },
      ':active': {
        color: theme.palette.error.A400,
      },
      ':disabled': {
        color: theme.palette.error[50],
      },
    }),

  ...(rest.variant === 'text' &&
    rest.color === 'secondary' && {
      color: theme.palette.text.primary,
      ':hover': {
        backgroundColor: theme.palette.info.light,
      },
      ':active': {
        backgroundColor: theme.palette.info[100],
      },
      ':disabled': {
        color: theme.palette.text.disabled,
      },
    }),

  ...(rest.size === 'medium' && {
    padding: `calc((2.25rem - ${theme.font.lineHeight['2']} - ${theme.space['05']})/2) ${theme.space['4']}`,
  }),

  ...(rest.size === 'small' && {
    minHeight: theme.font.lineHeight['4'],
    padding: `calc((${theme.font.lineHeight['4']} - ${theme.font.lineHeight['2']} - ${theme.space['05']})/2) ${theme.space['3']}`,
  }),

  ...(rest.size === 'large' && {
    minHeight: theme.font.lineHeight['7'],
    minWidth: theme.font.lineHeight['7'],
    padding: `calc((${theme.font.lineHeight['7']} - ${theme.font.lineHeight['2']} - ${theme.space['05']})/2) ${theme.space['6']}`,
  }),
}));

export default ESButtonStyled;
