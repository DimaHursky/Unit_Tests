import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import ActionMenu from './ActionMenu';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

const ActionMenuComponent = () => {
  const actions = [
    {
      content: 'Duplicate',
      onAction: () => console.log('Duplicate action'),
    },
    {
      content: 'Duplicate2',
      onAction: () => console.log('Duplicate action2'),
    },
  ];

  const groups = [
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
    {
      title: 'Promote1',
      actions: [
        {
          content: 'Share on Faceboo1k',
          accessibilityLabel: 'Individual action 1label',
          onAction: () => console.log('Share on Faceb1ook action'),
        },
      ],
    },
  ];
  return (
    <EcosystemThemeProvider theme={LightTheme}>
      <ActionMenu actions={actions} groups={groups} />
    </EcosystemThemeProvider>
  );
};

describe('Running Test for ActionMenu', () => {
  beforeEach(() => {
    Object.defineProperty(global, 'ResizeObserver', {
      writable: true,
      value: jest.fn().mockImplementation(() => ({
        observe: jest.fn(() => 'Mocking works'),
        unobserve: jest.fn(),
        disconnect: jest.fn(),
      })),
    });
  });

  test('Component ActionMenu is rendered', () => {
    render(<ActionMenuComponent />);
    expect(screen.getByTestId('action-menu')).toBeInTheDocument();
  });
});
