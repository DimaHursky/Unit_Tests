import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Breadcrumb from './Breadcrumb';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

describe('Running Test for Breadcrumb', () => {
  test('Component Breadcrumb is rendered', () => {
    render(
      <EcosystemThemeProvider theme={LightTheme}>
        <Breadcrumb content={'Product'} url={'/product'} />
      </EcosystemThemeProvider>,
    );
    expect(screen.getByTestId('breadcrumb')).not.toBeNull();
  });
});
