import * as React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import SearchAction from './SearchAction';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

const searchActionTestIds = {
  btn: 'action-btn',
};

describe('Running Test for SearchAction', () => {
  test('Component SearchAction is rendered', () => {
    const button = <button data-testid={searchActionTestIds.btn}>Open</button>;
    const { getByTestId } = render(
      <EcosystemThemeProvider theme={LightTheme}>
        <SearchAction
          searchBtn={button}
          searchField={<input />}
          onClose={() => {}}
          anchorEl={null}
        >
          Test
        </SearchAction>
      </EcosystemThemeProvider>,
    );
    expect(getByTestId(searchActionTestIds.btn)).not.toBeNull();
  });
});
