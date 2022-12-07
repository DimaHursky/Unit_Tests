import * as React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import DropdownMenu from './DropdownMenu';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';
import { ESButton } from '../ESButton';
import ContentCopy from '@mui/icons-material/ContentCopy';

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
          onAction: () => console.log('import file 1'),
          icon: <ContentCopy fontSize="small" />,
          suffix: <ContentCopy fontSize="small" />,
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
});
