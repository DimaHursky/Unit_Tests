import * as React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import ActionList from './ActionList';
import ContentCopy from '@mui/icons-material/ContentCopy';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

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
});
