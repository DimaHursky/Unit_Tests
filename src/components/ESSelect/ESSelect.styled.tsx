import { styled } from '@mui/material/styles';
import {
  Box,
  InputBase,
  ListSubheader,
  ListSubheaderProps,
  MenuItem,
  MenuItemProps,
  Select,
  SelectProps,
} from '@mui/material';

export const SelectInputStyled = styled(InputBase)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  '& .MuiInputBase-input': {
    minHeight: '2.25rem',
    borderRadius: theme.shape.border.radius['1'],
    width: '100%',
    lineHeight: theme.font.lineHeight['2'],
    fontWeight: theme.font.weight.regular,
    color: theme.palette.text.primary,
    position: 'relative',
    fontSize: theme.font.size['100'],
    cursor: 'auto',
    boxShadow: theme.shadows['5'],
    border: `${theme.shape.border.width[1]} solid #c9cccf`,
    borderBottomColor: '#babfc4',
    '&:focus': {
      outlineOffset: '0.1rem',
      borderRadius: theme.shape.border.radius['1'],
      outline: ['0.15rem solid', theme.palette.secondary.light].join(' '),
      boxShadow: 'none',
    },
  },
}));

const ESSelectStyled = styled(Select)<SelectProps>(({ theme }) => ({
  '& .MuiSelect-select': {
    padding: `
      calc((2.25rem - ${theme.font.lineHeight['3']} - ${theme.space['05']})/2)
      ${theme.space['2']}
      calc((2.25rem - ${theme.font.lineHeight['3']} - ${theme.space['05']})/2)
      ${theme.space['3']}`,
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    minWidth: '240px',
    backgroundColor: theme.palette.background.paper,
    '&.MuiInputBase-input.MuiSelect-select': {
      minHeight: '2.25rem',
      paddingRight: '2rem',
    },
  },
  '&.Mui-error > .MuiSelect-select': {
    backgroundColor: theme.palette.error[100],
    borderColor: theme.palette.error[400],
  },
}));

export const SelectIconStyled = styled(Box)(() => ({
  position: 'absolute',
  right: '0.5rem',
  top: '50%',
  transform: 'translateY(-50%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'auto',
  pointerEvents: 'none',
}));

export const ListSubheaderStyled = styled(ListSubheader, {
  name: 'MuiListSubheader',
  slot: 'Root',
})<ListSubheaderProps>(({ theme }) => ({
  color: theme.palette.text.primary,
  lineHeight: theme.font.lineHeight['1'],
  fontSize: theme.font.size['200'],
  fontWeight: theme.font.weight.semibold,
  padding: '0.75rem 1rem 0.5rem',
}));

export const MenuItemStyled = styled(MenuItem, {
  name: 'MuiMenuItem',
  slot: 'Root',
})<MenuItemProps>(({ theme }) => ({
  minHeight: 'auto',
  ...theme.typography.subtitle1,
  padding: '0.3rem 1rem 0.3rem 1.5rem',
  '&:hover': {
    backgroundColor: theme.palette.background.hovered,
  },
  '&.Mui-selected': {
    // @FIXME:COLOR
    backgroundColor: '#458fff14',
    '&:hover': {
      // @FIXME:COLOR
      backgroundColor: '#458fff1f',
    },
    '&.Mui-focusVisible': {
      // @FIXME:COLOR
      backgroundColor: '#458fff1f',
    },
  },
  '.MuiSelect-select &': {
    padding: '0',
    ':hover': {
      backgroundColor: 'transparent',
      cursor: 'auto',
    },
  },
}));

export const LabelWrapperStyled = styled(Box, {
  name: 'LabelWrapper',
  slot: 'ESSelect',
})(({ theme }) => ({
  wordBreak: 'break-word',
  overflowWrap: 'break-word',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.space['1'],
}));

export const PrefixStyled = styled(Box, {
  name: 'Prefix',
  slot: 'ESSelect',
})(({ theme }) => ({
  paddingRight: theme.space['2'],
  display: 'flex',
  alignItems: 'center',
}));

export const InlineLabelStyled = styled(Box, {
  name: 'InlineLabel',
  slot: 'ESSelect',
})(({ theme }) => ({
  paddingRight: theme.space['1'],
  display: 'flex',
  alignItems: 'center',
}));

export const LabelTypographyStyled = styled(Box, {
  name: 'Label',
  slot: 'ESSelect',
})(({ theme }) => ({
  ...theme.typography.subtitle1,
  color: theme.palette.text.subdued,
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  margin: 0,
  paddingRight: theme.space['1'],
  textAlign: 'inherit',
  display: 'flex',
  alignItems: 'center',
}));

export default ESSelectStyled;
