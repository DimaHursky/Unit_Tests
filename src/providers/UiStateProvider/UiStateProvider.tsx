import React from 'react';
import {
  IUiState,
  IUiStateContext,
  UiStateProviderProps,
} from './UiStateProvider.types';

const defaultValue: IUiState = {
  mobileNavigationOpen: false,
};

export const UiStateContext = React.createContext<IUiStateContext>({
  uiState: { ...defaultValue },
  setUiState: () => {},
});

const UiStateProvider = ({ children }: UiStateProviderProps) => {
  const [uiState, setUiState] = React.useState<IUiState>({ ...defaultValue });

  const value = React.useMemo(
    () => ({ uiState, setUiState }),
    [uiState, setUiState],
  );

  return (
    <UiStateContext.Provider value={value}>{children}</UiStateContext.Provider>
  );
};

export default UiStateProvider;
