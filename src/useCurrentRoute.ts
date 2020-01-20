import React, { useContext } from 'react';
import IMatchedRoute from '@/interfaces/IMatchedRoute';
import RouterContext from '@/RouterContext';

export default function useCurrentRoute(): IMatchedRoute {
  const router = useContext(RouterContext);

  return router.getCurrentRoute();
}
