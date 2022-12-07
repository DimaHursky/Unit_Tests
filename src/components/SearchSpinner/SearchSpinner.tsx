import React from 'react';
import { CircularProgress } from '@mui/material';
import SearchSpinnerStyled from './SearchSpinner.styled';

const SearchSpinner = () => (
  <SearchSpinnerStyled data-testid="spinner">
    <CircularProgress color="secondary" size={20} />
  </SearchSpinnerStyled>
);

export default SearchSpinner;
