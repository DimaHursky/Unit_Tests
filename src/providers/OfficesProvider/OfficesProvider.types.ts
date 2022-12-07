import { IDataContextProvider } from '@pankod/refine-core/dist/contexts/data/IDataContext';

export interface OfficesProviderProps {
  children: React.ReactNode;
  dataProvider: IDataContextProvider;
}

export interface IOffice {
  slug: string;
  title: string;
  logo: string;
}

export interface IOfficesContext {
  offices: IOffice[];
  currentOffice: IOffice | null;
  changeOffice: (slug: string) => void;
}
