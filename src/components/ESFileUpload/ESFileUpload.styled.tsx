import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import { CSSObject } from '@emotion/serialize/dist/emotion-serialize.cjs';
import { Theme } from '@mui/material/styles/createTheme';
import { focusRing, recolorIcon } from '../ESDropZone/utils/mixins';

const ESFileUploadStyled = styled(Box, {
  name: 'ESFileUpload',
  slot: 'Root',
})(({ theme }) => ({
  padding: theme.space[4],
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',

  '&.large': {
    padding: theme.space[8],
  },
  '&.small': {
    padding: theme.space[3],
  },

  '& svg': {
    verticalAlign: 'bottom',
  },
}));

const baseBtnDisabled = (theme: Theme) =>
  ({
    ...recolorIcon(theme.palette.icon.disabled),
    transition: 'none',
    boxShadow: 'none',
    borderColor: theme.palette.border.disabled,
    background: theme.palette.surface.disabled,
    color: theme.palette.text.disabled,
  } as CSSObject);

export const UploadActionStyled = styled(Box, {
  name: 'UploadAction',
  slot: 'Root',
})(({ theme }) => ({
  ...focusRing(theme),
  display: 'inline-flex',
  justifyContent: 'center',
  flex: '0 0 auto',
  border: 'none',
  borderRadius: theme.shape.border.radius.base,
  padding: `${theme.space[1]} ${theme.space[2]}`,
  margin: 0,
  textDecoration: 'none',
  color: theme.palette.interactive.hovered,
  background: theme.palette.surface.selectedPressed,
  fontSize: theme.font.size[75],
  fontWeight: theme.font.weight.semibold,
  lineHeight: theme.font.lineHeight[1],
  cursor: 'pointer',
  textAlign: 'center',
  appearance: 'none',

  '&:hover': {
    color: theme.palette.interactive.pressed,
  },

  '&.disabled': {
    ...baseBtnDisabled(theme),
    cursor: 'not-allowed',
    boxShadow: 'none',
  },
}));

export const UploadContentStyled = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  alignItems: 'stretch',
});

export const OverlayBlockStyled = styled(Box, {
  name: 'OverlayBlock',
  slot: 'Root',
})({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  alignItems: 'stretch',
});

export const ActionHintStyled = styled(Box)(({ theme }) => ({
  marginTop: theme.space[2],
  flex: '0 0 auto',
  minWidth: 0,
  maxWidth: '100%',
}));

export default ESFileUploadStyled;
