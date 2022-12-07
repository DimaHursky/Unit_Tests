import * as React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import ESCard from './ESCard';
import { LightTheme } from '../../theme';
import { EcosystemThemeProvider } from '../../providers';
import { ESCardHeader } from '../ESCardHeader';
import { ESCardContent } from '../ESCardContent';
import { Typography } from '@mui/material';
import { ESButton } from '../ESButton';
import { ESCardActions } from '../ESCardActions';

describe('Running Test for ESCard', () => {
  test('Component ESCard is rendered', () => {
    const { getByTestId } = render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESCard data-testid="card">Test</ESCard>
      </EcosystemThemeProvider>,
    );
    expect(getByTestId('card')).not.toBeNull();
  });

  test('Component Default ESCard is rendered', () => {
    const { getByTestId } = render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESCard data-testid="card">
          <ESCardHeader
            data-testid="card-header"
            title="Online store dashboard"
          />
          <ESCardContent data-testid="card-content">
            <Typography data-testid="card-content-text" variant="body2">
              View a summary of your online store’s performance.
            </Typography>
          </ESCardContent>
        </ESCard>
      </EcosystemThemeProvider>,
    );
    const card = getByTestId('card');
    const cardHeader = getByTestId('card-header');
    const cardContent = getByTestId('card-content');
    const cardContentText = getByTestId('card-content-text');
    expect(card).toContainElement(cardHeader);
    expect(card).toContainElement(cardContent);
    expect(card).toContainElement(cardContentText);
  });

  test('Component ESCard with all CardHeader props is rendered', () => {
    const { getByTestId, getByText } = render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESCard data-testid="card">
          <ESCardHeader
            data-testid="card-header"
            title="Online store dashboard"
            subheader="September 14, 2016"
            action={
              <ESButton data-testid="card-header-btn" variant="text">
                Add variant
              </ESButton>
            }
          />
          <ESCardContent data-testid="card-content">
            <Typography data-testid="card-content-text" variant="body2">
              View a summary of your online store’s performance.
            </Typography>
          </ESCardContent>
        </ESCard>
      </EcosystemThemeProvider>,
    );

    const card = getByTestId('card');
    const cardHeader = getByTestId('card-header');
    const title = getByText('Online store dashboard');
    const subheader = getByText('September 14, 2016');
    const btn = getByTestId('card-header-btn');
    const cardContent = getByTestId('card-content');
    const cardText = getByTestId('card-content-text');

    expect(card).toContainElement(cardHeader);
    expect(card).toContainElement(title);
    expect(card).toContainElement(subheader);
    expect(card).toContainElement(btn);
    expect(card).toContainElement(cardContent);
    expect(card).toContainElement(cardText);
  });

  test('Component ESCard with ESCardActions is rendered', () => {
    const { getByTestId, getByText } = render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESCard data-testid="card">
          <ESCardHeader
            data-testid="card-header"
            title="Online store dashboard"
          />
          <ESCardContent data-testid="card-content">
            <Typography data-testid="content-text" variant="body2">
              View a summary of your online store’s performance.
            </Typography>
          </ESCardContent>
          <ESCardActions data-testid="card-actions">
            <ESButton data-testid="actions-edit-btn">Edit shipment</ESButton>
            <ESButton
              data-testid="actions-add-btn"
              variant="contained"
              color="primary"
            >
              Add tracking number
            </ESButton>
          </ESCardActions>
        </ESCard>
      </EcosystemThemeProvider>,
    );

    const card = getByTestId('card');
    const cardHeader = getByTestId('card-header');
    const title = getByText('Online store dashboard');
    const cardContent = getByTestId('card-content');
    const cardText = getByTestId('content-text');
    const cardActions = getByTestId('card-actions');
    const editBtn = getByTestId('actions-edit-btn');
    const addBtn = getByTestId('actions-add-btn');

    expect(card).toContainElement(cardHeader);
    expect(card).toContainElement(title);
    expect(card).toContainElement(cardContent);
    expect(card).toContainElement(cardText);
    expect(card).toContainElement(cardActions);
    expect(card).toContainElement(editBtn);
    expect(card).toContainElement(addBtn);
  });

  test('Component ESCard with multiple content is rendered', () => {
    const { getByTestId, getByText } = render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESCard data-testid="card">
          <ESCardHeader
            data-testid="card-header"
            title="Online store dashboard"
          />
          <ESCardContent data-testid="card-content-1">
            <Typography variant="body2">1 × Oasis Glass, 4-Pack</Typography>
          </ESCardContent>
          <ESCardContent data-testid="card-content-2">
            <Typography data-testid="content-text" variant="body2">
              View a summary of your online store’s performance.
            </Typography>
          </ESCardContent>
        </ESCard>
      </EcosystemThemeProvider>,
    );

    const card = getByTestId('card');
    const cardHeader = getByTestId('card-header');
    const title = getByText('Online store dashboard');
    const cardContent1 = getByTestId('card-content-1');
    const cardContent2 = getByTestId('card-content-2');

    expect(card).toContainElement(cardHeader);
    expect(card).toContainElement(title);
    expect(card).toContainElement(cardContent1);
    expect(card).toContainElement(cardContent2);
  });
});
