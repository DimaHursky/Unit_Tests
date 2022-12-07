import { styled } from '@mui/material/styles';
import { Popover, PopoverProps } from '@mui/material';

const DropdownMenuStyled = styled(Popover, {
  name: 'ESDropdownMenu',
  slot: 'Root',
})<PopoverProps>(({ theme, ...rest }) => ({
  opacity: rest.open ? 1 : 0,
  transform: rest.open ? 'none' : 'translateY(-0.3125rem)',
  '& .MuiPaper-root': {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: `calc(100vw - ${theme.space['8']})`,
    borderRadius: theme.shape.border.radius['2'],
    boxShadow: theme.shadows[8],
    margin: `${theme.shape.border.width['5']} ${theme.space['2']} ${theme.space['4']}`,
    transformOrigin: 'initial !important',
    transition: `opacity ${theme.transitions.duration[100]} ${theme.transitions.easing.ease}, transform ${theme.transitions.duration[100]} ${theme.transitions.easing.ease} !important`,
  },
}));

export default DropdownMenuStyled;
