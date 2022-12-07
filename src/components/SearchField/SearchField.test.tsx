import * as React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import SearchField from './SearchField';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

const searchFieldTestIds = {
  field: 'search-field',
};
const placeholderText = 'Search';
const testValue = 'Test Value';

const TestingComponent = () => (
  <EcosystemThemeProvider theme={LightTheme}>
    <SearchField
      value={testValue}
      onChange={() => {}}
      onCancel={() => {}}
      data-testid={searchFieldTestIds.field}
    />
  </EcosystemThemeProvider>
);

describe('Running Test for SearchField', () => {
  test('Component SearchField is rendered', () => {
    const { getByTestId } = render(<TestingComponent />);
    expect(getByTestId(searchFieldTestIds.field)).not.toBeNull();
  });

  test('SearchField component auto-focus is worked', () => {
    const { getByPlaceholderText } = render(<TestingComponent />);

    expect(getByPlaceholderText(placeholderText)).toHaveFocus();
  });

  test('SearchField component to have a value', () => {
    const { getByPlaceholderText } = render(<TestingComponent />);

    expect(getByPlaceholderText(placeholderText)).toHaveValue(testValue);
  });
});
