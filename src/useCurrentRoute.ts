import { useContext } from 'react';
import { RouterContext } from '@/RouterContext';

function useCurrentRoute() {
  const router: any = useContext(RouterContext);

  return router.getCurrentRoute();
}

export default useCurrentRoute;