import * as React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import RollupAction from './RollupAction';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

const actions = [
  {
    content: 'Duplicate',
    onAction: jest.fn(), //() => console.log('Duplicate action'),
  },
  {
    content: 'View on your store',
    onAction: jest.fn(), //() => console.log('View on your store action'),
  },
  {
    content: 'Duplicate 2',
    onAction: jest.fn(), //() => console.log('Duplicate action'),
  },
  {
    content: 'View on your store 3',
    onAction: jest.fn(), //() => console.log('View on your store action'),
  },
  {
    content: 'View on your store 4',
    onAction: jest.fn(), //() => console.log('View on your store action'),
  },
];

const sections = [
  {
    title: 'Promote',
    items: [
      {
        content: 'Share on Facebook',
        accessibilityLabel: 'Individual action label',
        onAction: jest.fn(), //() => console.log('Share on Facebook action'),
      },
    ],
  },
  {
    title: 'Promote1',
    items: [
      {
        content: 'Share on Faceboo1k',
        onAction: jest.fn(), //() => console.log('Share on Faceb1ook action'),
      },
    ],
  },
];

const RollupActionn = () => {
  return (
    <EcosystemThemeProvider theme={LightTheme}>
      <RollupAction actions={actions} sections={sections} />б
    </EcosystemThemeProvider>
  );
};

describe('Running Test for RollupAction', () => {
  test('Component RollupAction is rendered', () => {
    render(<RollupActionn />);

    expect(screen.getByTestId('rollup-btn')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('rollup-btn'));
    expect(screen.getByTestId('dropdown')).toBeInTheDocument();
  });

  test('Component RollupAction is not rendered when dropdown do not open', () => {
    render(<RollupActionn />);
    expect(screen.getByTestId('rollup-btn')).toBeInTheDocument();
    expect(screen.queryByText('Duplicate')).toBeNull();
    expect(screen.queryByText('Duplicate2')).toBeNull();
    expect(screen.queryByText('View on your store')).toBeNull();
    expect(screen.queryByText('View on your store 3')).toBeNull();
    expect(screen.queryByText('View on your store 4')).toBeNull();
    expect(screen.queryByText('Share on Facebook')).toBeNull();
    expect(screen.queryByText('Share on Faceboo1k')).toBeNull();
  });

  test('Component RollupAction is not rendered when dropdown is open', () => {
    render(<RollupActionn />);
    fireEvent.click(screen.getByTestId('rollup-btn'));
    expect(screen.getByText('Duplicate')).toBeInTheDocument();
    expect(screen.getByText('Duplicate 2')).toBeInTheDocument();
    expect(screen.getByText('View on your store')).toBeInTheDocument();
    expect(screen.getByText('View on your store 3')).toBeInTheDocument();
    expect(screen.getByText('View on your store 4')).toBeInTheDocument();
    expect(screen.getByText('Share on Facebook')).toBeInTheDocument();
    expect(screen.getByText('Share on Faceboo1k')).toBeInTheDocument();
  });

  // test.only('on Action to be called', () => {
  //   const result = render(<RollupActionn />);

  //   fireEvent.click(screen.getByTestId('rollup-btn'));
  //   fireEvent.click(screen.getByText(/Duplicate /i));
  //   fireEvent.click(screen.getByRole('button', {
  //     name: /duplicate 2/i
  //   }));
  //   fireEvent.click(screen.getByRole('button', {
  //     name:  /view on your store 3/i
  //   }));
  //   fireEvent.click(screen.getByText('View on your store'));
  //   fireEvent.click(screen.getByText(/View on your store 4/i));
  //   expect(actions[0].onAction).toBeCalled();
  // });

  test('on Action of Promote', () => {
    render(<RollupActionn />);

    fireEvent.click(screen.getByTestId('rollup-btn'));
    fireEvent.click(screen.getByText(/Share on Facebook/i));
    expect(sections[0].items[0].onAction).toBeCalled();
  });
  test('on Action of Promote1', () => {
    render(<RollupActionn />);

    fireEvent.click(screen.getByTestId('rollup-btn'));
    fireEvent.click(screen.getByText(/Share on Faceboo1k/i));
    expect(sections[1].items[0].onAction).toBeCalled();
  });
});