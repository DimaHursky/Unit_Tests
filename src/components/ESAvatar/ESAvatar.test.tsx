import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import ESAvatar from './ESAvatar';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

describe('Running Test for ESAvatar', () => {
  test('Component ESAvatar is rendered', () => {
    render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESAvatar initials={'QW'} />
      </EcosystemThemeProvider>,
    );
    expect(screen.getByText('QW')).not.toBeNull();
    screen.debug();
  });
});
