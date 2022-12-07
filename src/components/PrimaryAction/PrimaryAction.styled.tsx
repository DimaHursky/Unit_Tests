import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const PrimaryActionStyled = styled(Box, {
  name: 'ESPrimaryAction',
  slot: 'Root',
})(({ theme }) => ({
  flex: '0 0 auto',
  marginTop: 0,
  marginLeft: theme.space[1],
  [theme.breakpoints.up('md')]: {
    marginLeft: theme.space[4],
  },
}));

export default PrimaryActionStyled;
