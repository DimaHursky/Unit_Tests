import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import ESTextFieldLabel from './ESTextFieldLabel';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

describe('Running Test for ESTextFieldLabel', () => {
  test('Component ESTextFieldLabel is rendered', () => {
    render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESTextFieldLabel>Test</ESTextFieldLabel>
      </EcosystemThemeProvider>,
    );
    expect(screen.getByText('Test')).not.toBeNull();
  });
});
