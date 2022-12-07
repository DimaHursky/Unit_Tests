---
to: <%= cwd %>/src/hooks/use<%= h.changeCase.pascal(name) %>/use<%= h.changeCase.pascal(name) %>.stories.tsx
---
import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import use<%= h.changeCase.pascal(name) %> from './use<%= h.changeCase.pascal(name) %>';
import { Use<%= h.changeCase.pascal(name) %>Props } from './use<%= h.changeCase.pascal(name) %>.types';

const SomeComponentForDisplayTheHookWorking = (props: Use<%= h.changeCase.pascal(name) %>Props) => {
  const result = use<%= h.changeCase.pascal(name) %>(props);
  return <pre>{JSON.stringify(result)}</pre>;
};

export default {
title: 'Hooks/use<%= h.changeCase.pascal(name) %>',
component: SomeComponentForDisplayTheHookWorking,
argTypes: {},
} as ComponentMeta<typeof SomeComponentForDisplayTheHookWorking>;

const Template: ComponentStory<typeof SomeComponentForDisplayTheHookWorking> = (props) => (
  <SomeComponentForDisplayTheHookWorking {...props} />
);

export const Variant1 = Template.bind({});
Variant1.args = {
  value: 2,
};
