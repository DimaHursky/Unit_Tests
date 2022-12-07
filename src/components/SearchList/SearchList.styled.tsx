import { styled } from '@mui/material/styles';
import { Box, ListItemIcon, MenuList, MenuListProps } from '@mui/material';
import { ReactNode } from 'react';
import { IconItemProps } from '../ActionList';

const SearchListStyled = styled(MenuList, {
  name: 'Search',
  slot: 'SearchList',
})<MenuListProps>(() => ({
  padding: 0,
}));

export const SearchListItemStyled = styled('li', {
  name: 'Search',
  slot: 'SearchListItem',
})(({ theme }) => ({
  padding: `${theme.space['1']} 0`,
}));

export const SearchItemIconStyled = styled(ListItemIcon, {
  name: 'Search',
  slot: 'SearchItemIcon',
})<IconItemProps>(({ theme }) => ({
  display: 'flex',
  minWidth: 0,
  justifyContent: 'center',
  flex: '0 0 2.125rem',
  marginRight: '1rem',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  color: theme.palette.text.primary,
  alignSelf: 'flex-start',
}));

export const SearchItemTextStyled = styled(Box, {
  name: 'Search',
  slot: 'SearchItemText',
})<{ icon: ReactNode }>(({ theme, ...rest }) => ({
  alignSelf: 'center',
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  textAlign: 'left',
  paddingLeft: rest.icon ? '0' : '0.45rem',
}));

export const SearchItemTitleStyled = styled('p', {
  name: 'Search',
  slot: 'SearchItemTitle',
})(({ theme }) => ({
  margin: 0,
  color: theme.palette.text.primary,
  fontSize: theme.font.size['200'],
  fontWeight: theme.font.weight.medium,
}));

export const SearchItemStyled = styled('button', {
  name: 'Search',
  slot: 'SearchItem',
})(({ theme }) => ({
  display: 'flex',
  padding: theme.space['2'],
  width: '100%',
  border: 'none',
  background: 'none',
  textDecoration: 'none',
  borderRadius: theme.shape.border.radius['1'],
  minHeight: '2.375rem',
  alignItems: 'flex-start',
  ':focus-visible,:hover': {
    backgroundColor: theme.palette.background.default,
    p: {
      color: theme.palette.text.primary,
    },
  },
  ':focus-visible': {
    outline: 'none',
  },
}));

export const SearchItemSubtitleStyled = styled('p', {
  name: 'Search',
  slot: 'SearchItemSubtitle',
})(({ theme }) => ({
  margin: 0,
  fontSize: theme.font.size['100'],
  fontWeight: theme.font.weight.regular,
  textOverflow: 'ellipsis',
  marginTop: theme.space['1'],
  color: theme.palette.text.subdued,
  transition: `color ${theme.transitions.duration[100]} ${theme.transitions.easing.ease}`,
}));

// FIXME need color '#6d7175'
export const SearchItemCaptionStyled = styled('p', {
  name: 'Search',
  slot: 'SearchItemCaption',
})(({ theme }) => ({
  margin: 0,
  fontSize: theme.font.size['100'],
  lineHeight: theme.font.lineHeight['2'],
  fontWeight: theme.font.weight.regular,
  color: theme.palette.text.subdued,
  textOverflow: 'ellipsis',
  marginTop: theme.space['05'],
  transition: `color ${theme.transitions.duration[100]} ${theme.transitions.easing.ease}`,
  [theme.breakpoints.up('md')]: {
    fontSize: theme.font.size['75'],
    lineHeight: theme.font.lineHeight['1'],
  },
}));

export const SectionTitleStyled = styled(Box, {
  name: 'Search',
  slot: 'SectionTitle',
})(({ theme }) => ({
  display: 'flex',
  alignItems: 'baseline',
  margin: `${theme.space['2']} 0`,
  padding: `0 ${theme.space['2']} 0`,
  '& > h3': {
    color: theme.palette.text.subdued,
    textTransform: 'uppercase',
    fontWeight: theme.font.weight.semibold,
    lineHeight: theme.font.lineHeight['1'],
    fontSize: theme.font.size['100'],
    [theme.breakpoints.up('md')]: {
      fontSize: theme.font.size['75'],
    },
  },
}));
export default SearchListStyled;
