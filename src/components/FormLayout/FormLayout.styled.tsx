import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const itemMinSize = '13.75rem';

const FormLayoutStyled = styled(Box, {
  name: 'ESFormLayout',
  slot: 'Root',
})(() => ({
  // marginTop: `calc(${theme.space[4]}*-1)`,
  // marginLeft: `calc(${theme.space[5]}*1)`,
}));

export const FormLayoutItem = styled(Box, {
  name: 'ESFormLayout',
  slot: 'Root',
})(({ theme }) => ({
  flex: '1 1 13.75rem',
  marginTop: theme.space[4],
  marginLeft: theme.space[5],
  maxWidth: `calc(100% - ${theme.space[5]})`,
  '&.grouped': {
    minWidth: itemMinSize,
  },
  '&.condensed': {
    flexBasis: `calc(0.5*${itemMinSize})`,
    minWidth: `calc(0.5*${itemMinSize})`,
  },
}));

export default FormLayoutStyled;
