import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const SearchActionStyled = styled(Box, {
  name: 'Search',
  slot: 'SearchAction',
})(({ theme }) => ({
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('md')]: {},
}));

const ActionHeaderStyled = styled('div', {
  name: 'Search',
  slot: 'ActionHeader',
})(({ theme }) => ({
  marginBottom: theme.space['1'],
  padding: `${theme.space['4']} ${theme.space['4']} ${theme.space['3']}`,
  backgroundColor: theme.palette.background.paper,
  position: 'sticky',
  top: 0,
  zIndex: 3,
}));

export const ActionBodyStyled = styled(Box, {
  name: 'Search',
  slot: 'ActionBody',
})(({ theme }) => ({
  padding: `0 ${theme.space['4']} ${theme.space['3']}`,
  display: 'flex',
  flexDirection: 'column',
  minHeight: '7rem',
  position: 'relative',
}));

export const SearchInfoStyled = styled(Box, {
  name: 'Search',
  slot: 'SearchInfo',
})(({ theme }) => ({
  padding: `calc(${theme.space['5']} * 2)`,
  textAlign: 'center',
  height: 'auto',
  '@media(min-width: 42.5rem)': {
    height: 'auto',
    maxHeight: 'calc(100vh - 6.625rem)',
  },
}));

export default ActionHeaderStyled;
