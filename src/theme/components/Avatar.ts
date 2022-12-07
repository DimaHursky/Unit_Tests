import { IAvatar } from '../../interfaces';

const MuiAvatar: IAvatar = {
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.text.primary,
      fontSize: theme.font.size[200],
    }),
  },
};
export default MuiAvatar;
