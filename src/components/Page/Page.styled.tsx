import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { PageContentProps, PageHeaderLeftAlignProps } from './Page.types';

const PageStyled = styled(Box, {
  name: 'ESPage',
  slot: 'Root',
})(({ theme }) => ({
  margin: '0 auto',
  maxWidth: '62.375rem',
  [theme.breakpoints.up('sm')]: {
    padding: `0 ${theme.space[6]}`,
  },
}));

export const PageHeaderWrapper = styled(Box, {
  name: 'ESPage',
  slot: 'Root',
})(({ theme }) => ({
  padding: theme.space[4],
  [theme.breakpoints.up('sm')]: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  [theme.breakpoints.up('md')]: {
    padding: `${theme.space[5]} 0`,
  },
  '& > :not(:first-of-type)': {
    marginTop: theme.space[1],
  },
}));

export const PageHeaderRow = styled(Box, {
  name: 'ESPage',
  slot: 'Root',
})(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap-reverse',
  '&:first-of-type': {
    minHeight: '2.25rem',
  },
  [theme.breakpoints.up('md')]: {
    flexWrap: 'nowrap',
  },
  [theme.breakpoints.down('md')]: {
    display: 'grid',
    gap: `${theme.space[2]} ${theme.space[4]}`,
    gridTemplateColumns: 'auto 1fr',
    gridTemplateAreas: '"breadcrumbs actions" "title title"',
  },
}));

export const PageHeaderLeftAlign = styled(Box, {
  name: 'ESPage',
  slot: 'Root',
})<PageHeaderLeftAlignProps>(({ theme, ...props }) => ({
  display: 'flex',
  alignContent: 'flex-start',
  alignItems: 'center',
  color: theme.palette.info[800],
  fontSize: theme.font.size[100],

  [theme.breakpoints.up('sm')]: {
    marginLeft:
      props.breadcrumb === 'true'
        ? `calc(${theme.space[5]}*2 + ${theme.space[2]} + ${theme.space[1]})`
        : 0,
  },
  [theme.breakpoints.down('md')]: {
    marginLeft: 0,
  },
}));

export const PageHeaderRightAlign = styled(Box, {
  name: 'ESPage',
  slot: 'Root',
})(({ theme }) => ({
  display: 'flex',
  alignContent: 'flex-end',
  flex: '1 1 auto',
  alignItems: 'center',
  alignSelf: 'flex-start',
  justifyContent: 'flex-end',
  gridArea: 'actions',
  marginBottom: theme.space[1],
  marginLeft: theme.space[4],
  whiteSpace: 'nowrap',
  [theme.breakpoints.up('md')]: {
    marginBottom: 0,
  },
}));

export const PageContent = styled(Box, {
  name: 'ESPage',
  slot: 'Root',
})<PageContentProps>(({ theme, ...props }) => ({
  borderTop:
    props.divider === 'true'
      ? `${theme.shape.border.width[1]} solid #e1e3e5`
      : 'none',
  paddingTop: props.divider === 'true' ? theme.space[8] : 0,
}));

export default PageStyled;
