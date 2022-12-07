import { styled } from '@mui/material/styles';
import { Box, MenuItem } from '@mui/material';
import { ESButton } from '../ESButton';

const ResourceItemStyled = styled(MenuItem, {
  name: 'ESResourceItem',
  slot: 'Root',
})(({ theme }) => ({
  padding: 0,
  '&:last-of-type': {
    borderBottomLeftRadius: theme.shape.border.radius[2],
    borderBottomRightRadius: theme.shape.border.radius[2],
  },
  '&:hover': {
    backgroundColor: 'transparent',
  },
}));

export const ResourceItemWrapper = styled(Box, {
  name: 'ESResourceItem',
  slot: 'Root',
})(({ theme }) => ({
  maxWidth: '100%',
  minWidth: '100%',
  overflow: 'hidden',
  '&.selected': {
    backgroundColor: theme.palette.surface.selected,
  },
}));

export const ResourceItemButton = styled(ESButton, {
  name: 'ESResourceItem',
  slot: 'Root',
})(() => ({
  position: 'absolute',
  height: '100%',
  width: '100%',
  top: 0,
  left: 0,
  padding: 0,
  border: 'none',
  zIndex: 1,
  opacity: 0,
}));

export const ResourceItemContainer = styled(Box, {
  name: 'ESResourceItem',
  slot: 'Root',
})(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-start',
  padding: `${theme.space[3]} ${theme.space[4]}`,
  minHeight: theme.font.lineHeight[7],
  zIndex: 2,
  [theme.breakpoints.up('sm')]: {
    padding: `${theme.space[3]} ${theme.space[5]}`,
  },
}));

export const ResourceItemOwned = styled(Box, {
  name: 'ESResourceItem',
  slot: 'Root',
})(() => ({
  display: 'flex',
}));

export const ResourceItemMedia = styled(Box, {
  name: 'ESResourceItem',
  slot: 'Root',
})(({ theme }) => ({
  flex: '0 0 auto',
  marginRight: theme.space[5],
  color: 'inherit',
  textDecoration: 'none',
}));

export const ResourceItemContent = styled(Box, {
  name: 'ESResourceItem',
  slot: 'Root',
})(() => ({
  minWidth: 0,
  maxWidth: '100%',
  flex: '1 1 auto',
}));

export const ResourceItemDisclosure = styled(Box, {
  name: 'ESResourceItem',
  slot: 'Root',
})(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  width: theme.space[8],
  minHeight: theme.font.lineHeight[7],
  top: `calc(${theme.space[3]}*-1)`,
  right: `calc(${theme.space[4]}*-1)`,
}));

export const ResourceItemHandle = styled(Box, {
  name: 'ESResourceItem',
  slot: 'Root',
})(({ theme }) => ({
  display: 'flex',
  width: theme.space[8],
  minHeight: theme.font.lineHeight[7],
  justifyContent: 'center',
  alignItems: 'center',
  margin: `calc(${theme.space[3]}*-1) ${theme.space[1]} calc(${theme.space[3]}*-1) calc(${theme.space[3]}*-1)`,
}));
export default ResourceItemStyled;
