import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import useUiState from './useUiState';
import UiStateProvider from '../../providers/UiStateProvider/UiStateProvider';

const SomeComponentForDisplayTheHookWorking = () => {
  const [uiState] = useUiState();
  return (
    <pre>
      <code>UiState: {JSON.stringify(uiState, null, 2)}</code>
    </pre>
  );
};

export default {
  title: 'Hooks/useUiState',
  component: SomeComponentForDisplayTheHookWorking,
  argTypes: {},
} as ComponentMeta<typeof SomeComponentForDisplayTheHookWorking>;

export const Base: ComponentStory<
  typeof SomeComponentForDisplayTheHookWorking
> = () => (
  <UiStateProvider>
    <SomeComponentForDisplayTheHookWorking />
  </UiStateProvider>
);
