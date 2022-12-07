import * as React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import SearchButton from './SearchButton';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

const TestingComponent = () => (
  <EcosystemThemeProvider theme={LightTheme}>
    <SearchButton>Test</SearchButton>
  </EcosystemThemeProvider>
);

const searchBtnTestIds = {
  btn: 'search-btn',
};

describe('Running Test for SearchButton', () => {
  test('Component SearchButton is rendered', () => {
    const { getByTestId } = render(<TestingComponent />);
    expect(getByTestId(searchBtnTestIds.btn)).not.toBeNull();
  });

  test('SearchButton child elements is rendered', () => {
    const { getByTestId, getByText } = render(<TestingComponent />);
    const btn = getByTestId(searchBtnTestIds.btn);

    expect(btn).toContainElement(getByTestId('search-icon'));
    expect(btn).toContainElement(getByText('Test'));
  });
});
