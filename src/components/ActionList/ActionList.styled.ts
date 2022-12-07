import { styled } from '@mui/material/styles';
import { MenuList, ListItemIcon, Box } from '@mui/material';
import { IconItemProps } from './ActionList.types';

export const ActionListWrapperStyled = styled(Box, {
  name: 'ESuiActionList',
  slot: 'Root',
})(() => ({
  margin: 0,
  padding: 0,
  outline: 'none',
  listStyle: 'none',
}));

const ActionListStyled = styled(MenuList, {
  name: 'ESuiActionList',
  slot: 'Root',
})(({ theme }) => ({
  margin: 0,
  padding: theme.space['2'],
  lineHeight: theme.font.lineHeight['2'],
  outline: 'none',
}));

export const SectionTitleStyled = styled('p', {
  name: 'ESuiActionList',
  slot: 'Root',
})(({ theme }) => ({
  margin: 0,
  padding: `${theme.space['3']} ${theme.space['4']} ${theme.space['3']} ${theme.space['4']}`,
  fontSize: '0.8125rem',
  fontWeight: theme.font.weight.semibold,
  lineHeight: theme.font.lineHeight['1'],
  color: theme.palette.text.primary,
  textTransform: 'uppercase',
  textAlign: 'left',
}));

export const ActionItemStyled = styled('button', {
  name: 'ESuiActionList',
  slot: 'Root',
})(({ theme }) => ({
  display: 'flex',
  width: '100%',
  minHeight: theme.font.lineHeight['6'],
  alignItems: 'flex-start',
  padding: `calc((${theme.space['10']} - ${theme.font.lineHeight['2']})/2) ${theme.space['2']}`,
  lineHeight: theme.font.lineHeight['2'],
  fontSize: theme.font.size['94'],
  color: theme.palette.text.primary,
  border: 'none',
  borderTop: `${theme.shape.border.width['1']} solid transparent`,
  borderRadius: theme.shape.border.width['4'],
  background: 'none',
  textDecoration: 'none',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  ':hover': {
    backgroundColor: theme.palette.background.default,
  },
  ':focus-visible': {
    outline: `${theme.shape.border.width['3']} solid transparent`,
    boxShadow: `0 0 0 ${theme.shape.border.width['2']} ${theme.palette.secondary.light}`,
  },
  ':active': {
    backgroundColor: theme.palette.info.light,
    '& svg': {
      fill: theme.palette.secondary.main,
    },
  },
}));

export const IconItemStyled = styled(ListItemIcon, {
  name: 'ESuiActionList',
  slot: 'Root',
})<IconItemProps>(({ theme, ...rest }) => ({
  display: 'flex',
  minWidth: 0,
  margin:
    rest.type === 'icon'
      ? `0 ${theme.space['4']} calc(${theme.font.size['300']}*-0.5) 0`
      : `0 0 0 ${theme.space['4']}`,
  alignItems: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
}));

export default ActionListStyled;
