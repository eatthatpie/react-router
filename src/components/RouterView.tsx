import IMatchedRoute from '@/interfaces/IMatchedRoute';
import useRouteWatcher from '@/useRouteWatcher';
import React, { createElement, useState } from 'react';

export default function RouterView(props) {
  const [component, setComponent] = useState('');
  const [style, setStyle] = useState({});

  let transition: any = null;

  if (props.hasOwnProperty('transition')) {
    transition = props.transition;
  }

  useRouteWatcher((from: IMatchedRoute, to: IMatchedRoute) => {
    if (transition) {
      const duration = transition.duration || 0.4;
      const enterActive = transition.style
        ? transition.style.enterActive || {}
        : {};
      const enter = transition.style
        ? transition.style.enter || {}
        : {};
      const enterTo = transition.style
        ? transition.style.enterTo || {}
        : {};
      const leaveActive = transition.style
        ? transition.style.leaveActive || {}
        : {};
      const leave = transition.style
        ? transition.style.leave || {}
        : {};
      const leaveTo = transition.style
        ? transition.style.leaveTo || {}
        : {};

      setStyle(Object.assign({
        transition: `${duration / 2}s`,
        ...leaveActive,
        ...leave
      }));

      setTimeout(() => {
        setStyle(Object.assign({
          transition: `${duration / 2}s`,
          ...leaveActive,
          ...leaveTo
        }));
      }, 0);

      setTimeout(() => {
        setComponent(to ? to.component : null);

        setStyle(Object.assign({
          transition: `${duration / 2}s`,
          ...enterActive,
          ...enter
        }));

        setTimeout(() => {
          setStyle(Object.assign({
            transition: `${duration / 2}s`,
            ...enterActive,
            ...enterTo
          }));
        }, 0);

        setTimeout(() => {
          setStyle({});
        }, 1000 * duration / 2);
      }, 1000 * duration / 2);
    } else {
      setComponent(to ? to.component : null);
    }
  });

  return (
    <div style={style}>
      {component && createElement(component)}
    </div>
  )
}
