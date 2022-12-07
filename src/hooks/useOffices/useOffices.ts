import { useContext, useMemo } from 'react';
import { UseOfficesValue } from './useOffices.types';
import { OfficesContext } from '../../providers/OfficesProvider/OfficesProvider';

const useOffices = (): UseOfficesValue => {
  const { offices, currentOffice, changeOffice } = useContext(OfficesContext);

  return useMemo(
    () => ({ offices, currentOffice, changeOffice }),
    [offices, currentOffice, changeOffice],
  );
};

export default useOffices;
