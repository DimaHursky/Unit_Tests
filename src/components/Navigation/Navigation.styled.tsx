import { styled } from '@mui/material/styles';
import { Box, ListItemButton } from '@mui/material';

import {
  NavigationListItemButtonIconProps,
  NavigationListItemButtonProps,
  NavigationListItemProps,
  NavigationProps,
} from './Navigation.types';
import { isTrue } from '../../utils/helpers';

export const NavigationRootStyled = styled(Box, {
  name: 'ESNavigation',
  slot: 'Root',
})<NavigationProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  minHeight: '100%',
  width: 'calc(100vw - 4rem)',
  minWidth: theme.shape.navigation.width,
  maxWidth: '22.5rem',
  borderRight: `${theme.shape.border.width['1']} solid ${theme.palette.divider}`,
  [theme.breakpoints.up('md')]: {
    maxWidth: theme.shape.navigation.width,
    paddingTop: theme.space['4'],
  },
}));

export const NavigationListStyled = styled(Box, {
  name: 'ESNavigation',
  slot: 'Menu',
})<NavigationListItemProps>(({ theme, nested, visible }) => ({
  flex: '0 0 auto',
  listStyle: 'none',
  padding: isTrue(nested) || !isTrue(visible) ? 0 : `${theme.space['4']} 0`,
  paddingTop: 0,
  margin: 0,
  height: isTrue(visible) ? 'auto' : 0,
  overflow: isTrue(visible) ? 'visible' : 'hidden',
}));

export const NavigationListItemStyled = styled('li', {
  name: 'ESNavigation',
  slot: 'MenuItem',
})(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  position: 'relative',
  animationDelay: '0',
  padding: 0,
  width: '100%',
  '& > ul': {
    width: '100%',
  },
  '&:not(:first-of-type) > *': {
    borderTop: `${theme.shape.border.width['1']} solid ${theme.palette.background.default}`,
  },
}));

export const NavigationListItemButtonStyled = styled(ListItemButton, {
  name: 'ESNavigation',
  slot: 'MenuItemButton',
})<NavigationListItemButtonProps>(({ theme, nested, selected }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-start',
  flexGrow: 1,
  appearance: 'none',
  backgroundColor: 'none',
  border: 'none',
  borderRadius: theme.shape.border.radius['1'],
  cursor: 'pointer',
  // eslint-disable-next-line no-nested-ternary
  color: selected
    ? theme.palette.primary.text
    : !isTrue(nested)
    ? theme.palette.text.primary
    : theme.palette.text.subdued,
  fontSize: theme.font.size['200'],
  fontWeight: theme.font.weight.semibold,
  lineHeight: theme.font.lineHeight['6'],
  margin: `0 ${theme.space['2']}`,
  padding: `0 ${theme.space['1']} 0 ${
    !isTrue(nested) ? theme.space['3'] : theme.space['10']
  }`,
  textAlign: 'center',
  textDecoration: 'none',

  '&.Mui-selected': {
    backgroundColor: theme.palette.background.selected,
  },

  '&.Mui-selected:hover': {
    backgroundColor: theme.palette.background.hovered,
  },

  '&:before': selected && {
    content: '""',
    position: 'absolute',
    top: '0.0625rem',
    bottom: '0.0625rem',
    width: '0.1875rem',
    left: `calc(${theme.space['2']} * -1)`,
    borderTopRightRadius: theme.shape.border.radius['1'],
    borderBottomRightRadius: theme.shape.border.radius['1'],
    background: theme.palette.primary.main,
  },

  '& svg': {
    color: selected ? theme.palette.primary.main : theme.palette.icon.default,
  },

  [theme.breakpoints.up('md')]: {
    fontWeight: theme.font.weight.medium,
    lineHeight: theme.font.lineHeight['5'],
  },

  '&:hover': {
    background: theme.palette.background.hovered,
  },
}));

export const NavigationListItemButtonTextStyled = styled(Box, {
  name: 'ESNavigation',
  slot: 'MenuItemButtonText',
})(({ theme }) => ({
  flex: '1 1 auto',
  fontSize: theme.font.size['100'],
  textAlign: 'left',
  lineHeight: theme.font.lineHeight['2'],
  marginBottom: `calc(${theme.space['2']} + ${theme.space['05']})`,
  marginTop: `calc(${theme.space['2']} + ${theme.space['05']})`,
  [theme.breakpoints.up('md')]: {
    marginBottom: theme.space['1'],
    marginTop: theme.space['1'],
  },
}));

export const NavigationListItemButtonIconStyled = styled(Box, {
  name: 'ESNavigation',
  slot: 'MenuItemButtonIcon',
})<NavigationListItemButtonIconProps>(({ theme, selected }) => ({
  alignSelf: 'flex-start',
  flexShrink: 0,
  height: '1.25rem',
  width: '1.25rem',
  marginBottom: `calc(${theme.space['2']} + ${theme.space['05']})`,
  marginTop: `calc(${theme.space['2']} + ${theme.space['05']})`,
  marginRight: theme.space['2'],
  [theme.breakpoints.up('md')]: {
    marginBottom: theme.space['1'],
    marginTop: theme.space['1'],
    marginRight: theme.space['2'],
  },

  '& svg': {
    display: 'block',
    height: '1.25rem',
    width: '1.25rem',
    margin: 'auto',
    maxHeight: '100%',
    maxWidth: '100%',
    color: selected ? theme.palette.primary.main : undefined,
  },
}));

export const NavigationSettingsHolderStyled = styled(Box, {
  name: 'ESNavigation',
  slot: 'SettingsHolder',
})(({ theme }) => ({
  bottom: 0,
  width: '100%',
  paddingTop: theme.space['4'],
  position: 'absolute',
  zIndex: 1,
}));
