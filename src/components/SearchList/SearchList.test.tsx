import * as React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import SearchList from './SearchList';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';
import searchResults from '../../../tests/sources/search';
import { prepareSearchData } from '../../utils/helpers';

const preparedSearchResult = prepareSearchData(searchResults);
const searchListTestIds = {
  list: 'search-list',
  item: 'list-item',
  itemTitle: 'list-item-title',
  section: 'search-section',
  sectionTitle: 'search-section-title',
};

const TestingComponent = () => (
  <EcosystemThemeProvider theme={LightTheme}>
    <SearchList
      sections={preparedSearchResult}
      data-testid={searchListTestIds.list}
    />
  </EcosystemThemeProvider>
);

describe('Running Test for SearchList', () => {
  test('Component SearchList is rendered', () => {
    const { getByTestId } = render(<TestingComponent />);
    expect(getByTestId(searchListTestIds.list)).not.toBeNull();
  });

  test('SearchList sections is rendered', () => {
    const { getByTestId } = render(<TestingComponent />);

    preparedSearchResult.forEach((section, i) => {
      const listItem = getByTestId(`${searchListTestIds.section}-${i}`);
      const searchSectionTitle = getByTestId(
        `${searchListTestIds.sectionTitle}-${i}`,
      );

      expect(listItem).not.toBeNull();
      expect(searchSectionTitle).not.toBeNull();
      expect(listItem).toContainElement(searchSectionTitle);
      expect(searchSectionTitle).toHaveTextContent(section.sectionTitle);
    });
  });

  test('SearchList sections items is rendered', () => {
    const { getByTestId } = render(<TestingComponent />);
    preparedSearchResult.forEach((section) => {
      section.items.forEach((sectionItem, i) => {
        const testIdPrefix = sectionItem.title.split(' ')[0];

        const listItem = getByTestId(
          `${searchListTestIds.item}-${testIdPrefix}-${i}`,
        );
        const listItemTitle = getByTestId(
          `${searchListTestIds.itemTitle}-${testIdPrefix}-${i}`,
        );

        expect(listItem).not.toBeNull();
        expect(listItemTitle).not.toBeNull();
        expect(listItem).toContainElement(listItemTitle);
        expect(listItemTitle).toHaveTextContent(sectionItem.title);
      });
    });
  });
});
