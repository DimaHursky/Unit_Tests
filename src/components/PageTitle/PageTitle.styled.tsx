import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const PageTitleStyled = styled(Box, {
  name: 'ESPageTitle',
  slot: 'Root',
})(() => ({
  flex: '1 1 auto',
  alignSelf: 'center',
  gridArea: 'title',
}));

export const TitleMetadataWrapper = styled(Box, {
  name: 'ESPageTitle',
  slot: 'Root',
})(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
}));

export const HeaderTitle = styled('h1', {
  name: 'ESPageTitle',
  slot: 'Root',
})(({ theme }) => ({
  display: 'inline',
  margin: 0,
  marginRight: theme.space[2],
  marginTop: theme.space[1],
  fontSize: theme.font.size[400],
  lineHeight: theme.font.lineHeight[4],
  fontWeight: theme.font.weight.semibold,
  wordBreak: 'break-word',
  overflowWrap: 'break-word',
  [theme.breakpoints.up('md')]: {
    fontSize: theme.font.size[300],
  },
}));

export const TitleMetadata = styled(Box, {
  name: 'ESPageTitle',
  slot: 'Root',
})(() => ({
  marginTop: 0,
  verticalAlign: 'bottom',
}));

export const Subtitle = styled(Box, {
  name: 'ESPageTitle',
  slot: 'Root',
})(({ theme }) => ({
  marginTop: theme.space[1],
  fontSize: theme.font.size[100],
  fontWeight: theme.font.weight.regular,
  color: theme.palette.info[800],
}));
export default PageTitleStyled;
