import * as React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, getByText, render, screen } from '@testing-library/react';

import ESDatePickerDay from './ESDatePickerDay';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

describe('Running Test for ESDatePickerDay', () => {
  test('Component ESDatePickerDay is rendered', () => {
    render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESDatePickerDay day={new Date(2022, 10, 10)} />
      </EcosystemThemeProvider>,
    );
    expect(screen.getByText('10')).not.toBeNull();
  });

  test('The buttin is enabled to click', () => {
    render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESDatePickerDay day={new Date(2022, 10, 10)} />
      </EcosystemThemeProvider>,
    );
    expect(screen.getByText('10')).toBeEnabled();
  });

  test('The day button is selected', () => {
    render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESDatePickerDay day={new Date(2022, 10, 10)} />
      </EcosystemThemeProvider>,
    );
    expect(screen.getByText('10')).toBeEnabled();

    fireEvent.click(screen.getByText('10'));
    screen.getByText('10').focus();
  });
});
