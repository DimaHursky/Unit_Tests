export interface UiStateProviderProps {
  children: React.ReactNode;
}

export interface IUiState {
  mobileNavigationOpen: boolean;
}

export interface IUiStateContext {
  uiState: IUiState;
  setUiState: React.Dispatch<React.SetStateAction<IUiState>>;
}
