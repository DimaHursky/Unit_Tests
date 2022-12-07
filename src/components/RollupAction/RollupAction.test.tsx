import * as React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import RollupAction from './RollupAction';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

describe('Running Test for RollupAction', () => {
  test('Component RollupAction is rendered', () => {
    const actions = [
      {
        content: 'Duplicate',
        onAction: () => console.log('Duplicate action'),
      },
    ];

    const sections = [
      {
        title: 'Promote',
        actions: [
          {
            content: 'Share on Facebook',
            accessibilityLabel: 'Individual action label',
            onAction: () => console.log('Share on Facebook action'),
          },
        ],
      },
    ];
    render(
      <EcosystemThemeProvider theme={LightTheme}>
        <RollupAction actions={actions} sections={sections} />
      </EcosystemThemeProvider>,
    );

    expect(screen.getByTestId('rollup-btn')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('rollup-btn'));
    expect(screen.getByTestId('dropdown')).toBeInTheDocument();
  });
});
