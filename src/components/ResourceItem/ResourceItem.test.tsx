import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import ResourceItem from './ResourceItem';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';
import { Typography } from '@mui/material';

describe('Running Test for ResourceItem', () => {
  test('Component ResourceItem is rendered', () => {
    render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ResourceItem id={'1'}>
          <Typography variant={'subtitle2'} sx={{ fontWeight: 700 }}>
            {'Yi So-Yeon'}
          </Typography>
          <Typography variant={'subtitle2'}>
            {'Gwangju, South Korea'}
          </Typography>
        </ResourceItem>
      </EcosystemThemeProvider>,
    );
    expect(screen.getByText('Yi So-Yeon')).not.toBeNull();
  });
});
