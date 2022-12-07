import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const ActionMenuStyled = styled(Box, {
  name: 'ESActionMenu',
  slot: 'Root',
})(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
}));

export default ActionMenuStyled;
