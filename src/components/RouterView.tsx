import useRouteWatcher from '@/useRouteWatcher';
import RouterContext from '@/RouterContext';
import React, { useContext, useState } from 'react';

export default function RouterView() {
  const router = useContext(RouterContext);

  const [component, setComponent] = useState(null);

  useRouteWatcher((component) => {
    setComponent(component);
  });

  return (
    <div>
      {component}
    </div>
  );
}
