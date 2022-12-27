import '@testing-library/jest-dom';
import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import * as React from 'react';

import ContentCopy from '@mui/icons-material/ContentCopy';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';
import { ESButton } from '../ESButton';
import DropdownMenu from './DropdownMenu';

const props = {
  content: 'open-btn',
  onClick: jest.fn(),
  //     <ESButton data-testid={'open-btn'} onClick={handleClick}>
};

const p = {
  anchorEl: 'anchorEl',
  sections: 'sections',
  //     <DropdownMenu anchorEl={anchorEl} sections={sections} />
};

// const DropdownComponent = () => {
//   const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
//     null,
//   );

const sections = [
  {
    title: 'File options',
    items: [
      {
        content: 'Import file',
        // перевірити чи щось робиться коли нажимаеш на опцію
        onAction: jest.fn(), // () => console.log('import file 1'),
        icon: <ContentCopy fontSize="small" />, // перевірити чи опція з картинкою
        // перевірити чи опція з суфіксом(мені здаеться що це може бути навіть строка)
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
        onAction: () => console.log('export file 22'), // jest.fn()
        disabled: true, // перевірити що нічого не відбуваеться коли опція disabled (onAction не повинна визиватися)
      },
    ],
  },
];

const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  setAnchorEl(event.currentTarget);
};

return (
  <EcosystemThemeProvider theme={LightTheme}>
    <ESButton data-testid="open-btn" onClick={handleClick}>
      Open
    </ESButton>
    <DropdownMenu anchorEl={anchorEl} sections={sections} />
  </EcosystemThemeProvider>
);

// };

const renderComponent = (fProps) =>
  render(
    <EcosystemThemeProvider theme={LightTheme}>
      <ESButton {...fProps} />
      {/* <DropdownMenu {...fProps} /> */}
    </EcosystemThemeProvider>,
  );

describe('Running Test for DropdownMenu', () => {
  test('Component DropdownMenu is rendered', () => {
    // render(<DropdownComponent />);
    renderComponent({ sections });

    fireEvent.click(screen.getByTestId('open-btn'));
    expect(screen.getByTestId('dropdown')).toBeInTheDocument();
  });

  test('Check if DROPDOWN button is enabled', () => {
    // render(<DropdownComponent />);
    // render(renderComponent(props));
    renderComponent({ sections });
    const OpenBtn = screen.getByTestId('open-btn');
    expect(OpenBtn).toBeEnabled();

    // const buttonAsLink = screen.getByTestId('breadcrumb').click();
    // expect(screen.getByText('Product')).toBeInTheDocument();
  });
  test('Shiuld render all text2', () => {
    // render(<DropdownComponent />);
    // render(renderComponent(p));
    renderComponent({ sections });
    fireEvent.click(screen.getByTestId('open-btn'));
    expect(screen.getByText('Import file')).toBeInTheDocument();
    expect(screen.getByText('Export file')).toBeInTheDocument();
    expect(screen.getByText('Import file2')).toBeInTheDocument();
    expect(screen.getByText('Export file2')).toBeInTheDocument();
  });

  test('Shiuld render all 1', () => {
    // render(<DropdownComponent />);
    // render(renderComponent(p));
    renderComponent({ sections });
    fireEvent.click(screen.getByTestId('open-btn'));
    expect(screen.getByText('Import file')).toBeEnabled();
    expect(screen.getByText('Export file')).toBeEnabled();
    expect(screen.getByText('Import file2')).toBeEnabled();
    expect(screen.getByText('Export file2')).toBeEnabled();
  });
});
