import { styled } from '@mui/material/styles';
import { CardHeader, CardHeaderProps } from '@mui/material';

const ESCardHeaderStyled = styled(CardHeader, {
  name: 'MuiCardHeader',
  slot: 'Root',
})<CardHeaderProps>(({ theme }) => ({
  padding: `${theme.space['5']} ${theme.space['5']} 0`,
  '& .MuiCardHeader-title': {
    fontSize: '1.0625rem',
    [theme.breakpoints.up('md')]: {
      ...theme.typography.h6,
    },
  },
  '& .MuiCardHeader-action': {
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
  },
  '& .MuiCardHeader-subheader': {
    ...theme.typography.caption,
    color: 'inherit',
    paddingTop: theme.space['1'],
  },
}));

export default ESCardHeaderStyled;
