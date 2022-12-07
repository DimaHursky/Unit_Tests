import * as React from 'react';
import { useRef, useState } from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';

import SearchDropdown from './SearchDropdown';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

const TestingComponent = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const button = useRef<HTMLButtonElement>(null);

  const onClick = () => {
    setAnchorEl(button.current);
  };

  return (
    <EcosystemThemeProvider theme={LightTheme}>
      <button ref={button} onClick={onClick} data-testid="trigger-btn">
        Trigger Button
      </button>
      <SearchDropdown anchorEl={anchorEl} open>
        Test
      </SearchDropdown>
    </EcosystemThemeProvider>
  );
};

describe('Running Test for SearchDropdown', () => {
  test('Component SearchDropdown is rendered', () => {
    const { getByTestId, getByText } = render(<TestingComponent />);
    fireEvent.click(getByTestId('trigger-btn'));
    expect(getByTestId('search-dropdown')).not.toBeNull();
    expect(getByText('Test')).not.toBeNull();
  });
});
