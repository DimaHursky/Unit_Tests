import * as React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import ESCardActions from './ESCardActions';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';
import { ESButton } from '../ESButton';

describe('Running Test for ESCardActions', () => {
  test('Component ESCardActions is rendered', () => {
    const { getByTestId } = render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESCardActions data-testid="card-action">Test</ESCardActions>
      </EcosystemThemeProvider>,
    );
    expect(getByTestId('card-action')).not.toBeNull();
  });

  test('ESCardActions component to be in document', () => {
    const { getByTestId } = render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESCardActions data-testid="card-action">Test</ESCardActions>,
      </EcosystemThemeProvider>,
    );
    expect(getByTestId('card-action')).toBeInTheDocument();
  });

  test('ESCardActions component to have a root class', () => {
    const { getByTestId } = render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESCardActions data-testid="card-action">Test</ESCardActions>,
      </EcosystemThemeProvider>,
    );
    expect(getByTestId('card-action')).toHaveClass(
      'MuiCardActions-root',
      'MuiCardActions-spacing',
    );
  });

  test('ESCardActions component to render child elements', () => {
    const { getByTestId } = render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESCardActions data-testid="card-action">
          <ESButton
            data-testid="card-action-btn"
            variant="contained"
            color="primary"
          >
            Add tracking number
          </ESButton>
        </ESCardActions>
        ,
      </EcosystemThemeProvider>,
    );

    const btn = getByTestId('card-action-btn');
    expect(getByTestId('card-action')).toContainElement(btn);
  });
});
