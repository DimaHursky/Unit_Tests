import { IOffice } from '../../providers/OfficesProvider/OfficesProvider.types';

export interface UseOfficesValue {
  offices: IOffice[];
  currentOffice: IOffice | null;
  changeOffice: (slug: string) => void;
}
