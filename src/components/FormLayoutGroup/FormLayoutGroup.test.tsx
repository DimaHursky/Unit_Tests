import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import FormLayoutGroup from './FormLayoutGroup';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

describe('Running Test for FormLayoutGroup', () => {
  test('Component FormLayoutGroup is rendered', () => {
    render(
      <EcosystemThemeProvider theme={LightTheme}>
        <FormLayoutGroup>Test</FormLayoutGroup>
      </EcosystemThemeProvider>,
    );
    expect(screen.getByText('Test')).not.toBeNull();
    screen.logTestingPlaygroundURL();
  });
});
