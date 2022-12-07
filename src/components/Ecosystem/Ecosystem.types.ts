import { ThemeOptions } from '@mui/material';
import { RefineProps } from '@pankod/refine-core';
import { IDataMultipleContextProvider } from '@pankod/refine-core/dist/contexts/data/IDataContext';

export interface EcosystemProps {
  theme: ThemeOptions;
  authProvider?: RefineProps['authProvider'];
  dataProvider: IDataMultipleContextProvider;
  routerProvider: RefineProps['routerProvider'];
  notificationProvider?: RefineProps['notificationProvider'];
  accessControlProvider?: RefineProps['accessControlProvider'];
  auditLogProvider?: RefineProps['auditLogProvider'];
  resources?: RefineProps['resources'];
  i18nProvider?: RefineProps['i18nProvider'];
  catchAll?: RefineProps['catchAll'];
  LoginPage?: RefineProps['LoginPage'];
  DashboardPage?: RefineProps['DashboardPage'];
  ReadyPage?: RefineProps['ReadyPage'];
  Layout?: RefineProps['Layout'];
  Sider?: RefineProps['Sider'];
  Header?: RefineProps['Header'];
  Footer?: RefineProps['Footer'];
  OffLayoutArea?: RefineProps['OffLayoutArea'];
  Title?: RefineProps['Title'];
  onLiveEvent?: RefineProps['onLiveEvent'];
  children?: RefineProps['children'];
  options?: RefineProps['options'];
}
