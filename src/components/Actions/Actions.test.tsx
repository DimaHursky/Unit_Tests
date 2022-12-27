import * as React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import Actions from './Actions';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

const ActionsComponent = () => {
  const actions = [
    {
      content: 'Duplicate',
      onAction: jest.fn(), //() => console.log('Duplicate action'),
    },
    {
      content: 'Duplicate2',
      onAction: jest.fn(), //() => console.log('Duplicate action2'),
    },
  ];

  const groups = [
    {
      title: 'Promote',
      actions: [
        {
          content: 'Share on Facebook',
          accessibilityLabel: 'Individual action label',
          onAction: jest.fn(), //() => console.log('Share on Facebook action'),
        },
      ],
    },
    {
      title: 'Promote1',
      actions: [
        {
          content: 'Share on Faceboo1k',
          accessibilityLabel: 'Individual action 1label',
          onAction: jest.fn(), //() => console.log('Share on Faceb1ook action'),
        },
      ],
    },
  ];
  return (
    <EcosystemThemeProvider theme={LightTheme}>
      <Actions actions={actions} groups={groups} />
    </EcosystemThemeProvider>
  );
};

describe('Running Test for Actions', () => {
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
  test('Component Actions is rendered', () => {
    render(<ActionsComponent />);
    expect(screen.getByTestId('actions')).not.toBeNull();
  });

  test('Component Actions is all elements whrn the pa ', () => {
    render(<ActionsComponent />);
    expect(screen.getByText('Duplicate')).toBeInTheDocument();
    expect(screen.getByText('Duplicate2')).toBeInTheDocument();
    expect(screen.getByText('Promote')).toBeInTheDocument();
    expect(screen.getByText('Promote1')).toBeInTheDocument();
  });

  test('the elements from groups (Promote),(Promote 1) should not be displayed', () => {
    render(<ActionsComponent />);
    expect(screen.queryByText('Share on Facebook')).toBeNull();
    expect(screen.queryByText('Share on Faceboo1k')).toBeNull();
  });

  test('Component Actions is render with Groups options', () => {
    render(<ActionsComponent />);
    expect(screen.getByText('Duplicate')).toBeInTheDocument();
    expect(screen.getByText('Duplicate2')).toBeInTheDocument();
    expect(screen.getByText('Promote')).toBeInTheDocument();
    expect(screen.getByText('Promote1')).toBeInTheDocument();
    //Drobdown 'Promote'
    fireEvent.click(screen.getByText('Promote')); //Drobdown
    expect(screen.getByText('Share on Facebook')).toBeInTheDocument();
    //Drobdown 'Promote1'
    fireEvent.click(screen.getByText('Promote1'));
    expect(screen.getByText('Share on Faceboo1k')).toBeInTheDocument();
  });

  test.only('should make an action on Actions option ', () => {
    render(<ActionsComponent />);
    fireEvent.click(screen.getByTestId('action-menu'));
    fireEvent.click(screen.getByText('Duplicate'));
    fireEvent.click(screen.getByText('Duplicate2'));
    fireEvent.click(screen.getByText('Promote'));
    fireEvent.click(screen.getByText('Promote1'));
    fireEvent.click(screen.getByText('Share on Facebook'));
    fireEvent.click(screen.getByText('Share on Faceboo1k'));

    //expect(actions[0].onAction).toBeCalled();
  });
});
