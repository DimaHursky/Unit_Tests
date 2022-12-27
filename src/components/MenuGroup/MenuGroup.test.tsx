import * as React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import MenuGroup from './MenuGroup';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

const actions = [
  {
    content: 'Duplicate',
    onAction: jest.fn(),
    // onAction: () => console.log('Duplicate action'),
  },
  {
    content: 'View on your store',
    onAction: () => console.log('View on your store action'),
  },
];

const MenuGroupp = () => {
  return (
    <EcosystemThemeProvider theme={LightTheme}>
      <MenuGroup title={'group'} actions={actions} />
    </EcosystemThemeProvider>
  );
};

describe('Running Test for MenuGroup', () => {
  test('Component MenuGroup is rendered', () => {
    render(<MenuGroupp />);
    expect(screen.getByTestId('menu-group')).toBeInTheDocument();
  });

  test('Component Group is rendered', () => {
    render(<MenuGroupp />);
    const count = screen.getByTestId('menu-group');
    fireEvent.click(count);
    expect(count).toHaveTextContent('group');
  });

  test('Srould render Menu-Group component', () => {
    render(<MenuGroupp />);
    expect(screen.getByText(/group/i)).toBeInTheDocument();
    expect(screen.queryByText(/duplicate/i)).toBeNull();
    expect(screen.queryByText(/view on your store/i)).toBeNull();
  });

  test('Should render Menu-Group that contain components', () => {
    render(<MenuGroupp />);
    fireEvent.click(screen.getByRole('button', { name: /group/i }));
    expect(screen.getByText(/group/i)).toBeInTheDocument();
    expect(screen.getByText(/duplicate/i)).toBeInTheDocument();
    expect(screen.getByText(/view on your store/i)).toBeInTheDocument();
  });

  test('the button name is group ', () => {
    render(<MenuGroupp />);
    fireEvent.click(screen.getByRole('button', { name: /group/i }));
    expect(screen.getByText(/duplicate/i)).toBeEnabled();
    expect(screen.getByText(/view on your store/i)).toBeEnabled();
    screen.logTestingPlaygroundURL();
  });
  test('the button name is group ', () => {
    render(<MenuGroupp />);
    fireEvent.click(screen.getByRole('button', { name: /group/i }));
    fireEvent.click(screen.getByText(/duplicate/i));
    fireEvent.click(screen.getByText(/view on your store/i));
    expect(actions[0].onAction).toBeCalled();
  });
});
