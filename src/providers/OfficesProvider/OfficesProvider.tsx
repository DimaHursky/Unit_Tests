import React, { useMemo, useCallback, useEffect } from 'react';
import {
  OfficesProviderProps,
  IOffice,
  IOfficesContext,
} from './OfficesProvider.types';

export const OfficesContext = React.createContext<IOfficesContext>({
  changeOffice: () => {},
  offices: [],
  currentOffice: null,
});

const OfficesProvider = ({ children, dataProvider }: OfficesProviderProps) => {
  const [offices, setOffices] = React.useState<IOffice[]>([]);
  const [currentOffice, setCurrentOffice] = React.useState<IOffice | null>(
    null,
  );

  useEffect(() => {
    dataProvider
      .getList<IOffice>({
        resource: 'offices',
        pagination: { current: 1, pageSize: 9999 },
      })
      .then((response) => {
        setOffices(response.data);
      });
  }, [dataProvider, setOffices]);

  const changeOffice = useCallback(
    (slug: string) => {
      setCurrentOffice(offices?.find((office) => office.slug === slug) || null);
    },
    [offices, setCurrentOffice],
  );

  const value = useMemo(
    () => ({ offices, currentOffice, changeOffice }),
    [offices, currentOffice, changeOffice],
  );

  return (
    <OfficesContext.Provider value={value}>{children}</OfficesContext.Provider>
  );
};

export default OfficesProvider;
