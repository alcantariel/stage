import { useRef, useEffect } from 'react';

export const useIsMounted = (): boolean => {
  const isMountedRef = useRef(false);

  useEffect(() => {
    isMountedRef.current = true;
  }, []);

  return isMountedRef.current;
};
