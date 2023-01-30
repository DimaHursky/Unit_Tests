import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import ActionMenu from './ActionMenu';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

const actions = [
  {
    content: 'Duplicate',
    onAction: jest.fn(),
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

const renderComponent = (props) => {
  return render(
    <EcosystemThemeProvider theme={LightTheme}>
      <ActionMenu {...props} />
    </EcosystemThemeProvider>,
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
    renderComponent({ actions });
    expect(screen.getByTestId('action-menu')).toBeInTheDocument();
  });

  test('should render ActionsMenu with actions options', () => {
    renderComponent({ actions });
    fireEvent.click(screen.getByTestId('action-menu'));

    expect(screen.getByText('Duplicate')).toBeInTheDocument();
    expect(screen.getByText('Duplicate2')).toBeInTheDocument();
    expect(screen.queryByText('Promote')).toBeNull();
  });

  test('should render ActionsMenu with group options', () => {
    renderComponent({ groups });
    fireEvent.click(screen.getByTestId('action-menu'));

    expect(screen.queryByText('Duplicate')).toBeNull();
    expect(screen.queryByText('Duplicate1')).toBeNull();
    expect(screen.getByText('Promote')).toBeInTheDocument();
    expect(screen.getByText('Promote1')).toBeInTheDocument();
  });

  test('should render ActionsMenu with actions and group options if they are provided', () => {
    renderComponent({ groups, actions });
    fireEvent.click(screen.getByTestId('action-menu'));

    expect(screen.getByText('Duplicate')).toBeInTheDocument();
    expect(screen.getByText('Duplicate2')).toBeInTheDocument();
    expect(screen.getByText('Promote')).toBeInTheDocument();
    expect(screen.getByText('Promote1')).toBeInTheDocument();
  });

  test('should make an action on ActionsMenu option ', () => {
    renderComponent({ groups, actions });
    fireEvent.click(screen.getByTestId('action-menu'));
    fireEvent.click(screen.getByText('Duplicate'));
    fireEvent.click(screen.getByText('Duplicate2'));

    expect(actions[0].onAction).toBeCalled();
  });


  //TODO - розібратись чому не працює не ріхуються кліки
  // test('should make an action on ActionsMenu option ', () => {
  //   renderComponent({ groups, actions });
  //   fireEvent.click(screen.getByTestId('action-menu'));
  //   fireEvent.click(screen.getByText('Promote'));
  //   fireEvent.click(screen.getByText('Promote1'));
  //   fireEvent.click(screen.getByText('Share on Facebook'));
  //   fireEvent.click(screen.getByText('Share on Faceboo1k'));
  //   screen.logTestingPlaygroundURL();

  //   expect(actions[0].onAction).toBeCalled();
  // });
});
