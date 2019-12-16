import IMatchedRoute from '@/interfaces/IMatchedRoute';
import useRouteWatcher from '@/useRouteWatcher';
import React, { useState } from 'react';

export default function RouterView() {
  const [component, setComponent] = useState(null);

  useRouteWatcher((from: IMatchedRoute, to: IMatchedRoute) => {
    setComponent(to ? to.component : null);
  });

  return (
    <div>
      {component}
    </div>
  );
}
