import { styled } from '@mui/material/styles';
import { Box, InputBase } from '@mui/material';
import { ESButton } from '../ESButton';

export const Connected = styled(Box, {
  name: 'ESESTextField',
  slot: 'Root',
})(() => ({
  display: 'flex',
  position: 'relative',
}));

export const ConnectedItem = styled(Box, {
  name: 'ESESTextField',
  slot: 'Root',
})(({ theme }) => ({
  position: 'relative',
  flex: '0 0 auto',
  zIndex: 10,
  ':not(:first-of-type)': {
    marginLeft: theme.space[1],
  },
  '&.primary': {
    flex: '1 1 auto',
    zIndex: 20,
  },
}));

export const TextFieldWrapper = styled(Box, {
  name: 'ESESTextField',
  slot: 'Root',
})(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  border: 'none',
  alignItems: 'center',
  fontSize: theme.font.size[200],
  fontWeight: theme.font.weight.regular,
  lineHeight: theme.font.lineHeight[3],
  color: theme.palette.text.primary,
  cursor: 'text',
  'input::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
    appearance: 'none',
    margin: 0,
  },
  '.MuiInputBase-root.Mui-focused ~ .backdrop::after': {
    boxShadow: `0 0 0 0.125rem ${theme.palette.secondary.light}`,
    outline: `${theme.shape.border.width[1]} solid transparent`,
  },
  '.prefix + .MuiInputBase-root': {
    paddingLeft: 0,
  },
  '.suffixed': {
    paddingRight: 0,
  },
  '.multiline': {
    overflow: 'auto',
    paddingLeft: theme.space[3],
    paddingRight: theme.space[3],
    resize: 'none',
  },
  '.MuiInputBase-root.Mui-error ~ .backdrop': {
    backgroundColor: theme.palette.error[100],
    borderColor: theme.palette.error[400],
  },
  '&.multiline': {
    padding: 0,
    flexWrap: 'wrap',
  },
}));

const ESTextFieldStyled = styled(InputBase, {
  name: 'ESESTextField',
  slot: 'Root',
})(({ theme }) => ({
  display: 'block',
  position: 'relative',
  width: '100%',
  flex: '1 1',
  minWidth: 0,
  minHeight: '2.25rem',
  margin: 0,
  padding: `calc((2.25rem - ${theme.font.lineHeight[3]} - ${theme.space['05']})/2) ${theme.space[3]}`,
  boxSizing: 'border-box',
  fontSize: theme.font.size[200],
  fontWeight: theme.font.weight.regular,
  lineHeight: theme.font.lineHeight[3],
  background: 'none',
  border: `${theme.shape.border.width[1]} solid transparent`,
  appearance: 'none',
  caretColor: theme.palette.text.primary,
  zIndex: 20,
  input: {
    padding: 0,
    ':focus': {
      outline: 'none',
    },
  },
}));

export const TextFieldLabelWrapper = styled(Box, {
  name: 'ESESTextField',
  slot: 'Root',
})(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  marginBottom: theme.space[1],
  wordBreak: 'break-word',
  overflowWrap: 'break-word',
}));

export const TextFieldSpinner = styled(Box, {
  name: 'ESESTextField',
  slot: 'Root',
})(({ theme }) => ({
  margin: `calc(0.125rem + ${theme.shape.border.width[1]})`,
  color: theme.palette.info[900],
  display: 'flex',
  alignSelf: 'stretch',
  flexDirection: 'column',
  width: '1.375rem',
  cursor: 'pointer',
  zIndex: 20,
}));

export const TextFieldSegment = styled(Box, {
  name: 'ESESTextField',
  slot: 'Root',
})(({ theme }) => ({
  background: theme.palette.surface.neutral,
  borderRadius: `calc(${theme.shape.border.radius[1]} - 0.125rem)`,
  display: 'flex',
  flex: '1 1',
  justifyContent: 'center',
  alignItems: 'center',
  appearance: 'none',
  border: 'none',
  ':first-of-type': {
    borderTopRightRadius: `calc(${theme.shape.border.radius[1]} - 0.125rem)`,
    marginBottom: '0.125rem',
  },
  ':not(:first-of-type)': {
    marginTop: 0,
  },
  ':last-child': {
    borderBottomRightRadius: `calc(${theme.shape.border.radius[1]} - 0.125rem)`,
  },
}));

export const SpinnerIcon = styled(Box, {
  name: 'ESESTextField',
  slot: 'Root',
})(({ theme }) => ({
  height: '0.75rem',
  width: '0.75rem',
  svg: {
    fontSize: theme.font.size[200],
  },
}));

export const IconWrapper = styled('span', {
  name: 'ESESTextField',
  slot: 'Root',
})(() => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  height: '1.25rem',
  width: '1.25rem',
  maxHeight: '100%',
  maxWidth: '100%',
  margin: 'auto',
}));

export const TextFieldBackdrop = styled(Box, {
  name: 'ESESTextField',
  slot: 'Root',
})(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: theme.palette.common.white,
  border: `${theme.shape.border.width[1]} solid ${theme.palette.info[200]}`,
  borderTopColor: theme.palette.info[600],
  borderRadius: theme.shape.border.radius[1],
  pointerEvents: 'none',
  zIndex: 10,
  ':after': {
    content: '""',
    position: 'absolute',
    zIndex: 1,
    top: '-0.125rem',
    right: '-0.125rem',
    bottom: '-0.125rem',
    left: '-0.125rem',
    display: 'block',
    pointerEvents: 'none',
    boxShadow: `0 0 0 -0.125rem ${theme.palette.secondary.light}`,
    borderRadius: `calc(${theme.shape.border.radius[1]} + 0.0625rem)`,
  },
}));

export const Prefix = styled(Box, {
  name: 'ESESTextField',
  slot: 'Root',
})(({ theme }) => ({
  marginLeft: theme.space[3],
  marginRight: theme.space[2],
  zIndex: 20,
  color: theme.palette.info[800],
}));

export const Suffix = styled(Box, {
  name: 'ESESTextField',
  slot: 'Root',
})(({ theme }) => ({
  marginLeft: theme.space[1],
  marginRight: theme.space[3],
  zIndex: 20,
  color: theme.palette.info[800],
}));

export const ClearButton = styled(ESButton, {
  name: 'ESESTextField',
  slot: 'Root',
})(({ theme }) => ({
  minHeight: 0,
  minWidth: 0,
  padding: 0,
  margin: `0 ${theme.space[3]} 0 ${theme.space[1]}`,
  zIndex: 20,
  ':focus': {
    outline: 'none',
  },
  ':focus-visible': {
    boxShadow: `0 0 0 -0.125rem ${theme.palette.secondary.light}`,
    borderRadius: `calc(${theme.shape.border.radius[1]} + ${theme.shape.border.width[1]})`,
  },
}));

export const CharacterCount = styled(Box, {
  name: 'ESESTextField',
  slot: 'Root',
})(({ theme }) => ({
  margin: `0 ${theme.space[3]} 0 ${theme.space[1]}`,
  color: theme.palette.text.subdued,
  textAlign: 'right',
  zIndex: 20,
  pointerEvents: 'none',
  '&.alignBottom': {
    alignSelf: 'flex-end',
    width: '100%',
    paddingBottom: theme.space[2],
  },
}));

export default ESTextFieldStyled;
