import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import OfficesProvider, { OfficesContext } from './OfficesProvider';
import { MockDataProvider } from '../MockDataProvider';
import * as sources from '../../../tests/sources';

const SomeComponentForDisplayTheProviderWorking = () => {
  return (
    <OfficesContext.Consumer>
      {({ offices, currentOffice }) => (
        <pre>
          <code>Offices: {JSON.stringify(offices, null, 2)}</code>
          <code>Current Office: {JSON.stringify(currentOffice, null, 2)}</code>
        </pre>
      )}
    </OfficesContext.Consumer>
  );
};

export default {
  title: 'Providers/OfficesProvider',
  component: OfficesProvider,
  argTypes: {},
} as ComponentMeta<typeof OfficesProvider>;

const dataProvider = MockDataProvider(sources, 'http://localhost:3001/api');

const Template: ComponentStory<typeof OfficesProvider> = (props) => (
  <OfficesProvider {...props}>
    <SomeComponentForDisplayTheProviderWorking />
  </OfficesProvider>
);

export const Variant1 = Template.bind({});
Variant1.args = {
  dataProvider,
};
