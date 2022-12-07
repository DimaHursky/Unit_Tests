import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const ESChoiceListStyled = styled('fieldset', {
  name: 'ESChoiceList',
  slot: 'Root',
})(() => ({
  margin: 0,
  padding: 0,
  border: 'none',
}));

export const ChoiceListTitleStyled = styled('legend', {
  name: 'ESChoiceList',
  slot: 'Root',
})(({ theme }) => ({
  display: 'block',
  margin: `0 0 ${theme.space[1]}`,
  padding: 0,
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.space[5],
  },
}));

export const ChoiceListTextStyled = styled('span', {
  name: 'ESChoiceList',
  slot: 'Root',
})(({ theme }) => ({
  fontSize: theme.font.size[100],
  lineHeight: theme.font.lineHeight[2],
}));

export const ChoiceItemStyled = styled('li', {
  name: 'ESChoiceList',
  slot: 'Root',
})(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.space[5],
  },
}));

export const ChoicesStyled = styled('ul', {
  name: 'ESChoiceList',
  slot: 'Root',
})(() => ({
  margin: 0,
  padding: 0,
  listStyle: 'none',
}));

export const ChoiceListError = styled(Box, {
  name: 'ESChoiceList',
  slot: 'Root',
})(({ theme }) => ({
  marginTop: theme.space[1],
  marginBottom: theme.space[2],
  [theme.breakpoints.down('md')]: {
    marginTop: theme.space[4],
  },
}));

export const ChoiceChildren = styled(Box, {
  name: 'ESChoiceList',
  slot: 'Root',
})(({ theme }) => ({
  marginBottom: theme.space[2],
  paddingLeft: `calc(${theme.space[2]} + ${theme.space[5]})`,
}));

export default ESChoiceListStyled;
