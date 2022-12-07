import { styled } from '@mui/material/styles';
import { InputUnstyled } from '@mui/base';
import { Box } from '@mui/material';

const ESRadioButtonStyled = styled(InputUnstyled, {
  name: 'ESRadioButton',
  slot: 'Root',
})(() => ({
  position: 'absolute',
  width: 0,
  height: 0,
  margin: 0,
  padding: 0,
  top: 0,
  border: 0,
  overflow: 'hidden',
}));

export const RadioStyled = styled('span', {
  name: 'ESRadioButton',
  slot: 'Root',
})(({ theme }) => ({
  position: 'relative',
  margin: theme.space['025'],

  '.MuiInput-root.Mui-checked + .backdrop': {
    borderColor: theme.palette.secondary.main,
  },
  '.MuiInput-root.Mui-checked + .backdrop::before': {
    transition: `opacity ${theme.transitions.duration[150]} ${theme.transitions.easing.ease}, transform ${theme.transitions.duration[150]} ${theme.transitions.easing.ease}`,
    opacity: 1,
    transform: `translate(-50%, -50%) scale(1)`,
  },
  '.MuiInput-root.Mui-disabled + .backdrop': {
    borderColor: theme.palette.info[400],
    cursor: 'default',
  },
  '.MuiInput-root.Mui-disabled + .backdrop::before': {
    backgroundColor: theme.palette.info[400],
  },
}));

export const ChoiceControlStyled = styled('span', {
  name: 'ESRadioButton',
  slot: 'Root',
})(({ theme }) => ({
  display: 'flex',
  flex: '0 0 auto',
  alignItems: 'stretch',
  width: theme.font.lineHeight[2],
  height: theme.font.lineHeight[2],
  marginRight: theme.space[2],
  '& > *': {
    width: '100%',
  },
}));

export const ChoiceBtnStyled = styled('label', {
  name: 'ESRadioButton',
  slot: 'Root',
})(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  padding: `${theme.space[1]} 0`,
  cursor: 'pointer',
  [theme.breakpoints.up('sm')]: {
    display: 'inline-flex',
  },
  '&.disabled': {
    cursor: 'default',
  },
}));

export const ChoiceLabelStyled = styled('span', {
  name: 'ESRadioButton',
  slot: 'Root',
})(({ theme }) => ({
  '&.disabled': {
    color: theme.palette.text.disabled,
  },
}));

export const ChoiceListTextStyled = styled('span', {
  name: 'ESRadioButton',
  slot: 'Root',
})(({ theme }) => ({
  fontSize: theme.font.size[100],
  lineHeight: theme.font.lineHeight[2],
}));

export const RadioButtonBackdropStyled = styled('span', {
  name: 'ESRadioButton',
  slot: 'Root',
})(({ theme }) => ({
  position: 'relative',
  display: 'block',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  border: `${theme.shape.border.width[2]} solid ${theme.palette.icon.subdued}`,
  borderRadius: '50%',
  backgroundColor: theme.palette.common.white,
  transition: `border-color ${theme.transitions.duration[100]} ${theme.transitions.easing.ease}`,

  '::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    opacity: 0,
    transform: `translate(-50%, -50%) scale(0.1)`,
    transformOrigin: '50% 50%',
    height: theme.space[2],
    width: theme.space[2],
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '50%',
    transition: `opacity ${theme.transitions.duration[100]} ${theme.transitions.easing.ease}, transform ${theme.transitions.duration[100]} ${theme.transitions.easing.ease}`,
  },

  '::after': {
    content: '""',
    position: 'absolute',
    zIndex: 1,
    top: `calc(${theme.space['05']}*-1 + -0.0625rem)`,
    right: `calc(${theme.space['05']}*-1 + -0.0625rem)`,
    bottom: `calc(${theme.space['05']}*-1 + -0.0625rem)`,
    left: `calc(${theme.space['05']}*-1 + -0.0625rem)`,
    display: 'block',
    pointerEvents: 'none',
    boxShadow: `0 0 0 calc(${theme.space['05']}*-1 + -0.0625rem) ${theme.palette.secondary.light}`,
    transition: `box-shadow ${theme.transitions.duration[100]} ${theme.transitions.easing.ease}`,
    borderRadius: '50%',
  },
}));

export const ChoiceDescriptionStyled = styled(Box, {
  name: 'ESRadioButton',
  slot: 'Root',
})(({ theme }) => ({
  paddingLeft: `calc(${theme.space[2]} + ${theme.space[5]})`,
  [theme.breakpoints.down('md')]: {
    paddingLeft: `calc(${theme.space[2]} + 1.375rem)`,
  },
}));

export default ESRadioButtonStyled;
