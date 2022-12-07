import { styled } from '@mui/material/styles';
import { CardContent, CardContentProps } from '@mui/material';

const ESCardContentStyled = styled(CardContent, {
  name: 'MuiCardContent',
  slot: 'Root',
})<CardContentProps>(({ theme }) => ({
  padding: theme.space['4'],
  [theme.breakpoints.up('sm')]: {
    padding: theme.space['5'],
  },
  '&:last-child': {
    borderBottomLeftRadius: theme.shape.border.radius['2'],
    borderBottomRightRadius: theme.shape.border.radius['2'],
    padding: theme.space['5'],
  },
  '&:first-child': {
    borderTopLeftRadius: theme.shape.border.radius['2'],
    borderTopRightRadius: theme.shape.border.radius['2'],
  },
  '& + &': {
    borderTop: `${theme.shape.border.width['1']} solid ${theme.palette.divider}`,
    '@media print': {
      borderTop: 0,
    },
  },
  '@media print': {
    paddingTop: theme.space['1'],
    paddingBottom: theme.space['1'],
  },
}));

export default ESCardContentStyled;
