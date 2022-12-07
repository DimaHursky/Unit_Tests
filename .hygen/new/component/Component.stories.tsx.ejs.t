---
to: <%= cwd %>/src/components/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.stories.tsx
---
import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import <%= h.changeCase.pascal(name) %>  from './<%= h.changeCase.pascal(name) %>';

export default {
  title: 'Components/<%= h.changeCase.pascal(name) %>',
  component: <%= h.changeCase.pascal(name) %>,
  argTypes: {},
} as ComponentMeta<typeof <%= h.changeCase.pascal(name) %>>;

const Template: ComponentStory<typeof <%= h.changeCase.pascal(name) %>> = (args) => <<%= h.changeCase.pascal(name) %> {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
