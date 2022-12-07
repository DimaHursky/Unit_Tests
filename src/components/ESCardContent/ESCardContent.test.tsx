import * as React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import ESCardContent from './ESCardContent';
import { LightTheme } from '../../theme';
import { EcosystemThemeProvider } from '../../providers';
import { Typography } from '@mui/material';

describe('Running Test for ESCardContent', () => {
  test('Component ESCardContent is rendered', () => {
    const { getByTestId } = render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESCardContent data-testid="card-content">Test</ESCardContent>
      </EcosystemThemeProvider>,
    );
    expect(getByTestId('card-content')).not.toBeNull();
  });

  test('ESCardContent component to be in document', () => {
    const { getByTestId } = render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESCardContent data-testid="card-content">Test</ESCardContent>,
      </EcosystemThemeProvider>,
    );
    expect(getByTestId('card-content')).toBeInTheDocument();
  });

  test('ESCardContent component to have a root class', () => {
    const { getByTestId } = render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESCardContent data-testid="card-content">Test</ESCardContent>,
      </EcosystemThemeProvider>,
    );
    expect(getByTestId('card-content')).toHaveClass('MuiCardContent-root');
  });

  test('ESCardContent component to render child element', () => {
    const { getByTestId } = render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESCardContent data-testid="card-content">
          <Typography data-testid="card-content-text" variant="body2">
            View a summary of your online store’s performance.
          </Typography>
        </ESCardContent>
      </EcosystemThemeProvider>,
    );

    const text = getByTestId('card-content-text');
    expect(getByTestId('card-content')).toContainElement(text);
  });
});
