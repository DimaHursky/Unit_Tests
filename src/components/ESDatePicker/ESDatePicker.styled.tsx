import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { ESButton } from '../ESButton';

const ESDatePickerStyled = styled(Box, {
  name: 'ESDatePicker',
  slot: 'Root',
})(() => ({
  position: 'relative',
}));

export const MonthSwitcher = styled(ESButton, {
  name: 'ESDatePicker',
  slot: 'Root',
})(({ theme }) => ({
  ':hover > svg': {
    color: theme.palette.icon.hovered,
  },
}));

export const DatePickerHeader = styled(Box, {
  name: 'ESDatePicker',
  slot: 'Root',
})(({ theme }) => ({
  display: 'flex',
  position: 'absolute',
  width: '100%',
  justifyContent: 'space-between',
  top: theme.space[4],
  '& > button': {
    padding: 0,
  },
}));

export const DatePickerMonthWrapper = styled(Box, {
  name: 'ESDatePicker',
  slot: 'Root',
})(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  marginTop: `calc(${theme.space[4]}*-1)`,
  marginLeft: `calc(${theme.space[4]}*-1)`,
}));

export default ESDatePickerStyled;
