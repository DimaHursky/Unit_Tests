import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import ESButton from './ESButton';
import { LightTheme } from '../../theme';
import { EcosystemThemeProvider } from '../../providers';

describe('Running Test for Button', () => {
  test('Component Button is rendered', () => {
    render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESButton>Test</ESButton>
      </EcosystemThemeProvider>,
    );
    expect(screen.getByText('Test')).not.toBeNull();
  });

  test('Components ESButton is rendered', () => {
    render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESButton data-testid={'test_btn'}>MyTest Button</ESButton>
      </EcosystemThemeProvider>,
    );
    expect(screen.getByTestId('test_btn')).toBeInTheDocument();
  });

  test('Disabled button is rendered', () => {
    render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESButton data-testid={'disabled_test_btn'} disabled={true}>
          MyTest Button
        </ESButton>
      </EcosystemThemeProvider>,
    );
    expect(screen.getByTestId('disabled_test_btn')).toBeDisabled();
  });
});
