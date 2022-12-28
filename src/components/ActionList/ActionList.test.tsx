import * as React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, } from '@testing-library/react';

import ActionList from './ActionList';
import ContentCopy from '@mui/icons-material/ContentCopy';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';


const sections =  [
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
        onAction: jest.fn(),//() => console.log('import file 21'),
        icon: <ContentCopy fontSize="small" />,
      },
      {
        content: 'Export file2',
        onAction: jest.fn(),//() => console.log('export file 22'),
      },
    ],
  },
];

const items = [
  {
    content: 'Import file',
    onAction: jest.fn(),//() => console.log('import file 1'),
    icon: <ContentCopy fontSize="small" />,
  },
  {
    content: 'Export file',
    onAction: jest.fn(),//() => console.log('export file 1'),
  },
  {
    content: 'Import file2',
    onAction: jest.fn(),//() => console.log('import file 21'),
    icon: <ContentCopy fontSize="small" />,
  },
  {
    content: 'Export file2',
    onAction: jest.fn(),//() => console.log('export file 22'),
},
];

const ActionListt = (props)=>{
return render(
  <EcosystemThemeProvider theme={LightTheme}>
    <ActionList {...props}/>
  </EcosystemThemeProvider>
)};

describe('Running Test for ActionList', () => {
  test('Component ActionList is rendered', () => {
    const items = [
      {
        content: 'Import file',
        onAction: () => console.log('import file 1'),
        icon: <ContentCopy fontSize="small" />,
      },
      {
        content: 'Export file',
        onAction: () => console.log('export file 1'),
      },
    ];


    const { getByTestId } = render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ActionList items={items} data-testid={'simple-actionList'} />
      </EcosystemThemeProvider>,
    );
    expect(getByTestId).not.toBeNull();
  });


  it('should render the ActionList with secton options', ()=>{
    ActionListt({sections});
    expect(screen.getByText ('Import file')).toBeInTheDocument();
    expect(screen.getByText ('Export file')).toBeInTheDocument();
  });

  it('should render the ActionList with items options', ()=>{
    ActionListt({items});
    expect(screen.getByText ('Import file')).toBeInTheDocument();
    expect(screen.getByText ('Export file')).toBeInTheDocument();
    expect(screen.getByText ('Import file2')).toBeInTheDocument();
    expect(screen.getByText ('Export file2')).toBeInTheDocument();
  });

  test('should make an action on ActionList option ', () => {
    ActionListt({ items });
    fireEvent.click(screen.getByText('Import file'));
    fireEvent.click(screen.getByText('Export file'));
    fireEvent.click(screen.getByText('Import file2'));
    fireEvent.click(screen.getByText('Export file2'));

    expect(items[0].onAction).toBeCalled();
  });

  it.only('handles CSS text size', () => {
    ActionListt({items});
      const buttonSize = screen.getByText('Import file');
      
      expect(buttonSize).toHaveStyle('font-size: 0.94rem');
  });
  
  it.only('handles CSS text font', () => {
    ActionListt({items});
      const buttonSize = screen.getByText('Import file');
  
      expect(buttonSize).toHaveStyle('font: -webkit-small-control');
  });
});
