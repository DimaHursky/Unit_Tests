import * as React from 'react';
import { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ESCard from './ESCard';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';
import { Card, Typography } from '@mui/material';
import { ESButton } from '../ESButton';
import { ESCardHeader } from '../ESCardHeader';
import { ESCardContent } from '../ESCardContent';
import { ESCardActions } from '../ESCardActions';
import Wrapper from './helpers/Wrapper';
import { ContentCopy } from '@mui/icons-material';
import { DropdownMenu } from '../DropdownMenu';

export default {
  title: 'Components/ESCard',
  component: ESCard,
  argTypes: {},
} as ComponentMeta<typeof ESCard>;

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

const DefaultState = () => (
  <>
    <ESCardHeader title="Online store dashboard" />
    <ESCardContent>
      <Typography variant="body2">
        View a summary of your online store’s performance.
      </Typography>
    </ESCardContent>
  </>
);

const DefaultStateWithSubheader = () => (
  <>
    <ESCardHeader
      title="Online store dashboard"
      subheader="September 14, 2016"
    />
    <ESCardContent>
      <Typography variant="body2">
        View a summary of your online store’s performance.
      </Typography>
    </ESCardContent>
  </>
);

const WithAllCardHeaderPropsState = () => (
  <>
    <ESCardHeader
      title="Online store dashboard"
      subheader="September 14, 2016"
      action={
        <ESButton data-testid="card-header-btn" variant="text">
          Add variant
        </ESButton>
      }
    />
    <ESCardContent>
      <Typography variant="body2">
        View a summary of your online store’s performance.
      </Typography>
    </ESCardContent>
  </>
);

const MultipleChildrenActions = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ESCardHeader title="Shipment 1234" />
      <ESCardContent>
        <Typography variant="body2">1 × Oasis Glass, 4-Pack</Typography>
      </ESCardContent>
      <ESCardActions>
        <ESButton onClick={handleClick}>Open</ESButton>
        <ESButton variant="contained" color="primary">
          Add tracking number
        </ESButton>
        <DropdownMenu
          anchorEl={anchorEl}
          onClose={handleClose}
          sections={sections}
          open={Boolean(anchorEl)}
        />
      </ESCardActions>
    </>
  );
};

const ActionContent = () => <ESButton variant="text">Add variant</ESButton>;

const HeaderActionsState = () => (
  <>
    <ESCardHeader title="Online store dashboard" action={<ActionContent />} />
    <ESCardContent>
      <Typography variant="body2">
        Add variants if this product comes in multiple versions, like different
        sizes or colors.
      </Typography>
    </ESCardContent>
  </>
);

const FooterActionsState = () => (
  <>
    <ESCardHeader title="Shipment 1234" />
    <ESCardContent>
      <Typography variant="body2">1 × Oasis Glass, 4-Pack</Typography>
    </ESCardContent>
    <ESCardActions>
      <ESButton>Edit shipment</ESButton>
      <ESButton variant="contained" color="primary">
        Add tracking number
      </ESButton>
    </ESCardActions>
  </>
);

const MultipleContentState = () => (
  <>
    <ESCardHeader title="Shipment 1234" />
    <ESCardContent>
      <Typography variant="body2">1 × Oasis Glass, 4-Pack</Typography>
    </ESCardContent>
    <ESCardContent>
      <Typography variant="body2">
        View a summary of your online store’s performance.
      </Typography>
    </ESCardContent>
    <ESCardActions>
      <ESButton>Edit shipment</ESButton>
      <ESButton variant="contained" color="primary">
        Add tracking number
      </ESButton>
    </ESCardActions>
  </>
);

const Template: ComponentStory<typeof ESCard> = (args) => {
  return (
    <EcosystemThemeProvider theme={LightTheme}>
      <Wrapper>
        <Card {...args} />
      </Wrapper>
    </EcosystemThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: <DefaultState />,
};

export const Subheader = Template.bind({});
Subheader.args = {
  children: <DefaultStateWithSubheader />,
};

export const AllHeaderProps = Template.bind({});
AllHeaderProps.args = {
  children: <WithAllCardHeaderPropsState />,
};

export const HeaderActions = Template.bind({});
HeaderActions.args = {
  children: <HeaderActionsState />,
};

export const FooterActions = Template.bind({});
FooterActions.args = {
  children: <FooterActionsState />,
};

export const MultipleFooterActions = Template.bind({});
MultipleFooterActions.args = {
  children: <MultipleChildrenActions />,
};

export const MultipleContent = Template.bind({});
MultipleContent.args = {
  children: <MultipleContentState />,
};
