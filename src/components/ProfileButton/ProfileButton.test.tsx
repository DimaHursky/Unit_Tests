import * as React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import ProfileButton from './ProfileButton';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

describe('Running Test for ProfileButton', () => {
  test('Component ProfileButton is rendered', () => {
    const actions = [
      {
        items: [
          {
            content: 'Logout',
            onAction: () => console.log('Logout'),
            icon: <ArrowBackIcon fontSize="small" />,
          },
        ],
      },
      {
        items: [
          {
            content: 'Another action',
            onAction: () => console.log('some action'),
          },
        ],
      },
    ];

    render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ProfileButton
          actions={actions}
          name={'Test'}
          detail={'Test test'}
          initials={'TT'}
        />
      </EcosystemThemeProvider>,
    );

    expect(screen.getByTestId('profile-btn')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('profile-btn'));
    expect(screen.getByTestId('dropdown')).toBeInTheDocument();
  });
});
