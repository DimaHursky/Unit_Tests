import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import ESDatePickerMonth from './ESDatePickerMonth';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

describe('Running Test for ESDatePickerMonth', () => {
  test('Component ESDatePickerMonth is rendered', () => {
    render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESDatePickerMonth month={10} year={2022} weekStartsOn={1} />
      </EcosystemThemeProvider>,
    );
    expect(screen.getByText('November 2022')).not.toBeNull();
  });
});
