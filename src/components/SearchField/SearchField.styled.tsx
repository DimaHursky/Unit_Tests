import { styled } from '@mui/material/styles';
import { TextField, TextFieldProps } from '@mui/material';

const SearchFieldStyled = styled(TextField)<TextFieldProps>(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    fontSize: theme.font.size['200'],
    lineHeight: theme.font.lineHeight['3'],
    fontWeight: theme.font.weight.regular,
    color: theme.palette.text.primary,
    paddingLeft: `calc(${theme.space['2']} + ${theme.space['1']})`,
    paddingRight: `calc(${theme.space['2']} + ${theme.space['1']})`,
    borderRadius: theme.shape.border.radius['1'],
    backgroundColor: theme.palette.background.hovered,
    [theme.breakpoints.up('md')]: {
      fontSize: theme.font.size['100'],
    },
    '& fieldset': {
      border: `1px solid #c9cccf`, // --p-border-subdued
    },
    '&:hover fieldset': {
      borderColor: '#c9cccf',
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.secondary.light,
      outlineOffset: '0.1rem',
      borderRadius: theme.shape.border.radius['1'],
    },
    '& .MuiOutlinedInput-input': {
      paddingTop: '9px',
      paddingBottom: '9px',
    },
    '& .MuiInputAdornment-root': {
      color: theme.palette.icon.default,
    },
    '& .MuiInputAdornment-positionStart': {
      marginRight: theme.space['1'],
    },
    '& .MuiInputAdornment-positionEnd': {
      marginLeft: theme.space['2'],
      height: 'auto',
      cursor: 'pointer',
      '&:focus': {
        outlineOffset: '0.2rem',
        borderRadius: theme.shape.border.radius['1'],
        outline: ['0.15rem solid', theme.palette.secondary.light].join(' '),
      },
    },
  },
}));

export default SearchFieldStyled;
