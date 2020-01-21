import IMatchedRoute from '@/interfaces/IMatchedRoute';
import React, { createElement, useState } from 'react';
import useRouteWatcher from '@/useRouteWatcher';

export default function Transition({ children, duration, name }) {
  const [className, setClassName] = useState('');
  const [previousComponent, setPreviousComponent] = useState('');

  const transitionClassPrefix = name ? `${name}-` : ``

  useRouteWatcher((from: IMatchedRoute, to: IMatchedRoute) => {
    if (duration && duration > 0) {
      setClassName(`${transitionClassPrefix}enter ${transitionClassPrefix}enter-active`);
    
      if (!!from) {
        setPreviousComponent(from.component);
      }

      setTimeout(() => {
        setClassName(`${transitionClassPrefix}enter-to ${transitionClassPrefix}enter-active`);
      }, duration / 2);

      setTimeout(() => {
        setClassName('');
        setPreviousComponent('');
      }, duration);
    }
  });

  return (
    <div className={className}>
      {children}
      {previousComponent && createElement(previousComponent)}
    </div>
  );
}
