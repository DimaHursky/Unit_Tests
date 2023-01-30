import * as React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen,  } from '@testing-library/react';
import EcosystemWrapper from '../../../tests/EcosystemWrapper';
import ESAppBar from '../ESAppBar/ESAppBar';
import Search from './Search';
import { Box } from '@mui/material';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';

const styleCenter = {
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const MockOfficeSwitcher = () => (
  <Box style={{ background: '#b6b6f9', width: '100%', ...styleCenter }}>
    Office Switcher
  </Box>
);

const MockNotifications = () => (
  <Box
    style={{
      background: '#e3e5e5',
      padding: '1rem',
      width: 'auto',
      ...styleCenter,
    }}
  >
    <NotificationAddIcon />
  </Box>
);

const MockProfileButton = () => (
  <Box
    style={{
      background: '#5bb15e',
      padding: '0 2rem',
      width: 'auto',
      ...styleCenter,
    }}
  >
    Profile
  </Box>
);

const TestingComponent = () => (
  <EcosystemWrapper
    Header={() => (
      <ESAppBar
        officeSwitcher={<MockOfficeSwitcher />}
        notifications={<MockNotifications />}
        profileButton={<MockProfileButton />}
        searchField={<Search initial={false} />}
      />
    )}
  />
);

const searchTestIds = {
  btn: 'search-btn',
  dropdown: 'search-dropdown',
  action: 'search-action',
  header: 'action-header',
  body: 'action-body',
  field: 'search-field',
  info: 'search-info',
  spinner: 'spinner',
  list: 'search-list',
  section: 'search-section-0',
  sectionItem: 'list-item-View-0',
  noResults: 'no-results',
  clean: 'search-clean',
};

const inputValue = { target: { value: 'e' } };
const notResultInputValue = { target: { value: 'sdfsdfsf' } };
const notResultRegExp = new RegExp(
  `Нічого не знайдено для "${notResultInputValue.target.value}"`,
  'i',
);
const placeholderRegExp = /Пошук/i;
const notResultDescriptionRegExp =
  /Деякі пошукові запити потребують точного співпадіння. Спробуйте ввести весь термін або використать інше слово або фразу/i;

describe('Running Test for Search', () => {
  test("Search's component button is rendered", async () => {
    const { findByTestId } = render(<TestingComponent />);
    expect(await findByTestId(searchTestIds.btn)).not.toBeNull();
  });

  test("Search's component searchDropdown is rendered", async () => {
    const { findByTestId, getByTestId } = render(<TestingComponent />);
    fireEvent.click(await findByTestId(searchTestIds.btn));

    const searchDropdownWrapper = getByTestId(searchTestIds.dropdown);
    const searchDropdown = getByTestId(searchTestIds.action);
    expect(searchDropdownWrapper).not.toBeNull();
    expect(searchDropdownWrapper).toContainElement(searchDropdown);
  });

  test("Search's main child components is rendered", async () => {
    const { findByTestId, getByTestId } = render(<TestingComponent />);
    fireEvent.click(await findByTestId(searchTestIds.btn));

    const searchDropdown = getByTestId(searchTestIds.action);
    const dropdownHeader = getByTestId(searchTestIds.header);
    const dropdownBody = getByTestId(searchTestIds.body);
    expect(searchDropdown).not.toBeNull();
    expect(searchDropdown).toContainElement(dropdownHeader);
    expect(searchDropdown).toContainElement(dropdownBody);
  });

  test('Search header block to have searchField component', async () => {
    const { findByTestId, getByTestId } = render(<TestingComponent />);
    fireEvent.click(await findByTestId(searchTestIds.btn));

    const dropdownHeader = getByTestId(searchTestIds.header);
    const searchField = getByTestId(searchTestIds.field);
    expect(dropdownHeader).toContainElement(searchField);
  });

  test('Search body to have searchInfo block', async () => {
    const { findByTestId, getByTestId } = render(<TestingComponent />);
    fireEvent.click(await findByTestId(searchTestIds.btn));

    const dropdownBody = getByTestId(searchTestIds.body);
    const searchInfo = getByTestId(searchTestIds.info);
    expect(dropdownBody).toContainElement(searchInfo);
  });

  test('Search component sends a request to download the data', async () => {
    const { findByTestId, getByPlaceholderText, getByTestId, queryByTestId } =
      render(<TestingComponent />);

    fireEvent.click(await findByTestId(searchTestIds.btn));
    const searchInput = getByPlaceholderText(placeholderRegExp);
    expect(queryByTestId(searchTestIds.spinner)).toBeNull();
    fireEvent.change(searchInput, { target: { value: 'e' } });
    expect(getByTestId(searchTestIds.spinner)).toBeInTheDocument();
  });

  test('Search component get the data', async () => {
    const { findByTestId, getByPlaceholderText, queryByTestId, getByTestId } =
      render(<TestingComponent />);
    fireEvent.click(await findByTestId(searchTestIds.btn));
    const searchInput = getByPlaceholderText(placeholderRegExp);
    fireEvent.change(searchInput, inputValue);

    expect(queryByTestId(searchTestIds.list)).toBeNull();

    const searchResults = await findByTestId(searchTestIds.list);
    const searchSection = getByTestId(searchTestIds.section);
    const searchSectionItem = getByTestId(searchTestIds.sectionItem);

    expect(searchResults).toBeInTheDocument();
    expect(searchResults).toContainElement(searchSection);
    expect(searchSection).toContainElement(searchSectionItem);
  });

  test("Search component request don't get the data", async () => {
    const { findByTestId, getByPlaceholderText, getByText } = render(
      <TestingComponent />,
    );

    fireEvent.click(await findByTestId(searchTestIds.btn));
    const searchInput = getByPlaceholderText(placeholderRegExp);
    fireEvent.change(searchInput, notResultInputValue);

    const noResultsBlock = await findByTestId(searchTestIds.noResults);
    const noResultsText = getByText(notResultRegExp);
    const noResultsDescription = getByText(notResultDescriptionRegExp);

    expect(noResultsBlock).not.toBeNull();
    expect(noResultsBlock).toContainElement(noResultsText);
    expect(noResultsBlock).toContainElement(noResultsDescription);
  });

  test('Search component clean button is worked', async () => {
    const { findByTestId, getByPlaceholderText, getByTestId } = render(
      <TestingComponent />,
    );
    fireEvent.click(await findByTestId(searchTestIds.btn));
    const searchInput = getByPlaceholderText(placeholderRegExp);

    fireEvent.change(searchInput, inputValue);
    fireEvent.click(getByTestId(searchTestIds.clean));
    expect(getByTestId(searchTestIds.info)).toBeInTheDocument();
    screen.logTestingPlaygroundURL();
  });
});
