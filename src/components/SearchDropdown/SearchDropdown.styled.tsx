import { styled } from '@mui/material/styles';
import { Popover, PopoverProps } from '@mui/material';

const SearchDropdownStyled = styled(Popover, {
  name: 'Search',
  slot: 'SearchDropdown',
})<PopoverProps>(({ theme, ...rest }) => ({
  opacity: rest.open ? 1 : 0,
  transform: rest.open ? 'none' : 'translateY(-0.3125rem)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'red',
  '& .MuiPaper-root': {
    position: 'relative',
    borderRadius: theme.shape.border.radius['2'],
    boxShadow: theme.shadows[8],
    transition: `opacity ${theme.transitions.duration[100]} ${theme.transitions.easing.ease}, transform ${theme.transitions.duration[100]} ${theme.transitions.easing.ease} !important`,
    width: '100%',
    maxWidth: '43.75rem',
    minWidth: '43.75rem',
    maxHeight: 'calc(100% - 1rem)',
    marginLeft: '-2.775rem',
    left: '0 !important',
    top: '0 !important',
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
      maxWidth: '100vw',
      minWidth: '100vw',
    },
  },
}));
export default SearchDropdownStyled;
