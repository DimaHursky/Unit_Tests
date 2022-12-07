import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import ESTextFieldErrorLabel from './ESTextFieldErrorLabel';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

describe('Running Test for ESTextFieldErrorLabel', () => {
  test('Component ESTextFieldErrorLabel is rendered', () => {
    render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESTextFieldErrorLabel error={'Error text'} />
      </EcosystemThemeProvider>,
    );
    expect(screen.getByText('Error text')).not.toBeNull();
  });
});
