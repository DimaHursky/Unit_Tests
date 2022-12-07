import { useCallback, useState } from 'react';

const useToggle = (initValue: boolean) => {
  const [value, setValue] = useState<boolean>(initValue);

  return {
    value,
    toggle: useCallback(() => setValue((state) => !state), []),
    setTrue: useCallback(() => setValue(true), []),
    setFalse: useCallback(() => setValue(false), []),
  };
};

export default useToggle;
