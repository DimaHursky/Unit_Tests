import { IPaperStyle } from '../../interfaces';

const MuiPaper: IPaperStyle = {
  defaultProps: {
    elevation: 7,
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      borderRadius: theme.shape.border.radius['2'],
      outline: `${theme.shape.border.width['1']} solid transparent`,
      ...(ownerState.square && {
        borderRadius: 0,
      }),
      ...(ownerState.variant === 'outlined' && {
        border: `${theme.shape.border.width['1']} solid ${theme.palette.info['400']}`,
      }),
    }),
  },
};

export default MuiPaper;
