import { styled } from '@mui/material/styles';
import { ButtonProps } from '@mui/material/Button/Button';
import ESButton from '../ESButton/ESButton';

const SearchButtonStyled = styled(ESButton, {
  name: 'Search',
  slot: 'SearchButton',
})<ButtonProps>(({ theme }) => ({
  background: 'none',
  appearance: 'none',
  backgroundColor: theme.palette.info['100'],
  color: theme.palette.icon.default,
  display: 'flex',
  flex: '1 1 auto',
  lineHeight: 'inherit',
  maxWidth: '36.25rem',
  width: '100%',
  padding: theme.space['2'],
  boxShadow: 'none',
  justifyContent: 'flex-start',
  border: `1px solid ${theme.palette.divider}`,
  '&:hover': {
    border: `1px solid #c9cccf`, // --p-border-subdued
    color: theme.palette.icon.hovered,
    backgroundColor: theme.palette.info['100'],
  },
}));

export const SearchIconBlockStyled = styled('span', {
  name: 'Search',
  slot: 'SearchIconBlock',
})(({ theme }) => ({
  display: 'flex',
  height: '1.25rem',
  marginRight: theme.space['2'],
  pointerEvents: 'none',
}));

export default SearchButtonStyled;
