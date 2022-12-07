import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import UiStateProvider, { UiStateContext } from './UiStateProvider';

const SomeComponentForDisplayTheProviderWorking = () => {
  return (
    <UiStateContext.Consumer>
      {({ uiState, setUiState }) => (
        <pre>
          <code>Current context: {JSON.stringify(uiState, null, 2)}</code>
        </pre>
      )}
    </UiStateContext.Consumer>
  );
};

export default {
  title: 'Providers/UiStateProvider',
  component: UiStateProvider,
  argTypes: {},
} as ComponentMeta<typeof UiStateProvider>;

export const Info: ComponentStory<typeof UiStateProvider> = (props) => (
  <UiStateProvider {...props}>
    <SomeComponentForDisplayTheProviderWorking />
  </UiStateProvider>
);
