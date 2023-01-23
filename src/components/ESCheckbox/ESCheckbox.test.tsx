import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import ESCheckbox from './ESCheckbox';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

describe('Running Test for ESCheckbox', () => {
  test('Component ESCheckbox is rendered', () => {
    render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESCheckbox label={'Checkbox'} />
      </EcosystemThemeProvider>,
    );
    screen.logTestingPlaygroundURL();
    expect(screen.getByText('Checkbox')).toBeInTheDocument();
  });

  it('Component Checkbox is rendered checkbox is checked', () => {
    render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESCheckbox label={'Checkbox'} />
      </EcosystemThemeProvider>,
    );

    expect(
      screen.getByRole('checkbox', { name: /checkbox/i }),
    ).not.toBeChecked();
    fireEvent.click(screen.getByTestId('CheckBoxOutlineBlankIcon'));
    expect(screen.getByRole('checkbox', { name: /checkbox/i })).toBeChecked();
  });
});
