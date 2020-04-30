import IMatchedRoute from '@/interfaces/IMatchedRoute';
import useRouteWatcher from '@/useRouteWatcher';
import React, { createElement, useState } from 'react';

export default function RouterView() {
  const [component, setComponent] = useState('');

  useRouteWatcher((from: IMatchedRoute, to: IMatchedRoute) => {
    setComponent(to ? to.component : null);
  });

  return (component && createElement(component));
}
