import React from 'react';
import { UiStateContext } from '../../providers/UiStateProvider/UiStateProvider';
import { UseUiStateValue } from './useUiState.types';

const useUiState = (): UseUiStateValue => {
  const { uiState, setUiState } = React.useContext(UiStateContext);
  return [uiState, setUiState];
};

export default useUiState;
