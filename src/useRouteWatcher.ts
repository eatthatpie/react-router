import RouterContext from '@/RouterContext';
import { useContext, useEffect, useState } from 'react';

export default function useRouteWatcher(cb: Function) {
  const router = useContext(RouterContext);

  const [component, setComponent] = useState(null);

  router.subscribe((component) => {
    setComponent(component);
  });

  useEffect(() => {
    cb(component);
  }, [component]);
}
