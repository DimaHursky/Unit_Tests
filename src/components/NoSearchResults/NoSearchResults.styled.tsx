import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const NoSearchResultsWrapperStyled = styled(Box, {
  name: 'Search',
  slot: 'NoSearchResultsWrapper',
})(({ theme }) => ({
  padding: `${theme.space['4']} 0`,
  textAlign: 'center',
}));

export const NoSearchResultsContentStyled = styled(Box, {
  name: 'Search',
  slot: 'NoSearchResultsContent',
})(({ theme }) => ({
  margin: '0 auto',
  position: 'relative',
  maxWidth: `calc(28.125rem + ${theme.space['4']} * 2)`,
  padding: `${theme.space['4']}`,
  [theme.breakpoints.up('sm')]: {
    maxWidth: `calc(28.125rem + ${theme.space['8']} * 2)`,
    padding: `${theme.space['4']} ${theme.space['8']}`,
  },
}));

export default NoSearchResultsWrapperStyled;
