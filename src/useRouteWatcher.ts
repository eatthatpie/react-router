import RouterContext from '@/RouterContext';
import { useContext, useEffect, useState } from 'react';

export default function useRouteWatcher(cb: Function) {
  const router = useContext(RouterContext);

  const [matchedRoutes, setMatchedRoutes] = useState({ from: null, to: null });

  router.subscribe(matchedRoutes => {
    setMatchedRoutes({ from: matchedRoutes[1], to: matchedRoutes[0] });
  });

  useEffect(() => {
    cb(matchedRoutes.from, matchedRoutes.to);
  }, [matchedRoutes]);
}
