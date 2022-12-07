import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const FormLayoutGroupStyled = styled(Box, {
  name: 'ESFormLayoutGroup',
  slot: 'Root',
})(({ theme }) => ({
  fontSize: theme.font.size[94],
}));

export const FormLayoutGroupTitle = styled(Box, {
  name: 'ESFormLayoutGroup',
  slot: 'Root',
})(({ theme }) => ({
  marginBottom: `calc(${theme.space[2]}*-1)`,
  padding: `${theme.space[4]} ${theme.space[5]} 0`,
}));

export const FormLayoutGroupHelpText = styled(Box, {
  name: 'ESFormLayoutGroup',
  slot: 'Root',
})(({ theme }) => ({
  color: theme.palette.info[800],
  padding: `${theme.space[2]} ${theme.space[5]} 0`,
  paddingTop: theme.space[2],
}));

export const FormLayoutItems = styled(Box, {
  name: 'ESFormLayout',
  slot: 'Root',
})(() => ({
  display: 'flex',
  flexWrap: 'wrap',
}));

export default FormLayoutGroupStyled;
