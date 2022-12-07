import * as React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import ESCardHeader from './ESCardHeader';
import { LightTheme } from '../../theme';
import { EcosystemThemeProvider } from '../../providers';
import { ESButton } from '../ESButton';

describe('Running Test for ESCardHeader', () => {
  test('Component ESCardHeader is rendered', () => {
    const { getByTestId } = render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESCardHeader data-testid="card-header" />
      </EcosystemThemeProvider>,
    );
    expect(getByTestId('card-header')).not.toBeNull();
  });

  test('ESCardHeader component to be in document', () => {
    const { getByTestId } = render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESCardHeader data-testid="card-header" />,
      </EcosystemThemeProvider>,
    );
    expect(getByTestId('card-header')).toBeInTheDocument();
  });

  test('ESCardHeader component to have a root class', () => {
    const { getByTestId } = render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESCardHeader data-testid="card-header" />,
      </EcosystemThemeProvider>,
    );
    expect(getByTestId('card-header')).toHaveClass('MuiCardHeader-root');
  });

  test('ESCardHeader component to have a child default elements', () => {
    const { getByTestId } = render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESCardHeader
          data-testid="card-header"
          title="Online store dashboard"
        />
      </EcosystemThemeProvider>,
    );
    expect(getByTestId('card-header')).toContainHTML(
      `<div class="MuiCardHeader-root css-88u38k-MuiCardHeader-root-MuiCardHeader-root" data-testid="card-header"><div class="MuiCardHeader-content css-1qbkelo-MuiCardHeader-content"><span class="MuiTypography-root MuiTypography-h5 MuiCardHeader-title css-bcoxdk-MuiTypography-root">Online store dashboard</span></div></div>`,
    );
  });

  test('ESCardHeader component render with props correct', () => {
    const { getByTestId, getByText } = render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESCardHeader
          data-testid="card-header"
          title="Online store dashboard"
          action={
            <ESButton data-testid="card-header-btn" variant="text">
              Add variant
            </ESButton>
          }
        />
      </EcosystemThemeProvider>,
    );

    const component = getByTestId('card-header');
    const btn = getByTestId('card-header-btn');
    const text = getByText('Online store dashboard');
    expect(component).toContainElement(btn);
    expect(component).toContainElement(text);
  });

  test('ESCardHeader component render with subheader and actions props', () => {
    const { getByTestId, getByText } = render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESCardHeader
          data-testid="card-header"
          title="Online store dashboard"
          subheader="September 14, 2016"
          action={
            <ESButton data-testid="card-header-btn" variant="text">
              Add variant
            </ESButton>
          }
        />
      </EcosystemThemeProvider>,
    );

    const component = getByTestId('card-header');
    const title = getByText('Online store dashboard');
    const subheader = getByText('September 14, 2016');
    const btn = getByTestId('card-header-btn');
    expect(component).toContainElement(title);
    expect(component).toContainElement(subheader);
    expect(component).toContainElement(btn);
  });
});
