import { styled } from '@mui/material/styles';
import { Box, Checkbox } from '@mui/material';

const ESCheckboxStyled = styled('label', {
  name: 'ESCheckbox',
  slot: 'Root',
})(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  padding: `${theme.space[1]} 0`,
  [theme.breakpoints.up('sm')]: {
    display: 'inline-flex',
  },
}));

export const CheckboxControl = styled('span', {
  name: 'ESCheckbox',
  slot: 'Root',
})(({ theme }) => ({
  display: 'flex',
  height: theme.space[5],
  width: theme.space[5],
  marginRight: theme.space[2],
  flex: '0 0 auto',
  alignItems: 'stretch',
  '& > *': {
    width: '100%',
  },
  [theme.breakpoints.down('md')]: {
    height: '1.375rem',
    width: '1.375rem',
  },
}));

export const CheckboxStyled = styled('span', {
  name: 'ESCheckbox',
  slot: 'Root',
})(({ theme }) => ({
  margin: theme.space['025'],
  position: 'relative',

  '.MuiCheckbox-root.Mui-checked ~ .backdrop::before': {
    opacity: 1,
    transform: 'scale(1)',
  },
  '.MuiCheckbox-root.Mui-disabled ~ .backdrop::before': {
    backgroundColor: theme.palette.info[400],
  },
  '.MuiCheckbox-root.Mui-disabled ~ .backdrop': {
    borderColor: theme.palette.info[400],
  },
  '.MuiCheckbox-root.Mui-checked ~ .checkboxIcon': {
    transition: `opacity ${theme.transitions.duration[150]} ${theme.transitions.easing.ease}, transform ${theme.transitions.duration[150]} ${theme.transitions.easing.ease}`,
    transform: `translate3d(-50%, -50%, 0) scale(1)`,
    opacity: 1,
  },
}));

export const CheckboxInput = styled(Checkbox, {
  name: 'ESCheckbox',
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

export const CheckboxBackdrop = styled('span', {
  name: 'ESCheckbox',
  slot: 'Root',
})(({ theme }) => ({
  display: 'block',
  width: '100%',
  height: '100%',
  position: 'relative',
  backgroundColor: theme.palette.common.white,
  border: `${theme.shape.border.width[2]} solid ${theme.palette.text.disabled}`,
  borderRadius: theme.shape.border.radius[1],

  ':before': {
    content: '""',
    position: 'absolute',
    top: `calc(${theme.shape.border.width[2]}*-1)`,
    right: `calc(${theme.shape.border.width[2]}*-1)`,
    bottom: `calc(${theme.shape.border.width[2]}*-1)`,
    left: `calc(${theme.shape.border.width[2]}*-1)`,
    borderRadius: theme.shape.border.radius[1],
    backgroundColor: theme.palette.secondary.main,
    opacity: 0,
    transform: `scale(0.25)`,
    transition: `opacity ${theme.transitions.duration[100]} ${theme.transitions.easing.ease}, ${theme.transitions.duration[100]} ${theme.transitions.easing.ease}`,
  },
  ':after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: `calc(${theme.shape.border.width[2]}*-1 + -${theme.shape.border.width[1]})`,
    right: `calc(${theme.shape.border.width[2]}*-1 + -${theme.shape.border.width[1]})`,
    bottom: `calc(${theme.shape.border.width[2]}*-1 + -${theme.shape.border.width[1]})`,
    left: `calc(${theme.shape.border.width[2]}*-1 + -${theme.shape.border.width[1]})`,
    pointerEvents: 'none',
    boxShadow: `0 0 0 calc(${theme.shape.border.width[2]}*-1 + -${theme.shape.border.width[1]}) ${theme.palette.secondary.light}`,
    transition: `box-shadow ${theme.transitions.duration[100]} ${theme.transitions.easing.ease}`,
    borderRadius: `calc(${theme.shape.border.width[2]} + ${theme.shape.border.width[1]})`,
    zIndex: 1,
  },

  '&.error::before': {
    backgroundColor: theme.palette.critical.borderDefault,
  },
}));

export const CheckboxIcon = styled('span', {
  name: 'ESCheckbox',
  slot: 'Root',
})(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transformOrigin: '50% 50%',
  pointerEvents: 'none',
  transform: `translate3d(-50%, -50%, 0) scale(0.25)`,
  opacity: 0,
  transition: `opacity ${theme.transitions.duration[100]} ${theme.transitions.easing.ease}, transform ${theme.transitions.duration[100]} ${theme.transitions.easing.ease}`,
  svg: {
    fontSize: '1rem',
    fill: theme.palette.common.white,
  },
}));

export const CheckboxDescription = styled(Box, {
  name: 'ESCheckbox',
  slot: 'Root',
})(({ theme }) => ({
  paddingLeft: `calc(${theme.space[2]} + ${theme.space[5]})`,
}));

export default ESCheckboxStyled;
