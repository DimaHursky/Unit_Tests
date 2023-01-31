import * as React from 'react';
import '@testing-library/jest-dom';
import { getByText, render, screen } from '@testing-library/react';

import ESTextField from './ESTextField';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';
import { placeholder } from '@babel/types';

describe('Running Test for ESTextField', () => {
  test('Component ESTextField is rendered', () => {
    render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESTextField value={'Value'} placeholder={'Placeholder'} />
      </EcosystemThemeProvider>,
    );
    expect(screen.getByPlaceholderText('Placeholder')).not.toBeNull();
  });

  test('Component ESTextField is enablrd', () => {
    const { getByRole, getByText } = render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESTextField value={'Value'} placeholder={'Placeholder'} />
      </EcosystemThemeProvider>,
    );
    const textBox = getByRole('textbox');

    expect(textBox).toBeEnabled();
    expect(textBox).toBeInTheDocument();
    expect(textBox).toHaveValue('Value');
  });

  test('Component ESTextField is contain attributes', () => {
    const { getByTestId, getByRole } = render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESTextField value={'value'} placeholder={'Placeholder'} />
      </EcosystemThemeProvider>,
    );
    const placeholder = getByRole('textbox');

    expect(placeholder).toHaveAttribute('aria-invalid', 'false');
    expect(placeholder).toHaveAttribute('type', 'text');
    expect(placeholder).toHaveAttribute('value', 'value');
    expect(placeholder).toHaveAttribute(
      'class',
      'MuiInputBase-input css-1cicwd5-MuiInputBase-input',
    );
  });
});
