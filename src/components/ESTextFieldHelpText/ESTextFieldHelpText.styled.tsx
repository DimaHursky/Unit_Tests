import { styled } from '@mui/material/styles';

const ESTextFieldHelpTextStyled = styled('div', {
  name: 'ESESTextFieldHelpText',
  slot: 'Root',
})(({ theme }) => ({
  fontSize: theme.font.size[94],
  color: theme.palette.info[800],
  wordWrap: 'break-word',
  wordBreak: 'break-word',
  overflowWrap: 'break-word',
  '&.textField': {
    marginTop: theme.space[1],
  },
  '&.checkbox': {
    marginBottom: theme.space[1],
  },
}));

export default ESTextFieldHelpTextStyled;
