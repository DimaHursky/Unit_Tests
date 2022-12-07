import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const SearchSpinnerStyled = styled(Box, {
  name: 'SearchSpinner',
  slot: 'Root',
})(() => ({
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  alignItems: 'center',
}));

export default SearchSpinnerStyled;
