import * as React from 'react';
import '@testing-library/jest-dom';
import { act, renderHook } from '@testing-library/react-hooks';

import useUiState from './useUiState';
import { UiStateProvider } from '../../providers';

describe('Running Test for useUiState', () => {
  test('Hook useUiState is work', () => {
    const wrapper = ({ children }) => (
      <UiStateProvider>{children}</UiStateProvider>
    );
    const { result } = renderHook(() => useUiState(), { wrapper });

    act(() => {
      result.current[1]({ mobileNavigationOpen: true });
    });

    expect(result.current[0].mobileNavigationOpen).toEqual(true);
  });
});
