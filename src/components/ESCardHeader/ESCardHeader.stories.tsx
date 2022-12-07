import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ESCardHeader from './ESCardHeader';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';
import { ESButton } from '../ESButton';
import Wrapper from '../ESCard/helpers/Wrapper';

export default {
  title: 'Components/ESCard/ESCardHeader',
  component: ESCardHeader,
  argTypes: {},
} as ComponentMeta<typeof ESCardHeader>;

const Template: ComponentStory<typeof ESCardHeader> = (args) => {
  return (
    <EcosystemThemeProvider theme={LightTheme}>
      <Wrapper>
        <ESCardHeader {...args} />
      </Wrapper>
    </EcosystemThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Online store dashboard',
};

export const HeaderActions = Template.bind({});
HeaderActions.args = {
  title: 'Online store dashboard',
  action: <ESButton variant="text">Add variant</ESButton>,
};

export const HeaderActionsAndSubheader = Template.bind({});
HeaderActionsAndSubheader.args = {
  title: 'Online store dashboard',
  action: <ESButton variant="text">Add variant</ESButton>,
  subheader: 'September 14, 2016',
};
