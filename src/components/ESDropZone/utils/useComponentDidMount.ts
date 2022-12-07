import { useEffect, useRef, useState } from 'react';

export const useIsAfterInitialMount = () => {
  const [isAfterInitialMount, setIsAfterInitialMount] = useState(false);

  useEffect(() => {
    setIsAfterInitialMount(true);
  }, []);

  return isAfterInitialMount;
};

export const useComponentDidMount = (cb: () => void) => {
  const isAfterInitialMount = useIsAfterInitialMount();
  const hasInvokedLifeCycle = useRef(false);

  if (isAfterInitialMount && !hasInvokedLifeCycle.current) {
    hasInvokedLifeCycle.current = true;
    return cb();
  }
  return undefined;
};
