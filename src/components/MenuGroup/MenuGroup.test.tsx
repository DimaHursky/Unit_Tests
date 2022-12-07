import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import MenuGroup from './MenuGroup';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

describe('Running Test for MenuGroup', () => {
  test('Component MenuGroup is rendered', () => {
    const actions = [
      {
        content: 'Duplicate',
        onAction: () => console.log('Duplicate action'),
      },
      {
        content: 'View on your store',
        onAction: () => console.log('View on your store action'),
      },
    ];

    render(
      <EcosystemThemeProvider theme={LightTheme}>
        <MenuGroup title={'group'} actions={actions} />
      </EcosystemThemeProvider>,
    );
    expect(screen.getByTestId('menu-group')).toBeInTheDocument();
  });
});
