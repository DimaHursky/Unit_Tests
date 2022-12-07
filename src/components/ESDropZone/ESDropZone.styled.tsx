import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { ErrorOutline } from '@mui/icons-material';
import { focusRing, resetAfter } from './utils/mixins';

const dropzoneBorderStyle = 'dashed';
const dropZoneMinHeightLarge = '7.5rem'; // 120px
const dropZoneMinHeightMedium = '6.25rem'; // 100px
const dropZoneMinHeightSmall = '3.125rem'; // 50px

export const ContainerStyled = styled(Box, {
  name: 'DropZoneContainer',
  slot: 'Root',
})(({ theme }) => ({
  ...focusRing(theme, undefined, 1),
  flex: 1,
}));

const ESDropZoneStyled = styled(Box, {
  name: 'ESDropZone',
  slot: 'Root',
})(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: theme.palette.surface.default,
  borderRadius: theme.shape.border.radius[1],

  '&:after': {
    content: '""',
    position: 'absolute',
    zIndex: 29,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    border: `${theme.shape.border.width[1]} ${dropzoneBorderStyle} transparent`,
    borderRadius: theme.shape.border.radius[1],
    pointerEvents: 'none',
  },
  '&:not(.focused):after': resetAfter(theme),
  '&:hover': {
    outline: `${theme.shape.border.width[1]} solid transparent`,
  },

  '&.hasOutline': {
    padding: theme.space['025'],
    ':after': {
      borderColor: theme.palette.border.neutralSubdued,
    },

    '&:not(.isDisabled):hover': {
      cursor: 'pointer',
      backgroundColor: theme.palette.surface.subdued,
      ':after': {
        borderColor: theme.palette.interactive.hovered,
      },
    },

    '&:not(.focused):after': {
      ...resetAfter(theme),
      borderRadius: theme.shape.border.radius.large,
      borderColor: theme.palette.border.neutralSubdued,
    },
  },

  '&.isDragging:not(.isDisabled)': {
    backgroundColor: theme.palette.surface.hovered,
  },

  '&.isDisabled': {
    cursor: 'not-allowed',
    '&:after': {
      borderColor: `${theme.palette.border.disabled} !important`,
    },
  },

  '&.sizeLarge': {
    minHeight: dropZoneMinHeightLarge,
  },

  '&.sizeMedium': {
    minHeight: dropZoneMinHeightMedium,
    alignItems: 'center',
  },

  '&.sizeSmall': {
    padding: 0,
    alignItems: 'center',
    minHeight: dropZoneMinHeightSmall,
  },

  '&.measuring': {
    visibility: 'hidden',
    minHeight: 0,
  },

  '&.focused:not(.isDisabled)': {
    '[class$="DropZoneContainer-root"]': {
      ...focusRing(theme, 'focused'),
    },
  },
}));

export const OverlayStyled = styled(Box, {
  name: 'DropZoneOverlay',
  slot: 'Root',
})(({ theme }) => ({
  borderRadius: theme.shape.border.radius.large,
  position: 'absolute',
  zIndex: 30,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.space[4],
  border: `${theme.shape.border.width[1]} ${dropzoneBorderStyle} ${theme.palette.secondary.main}`,
  textAlign: 'center',
  color: theme.palette.secondary.main,
  backgroundColor: theme.palette.surface.selected,
  pointerEvents: 'none',

  '[class$="ESDropZone-root"].hasError &': {
    borderColor: theme.palette.critical.borderDefault,
    color: theme.palette.critical.text,
    backgroundColor: theme.palette.critical.surfaceSubdued,
  },
  '[class$="ESDropZone-root"].sizeSmall &': {
    padding: 0,
  },
}));

export const ErrorIconStyled = styled(ErrorOutline)(({ theme }) => ({
  color: theme.palette.critical.icon,
}));

export const LabelWrapperStyled = styled(Box, {
  name: 'LabelWrapper',
  slot: 'ESSelect',
})(({ theme }) => ({
  wordBreak: 'break-word',
  overflowWrap: 'break-word',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.space['1'],
}));

export default ESDropZoneStyled;
