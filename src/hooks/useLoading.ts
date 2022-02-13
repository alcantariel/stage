import { useCallback, useState } from 'react';

import { useIsMounted } from './useIsMounted';

type UseLoadingReturn = [boolean, (promise: Promise<any>) => Promise<any>];

export const useLoading = (): UseLoadingReturn => {
  const mounted = useIsMounted();
  const [loading, setLoading] = useState(false);

  const fetch = useCallback(
    (promise: Promise<any>): Promise<any> => {
      setLoading(true);

      return promise.finally(() => {
        if (mounted) {
          setLoading(false);
        }
      });
    },
    [mounted]
  );

  return [loading, fetch];
};
