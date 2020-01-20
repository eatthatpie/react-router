import React, { useState } from 'react';
import useRouteWatcher from '@/useRouteWatcher';

export default function Transition({ children }) {
  const [className, setClassName] = useState('');
  const [view, setView] = useState(children ? children.children : null);

  useRouteWatcher(() => {
    setClassName('fade-enter-to');

    setTimeout(() => {
      setView(children[0].children);
      setClassName('');
    }, 2000);
  });

  return (
    <div className={className}>
      {view}
    </div>
  );
}
