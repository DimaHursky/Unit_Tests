import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import PrimaryAction from './PrimaryAction';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

describe('Running Test for PrimaryAction', () => {
  test('Component PrimaryAction is rendered', () => {
    render(
      <EcosystemThemeProvider theme={LightTheme}>
        <PrimaryAction
          content={'Save'}
          onAction={() => console.log('save button')}
        />
      </EcosystemThemeProvider>,
    );
    expect(screen.getByTestId('primary-action')).not.toBeNull();
  });
});
