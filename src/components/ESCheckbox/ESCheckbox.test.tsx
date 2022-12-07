import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import ESCheckbox from './ESCheckbox';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

describe('Running Test for ESCheckbox', () => {
  test('Component ESCheckbox is rendered', () => {
    render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESCheckbox label={'Checkbox'} />
      </EcosystemThemeProvider>,
    );
    expect(screen.getByText('Checkbox')).toBeInTheDocument();
  });
});
