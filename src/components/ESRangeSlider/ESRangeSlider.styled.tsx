import { styled } from '@mui/material/styles';
import { SliderUnstyled } from '@mui/base';
import { Box } from '@mui/material';

const ESRangeSliderStyled = styled(Box, {
  name: 'ESESRangeSlider',
  slot: 'Root',
})(({ theme }) => ({
  fontSize: theme.font.size[94],
  '.MuiSlider-root.error > .MuiSlider-track': {
    backgroundColor: theme.palette.error.main,
  },
  '.MuiSlider-root.error > .MuiSlider-thumb': {
    borderColor: theme.palette.error.main,
    background: `linear-gradient(${theme.palette.error.main}, ${theme.palette.error.main})`,
  },
  '.MuiSlider-root.Mui-disabled': {
    cursor: 'not-allowed',
  },
  '.MuiSlider-root.Mui-disabled > .MuiSlider-rail': {
    backgroundImage: 'none',
    backgroundColor: theme.palette.info[300],
    borderRight: 0,
  },
  '.MuiSlider-root.Mui-disabled > .MuiSlider-track': {
    backgroundColor: theme.palette.info[300],
  },
  '.MuiSlider-root.Mui-disabled > .MuiSlider-thumb': {
    background: 'none',
    backgroundColor: theme.palette.info[300],
  },
}));

export const RangeSliderWrapper = styled(Box, {
  name: 'ESESRangeSlider',
  slot: 'Root',
})(() => ({
  display: 'flex',
  alignItems: 'center',
}));

export const SliderStyled = styled(SliderUnstyled, {
  name: 'ESESRangeSlider',
  slot: 'Root',
})(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  width: '100%',
  padding: `${theme.space[3]} 0 `,
  height: theme.space[4],
  alignItems: 'center',
  cursor: 'pointer',
  '.MuiSlider-rail': {
    height: theme.space[1],
    width: '100%',
    backgroundImage: `linear-gradient(to right, ${theme.palette.text.disabled}, ${theme.palette.text.disabled} 50%, transparent 50%, transparent 100%)`,
    backgroundSize: `${theme.space[1]} ${theme.space[1]}`,
    borderRadius: `${theme.space[1]}`,
    borderRight: `${theme.space[1]}  ${theme.palette.text.disabled} solid`,
  },
  '.MuiSlider-track': {
    position: 'absolute',
    height: theme.space[1],
    backgroundColor: theme.palette.secondary.main,
    borderRadius: theme.space[1],
  },

  '.MuiSlider-thumb': {
    width: theme.space[4],
    height: theme.space[4],
    position: 'absolute',
    border: `${theme.space['025']} solid transparent`,
    borderRadius: '50%',
    background: `linear-gradient(${theme.palette.secondary.main}, ${theme.palette.secondary.main})`,
    boxShadow: ` 0 0 0 0 ${theme.palette.secondary.light}`,
    appearance: 'none',
    transition: `box-shadow ${theme.transitions.duration[100]} ${theme.transitions.easing.ease}`,
    transitionProperty: `border-color, box-shadow, transform`,
    transitionDuration: theme.transitions.duration[200],
    transitionTimingFunction: theme.transitions.easing.ease,
    '&.Mui-active input + .MuiSlider-valueLabel': {
      opacity: 1,
      visibility: 'visible',
      bottom: `calc(${theme.space[4]} + ${theme.space[6]} - ${theme.space[4]})`,
      '&.MuiSlider-valueLabelCircle': {
        transform: `translateY(calc(${theme.space[4]}*-1))`,
      },
    },
    '&.Mui-active': {
      transform: 'scale(1.5)',
    },
    '&.Mui-focusVisible': {
      borderColor: theme.palette.common.white,
      boxShadow: `0 0 0 ${theme.shape.border.width[2]} ${theme.palette.secondary.light}`,
    },
  },
  '.MuiSlider-valueLabel': {
    position: 'absolute',
    zIndex: 20,
    bottom: theme.space[4],
    opacity: 0,
    visibility: 'hidden',
    pointerEvents: 'none',
    transitionProperty: `opacity, visibility, bottom`,
    transitionDuration: theme.transitions.duration[200],
    transitionTimingFunction: theme.transitions.easing.ease,
    right: '-0.5rem',
    transform: 'scale(0.666)',
    '.MuiSlider-valueLabelCircle': {
      position: 'relative',
      display: 'flex',
      minWidth: theme.space[8],
      height: theme.space[8],
      padding: `0 ${theme.space[2]}`,
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: theme.shadows[8],
      backgroundColor: theme.palette.common.white,
      borderRadius: theme.shape.border.radius.base,
      transitionProperty: 'transform',
      transitionDuration: theme.transitions.duration[200],
      transitionTimingFunction: theme.transitions.easing.ease,
      outline: `${theme.shape.border.width[1]} solid transparent`,
      '.MuiSlider-valueLabelLabel': {
        fontSize: theme.font.size[75],
        lineHeight: theme.font.lineHeight[1],
        fontWeight: theme.font.weight.semibold,
        textAlign: 'center',
      },
    },
  },
}));

export const LabelWrapper = styled(Box, {
  name: 'ESESRangeSlider',
  slot: 'Root',
})(({ theme }) => ({
  display: 'flex',
  marginBottom: theme.space[1],
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  wordBreak: 'break-word',
  overflowWrap: 'break-word',
}));

export const RangeSliderPrefix = styled(Box, {
  name: 'ESESRangeSlider',
  slot: 'Root',
})(({ theme }) => ({
  flex: '0 0 auto',
  marginRight: theme.space[2],
}));

export const RangeSliderSuffix = styled(Box, {
  name: 'ESESRangeSlider',
  slot: 'Root',
})(({ theme }) => ({
  flex: '0 0 auto',
  marginLeft: theme.space[2],
}));

export default ESRangeSliderStyled;
