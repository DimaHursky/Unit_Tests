import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ESCardContent from './ESCardContent';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';
import { Typography } from '@mui/material';
import Wrapper from '../ESCard/helpers/Wrapper';

export default {
  title: 'Components/ESCard/ESCardContent',
  component: ESCardContent,
  argTypes: {},
} as ComponentMeta<typeof ESCardContent>;

const Template: ComponentStory<typeof ESCardContent> = (args) => {
  return (
    <EcosystemThemeProvider theme={LightTheme}>
      <Wrapper>
        <ESCardContent {...args}>
          <Typography variant="body2">
            View a summary of your online store’s performance.
          </Typography>
        </ESCardContent>
      </Wrapper>
    </EcosystemThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {};
