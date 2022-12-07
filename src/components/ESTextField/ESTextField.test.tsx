import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import ESTextField from './ESTextField';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

describe('Running Test for ESTextField', () => {
  test('Component ESTextField is rendered', () => {
    render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESTextField value={'Value'} placeholder={'Placeholder'} />
      </EcosystemThemeProvider>,
    );
    expect(screen.getByPlaceholderText('Placeholder')).not.toBeNull();
  });
});
