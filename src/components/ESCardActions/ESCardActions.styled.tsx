import { styled } from '@mui/material/styles';
import { CardActions, CardActionsProps } from '@mui/material';

const ESCardActionsStyled = styled(CardActions, {
  name: 'MuiCardActions',
  slot: 'Root',
})<CardActionsProps>(({ theme, ...rest }) => ({
  padding: `0 ${theme.space['4']} ${theme.space['4']}`,
  justifyContent: 'flex-end',
  flexWrap: 'wrap',
  [theme.breakpoints.up('sm')]: {
    padding: `0 ${theme.space['5']} ${theme.space['5']}`,
  },
  ...(!rest.disableSpacing && {
    '& > :not(:first-of-type)': {
      marginLeft: theme.space['2'],
    },
  }),
}));

export default ESCardActionsStyled;
