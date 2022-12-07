import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import SecondaryAction from './SecondaryAction';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

describe('Running Test for SecondaryAction', () => {
  test('Component SecondaryAction is rendered', () => {
    render(
      <EcosystemThemeProvider theme={LightTheme}>
        <SecondaryAction children={'Secondary Action'} />
      </EcosystemThemeProvider>,
    );
    expect(screen.getByText('Secondary Action')).not.toBeNull();
  });
});
