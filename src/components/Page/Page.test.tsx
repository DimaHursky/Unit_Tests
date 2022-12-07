import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Page from './Page';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

describe('Running Test for Page', () => {
  test('Component Page is rendered', () => {
    render(
      <EcosystemThemeProvider theme={LightTheme}>
        <Page title={'Title'}>Test</Page>
      </EcosystemThemeProvider>,
    );
    expect(screen.getByTestId('page')).not.toBeNull();
  });
});
