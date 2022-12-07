import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ESCardActions from './ESCardActions';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';
import { Card } from '@mui/material';
import { ESButton } from '../ESButton';
import Wrapper from '../ESCard/helpers/Wrapper';

const DefaultChildrenActions = () => {
  return (
    <>
      <ESButton>Edit shipment</ESButton>
      <ESButton variant="contained" color="primary">
        Add tracking number
      </ESButton>
    </>
  );
};

export default {
  title: 'Components/ESCard/ESCardActions',
  component: ESCardActions,
  argTypes: {},
} as ComponentMeta<typeof ESCardActions>;

const Template: ComponentStory<typeof ESCardActions> = (args) => {
  const { sx } = args;
  return (
    <EcosystemThemeProvider theme={LightTheme}>
      <Wrapper>
        <Card sx={sx}>
          <ESCardActions {...args} />
        </Card>
      </Wrapper>
    </EcosystemThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: <DefaultChildrenActions />,
};
