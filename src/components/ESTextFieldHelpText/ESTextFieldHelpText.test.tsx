import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import ESTextFieldHelpText from './ESTextFieldHelpText';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

describe('Running Test for ESTextFieldHelpText', () => {
  test('Component ESTextFieldHelpText is rendered', () => {
    render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESTextFieldHelpText>Test</ESTextFieldHelpText>
      </EcosystemThemeProvider>,
    );
    expect(screen.getByText('Test')).not.toBeNull();
  });
});
