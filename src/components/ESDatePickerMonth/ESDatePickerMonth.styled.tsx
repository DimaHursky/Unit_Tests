import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const ESDatePickerMonthStyled = styled(Box, {
  name: 'ESDatePickerMonth',
  slot: 'Root',
})(({ theme }) => ({
  flex: '1 1 14.375rem',
  maxWidth: `calc(100% - ${theme.space[4]})`,
  minWidth: '14.375rem',
  marginLeft: theme.space[4],
  marginTop: theme.space[4],
}));

export const Month = styled('table', {
  name: 'ESDatePickerMonth',
  slot: 'Root',
})(() => ({
  width: '100%',
  border: 'none',
  borderCollapse: 'collapse',
  borderSpacing: 0,
  tableLayout: 'fixed',
}));

export const DatePickerCaption = styled('caption', {
  name: 'ESDatePickerMonth',
  slot: 'Root',
})(({ theme }) => ({
  flex: '1 1 auto',
  marginTop: theme.space['05'],
  paddingBottom: theme.space[1],
  fontSize: theme.font.size[100],
  textAlign: 'center',
  '&.current': {
    fontWeight: theme.font.weight.bold,
  },
}));

export const Weekday = styled('th', {
  name: 'ESDatePickerMonth',
  slot: 'Root',
})(({ theme }) => ({
  padding: theme.space[2],
  background: 'transparent',
  fontSize: theme.font.size[75],
  fontWeight: theme.font.weight.regular,
  color: theme.palette.text.subdued,
  textAlign: 'center',
  '&.current': {
    fontWeight: theme.font.weight.bold,
    color: theme.palette.text.primary,
  },
}));

export const Week = styled('tr', {
  name: 'ESDatePickerMonth',
  slot: 'Root',
})(({ theme }) => ({
  marginBottom: theme.space['05'],
}));

export default ESDatePickerMonthStyled;
