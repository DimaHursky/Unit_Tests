import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { ESButton } from '../ESButton';

const RollupActionStyled = styled(Box, {
  name: 'ESRollupAction',
  slot: 'Root',
})(() => ({}));

export const RollupButton = styled(ESButton, {
  name: 'ESRollupAction',
  slot: 'Root',
})(({ theme }) => ({
  position: 'relative',
  padding: 0,
  color: theme.palette.info[900],
  background: 'transparent',
  border: `${theme.shape.border.width[1]} solid ${theme.palette.info.dark}`,
  boxShadow: 'none',
}));

export default RollupActionStyled;
