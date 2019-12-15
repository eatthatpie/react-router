import RouterContext from '@/RouterContext';
import { useContext, useEffect } from 'react';

export default function useRouteWatcher(cb: Function) {
  const context = useContext(RouterContext);

  if (!context) {
    throw new Error(
      `[useRouteWatcher] No RouterContext provided.`
    );
  }

  // useEffect(() => {
  //   cb(from, to);
  // }, [context.modeState]);
}
