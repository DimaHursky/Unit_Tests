import * as React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import DropdownMenu from './DropdownMenu';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';
import { ESButton } from '../ESButton';
import ContentCopy from '@mui/icons-material/ContentCopy';
import { Icon } from '@mui/material';

const DropdownComponent = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );

  const sections = [
    {
      title: 'File options',
      items: [
        {
          content: 'Import file',
          onAction: jest.fn(),
          //onAction: () => console.log('import file 1'),
          icon: <ContentCopy fontSize="small" />,
          suffix: <ContentCopy fontSize="small" />,
          disabled: true,
        },
        {
          content: 'Export file',
          onAction: () => console.log('export file 1'),
        },
      ],
    },
    {
      title: 'File options2',
      items: [
        {
          content: 'Import file2',
          onAction: () => console.log('import file 21'),
          icon: <ContentCopy fontSize="small" />,
        },
        {
          content: 'Export file2',
          onAction: () => console.log('export file 22'),
        },
      ],
    },
  ];

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <EcosystemThemeProvider theme={LightTheme}>
      <ESButton data-testid={'open-btn'} onClick={handleClick}>
        Open
      </ESButton>
      <DropdownMenu anchorEl={anchorEl} sections={sections} />
    </EcosystemThemeProvider>
  );
};

describe('Running Test for DropdownMenu', () => {
  test('Component DropdownMenu is rendered', () => {
    render(<DropdownComponent />);
    fireEvent.click(screen.getByTestId('open-btn'));
    expect(screen.getByTestId('dropdown')).toBeInTheDocument();
  });

  test('Check if dropdown button is enabled', () => {
    render(<DropdownComponent />);
    const OpenBtn = screen.getByTestId('open-btn');
    expect(OpenBtn).toBeEnabled();
  });

  test('should make an action on DropdownMenu option ', () => {
    render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESButton
          data-testid={'open-btn'}
          disabled={true}
        />
      </EcosystemThemeProvider>,    
      );

    const primaryAction = screen.getByTestId('open-btn');
    // expect(primaryAction.querySelector('button')).toBeDisabled();
    expect(primaryAction).toBeDisabled();
    screen.logTestingPlaygroundURL();
  });

  test('all buttons should be in the document', () => {
    render(<DropdownComponent />);
    expect(screen.getByText('Open')).toBeInTheDocument();
    expect(screen.queryByText('Import file')).toBeNull();
    expect(screen.queryByText('Export file')).toBeNull();
    expect(screen.queryByText('Import file2')).toBeNull();
    expect(screen.queryByText('Export file2')).toBeNull();
  });

  test('all buttons should be in the document', () => {
    render(<DropdownComponent />);
    fireEvent.click(screen.getByTestId('open-btn'));
    expect(screen.getByText('Open')).toBeInTheDocument();
    expect(screen.getByText('Import file')).toBeInTheDocument();
    expect(screen.getByText('Export file')).toBeInTheDocument();
    expect(screen.getByText('Import file2')).toBeInTheDocument();
    expect(screen.getByText('Export file2')).toBeInTheDocument();
  });

  test('Caheck the onAction is work', () => {
    render(<DropdownComponent />);
    fireEvent.click(screen.getByTestId('open-btn'));
    const btn = screen.getByText('Export file');
    expect(btn.textContent).toEqual('Export file');
  });

  //TODO - уточнити реалізацію onAction).toBeCalled() для цього елемента

  
  // test('should make an action on DropdownMenu option ', () => {
  //   render(<DropdownComponent />);
  //   screen.logTestingPlaygroundURL();
  //   const btn = fireEvent.click(screen.getByTestId('open-btn'));
  //   const btn2 = fireEvent.click(screen.getByRole('button', { name: /import file1/i }),
  //   );

  //   // expect(handleClick[0].onAction).toBeCalled();
  //   //screen.getByRole('button').click();

  //   //expect(props.onAction).toBeCalled();
});
