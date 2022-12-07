import React from 'react';
import { Refine } from '@pankod/refine-core';
import { EcosystemProps } from './Ecosystem.types';
import { EcosystemThemeProvider, OfficesProvider } from '../../providers';
import UiStateProvider from '../../providers/UiStateProvider/UiStateProvider';

const Ecosystem: React.FC<EcosystemProps> = ({ theme, ...rest }) => (
  <EcosystemThemeProvider theme={theme}>
    <UiStateProvider>
      <OfficesProvider
        dataProvider={rest.dataProvider.auth || rest.dataProvider.default}
      >
        <Refine {...rest} />
      </OfficesProvider>
    </UiStateProvider>
  </EcosystemThemeProvider>
);

export default Ecosystem;
