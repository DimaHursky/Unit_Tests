import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const ActionsStyled = styled('div', {
  name: 'ESActions',
  slot: 'Root',
})(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'flex-end',
  flex: '1 1 auto',
  '& > *': {
    flex: '0 0 auto',
  },
}));

export const ButtonGroup = styled(Box, {
  name: 'ESActionMenu',
  slot: 'Root',
})(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  marginTop: `calc(${theme.space[1]}*-1)`,
  marginLeft: `calc(${theme.space[1]}*-1)`,
}));

export default ActionsStyled;
