import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import FormLayout from './FormLayout';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

describe('Running Test for FormLayout', () => {
  test('Component FormLayout is rendered', () => {
    render(
      <EcosystemThemeProvider theme={LightTheme}>
        <FormLayout>Test</FormLayout>
      </EcosystemThemeProvider>,
    );
    expect(screen.getByText('Test')).not.toBeNull();
  });
});
