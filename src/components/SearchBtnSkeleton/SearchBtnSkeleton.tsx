import React from 'react';
import { SkeletonProps, useThemeProps } from '@mui/material';
import { SearchBtnSkeletonStyled } from './SearchBtnSkeleton.styled';

const SearchBtnSkeleton = (inProps: SkeletonProps) => {
  const props = useThemeProps({ props: inProps, name: 'SearchBtnSkeleton' });

  const { variant = 'rounded', animation = 'wave', ...rest } = props;

  return (
    <SearchBtnSkeletonStyled
      {...rest}
      variant={variant}
      animation={animation}
    />
  );
};

export default SearchBtnSkeleton;
