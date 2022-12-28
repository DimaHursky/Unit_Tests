import * as React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import DropdownMenu from './DropdownMenu';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';
import { ESButton } from '../ESButton';
import ContentCopy from '@mui/icons-material/ContentCopy';

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
        onAction: jest.fn(), //() => console.log('export file 1'),
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

const DropdownComponent = (props) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <EcosystemThemeProvider theme={LightTheme}>
      <ESButton data-testid={'open-btn'} onClick={handleClick}>
        Open
      </ESButton>
      <DropdownMenu anchorEl={anchorEl} sections={props.sections} />
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

    fireEvent.click(screen.getByTestId('open-btn'));
    expect(OpenBtn).toBeEnabled();
  });

  test('all buttons is not avalible when dropdown is closed', () => {
    render(<DropdownComponent />);
    expect(screen.getByText('Open')).toBeInTheDocument();
    expect(screen.queryByText('Import file')).toBeNull();
    expect(screen.queryByText('Export file')).toBeNull();
    expect(screen.queryByText('Import file2')).toBeNull();
    expect(screen.queryByText('Export file2')).toBeNull();
  });

  test('all buttons must be in the document when the dropdown is expanded', () => {
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

    const dropdownBtn = screen.getByTestId('dropdown');
    expect(dropdownBtn).toHaveTextContent('File options');
    expect(dropdownBtn).toHaveTextContent('Import file');
    expect(dropdownBtn).toHaveTextContent('Export file');
    expect(dropdownBtn).toHaveTextContent('File options2');
    expect(dropdownBtn).toHaveTextContent('Import file2');
    expect(dropdownBtn).toHaveTextContent('Export file2');
    // expect(btn.textContent).toEqual('File options Import fileExport file File options2 Import file2 Export file2');
  });

  test.only('should make an action on DropdownMenu option', () => {
    render(<DropdownComponent sections={sections} />);
    screen.logTestingPlaygroundURL();
    fireEvent.click(screen.getByTestId('open-btn'));

    fireEvent.click(screen.getByText('Import file'));
    fireEvent.click(screen.getByText('Export file'));
    fireEvent.click(screen.getByText('Import file2'));
    fireEvent.click(screen.getByText('Export file2'));
    expect(sections[0].items[0].onAction).toBeCalled();
    expect(sections[0].items[1].onAction).toBeCalled();
    expect(sections[1].items[0].onAction).toBeCalled();
    expect(sections[1].items[1].onAction).toBeCalled();
  });
});
