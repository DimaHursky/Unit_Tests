import { styled } from '@mui/material/styles';
import { Skeleton, SkeletonProps } from '@mui/material';

export const SearchBtnSkeletonStyled = styled(Skeleton, {
  name: 'Search',
  slot: 'SearchBtnSkeleton',
})<SkeletonProps>(({ theme }) => ({
  maxWidth: 580,
  width: '100%',
  height: 38,
  borderRadius: theme.shape.border.radius['1'],
}));
