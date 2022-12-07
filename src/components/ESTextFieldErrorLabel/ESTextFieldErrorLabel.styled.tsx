import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const ESTextFieldErrorLabelStyled = styled(Box, {
  name: 'ESESTextFieldErrorLabel',
  slot: 'Root',
})(({ theme }) => ({
  marginTop: theme.space[1],
  wordBreak: 'break-word',
  overflowWrap: 'break-word',
}));

export const TextFieldError = styled(Box, {
  name: 'ESESTextFieldErrorLabel',
  slot: 'Root',
})(({ theme }) => ({
  display: 'flex',
  color: theme.palette.critical.text,
  fill: theme.palette.critical.icon,
  fontSize: theme.font.size[94],
}));

export const ErrorIcon = styled(Box, {
  name: 'ESESTextFieldErrorLabel',
  slot: 'Root',
})(({ theme }) => ({
  marginLeft: `calc(${theme.space['05']}*-1)`,
  marginRight: `calc(${theme.space['05']} + ${theme.space[1]})`,
  svg: {
    fontSize: theme.font.size[300],
  },
}));

export const Icon = styled('span', {
  name: 'ESESTextFieldErrorLabel',
  slot: 'Root',
})(() => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  height: '1.25rem',
  width: '1.25rem',
  maxHeight: '100%',
  maxWidth: '100%',
  margin: 'auto',
}));

export default ESTextFieldErrorLabelStyled;
