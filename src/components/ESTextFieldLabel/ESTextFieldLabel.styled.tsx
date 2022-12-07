import { styled } from '@mui/material/styles';

const ESTextFieldLabelStyled = styled('label', {
  name: 'ESESTextFieldLabel',
  slot: 'Root',
})(({ theme }) => ({
  display: 'block',
  flex: '1 1 auto',
  fontSize: theme.font.size[94],
  lineHeight: theme.font.lineHeight[2],
  '&.required::after': {
    content: '"*"',
    color: theme.palette.critical.text,
    marginLeft: theme.space[1],
  },
  '&.disabled': {
    color: theme.palette.info[400],
  },
}));

export default ESTextFieldLabelStyled;
