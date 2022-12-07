import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import routerProvider from '@pankod/refine-react-router-v6';

import Ecosystem from './Ecosystem';
import { LightTheme } from '../../theme';
import { MockDataProvider } from '../../providers';

export default {
  title: 'Components/Ecosystem',
  component: Ecosystem,
  argTypes: {},
} as ComponentMeta<typeof Ecosystem>;

const Template: ComponentStory<typeof Ecosystem> = (args) => (
  <Ecosystem {...args} />
);

const ReadyPage = () => (
  <div>
    <h1>This is a main ecosystem ui component</h1>
  </div>
);

const posts: any[] = [];

export const Base = Template.bind({});
Base.args = {
  routerProvider,
  theme: LightTheme,
  dataProvider: {
    default: MockDataProvider({ posts }, 'http://localhost:3000/api'),
  },
  ReadyPage,
};
