import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const VisuallyHiddenStyled = styled(Box, {
  name: 'VisuallyHidden',
  slot: 'Root',
})(() => ({
  position: 'absolute',
  top: 0,
  width: '1px !important',
  height: '1px !important',
  margin: '0 !important',
  padding: '0 !important',
  overflow: 'hidden !important',
  clipPath: 'inset(50%) !important',
  border: '0 !important',
  whiteSpace: 'nowrap',
}));

export default VisuallyHiddenStyled;
