import * as React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import NoSearchResults from './NoSearchResults';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

describe('Running Test for NoSearchResults', () => {
  test('Component NoSearchResults is rendered', () => {
    const { getByTestId, debug } = render(
      <EcosystemThemeProvider theme={LightTheme}>
        <NoSearchResults searchStr="Test" />
      </EcosystemThemeProvider>,
    );
    debug();
    expect(getByTestId('no-results')).not.toBeNull();
  });
});
