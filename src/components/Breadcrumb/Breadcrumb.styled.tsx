import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const BreadcrumbStyled = styled(Box, {
  name: 'ESBreadcrumb',
  slot: 'Root',
})(({ theme }) => ({
  flex: '0 0 auto',
  maxWidth: '100%',
  marginRight: theme.space[4],
  gridArea: 'breadcrumbs',
}));

export const BreadcrumbLink = styled('a', {
  name: 'ESBreadcrumb',
  slot: 'Root',
})(({ theme }) => ({
  display: 'inline-flex',
  position: 'relative',
  minHeight: '2.25rem',
  minWidth: '2.25rem',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.info[800],
  background: 'none',
  cursor: 'pointer',
  borderRadius: theme.shape.border.radius[1],
  border: `${theme.shape.border.width[1]} solid ${theme.palette.info.dark}`,
  [theme.breakpoints.up('md')]: {
    fontSize: theme.font.size[100],
  },
  ':hover': {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
  },
  ':active': {
    backgroundColor: theme.palette.info.light,
  },
}));

export const VisuallyHiddenContent = styled('span', {
  name: 'ESBreadcrumb',
  slot: 'Root',
})(({ theme }) => ({
  position: 'absolute',
  width: `${theme.space['025']}`,
  margin: 0,
  padding: 0,
  top: 0,
  border: 0,
  height: `${theme.space['025']}`,
  overflow: 'hidden',
  whiteSpace: 'nowrap',
}));

export default BreadcrumbStyled;
