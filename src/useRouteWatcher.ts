import RouterContext from '@/RouterContext';
import { useContext } from 'react';

export default function useRouteWatcher(cb: Function) {
  const context = useContext(RouterContext);

  if (!context) {
    throw new Error(
      `[useRouteWatcher] No RouterContext provided.`
    );
  }

  context.subscribe(cb);
}
