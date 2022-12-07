import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import UiStateProvider, { UiStateContext } from './UiStateProvider';

describe('Running Test for UiStateProvider', () => {
  test('Component UiState is rendered', () => {
    render(
      <UiStateProvider>
        <UiStateContext.Consumer>
          {({ uiState, setUiState }) => (
            <>
              <div>{uiState.mobileNavigationOpen && 'Mobile menu is open'}</div>
              <div>
                {!uiState.mobileNavigationOpen && 'Mobile menu is closed'}
              </div>
            </>
          )}
        </UiStateContext.Consumer>
      </UiStateProvider>,
    );

    expect(screen.getByText('Mobile menu is closed')).not.toBeNull();
  });
});
