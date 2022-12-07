import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Layout from './Layout';
import { LightTheme } from '../../theme';
import { EcosystemThemeProvider } from '../../providers';

describe('Running Test for Layout', () => {
  test('Component Layout is rendered', () => {
    render(
      <EcosystemThemeProvider theme={LightTheme}>
        <Layout>
          <div>Test</div>
        </Layout>
      </EcosystemThemeProvider>,
    );
    expect(screen.getByText('Test')).not.toBeNull();
  });
});
