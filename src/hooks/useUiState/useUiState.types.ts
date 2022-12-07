import type { IUiStateContext } from '../../providers';

export type UseUiStateValue = [
  IUiStateContext['uiState'],
  IUiStateContext['setUiState'],
];
