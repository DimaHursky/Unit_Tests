---
to: <%= cwd %>/src/providers/<%= h.changeCase.pascal(name) %>Provider/<%= h.changeCase.pascal(name) %>Provider.stories.tsx
---
import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import <%= h.changeCase.pascal(name) %>Provider from './<%= h.changeCase.pascal(name) %>Provider';

const SomeComponentForDisplayTheProviderWorking = () => {
  return <div>Some text</div>;
};

export default {
title: 'Providers/<%= h.changeCase.pascal(name) %>Provider',
component: <%= h.changeCase.pascal(name) %>Provider,
argTypes: {},
} as ComponentMeta<typeof <%= h.changeCase.pascal(name) %>Provider>;

const Template: ComponentStory<typeof <%= h.changeCase.pascal(name) %>Provider> = (props) => (
<<%= h.changeCase.pascal(name) %>Provider {...props}>
    <SomeComponentForDisplayTheProviderWorking />
</<%= h.changeCase.pascal(name) %>Provider>
);

export const Variant1 = Template.bind({});
Variant1.args = {};
