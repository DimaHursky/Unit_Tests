import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import useOffices from './useOffices';

const SomeComponentForDisplayTheHookWorking = () => {
  const result = useOffices();
  return <pre>{JSON.stringify(result)}</pre>;
};

export default {
  title: 'Hooks/useOffices',
  component: SomeComponentForDisplayTheHookWorking,
  argTypes: {},
} as ComponentMeta<typeof SomeComponentForDisplayTheHookWorking>;

const Template: ComponentStory<typeof SomeComponentForDisplayTheHookWorking> = (
  props,
) => <SomeComponentForDisplayTheHookWorking />;

export const Variant1 = Template.bind({});
Variant1.args = {};
