import { RouterContext } from '@/RouterContext';
import { useContext, useEffect, useState } from 'react';

export default function useRouteWatcher(cb: Function): void {
  const router: any = useContext(RouterContext);

  if (!router) {
    throw new Error(`[useRouteWatcher] The RouterContext is not provided.`);
  }

  const [matchedRoutes, setMatchedRoutes] = useState({
    from: null,
    to: {
      component: router.getCurrentRoute().component
    }
  });

  useEffect(() => {
    router.subscribe((from, to) => {
      setMatchedRoutes({ from, to });
    });
  }, [null]);

  useEffect(() => {
    cb(matchedRoutes.from, matchedRoutes.to);
  }, [matchedRoutes]);
}
